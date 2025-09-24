'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
const newsList = [
  { id: 0, image: "/images/news.png" },
  { id: 1, image: "/images/news01.png" },
  { id: 2, image: "/images/news02.png" },
  { id: 3, image: "/images/news03.png" },
  { id: 4, image: "/images/news04.png" },
  { id: 5, image: "/images/news05.png" },
  { id: 6, image: "/images/nees06.png" },
  { id: 7, image: "/images/news07.png" },
  { id: 8, image: "/images/news08.png" },
]

export default function News() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative text-white py-24 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              News
            </h1>
          </div>
        </div>
      </div>

      {/* Image-Only News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <motion.div
              key={news.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(news.image)}
            >
              {/* Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={news.image}
                  alt={`Siddiqui Welfare Society News Item ${news.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-md"
          >
            <X className="h-6 w-6 text-black" />
          </button>

          {/* Full Image */}
          <div className="relative max-w-5xl max-h-[90%] w-full h-auto flex items-center justify-center p-4">
            <Image
              src={selectedImage}
              alt="Full view of Siddiqui Welfare Society news item"
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
