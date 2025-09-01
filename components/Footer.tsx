'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { menuItems } from './menu-items'
import NextImage from 'next/image'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

function Footer() {
    const currentYear = new Date().getFullYear()
    const footerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const footer = footerRef.current
        if (!footer) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.fromTo(footer.querySelectorAll('.footer-col'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
        )
    }, [])

    return (
        <footer ref={footerRef} className="bg-gray-800 text-white py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="footer-col">
                        <NextImage
                            src="/images/footer.png"
                            alt="Brand Logo"
                            width={100}
                            height={20}
                            className="object-contain mb-4"
                            style={{ height: 'auto' }}
                        />
                        <p className="text-gray-400">Good News empowers the generation of tomorrow for a brighter future and hope for every individual.</p>
                    </div>
                    <div className="footer-col">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            {menuItems.map((item, index) => (
                                item.path && <li key={index} className="mb-2">
                                    <Link href={item.path} className="text-gray-400 hover:text-white transition-colors duration-300">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Plot No:84, Arif Housing Society, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431001</p>
                        <p className="text-gray-400">Phone: 91 99605 89100</p>
                        
                    </div>
                    <div className="footer-col">
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300"><FaFacebook size={24} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300"><FaTwitter size={24} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 border-t border-gray-700 pt-8  text-gray-400 justify-between">
                    <p>&copy; {currentYear} Siddiqui Welfare Society. All rights reserved.</p>
                    <a href="https://mokshasolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                        Moksha Solution
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
