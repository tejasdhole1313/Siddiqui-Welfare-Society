import { stories, Story } from '@/app/lib/stories';
import { notFound } from 'next/navigation';
import NextImage from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';

type RouteParams = {
  id: string;
  slug: string;
};

// Helper to find the story, reusable for metadata and page component
function getStory({ slug, id }: RouteParams): Story | undefined {
  const storyId = parseInt(id, 10);
  if (isNaN(storyId)) {
    return undefined;
  }
  return stories.find(
    (s) => s.id === storyId && s.category.replace(/\s+/g, '-').toLowerCase() === slug
  );
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, id } = await params;
  const story = getStory({ slug, id });

  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const displayTitle =
    story.title && story.title.trim().length > 0
      ? story.title
      : `${story.category} Story #${story.id}`;

  const displayDescription =
    story.description && story.description.trim().length > 0
      ? story.description
      : 'Read this story from Siddiqui Welfare Society.';

  return {
    title: displayTitle,
    description: displayDescription,
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      images: [story.image, ...previousImages],
    },
  };
}

// The component is now async to fix the error.
export default async function StoryDetailPage({ params }: { params: Promise<RouteParams> }) {
  const { slug, id } = await params;
  const story = getStory({ slug, id });

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
            {story.title && story.title.trim().length > 0 ? story.title : `${story.category} Story #${story.id}`}
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
          {story.desc && <p>{story.desc}</p>}
          {/* You can add more detailed story content here */}
        </div>
      </article>
    </main>
  );
}

// Generate static paths for all stories at build time
export async function generateStaticParams(): Promise<RouteParams[]> {
  return stories.map((story) => ({
    slug: story.category.replace(/\s+/g, '-').toLowerCase(),
    id: story.id.toString(),
  }));
}