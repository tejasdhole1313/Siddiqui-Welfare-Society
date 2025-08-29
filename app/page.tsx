'use client'

import Image from "next/image";
import React, { JSX, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeart, FaUserGraduate, FaHandHoldingMedical, FaUtensils, FaUsers, FaTooth, FaHeartbeat } from 'react-icons/fa';
import { stories } from "./lib/stories";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    text: "Siddiqui Welfare Society",
    bg: "/images/bg.jpg"
  },
  {
    text: "Global Medical & Educational Foundation",
    bg: "/images/bg01.jpg"
  },
  {
    text: "Empowering Communities for a Better Tomorrow",
    bg: "/images/top01.png"
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const mainRef = useRef(null);

  const latestStories = [...stories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  // Hero sliding text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
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
        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: target,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            counter.innerHTML = Math.ceil(counterObj.val).toLocaleString() + "+";
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

  const impactStats = [
    { target: 10000, label: "People Helped" },
    { target: 250, label: "Medical Camps" },
    { target: 5000, label: "Students Educated" },
  ];

  return (
    <main ref={mainRef} className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <AnimatePresence>
          <motion.div
            key={index}
            className="hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[index].bg}')` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
        </AnimatePresence>
        <div className="relative z-20 px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="hero-h1 text-5xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30, rotateY: -30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -30, rotateY: 30 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)", perspective: "1000px" }}
            >
              {slides[index].text}
            </motion.h1>
          </AnimatePresence>
         
        </div>
      </section>

      {/* CATEGORY FILTERS */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="flex flex-wrap justify-center gap-15 text-bold   ">
      {[
        { href: "/stories/top-stories", label: "Top Stories" },
        { href: "/stories/latest-stories", label: "Latest Stories" },
        { href: "/stories/activism", label: "Activism" },
        { href: "/stories/community", label: "Community" },
        { href: "/stories/culture", label: "Culture" }
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="bg-white text-red-600 px-6 py-2 rounded-full font-medium border border-red-600
                     hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
</section>


<section className="py-12 bg-white fade-in-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Top Stories by Category</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Education",
        "Medical",
        "Community",
        "Culture",
        "Activism",
        "Top Stories", // This will pick a top story from all top stories
      ].map((categoryName) => {
        let storyToShow = null;

        if (categoryName === "Top Stories") {
          storyToShow = stories.find((story) => story.topStory);
        } else {
          storyToShow = stories.find(
            (story) => story.category === categoryName && story.topStory
          );

          if (!storyToShow) {
            // Fallback: any story from that category
            storyToShow = stories.find((story) => story.category === categoryName);
          }
        }

        if (!storyToShow) return null;

        return (
          <div
            key={categoryName}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={storyToShow.image}
                alt={storyToShow.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{storyToShow.title}</h3>
              <p className="text-gray-600 text-base mb-4 line-clamp-3">{storyToShow.description}</p>
              {/* Optional Link */}
              {/* <Link href={`/stories/${storyToShow.id}`} className="text-red-600 hover:underline font-medium">
                Read More
              </Link> */}
            </div>
          </div>
        );
      })}
    </div>
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
            {impactStats.map((stat) => (
              <div key={stat.label} className="p-8">
                <h3
                  data-target={stat.target}
                  className="counter text-4xl md:text-6xl font-extrabold text-red-600"
                >0</h3>
                <p className="text-xl font-semibold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   


   

   
    </main>
  );
}
