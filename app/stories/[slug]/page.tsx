import Image from "next/image";
import { stories } from "../../lib/stories";
import Link from "next/link";

export default function StoryCategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

const getFilteredStories = () => {
  const decodedSlug = decodeURIComponent(slug);

  if (decodedSlug === "top-stories") {
    return stories.filter((story) => story.topStory);
  } else if (decodedSlug === "latest-stories") {
    return [...stories].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else {
    return stories.filter(
      (story) => story.category.toLowerCase() === decodedSlug.toLowerCase()
    );
  }
};

  const filteredStories = getFilteredStories();
  const title = decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pt-5">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Image container */}
                  <div className="relative w-full aspect-video">
                    {/* Next.js Image */}
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {story.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(story.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">
                No stories found in this category.
              </p>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
