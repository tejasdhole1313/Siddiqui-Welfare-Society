import React from 'react'
import { menuItems } from '@/components/menu-items'
import TopicCard from '@/components/TopicCard'

export default function TopicsIndex() {
  const topics = menuItems.find((i) => i.title === 'Topics')?.subMenu || []

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7]">
      {/* Hero */}
      <div className="relative text-white py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/about-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Topics</h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">Select a category to explore curated content and updates.</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topics.map((t, idx) => (
            <TopicCard key={`${t.path || 'topic'}-${idx}`} title={t.title} path={t.path} />
          ))}
        </div>
      </div>
    </div>
  )
}