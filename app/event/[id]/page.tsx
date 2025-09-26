'use client'

import React from 'react'
import Image from 'next/image'
import { events } from '../../../lib/events'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const heroRef = React.createRef<HTMLDivElement>()

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export default function EventDetail() {
  const params = useParams()
  const slug = params.id as string
  const event = events.find(e => generateSlug(e.title) === slug)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn&apos;t find the event you&apos;re looking for.</p>
          <Link href="/event">
            <span className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
              Back to Events
            </span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative text-white py-28 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/about-bg.png')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {event.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Media Gallery */}
          <div className="lg:col-span-3 relative z-0 grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.media?.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-md aspect-square"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-auto"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Event Info */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-fit mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <div className="leading-relaxed text-justify">{event.desc}</div>
          </div>

          <div className="mt-8">
            <Link
              href="/event"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              <span aria-hidden="true" className="mr-1">&larr;</span>
              Back to All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
