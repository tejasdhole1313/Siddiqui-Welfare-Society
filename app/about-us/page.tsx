'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiBook, FiActivity, FiAward, FiGlobe } from 'react-icons/fi'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
export default function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const activitiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h1 = heroRef.current?.querySelector('h1');
    const p = heroRef.current?.querySelector('p');

    const tl = gsap.timeline();

    if (h1) {
      tl.fromTo(
        h1,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    if (p) {
      tl.fromTo(
        p,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }


  }, []);

  if (storyRef.current) {
    gsap.fromTo(storyRef.current.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )
  }


  if (imageRef.current) {
    gsap.fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      }
    )
  }


  if (missionRef.current) {
    gsap.fromTo(missionRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        }
      }
    )
  }

  if (activitiesRef.current) {
    gsap.fromTo(activitiesRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: activitiesRef.current,
          start: "top 80%",
        }
      }
    )
  }


  if (teamRef.current) {
    gsap.fromTo(teamRef.current.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        }
      }
    )
  }





  const teamMembers = [
    { name: 'Mohajuddin Siddiqui', role: 'President', image: '/images/team01.png' },
    { name: 'Mashuddin Siddiqui', role: 'Gen. Secretary', image: '/images/teamo2.png' },
    { name: 'Mohzuddin Siddiqui', role: 'Member', image: '/images/team06.png' },
    { name: 'Bahruddin Siddiqui', role: 'Treasurer', image: '/images/team03.png' },
    { name: 'Sheikh Sameena Parveen', role: 'Member', image: '/images/team04.png' },
    { name: 'Zafar Patel', role: 'Member', image: '/images/team05.png' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative text-white py-24 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for readability */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Us
            </h1>
            
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full animate-ping"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div ref={storyRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our <span className="text-red-600">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                <strong>When asked, which the highest form of knowledge is, Bill Buffett rightly answered – empathy!</strong>
                That&apos;s because when we cultivate empathy, our ego gets dissolved and we expand our sense of self. It
                enables us to connect with other&apos;s experiences for a shared humanity.
              </p>
              <p>
                Siddiqui Welfare Society&apos;s Global Foundation bears this ideology as the driving force behind their endeavours.
                Based in the bustling city of Aurangabad, the renowned non-profit organisation for the
                underprivileged has been striving to uplift the poor by providing financial assistance for
                education and medical causes.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                'Community-focused medical initiatives',
                'Educational support and scholarships',
                'Financial assistance for the underprivileged',
                'Blood donation and healthcare camps'
              ].map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-green-600 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 group-hover:text-red-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/About01.png"
                alt="Siddiqui Welfare Society Foundation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Global Foundation</h3>
                <p className="text-sm opacity-90">Serving the community since inception</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-red-500 rounded-full opacity-15 animate-bounce"></div>
          </div>
        </div>

        {/* Two Major Areas Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The Two Major Areas of <span className="text-red-600">Assistance</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
              <Image
                src="/images/Acitivity04.png"
                alt="Educational Assistance"
                width={1200}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 border-t-4 border-red-500">
                <div className="flex items-center mb-4">
                  <FiBook className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  One of the biggest challenges persisting in India is proper access to education. Survey shows,
                  around 25% of India&apos;s population face this inaccessibility. Siddiqui Welfare Society&apos;s Global Foundation
                  extends financial help to meritorious students from economically weaker families—ensuring their education
                  dreams are not compromised by economic hardship.
                </p>
              </div>
            </div>

            {/* Medical Assistance */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
              <Image
                src="/images/top02.png"
                alt="Medical Assistance"
                width={1200}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 border-t-4 border-red-500">
                <div className="flex items-center mb-4">
                  <FiActivity className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Medical Assistance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  With skyrocketing healthcare costs, underprivileged patients often cannot afford proper treatment.
                  Siddiqui Welfare Society&apos;s Global Foundation offers full or partial financial support for critical
                  medical needs—ensuring that no life is neglected due to lack of funds.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* Activities Section with Images */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            <span className="text-red-600">Some of their other activities include</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Activity 1 */}
            <div>
              <Image
                src="/images/Acitivity01.png"
                alt="Aiding small businesses"
                width={1200}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <p className="mt-4 text-gray-800 text-md font-medium">
                Aiding the poor run small businesses with relevant goods and essentials
              </p>
            </div>

            {/* Activity 2 */}
            <div>
              <Image
                src="/images/Acitivity02.JPG"
                alt="Career guidance camps"
                width={1200}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <p className="mt-4 text-gray-800 text-md font-medium">
                Organising career guidance camps and GK competitions to promote learning
              </p>
            </div>

            {/* Activity 3 */}
            <div>
              <Image
                src="/images/Acitivity03.JPG"
                alt="Food distribution"
                width={1200}
                height={400}
                className="rounded-lg w-full h-64 object-cover"
              />
              <p className="mt-4 text-gray-800 text-md font-medium">
                Distributing hygienically cooked food to patients and families in hospitals, and many more.
              </p>
            </div>
          </div>

          {/* Closing paragraph */}
          <p className="mt-12 text-lg font-semibold text-gray-800 leading-relaxed">
            As a reliable non-profit organisation for the underprivileged, <span className="font-bold">Siddiqui Welfare Society&rsquo;s Global Foundation</span> provides unwavering support so that everyone has a chance to succeed.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className=" py-10 px-6 md:px-12">
          <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-24">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <FiGlobe className="w-10 h-10 text-red-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To serve our community by providing essential services, educational opportunities,
                and medical support to those in need, fostering growth and development for all
                through empathy and compassion.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <FiAward className="w-10 h-10 text-red-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a thriving community where everyone has access to quality education,
                healthcare, and opportunities for personal and professional growth, regardless
                of their economic background.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
