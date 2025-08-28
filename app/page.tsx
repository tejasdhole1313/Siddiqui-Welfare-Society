'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeart, FaUserGraduate, FaHandHoldingMedical, FaUtensils, FaUsers, FaTooth, FaHeartbeat } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const texts = [
  "Siddiqui Welfare Society",
  "Global Medical & Educational Foundation",
  "Empowering Communities for a Better Tomorrow"
];

// Top stories data
const topStories = [
  {
    id: 1,
    category: "Education",
    title: "Empowering Communities Through Computer Training",
    description: "Making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
    image: "/images/top01.png",
    date: "10/8/2024",
  },
  {
    id: 2,
    category: "Medical",
    title: "Global Foundation Steps Up for Blood Shortages",
    description: "India experiences alarming scarcity of this life-saving drop, throwing recurring challenges for the healthcare sector.",
    image: "/images/top02.png",
    date: "9/23/2024",
  },
  {
    id: 3,
    category: "Community",
    title: "Providing Hope with Free Dialysis Program",
    description: "Our commendable initiative of providing quality dialysis treatment has enhanced the accessibility for those who are unable to afford it.",
    image: "/images/top06.png",
    date: "10/6/2024",
  },
  {
    id: 4,
    category: "Culture",
    title: "Empowering Women: The Impact of Sewing Machine Distribution",
    description: "Our work focuses on supporting women, particularly widows, who often face unique challenges in becoming financially independent.",
    image: "/images/top04.png",
    date: "10/6/2024",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const mainRef = useRef(null);

  // Hero sliding text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero background scale
      gsap.fromTo(".hero-bg", { scale: 1 }, { scale: 1.1, duration: 10, ease: "none" });

      // Hero content animation
      const tl = gsap.timeline();
      tl.from(".hero-h1", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, 0.5)
        .from(".hero-btn", { opacity: 0, y: 20, scale: 0.9, duration: 0.6, ease: "back.out(1.7)" }, 1.1);

      // Fade-in sections
      const sections = gsap.utils.toArray('.fade-in-section');
      sections.forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      });

      // Counters
      const counters = gsap.utils.toArray('.counter');
      counters.forEach((counter: any) => {
        const target = parseInt(counter.dataset.target, 10);
        gsap.from(counter, {
          textContent: 0,
          duration: 2,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: function() {
            counter.innerHTML = Math.ceil(parseFloat(this.targets()[0].textContent)).toLocaleString() + "+";
          }
        });
      });

    }, mainRef);
    return () => ctx.revert();
  }, []);

  // Key Areas icons mapping
  const areaIcons: Record<string, JSX.Element> = {
    Education: <FaUserGraduate />,
    Medical: <FaHandHoldingMedical />,
    Clinic: <FaHeart />,
    Dental: <FaTooth />,
    ECG: <FaHeartbeat />,
    "Food & Meals": <FaUtensils />,
  };

  return (
    <main ref={mainRef} className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url('/images/bg.jpg')` }}
        ></div>
        <div className="relative z-20 px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="hero-h1 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30, rotateY: -30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -30, rotateY: 30 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)", perspective: "1000px" }}
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>
          <motion.button
            className="hero-btn mt-8 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-red-700"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Make a Donation
          </motion.button>
        </div>
      </section>

      {/* KEY AREAS OF FOCUS */}
      <section className="py-20 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Key Areas of Focus</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We are dedicated to uplifting communities through targeted programs in critical areas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.keys(areaIcons).map(area => (
              <div key={area} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2">
                <div className="bg-red-100 text-red-600 rounded-full p-4 mb-3 text-3xl">
                  {areaIcons[area]}
                </div>
                <h3 className="font-semibold text-lg">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Every number represents a life changed, a community empowered, and a future brightened.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <h3 data-target="15000" className="counter text-5xl md:text-6xl font-extrabold text-red-600">0</h3>
              <p className="text-xl font-semibold mt-2">People Helped</p>
            </div>
            <div className="p-8">
              <h3 data-target="75" className="counter text-5xl md:text-6xl font-extrabold text-red-600">0</h3>
              <p className="text-xl font-semibold mt-2">Medical Camps</p>
            </div>
            <div className="p-8">
              <h3 data-target="5000" className="counter text-5xl md:text-6xl font-extrabold text-red-600">0</h3>
              <p className="text-xl font-semibold mt-2">Students Educated</p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST STORIES SECTION */}
      <section className="py-20 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Stories</h2>
            <p className="text-lg text-gray-600 mt-2">Read about the lives we're transforming together.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topStories.map(story => (
              <div key={story.id} className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative aspect-w-16 aspect-h-9">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{story.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{story.date}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-red-600 hover:text-white">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA SECTION */}
      <section className="bg-red-700 fade-in-section">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Reframe Your Inbox</h2>
          <p className="text-lg mt-4 mb-8">Subscribe to our newsletter and never miss a story of hope and change.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-5 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
              aria-label="Email"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-black"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
