'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'

function Navbar() {
    const navRef = useRef<HTMLElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLUListElement>(null)
    const hamburgerRef = useRef<HTMLButtonElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        // Initial animation on mount
        const tl = gsap.timeline()

        tl.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(logoRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(menuRef.current?.children || [],
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
                "-=0.4"
            )
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)

        if (!isMobileMenuOpen) {
            // Open animation
            gsap.set(mobileMenuRef.current, { display: 'block' })
            gsap.fromTo(mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" }
            )
            gsap.fromTo(mobileMenuRef.current?.children || [],
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2, ease: "power2.out" }
            )
        } else {
            // Close animation
            gsap.to(mobileMenuRef.current?.children || [],
                { y: -20, opacity: 0, duration: 0.2, stagger: 0.05, ease: "power2.in" }
            )
            gsap.to(mobileMenuRef.current,
                {
                    height: 0, opacity: 0, duration: 0.3, ease: "power2.in", delay: 0.1,
                    onComplete: () => { gsap.set(mobileMenuRef.current, { display: 'none' }) }
                }
            )
        }
    }

    useEffect(() => {
        if (openDropdown) {
            gsap.fromTo(dropdownRef.current, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
        }
    }, [openDropdown])

    const menuItems = [
        { title: 'Home' },
        { title: 'About Us' },
        {
            title: 'Topics',
            subMenu: ['Educational', 'Medical', 'Clinic', 'Dental', 'Surgical', 'Others','ECG','Food & Meals']
        },
        { title: 'Donation' },
        { title: 'Contact' }
    ]

    const handleDropdown = (title: string | null) => {
        setOpenDropdown(title)
    }

    const handleSubMenuItemHover = (e: React.MouseEvent<HTMLAnchorElement>, isHover: boolean) => {
        gsap.to(e.currentTarget, {
            x: isHover ? 5 : 0,
            color: isHover ? '#dc2626' : '#4b5563',
            duration: 0.2
        })
    }

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <div ref={logoRef} className="flex-shrink-0">
                        <Image
                            src="/images/logo.png" // Replace with your logo path
                            alt="Brand Logo"
                            width={150}
                            height={48}
                            className="object-contain"
                        />
                    </div>


                    {/* Desktop Menu */}
                    <ul
                        ref={menuRef}
                        className="hidden md:flex items-center space-x-10"
                    >
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative" onMouseEnter={() => handleDropdown(item.title)} onMouseLeave={() => handleDropdown(null)}>
                                <a
                                    href={`#${item.title.toLowerCase()}`}
                                    className="relative text-gray-700 font-medium text-sm tracking-wide transition-all duration-300 hover:text-red-600 group flex items-center"
                                >
                                    {item.title}
                                    {item.subMenu && <FiChevronDown className={`ml-1 transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                {item.subMenu && openDropdown === item.title && (
                                    <ul ref={dropdownRef} className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`} 
                                                   className="block px-4 py-2 text-sm text-gray-700"
                                                   onMouseEnter={(e) => handleSubMenuItemHover(e, true)}
                                                   onMouseLeave={(e) => handleSubMenuItemHover(e, false)}>
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-red-900 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        ref={hamburgerRef}
                        onClick={toggleMobileMenu}
                        className="md:hidden relative w-6 h-6 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className={`absolute inset-0 flex flex-col justify-center space-y-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
                style={{ display: 'none' }}
            >
                <div className="px-4 py-6 space-y-4">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <a
                                href={`#${item.title.toLowerCase()}`}
                                className="flex items-center justify-between text-gray-700 font-medium text-lg tracking-wide py-2 transition-all duration-300 hover:text-blue-600 hover:translate-x-2"
                                onClick={() => item.subMenu ? setOpenDropdown(openDropdown === item.title ? null : item.title) : toggleMobileMenu()}
                            >
                                {item.title}
                                {item.subMenu && <FiChevronDown className={`ml-1 transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />}
                            </a>
                            {item.subMenu && openDropdown === item.title && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <a key={subIndex} href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="block text-gray-600 text-base py-1 hover:text-blue-600">
                                            {subItem}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-red-900 mt-4">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
