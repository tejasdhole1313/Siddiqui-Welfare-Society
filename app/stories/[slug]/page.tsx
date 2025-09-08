import NextImage from "next/image";
import { stories } from "../../lib/stories";
import Link from "next/link";

export default async function StoryCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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

  const categoryFilters = [
    { href: "/stories/top-stories", label: "Top Stories" },
    { href: "/stories/latest-stories", label: "Latest Stories" },
    { href: "/stories/activism", label: "Activism" },
    { href: "/stories/community", label: "Community" },
    { href: "/stories/culture", label: "Culture" },
  ];


  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 pt-5">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>

          {/* CATEGORY FILTERS */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex flex-wrap justify-center gap-8">
                {categoryFilters.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold border-2 border-red-600 transform transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <Link
                  href={`/stories/${encodeURIComponent(story.category.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(
                    story.title
                      .toLowerCase()
                      .trim()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')
                  )}`}
                  key={story.id}
                  className="block group focus:outline-none"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col">
                    {/* Image container */}
                    <div className="relative w-full aspect-video">
                      {/* Next.js Image */}
                    <NextImage
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

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3 flex-grow">
                        {story.description}
                      </p>
                     
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(story.date).toLocaleDateString()}
                        </p>
                         <div className="mt-auto pt-4">
                        <div className="flex items-center text-red-600 font-semibold  justify-end text-right cursor-pointer
                      u">
                          <span className="mr-1">Read more</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                            <path fillRule="evenodd" d="M12.97 4.97a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L17.94 12l-4.97-4.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h14.69a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
