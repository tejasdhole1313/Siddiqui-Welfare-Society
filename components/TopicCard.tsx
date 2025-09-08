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
      <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col">
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
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>

          {description && (
            <p className="text-gray-600 leading-relaxed line-clamp-3">{description}</p>
          )}

          <div className="mt-auto">
           
            {date && (
              <p className="text-sm text-gray-500 mt-2">
                {new Date(date).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </p>
            )}
          </div>
           <div className="flex items-center text-red-600 font-semibold justify-end cursor-pointer">
              <span className="mr-1">Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path fillRule="evenodd" d="M12.97 4.97a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L17.94 12l-4.97-4.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h14.69a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
              </svg>
            </div>
        </div>
      </div>
    </Link>
  )
}