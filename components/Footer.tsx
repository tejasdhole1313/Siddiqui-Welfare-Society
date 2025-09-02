'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { menuItems } from './menu-items'
import NextImage from 'next/image'

function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)
  const footerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    // Set year client-side to avoid SSR hydration mismatch
    setCurrentYear(new Date().getFullYear())

    // GSAP Context for safe animation setup and automatic cleanup
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        '.footer-col', // Selector is scoped to footerRef
        { opacity: 0, y: 60, rotateX: 45, transformOrigin: 'top center' },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.3, ease: 'back.out(1.7)' }
      )
    }, footerRef) // Scope the context to the footer element

    return () => ctx.revert() // Cleanup GSAP animations and ScrollTriggers on unmount
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-white text-black shadow-xl py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-col">
            <Link href="/" className="inline-block">
              <NextImage
                src="/images/footer.png"
                alt="Brand Logo"
                width={100}
                height={20}
                className="object-contain mb-4"
              />
            </Link>
            <p className="text-gray-600">
              Good News empowers the generation of tomorrow for a brighter
              future and hope for every individual.
            </p>
          </div>
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              {menuItems.map(
                (item, index) =>
                  item.path && (
                    <li key={index} className="mb-2">
                      <Link
                        href={item.path}
                        className="inline-block pb-1 text-gray-600 transition-colors duration-300 border-b-2 border-transparent hover:text-black hover:border-red-500"
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Plot No:84, Arif Housing Society, Chhatrapati Sambhajinagar
              (Aurangabad), Maharashtra 431001
            </p>
            <p className="text-gray-600">Phone: 91 99605 89100</p>
          </div>
          <div className="footer-col">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 transition-all duration-300 hover:text-black hover:scale-110">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 transition-all duration-300 hover:text-black hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 transition-all duration-300 hover:text-black hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 transition-all duration-300 hover:text-black hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-8 border-t border-gray-300 pt-8 text-gray-600 justify-between">
          <p>
            &copy; {currentYear} Siddiqui Welfare Society. All rights reserved.
          </p>
          <a
            href="https://mokshasolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            Moksha Solutions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
