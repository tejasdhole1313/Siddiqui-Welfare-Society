"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export type TopicCardProps = {
  title: string
  path?: string
  description?: string
  date?: string
  imageSrc?: string
  category?: string
}

export default function TopicCard({
  title,
  path,
  description,
  date,
  imageSrc,
  category,
}: TopicCardProps) {
  return (
    <Link href={path || "#"} className="group block focus:outline-none" aria-label={title}>
      <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
        {/* Image container */}
        <div className="relative w-full aspect-video">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              No image
            </div>
          )}

          {category && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>

          {description && (
            <p className="text-gray-600 leading-relaxed line-clamp-3">{description}</p>
          )}

          {date && (
            <p className="text-sm text-gray-500 mt-2">{new Date(date).toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </Link>
  )
}