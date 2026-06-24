

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Globe2, Menu, X } from "lucide-react";
import logo from "../assets/logo-light.png";

export default function SahanaHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initial Intro GSAP Animations
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        x: -25,
        opacity: 0,
        duration: 0.8,
        delay: 0.25,
        ease: "power3.out",
      });
    });

    // 2. Optimized Scroll Listener for Show/Hide logic
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!headerRef.current) return;

      const currentScrollY = window.scrollY;

      // Only toggle hide/show states if scrolled past the hero threshold (e.g., 80px)
      if (currentScrollY > 5) {
        if (currentScrollY > lastScrollY) {
          // Scrolling Down -> Hide Header (Translate up beyond viewport bounds)
          headerRef.current.style.transform = "translateY(-120%)";
          // Safety: Close mobile menu if user scrolls away
          setIsMobileMenuOpen(false);
        } else {
          // Scrolling Up -> Show Header
          headerRef.current.style.transform = "translateY(100)";
        }
      } else {
        // Fallback: Ensure header is fully visible at the absolute top of the page
        headerRef.current.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3. REUSABLE STYLING UTILITY FUNCTION FOR CLEAN MARGIN GENERATION
  const getLinkClass = (path: string) => {
    const baseClass = "rounded-full px-5 py-2.5 transition text-sm font-medium duration-200";
    const activeClass = "bg-white text-[#0D2B4D] shadow-sm font-semibold";
    const inactiveClass = "text-[#0D2B4D]/80 hover:bg-white/60 hover:text-[#0D2B4D]";

    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <header
      ref={headerRef}
      /* Added a hardware-accelerated css transition so the movement feels fluid and silky */
      className="fixed left-0 top-0 z-50 w-full px-5 pt-5 md:px-8 transition-transform duration-300 ease-in-out"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] shadow-2xs px-5 py-3 backdrop-blur-lg relative">

        {/* Logo Container */}
        <Link ref={logoRef} href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Sahana Group"
            width={210}
            height={70}
            priority
            className="h-12 w-auto rounded-md object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          ref={navRef}
          className="hidden items-center gap-1 rounded-full border border-gray-200/60 bg-gray-100/80 p-1 text-[#0D2B4D] shadow-inner backdrop-blur-xl md:flex"
        >
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/properties" className={getLinkClass("/properties")}>
            Property List
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>


        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200/80 px-4 py-2 text-sm font-medium text-[#0D2B4D] transition md:flex">
            <Globe2 size={16} />
            Eng
          </button>

          <Link
            href="/sign-in"
            className="hidden rounded-full bg-[#E6008E] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition hover:bg-[#FF2FA6] md:inline-flex"
          >
            Sign in
          </Link>

          {/* Interactive Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6008E] text-white shadow-lg shadow-pink-500/25 md:hidden hover:bg-[#FF2FA6] transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dynamic Mobile Menu Overlay Panel */}
        {isMobileMenuOpen && (
          <div className="absolute top-[4.5rem] left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-6 shadow-xl flex flex-col gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-[#0D2B4D] p-2 hover:bg-gray-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-[#0D2B4D] p-2 hover:bg-gray-50 rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/properties"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-[#0D2B4D] p-2 hover:bg-gray-50 rounded-lg"
            >
              Property List
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-[#0D2B4D] p-2 hover:bg-gray-50 rounded-lg"
            >
              Contact Us
            </Link>
            <hr className="border-gray-100 my-1" />
            <Link
              href="/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#E6008E] text-white text-center py-3 rounded-xl font-bold shadow-md shadow-pink-500/10"
            >
              Sign in
            </Link>
          </div>
        )}

      </div>
    </header>
  );
}
