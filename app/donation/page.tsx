"use client"
import React, { useEffect, useMemo, useRef } from "react"
import {
  FiHeart,

  FiBook,
  FiActivity,
  FiHome,
  FiBriefcase,
  FiShoppingBag,
  FiChevronRight,
} from "react-icons/fi"
import { FaRupeeSign } from "react-icons/fa"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image'
// Register ScrollTrigger plugin on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Donation() {

  const heroRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Subtle parallax on hero background
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400",
          scrub: 1
        }
      })

      // Parallax on banner image container
      if (bannerRef.current) {
        gsap.to(bannerRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      }
    })

    return () => ctx.revert()
  }, [])



  const causes = useMemo(
    () => [
      {
        icon: <FiBook className="w-8 h-8" />,
        title: "Education Support",
        description:
          "Provide school supplies, textbooks, and tuition for children from low-income families.",
        color: "bg-blue-500"
      },
      {
        icon: <FiActivity className="w-8 h-8" />,
        title: "Healthcare Assistance",
        description:
          "Support medical camps, essential medications, and critical healthcare expenses.",
        color: "bg-green-500"
      },
      {
        icon: <FiShoppingBag className="w-8 h-8" />,
        title: "Food and Nutrition",
        description:
          "Provide nutritious meals and essential food supplies to families facing food insecurity.",
        color: "bg-yellow-500"
      },
      {
        icon: <FiBriefcase className="w-8 h-8" />,
        title: "Skills Training & Employment",
        description:
          "Fund vocational training, entrepreneurship initiatives, and career guidance.",
        color: "bg-purple-500"
      },
      {
        icon: <FiHome className="w-8 h-8" />,
        title: "Shelter and Housing",
        description:
          "Build/support shelters and provide housing assistance to improve living conditions.",
        color: "bg-red-500"
      }
    ], []
  )

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }





  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative text-white py-28 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Donation
            </h1>
           
            <div className="mt-8">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-6 py-3 font-semibold shadow hover:bg-white transition"
              >
                <FiHeart className="text-pink-600" /> Donate Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated background accents */}
        <div className="absolute top-16 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-16 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full animate-ping" />
      </div>

      {/* Intro Copy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Welcome to the Siddiqui Welfare Society!
          </h2>
          <p>
            Your support plays a crucial role in helping us uplift and empower our
            community&apos;s most vulnerable members. Your generous donations contribute to our
            numerous programs and initiatives aimed at providing essential services and
            support to those in need.
          </p>
            {/* Parallax Banner below Intro */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div
          ref={bannerRef}
          className="relative max-w-6xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/donation01.png"
              alt="Siddiqui Welfare Society — community support"
              width={1600}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          {/* soft gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </section>
          <p className="font-bold">Here are some impactful options for charity and donation</p>
        </motion.div>

        {/* Cause Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {causes.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className={`inline-flex items-center justify-center ${c.color} text-white rounded-xl w-12 h-12`}>
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              </div>
              <p className="mt-4 text-sm text-gray-600">{c.description}</p>
              <div className="absolute -right-8 -bottom-8 opacity-0 group-hover:opacity-20 transition-opacity">
                <FiHeart className="w-32 h-32 text-pink-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-gray-700"
        >
          By donating to Siddiqui Welfare Society, you are making a direct and positive
          impact on the lives of those in need. Your generosity will help us create a more
          equitable and supportive community. Every contribution, no matter the size, makes
          a meaningful difference. Thank you for considering to make a donation and being a
          part of our mission to create positive change.
        </motion.p>
      </section>

      {/* Ways to donate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="donate">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left: Ways to Donate - animated list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-md border border-gray-200 bg-white p-6"
          >

            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                <FaRupeeSign className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Ways to Donate</h4>
            </div>

            <motion.ul
              className="mt-6 space-y-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } }
              }}
            >
              {[
                {
                  title: "Online Donations",
                  desc:
                    "Use this page to securely make a one-time or recurring donation from anywhere in the world."
                },
                {
                  title: "Bank Transfer",
                  desc:
                    "Reach out to us for our bank account details to donate via direct transfer."
                },
                {
                  title: "In-Person Donations",
                  desc:
                    "Visit our office or designated donation centers to contribute in person."
                },
                {
                  title: "Fundraising Events",
                  desc:
                    "Participate in our campaigns and events that directly support our programs."
                },
                {
                  title: "Corporate Donations",
                  desc:
                    "Explore partnerships and sponsorships to support community outreach."
                },
                {
                  title: "Other Initiatives",
                  desc:
                    "Stay updated on ongoing campaigns and special donation drives on our website and social media."
                }
              ].map((item) => (
                <motion.li
                  key={item.title}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="group relative rounded-xl border border-gray-100 bg-white/60 p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-100">
                      <FiChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Contact form - refined, responsive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-gray-900">Contact</h4>
              <span className="text-sm text-gray-500">We respond within 24–48 hrs</span>
            </div>

            <p className="mt-2 text-gray-700">
              We&apos;re here to help with any questions about your donation.
            </p>
            <p className="mt-2 text-gray-900 font-semibold">
              Phone: <a className="text-red-600 hover:underline" href="tel:+919960589100">+91 99605 89100</a>
            </p>

            <form
              className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you! We will contact you soon.")
              }}
            >
              <div className="md:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm transition-all focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm transition-all focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm transition-all focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="md:col-span-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="Enter your location"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm transition-all focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Your Comment*
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  required
                  placeholder="Write Your Comment"
                  className="mt-1 block w-full resize-y rounded-md border border-gray-300 px-4 py-3 shadow-sm transition-all focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 inline-flex w-full items-center justify-center rounded-md bg-red-600 px-5 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

    
    </div>
  )
}