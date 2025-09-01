'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Contact page with scroll-triggered form reveal and animated headings
const Contact = () => {
   const heroRef = useRef<HTMLDivElement>(null)
  // State to manage the visibility of the form section
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
useEffect(() => {
    // Ensure we're on client before accessing GSAP/ScrollTrigger
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const h1 = heroRef.current?.querySelector('h1')
    const p = heroRef.current?.querySelector('p')

    const tl = gsap.timeline()

    if (h1) {
      tl.fromTo(
        h1,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
    }

    if (p) {
      tl.fromTo(
        p,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
    }

    // Optionally, return a cleanup if you add ScrollTriggers later
    return () => {
      tl.kill()
    }
  }, [])
  // Reveal the form when the contact info section intersects the viewport
  useEffect(() => {
    const section = document.getElementById('contact-info')
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When at least 40% of the section is visible, show the form
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setIsFormVisible(true)
          } else if (window.scrollY < window.innerHeight * 0.2) {
            // Hide again if user scrolls back to top significantly
            setIsFormVisible(false)
          }
        })
      },
      { threshold: [0, 0.4, 1], rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Custom keyframes for subtle fade/slide animations */}
      <style jsx>{`
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-title {
          animation: fadeInSlideUp 0.8s ease-out forwards;
        }

        .animated-subtitle {
          animation: fadeInSlideUp 0.8s ease-out 0.2s forwards;
        }

        .form-hidden {
          opacity: 0;
          transform: translateY(20px);
          visibility: hidden;
        }

        .form-visible {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }
      `}</style>

      {/* Main Container */}
      <div className="min-h-screen w-full pt-16 pb-16 bg-[#f7f7f7] font-[Inter]">
                 {/* Hero Section */}
<div
  ref={heroRef}
  className="relative text-white py-24  bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/about-bg.jpg')" }} // replace with your image path
>
  <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for readability */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
        Siddiqui Welfare Society
      </h1>
      <p className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
        Global Medical & Educational Foundation
      </p>
      {/* <div className="mt-8 text-lg md:text-xl max-w-3xl mx-auto">
        <span className="text-yellow-300 font-semibold">Empathy in Action:</span> Transforming Lives of the Poor
      </div> */}
    </div>
  </div>
  {/* Animated background elements */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full animate-ping"></div>
</div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-15">
          {/* Two-column responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information - Left */}
            <div id="contact-info" className="flex flex-col items-start justify-center w-full mx-auto  lg:mb-0">
              <h1 className="animated-title text-4xl sm:text-5xl font-bold text-gray-800 text-left w-full mb-4">Contact</h1>
              <p className="animated-subtitle text-lg text-gray-600 text-left w-full mb-8">
                If you have a question, comment, or suggestion, please send us a message — we&apos;d love to hear from you.
              </p>
              <h2 className="animated-subtitle text-3xl font-semibold text-gray-800 text-left w-full mb-2">Siddique Welfare Society</h2>
              <address className="animated-subtitle not-italic text-gray-600 text-left w-full mb-2">
                Plot No:84, Arif Housing Society, Chhatrapati Sambhajinagar (Aurangabad),<br />
                Maharashtra 431001
              </address>
              <p className="animated-subtitle text-gray-600 text-left w-full">Call +91 99605 89100</p>
              {/* <div className='flex justify-center mt-8 '>
                <Image className='w-full' src="/images/contact.png" alt="" width={500} height={100} />
              </div> */}
            </div>

            {/* Complaints or Queries Form - Right */}
            <div
              id="form-section"
              className={`transition-all duration-700 ease-in-out ${
                isFormVisible ? 'form-visible' : 'form-hidden'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full">
                <h2 className="text-3xl font-semibold text-gray-800 text-left w-full mb-4">Complaints or queries</h2>
                <p className="text-lg text-gray-600 text-left w-full mb-8">
                  Mistakes do sometimes happen. When they do, we commit to being open and transparent and to addressing any disputes as fairly as possible.
                </p>

                {/* Form */}
                <form className="flex flex-col w-full space-y-6">
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-800 font-medium mb-2">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-800 font-medium mb-2">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-200"
                    />
                  </div>

                  {/* Reason Radio Buttons */}
                  <div className="flex flex-col">
                    <label className="text-gray-800 font-medium mb-2">
                      Reason<span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mt-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="general"
                          name="reason"
                          value="general"
                          className="form-radio text-red-600 h-4 w-4 rounded-full"
                          defaultChecked
                        />
                        <label htmlFor="general" className="ml-2 text-gray-600">
                          General
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="complaint"
                          name="reason"
                          value="complaint"
                          className="form-radio text-red-600 h-4 w-4 rounded-full"
                        />
                        <label htmlFor="complaint" className="ml-2 text-gray-600">
                          Complaint
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-gray-800 font-medium mb-2">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Enter your message"
                      className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-y transition-all duration-200"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 text-white font-semibold bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out shadow-lg"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact