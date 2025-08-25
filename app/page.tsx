'use client'
import Image from "next/image";
import Navbar from "../components/Navbar/page";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroButtonRef = useRef(null);
  const h3SliderRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderHeadings = [
  "Global Medical & ",
  "Educational Foundation.",
  ];

  const topStories = [
    {
      id: 1,
      title: "Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs",
      description: "The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
      image: "/images/top01.png",
    },
    {
      id: 2,
      title: "Siddiqui Welfare Society’s Global Foundation Steps Us for Blood Shortages with Donation Camps",
      description: "The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector.",
      image: "/images/top02.png",
    },
    {
      id: 3,
      title: "Clean Water Project",
      description: "Successfully installed water purification systems in several drought-affected regions.",
      image: "/images/top03.png",
    },
    {
      id: 4,
      title: "Empowering Women through Skill Development",
      description: "Vocational training programs are helping women achieve financial independence.",
      image: "/images/top04.png",
    },
    {
      id: 5,
      title: "Community Health Workshops",
      description: "Conducting workshops to raise awareness about hygiene and preventive healthcare.",
      image: "/images/top05.png",
    },
    {
      id: 6,
      title: "Support for Orphanages",
      description: "Providing essential supplies and educational resources to local orphanages.",
      image: "/images/top06.png",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroTextRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(heroImageRef.current, 
      { x: 100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.6"
    )
    .fromTo(heroButtonRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 
      "-=0.4"
    );

    // H3 Slider Animation
    if (h3SliderRef.current) {
      const headings = h3SliderRef.current.children;
      let currentHeadingIndex = 0;

      const animateHeading = () => {
        const current = headings[currentHeadingIndex];
        const next = headings[(currentHeadingIndex + 1) % headings.length];

        gsap.timeline()
          .to(current, { opacity: 0, y: -20, duration: 0.5, ease: "power2.inOut" })
          .set(current, { display: "none" })
          .set(next, { display: "block" })
          .fromTo(next, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
          );

        currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
      };

      // Initial display
      gsap.set(headings, { opacity: 0, display: "none" });
      gsap.set(headings[0], { opacity: 1, display: "block" });

      // Start the animation loop after initial hero animation
      tl.then(() => {
        setInterval(animateHeading, 3000); // Change heading every 3 seconds
      });
    }

  }, []);

  useEffect(() => {
    if (!carouselTrackRef.current) return;

    const track = carouselTrackRef.current;
    const cardElement = track.children[0] as HTMLElement;
    const cardWidth = cardElement?.offsetWidth || 0;
    const gap = 32; // gap-8 = 32px
    const numVisibleCards = window.innerWidth >= 768 ? 2 : 1; 
    const totalCardWidth = cardWidth + gap;

    gsap.to(track, {
      x: -currentSlide * totalCardWidth,
      duration: 0.8,
      ease: "power2.out",
    });

  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => {
      const numVisibleCards = window.innerWidth >= 768 ? 2 : 1;
      const maxSlide = topStories.length - numVisibleCards;
      return Math.min(maxSlide, prevSlide + 1);
    });
  };

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/images/background-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <section className="relative z-10 flex flex-col md:flex-row  w-full max-w-7xl mx-auto py-12 px-5">
          <div className="md:w-1/2 text-center md:text-left px-4 text-white">
            <h1 ref={heroTextRef} className="text-5xl font-bold leading-tight mb-4 ">Siddiqui Welfare Society</h1>
            
            <div ref={h3SliderRef} className="h-16 overflow-hidden mb-4">
              {sliderHeadings.map((heading, index) => (
                <h3 key={index} className="text-3xl font-semibold mb-2 ">{heading}</h3>
              ))}
            </div>

            {/* <p className="text-lg mb-8 text-red-400">We bring your ideas to life with cutting-edge technology and creative solutions.</p> */}
            <button ref={heroButtonRef} className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-red-700 shadow-lg">
              Get Started
            </button>
          </div>
          <div ref={heroImageRef} className="md:w-1/2 mt-8 md:mt-0 px-4">
            <Image
              src="/images/hero-image.png" 
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
        </section>
      </main>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Top Stories</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div ref={carouselTrackRef} className="flex gap-8">
                {topStories.map((story, index) => (
                  <div 
                    key={story.id} 
                    className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)]"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300  h-[450px] flex flex-col">
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-grow overflow-y-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.title}</h3>
                        <p className="text-gray-600 text-sm">{story.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={handlePrev} 
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300 z-10"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={handleNext} 
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300 z-10"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
