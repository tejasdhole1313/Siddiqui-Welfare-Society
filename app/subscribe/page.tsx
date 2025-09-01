"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"

export default function SubscribePage() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Intro reveal
    const tl = gsap.timeline()
    tl.from(sectionRef.current.querySelector("h2"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        sectionRef.current.querySelector("p.hero-sub"),
        { opacity: 0, y: 16, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        formRef.current,
        { opacity: 0, y: 16, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )

    // Button hover micro-interaction
    if (btnRef.current) {
      const el = btnRef.current
      const enter = () => {
        gsap.to(el, { y: -2, scale: 1.02, duration: 0.2, ease: "power2.out" })
      }
      const leave = () => {
        gsap.to(el, { y: 0, scale: 1, duration: 0.2, ease: "power2.inOut" })
      }
      el.addEventListener("mouseenter", enter)
      el.addEventListener("mouseleave", leave)
      return () => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-red-700 min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Reframe your inbox</h2>
        <p className="hero-sub text-lg mt-4 mb-8">Subscribe to our newsletter and never miss a story.</p>

        <form ref={formRef} className="flex flex-col items-center gap-4 max-w-lg mx-auto">
          <div className="w-full">
            <label htmlFor="email" className="block text-left text-white mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <button
            ref={btnRef}
            type="button"
            className="border border-black text-black px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:text-white"
          >
            SUBSCRIBE
          </button>
        </form>

        <p className="text-sm mt-6">
          We care about your data in our {" "}
          <Link href="/privacy-policy" className="underline">
            privacy policy.
          </Link>
        </p>
      </div>
    </section>
  )
}