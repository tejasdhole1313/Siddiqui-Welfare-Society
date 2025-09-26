'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { events } from '@/lib/events'
import Link from 'next/link'

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export default function Event() {

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative text-white py-24 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              Events
            </motion.h1>
          </div>
        </div>
      </div>

     {/* Event Listing */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
    {events.map((ev, i) => (
      <motion.div
        key={ev.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative h-60">
          <Image
            src={ev.image}
            alt={ev.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i < 3}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <Link href={`/event/${generateSlug(ev.title)}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
              {ev.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-3">
            {ev.description}
          </p>

          {/* Bottom-right link */}
           <div className="mt-auto pt-4 flex justify-end ">
    <Link
      href={`/event/${generateSlug(ev.title)}`}
      className="inline-flex items-center text-red-600 font-semibold transition-colors duration-300 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
    >
      <motion.span
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="flex items-center"
      >
        View Details <span className="ml-1">→</span>
      </motion.span>
    </Link>
  </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  )
}
