import { stories, Story } from '@/app/lib/stories';
import { notFound } from 'next/navigation';
import NextImage from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';

type Params = {
  id: string;
  slug: string;
};

function getStory({ slug, id }: Params): Story | undefined {
  const storyId = parseInt(id, 10);
  if (isNaN(storyId)) return undefined;

  return stories.find(
    (s) => s.id === storyId && s.category.replace(/\s+/g, '-').toLowerCase() === slug
  );
}

export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const story = getStory(params);
  if (!story) {
    return { title: 'Story Not Found' };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const title =
    story.title?.trim().length ? story.title : `${story.category} Story #${story.id}`;
  const description =
    story.description?.trim().length
      ? story.description
      : 'Read this story from Siddiqui Welfare Society.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [story.image, ...previousImages],
    },
  };
}

export default function StoryDetailPage({ params }: { params: Params }) {
  const story = getStory(params);
  if (!story) notFound();

  return (
    <main className="pt-24 bg-white text-gray-800">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-base font-semibold text-red-600 uppercase tracking-wide">
            {story.category}
          </p>
          <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {story.title?.trim().length
              ? story.title
              : `${story.category} Story #${story.id}`}
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
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  return stories.map((story) => ({
    slug: story.category.replace(/\s+/g, '-').toLowerCase(),
    id: story.id.toString(),
  }));
}
