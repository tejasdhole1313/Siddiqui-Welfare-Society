'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import NextImage from 'next/image'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { menuItems } from '../menu-items'
import { usePathname } from 'next/navigation'

function Navbar() {
    const navRef = useRef<HTMLElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLUListElement>(null)
    const hamburgerRef = useRef<HTMLButtonElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [closingDropdown, setClosingDropdown] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const dropdownRef = useRef<HTMLUListElement>(null)
    const pathname = usePathname()

    const isHeroPage = pathname === '/' || pathname.startsWith('/topics')

    useEffect(() => {

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

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10
            setIsScrolled(scrolled)
            if (navRef.current) {
                gsap.to(navRef.current, {
                    boxShadow: scrolled ? '0 12px 30px -12px rgba(0,0,0,0.35)' : '0 0 0 0 rgba(0,0,0,0)',
                    duration: 0.35,
                    ease: 'power2.out',
                })
            }
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
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
        // Animate dropdown opening
        if (openDropdown && dropdownRef.current) {
            gsap.fromTo(dropdownRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
        }
    }, [openDropdown])

    // Animate dropdown closing
    useEffect(() => {
        if (closingDropdown && dropdownRef.current) {
            gsap.to(dropdownRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => {
                    setClosingDropdown(null)
                },
            })
        }
    }, [closingDropdown])

    const handleDropdown = (title: string | null) => {
        if (title) {
            if (closingDropdown) setClosingDropdown(null)
            if (title !== openDropdown) setOpenDropdown(title)
        } else {
            if (openDropdown) {
                setClosingDropdown(openDropdown)
                setOpenDropdown(null)
            }
        }
    }

    const handleSubMenuItemHover = (e: React.MouseEvent<HTMLAnchorElement>, isHover: boolean) => {
        const target = e.currentTarget
        const isActive = target.getAttribute('href') === pathname
        const defaultColor = isActive ? '#dc2626' : '#4b5563'
        gsap.to(target, {
            x: isHover ? 5 : 0,
            color: isHover ? '#dc2626' : defaultColor,
            duration: 0.2
        })
    }

    const navBgClass = isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent';
    const navBorderClass = isScrolled && !isHeroPage ? 'border-b border-gray-100' : 'border-transparent';

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBgClass} ${navBorderClass}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div ref={logoRef} className="flex-shrink-0  py-2 sm:py-3 lg:py-4">
                        <Link href="/">
                            <NextImage
                                src="/images/logo.png"
                                alt="Brand Logo"
                                width={200}
                                height={68}
                                className="object-contain"
                                priority
                                style={{ height: 'auto', width: 'auto' }}
                            />
                        </Link>
                    </div>


                    {/* Desktop Menu */}
                    <ul
                        ref={menuRef}
                        className="hidden md:flex items-center space-x-6 lg:space-x-10"
                    >
                        {menuItems.map((item, index) => {
                            const isActive = (item.path === '/' && pathname === '/') || (item.path && item.path !== '/' && pathname.startsWith(item.path));
                            const showUnderline = isActive && item.title !== 'Topics';

                            const menuItemContent = (
                                <>
                                    {item.title}
                                    {item.subMenu && <FiChevronDown className={`ml-1 transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />}
                                    {item.path && <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${showUnderline ? 'w-full' : 'w-0'}`}></span>}
                                </>
                            );

                            return (
                                <li key={index} className="relative" onMouseEnter={() => handleDropdown(item.title)} onMouseLeave={() => handleDropdown(null)}>
                                    {item.path ? (
                                        <Link
                                            href={item.path}
                                            prefetch={true}
                                            className={`relative ${(isHeroPage && !isScrolled) ? 'text-white' : 'text-gray-800'} font-medium text-sm tracking-wide transition-all duration-300 hover:text-red-600 group flex items-center`}
                                        >
                                            {menuItemContent}
                                        </Link>
                                    ) : (
                                        <div
                                            className={`relative ${(isHeroPage && !isScrolled) ? 'text-white' : 'text-gray-800'} font-medium text-sm tracking-wide transition-all duration-300 group flex items-center cursor-pointer`}
                                        >
                                            {menuItemContent}
                                        </div>
                                    )}
                                    {item.subMenu && (openDropdown === item.title || closingDropdown === item.title) && (
                                        <ul ref={dropdownRef} className="absolute top-full left-0 mt-1 py-3 w-48 bg-white rounded-md overflow-hidden">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.path}
                                                        prefetch={true}
                                                        className={`block px-4 py-2 text-sm ${pathname === subItem.path ? 'text-red-600' : 'text-gray-700'}`}
                                                        onMouseEnter={(e) => handleSubMenuItemHover(e, true)}
                                                        onMouseLeave={(e) => handleSubMenuItemHover(e, false)}>
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>

                    {/* Hamburger Menu */}
                    <button
                        ref={hamburgerRef}
                        onClick={toggleMobileMenu}
                        className="md:hidden relative w-6 h-6 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className={`absolute inset-0 flex flex-col justify-center space-y-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                            <span className={`block h-0.5 ${isHeroPage && !isScrolled ? 'bg-white' : 'bg-gray-700'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 ${isHeroPage && !isScrolled ? 'bg-white' : 'bg-gray-700'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 ${isHeroPage && !isScrolled ? 'bg-white' : 'bg-gray-700'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 -translate-y-2' : ''}`}></span>
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
                    {menuItems.map((item, index) => {
                        const isActive = (item.path === '/' && pathname === '/') || (item.path && item.path !== '/' && pathname.startsWith(item.path));
                        return (
                            <div key={index}>
                                <Link
                                    href={item.path || '#'}
                                    prefetch={item.path ? true : false}
                                    className={`flex items-center justify-between font-medium text-lg tracking-wide py-2 transition-all duration-300 hover:text-red-600 hover:translate-x-2 ${isActive ? 'text-red-600' : 'text-gray-700'}`}
                                    onClick={(e) => {
                                        if (item.subMenu) {
                                            e.preventDefault();
                                            setOpenDropdown(openDropdown === item.title ? null : item.title)
                                        } else {
                                            toggleMobileMenu()
                                        }
                                    }}
                                >
                                    {item.title}
                                    {item.subMenu && <FiChevronDown className={`ml-1 transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />}
                                </Link>
                                {item.subMenu && openDropdown === item.title && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={subItem.path} prefetch={true} onClick={toggleMobileMenu} className={`block text-base py-1 hover:text-red-600 ${pathname === subItem.path ? 'text-red-600' : 'text-gray-600'}`}>
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar