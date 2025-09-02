'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiMail, FiArrowRight } from 'react-icons/fi'

const EmailSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const card = cardRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const form = formRef.current
    const btn = buttonRef.current

    if (card && title && subtitle && form && btn) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(card, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .from(title, { y: 16, opacity: 0, duration: 0.45 }, '-=0.2')
        .from(subtitle, { y: 12, opacity: 0, duration: 0.4 }, '-=0.25')
        .from(form, { y: 12, opacity: 0, duration: 0.45 }, '-=0.25')

      const onEnter = () => gsap.to(btn, { y: -2, scale: 1.02, duration: 0.18, ease: 'power2.out' })
      const onLeave = () => gsap.to(btn, { y: 0, scale: 1, duration: 0.18, ease: 'power2.inOut' })
      btn.addEventListener('mouseenter', onEnter)
      btn.addEventListener('mouseleave', onLeave)

      return () => {
        btn.removeEventListener('mouseenter', onEnter)
        btn.removeEventListener('mouseleave', onLeave)
        tl.kill()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-red-700 py-20">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="rounded-2xl p-6 sm:p-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 ref={titleRef} className="email-title text-3xl md:text-4xl font-extrabold tracking-tight">
              Reframe your inbox
            </h2>
            <p ref={subtitleRef} className="email-subtitle mt-3 text-base md:text-lg text-white/90">
              Subscribe for stories that matter. Thoughtfully curated, delivered occasionally.
            </p>
          </div>

          <form
            ref={formRef}
            className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter subscription form"
          >
            <div className="relative w-full max-w-lg">
              <label htmlFor="email" className="sr-only">Email address</label>
              <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border-0 bg-white pl-11 pr-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              ref={buttonRef}
              type="button"
              className="group inline-flex items-center justify-center rounded-xl bg-black/90 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40"
            >
              Subscribe
              <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailSection
