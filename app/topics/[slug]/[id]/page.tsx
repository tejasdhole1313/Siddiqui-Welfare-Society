import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { topicItemsBySlug } from '@/lib/topic-items'

export default async function TopicDetailPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params
  const items = topicItemsBySlug[slug] || []
  const decode = (v: string) => decodeURIComponent(v)
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const decodedId = decode(id)
  let item = items.find((i) => slugify(i.title) === decodedId)
  if (!item) {
    item = items.find((i) => String(i.id) === String(decodedId))
  }

  if (!item) {
    return (
      <div className="min-h-screen w-full bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <h1 className="text-2xl font-bold text-gray-800">Not found</h1>
          <p className="text-gray-600 mt-2">We couldn&apos;t find this post.</p>
          <Link href={`/topics/${slug}`} className="text-red-600 font-semibold inline-block mt-4">← Back to {slug}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7]">
      {/* Hero */}
      <div className="relative text-white py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/about-bg.png')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-xl sm:text-3xl font-bold max-w-xl">{item.title}</h1> */}
          {/* <p className="mt-3 text-white/90">{new Date(item.date).toLocaleDateString()}</p>
          <div className="mt-4">
            <Link href={`/topics/${slug}`} className="inline-flex items-center text-white/90 hover:text-white transition-colors">
              <span className="mr-2">←</span> Back to {slug}
            </Link>
          </div> */}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {/* Short summary */}
        <p className="text-gray-700 mb-5 font-bold text-justify text-md">{item.description}</p>
        <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden shadow">
          <Image src={item.image} alt={item.title} title={item.title} fill sizes="100vw" className="object-cover" />
        </div>

        {/* Full content */}
        <div className="prose prose-lg max-w-none mt-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line  text-justify ">
            {item.desc || item.description}
          </p>
        </div>
      </div>
    </div>
  )
}