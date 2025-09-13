import React from 'react'
import { menuItems } from '@/components/menu-items'
import TopicCard from '@/components/TopicCard'
import { topicItemsBySlug } from '@/lib/topic-items'

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const topic = menuItems
    .find((item) => item.title === 'Topics')
    ?.subMenu?.find((subItem) => subItem.path === `/topics/${slug}`)

  const items = topicItemsBySlug[slug] || []

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7]">
      {/* Hero */}
      <div className="relative text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/about-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">{topic?.title}</h1>
          {/* <p className=\"mt-3 text-lg text-white/90 max-w-2xl\">Latest posts and resources in {topic?.title?.toLowerCase()}.</p> */}
        </div>
      </div>

      {/* Cards Grid from dummy data */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {items.map((it) => (
            <TopicCard
              key={`${it.slug}-${it.id}`}
              title={it.title}
              description={it.description}
              date={it.date}
              imageSrc={it.image}
              category={it.category}
              path={`/topics/${it.slug}/${encodeURIComponent(
                it.title
                  .toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
              )}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
