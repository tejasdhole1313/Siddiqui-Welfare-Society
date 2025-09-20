"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserGraduate,
  FaHandHoldingMedical,
  FaUtensils,
  FaBriefcase,
} from "react-icons/fa";
// import { stories, Story } from "../lib/stories";
import { topicItemsBySlug } from "@/lib/topic-items";
import { events } from "../lib/events";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    text: "Siddiqui Welfare Society",
    bg: "/images/bg-01.JPG",
  },
  {
    text: "Global Medical & Educational Foundation",
    bg: "/images/carts02.JPG",
  },
  {
    text: "Empowering Communities for a Better Tomorrow",
    bg: "/images/bg-03.JPG",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);
  const heroH1Ref = useRef<HTMLHeadingElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        const heroBgEls = gsap.utils.toArray<HTMLElement>(".hero-bg");
        if (heroBgEls.length) {
          gsap.fromTo(
            heroBgEls,
            { scale: 1.05, opacity: 0.85 },
            { scale: 1, opacity: 1, duration: 8, ease: "power1.out" }
          );
        }

        if (heroH1Ref.current) {
          gsap.from(heroH1Ref.current, {
            opacity: 0,
            y: 30,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.3,
          });
        }

        const sections = gsap.utils.toArray<HTMLElement>(".fade-in-section");
        sections.forEach((section) => {
          gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        const counters = gsap.utils.toArray<HTMLElement>(".counter");
        counters.forEach((counter) => {
          const targetAttr = counter.dataset.target ?? "0";
          const parsed = parseInt(targetAttr, 10);
          const target = Number.isNaN(parsed) ? 0 : parsed;
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: target,
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              counter.innerHTML = Math.ceil(counterObj.val).toLocaleString() + "+";
            },
          });
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

 
  function handleTilt(e: React.MouseEvent, el: HTMLDivElement | null) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy; 
    const tiltX = (dy * 8).toFixed(2);
    const tiltY = (-dx * 12).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
  }
  function resetTilt(el: HTMLDivElement | null) {
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }

  const keyAreas = [
    { label: "Education", icon: <FaUserGraduate />, href: "/topics/educational" },
    { label: "Medical", icon: <FaHandHoldingMedical />, href: "/topics/medical" },
    { label: "Food & Meals", icon: <FaUtensils />, href: "/topics/food-meals" },
    { label: "Self Employment Program", icon: <FaBriefcase />, href: "/topics/self-employment" },
  ];

  const impactStats = [
    { target: 10000, label: "People Helped" },
    { target: 250, label: "Medical Camps" },
    { target: 5000, label: "Students Educated" },
  ];


  return (
    <main ref={mainRef} className="bg-white text-gray-900 overflow-hidden  ">
   {/* HERO */}
<section
  ref={heroContainerRef}
  className="relative min-h-[100svh] pt-16 sm:pt-20 flex items-center justify-center text-white text-center overflow-hidden"
  style={{ perspective: 1200 }}
>
  {/* dim layer */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />

  {/* layered parallax backgrounds */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={`bg-${index}`}
        className="hero-bg absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `url(${slides[index].bg})`,
          willChange: "transform, opacity",
        }}
      />
    </AnimatePresence>

    {/* subtle foreground vignette */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.3),transparent_40%)]" />
    </div>
  </div>

  <div className="relative z-20 mx-auto max-w-5xl px-4">
    <AnimatePresence mode="wait">
      <motion.h1
        key={`h1-${index}`}
        ref={heroH1Ref}
        className="hero-h1 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40, rotateY: -20 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        exit={{ opacity: 0, y: -20, rotateY: 20 }}
        transition={{ duration: 0.8 }}
        style={{
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
          transformStyle: "preserve-3d",
        }}
      >
        {slides[index].text}
      </motion.h1>
    </AnimatePresence>

    <div className="mt-8 flex items-center justify-center gap-4">
      <Link
        href="/donation"
        className="inline-flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold bg-red-600 text-white shadow-lg text-sm sm:text-base 
                   transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:brightness-110 hover:-translate-y-1 active:scale-95"
      >
        Donate
      </Link>
    </div>
  </div>

  {/* subtle animated shapes in corners */}
  <motion.div
    className="absolute left-6 bottom-6 w-28 h-28 rounded-full bg-red-600/20 blur-3xl z-10"
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    aria-hidden
  />
</section>


   

      {/* TOP TOPICS */}
      <section className="py-12 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Top Topics</h2>

          {/* Show top 3 topic cards: Education, Medical, Food & Meals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Education", slug: "educational" },
              { label: "Medical", slug: "medical" },
              { label: "Food & Meals", slug: "food-meals" },
            ].map((topic, idx) => {
              const items = topicItemsBySlug[topic.slug as keyof typeof topicItemsBySlug] || [];
              const first = items[0];
              if (!first) return null;
              return (
                <Card3D key={`top-topic-${idx}-${first.id}`}>
                  <Link href={`/topics/${topic.slug}/${encodeURIComponent(
                    first.title
                      .toLowerCase()
                      .trim()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')
                  )}`} className="block h-full">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image src={first.image} alt={first.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{first.category || topic.label}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{first.title}</h3>
                      <p className="text-gray-600 line-clamp-3">{first.description}</p>
                      <p className="text-sm text-gray-500 mt-3">{new Date(first.date).toLocaleDateString('en-CA')}</p>
                    </div>
                  </Link>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>
      {/* KEY AREAS */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Areas of Focus</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">We are dedicated to uplifting communities through targeted programs in critical areas.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {keyAreas.map((area) => (
              <div
                key={area.label}
                className="group p-4 rounded-lg transition-transform duration-300 hover:shadow-2xl bg-white"
                onMouseMove={(e) => handleTilt(e, e.currentTarget as HTMLDivElement)}
                onMouseLeave={() => resetTilt(document.querySelector(`[data-keyarea=\"${area.label}\"]`) as HTMLDivElement)}
                onTouchStart={() => resetTilt(document.querySelector(`[data-keyarea=\"${area.label}\"]`) as HTMLDivElement)}
                data-keyarea={area.label}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={area.href} className="flex flex-col items-center gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-4 mb-1 text-3xl transform transition-transform duration-300 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{area.label}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Every number represents a life changed.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md">
                <h3 data-target={stat.target} className="counter text-4xl md:text-5xl font-extrabold text-red-600">0</h3>
                <p className="text-xl font-semibold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Top Events</h2>
          <div className="space-y-12">
            {events.filter((event) => event.topEvent).slice(0, 2).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-lg transform-gpu hover:scale-105 transition">
                  <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={idx < 2} />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">{event.description}</p>
                  <Link href={`/event/${event.id}`} className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:bg-red-700 hover:scale-105">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


import { Card3D } from "@/components/Card3D";
