import { stories, Story } from '@/lib/stories';
import { notFound } from 'next/navigation';
import NextImage from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';

// In Next.js App Router, params is now async and must be awaited
// https://nextjs.org/docs/messages/sync-dynamic-apis

type Params = { id: string; slug: string };

type Props = {
  params: Promise<Params>;
};

async function getStory(paramsPromise: Props['params']): Promise<Story | undefined> {
  const params = await paramsPromise; // await params before using its properties

  const decode = (v: string) => decodeURIComponent(v)
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const decodedId = decode(params.id)
  const categorySlug = params.slug

  // First try by title slug
  let story = stories.find(
    (s) => slugify(s.title) === decodedId && s.category.replace(/\s+/g, '-').toLowerCase() === categorySlug
  )

  // Fallback to numeric id for backward compatibility
  if (!story) {
    const storyId = parseInt(decodedId, 10)
    if (!Number.isNaN(storyId)) {
      story = stories.find(
        (s) => s.id === storyId && s.category.replace(/\s+/g, '-').toLowerCase() === categorySlug
      )
    }
  }

  return story
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const story = await getStory(params);

  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: story.title,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      images: [story.image, ...previousImages],
    },
  };
}

// The component is async and awaits params to comply with Next.js dynamic APIs
export default async function StoryDetailPage({ params }: Props) {
  const story = await getStory(params);

  if (!story) {
    notFound();
  }

  return (
    <main className="pt-24 bg-white text-gray-800">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-base font-semibold text-red-600 uppercase tracking-wide">
            {story.category}
          </p>
          <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {story.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {new Date(story.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
          <NextImage
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1024px"
          />
        </div>

        <div className="prose prose-lg prose-red mx-auto">
          <p className="lead">{story.description}</p>
          {/* You can add more detailed story content here */}
        </div>
      </article>
    </main>
  );
}

// Generate static paths for all stories at build time
export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.category.replace(/\s+/g, '-').toLowerCase(),
    id: story.id.toString(),
  }));
}