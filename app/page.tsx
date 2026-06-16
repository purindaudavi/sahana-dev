"use client";

import { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import backgroundImage from "./assets/bgimg.png";
import mobileBackgroundImage from "./assets/mobbgimg.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import land1 from "./assets/images/uragaha.jpg";
import land2 from "./assets/images/dambulla.jpg";
import land3 from "./assets/images/kaluthara.png"
import land4 from "./assets/images/dambulla2.png"
import land5 from "./assets/images/yatidola.png"
import land6 from "./assets/images/pitigala.png"
import { useRouter } from "next/navigation";

import CTASection from "../app/components/CTASection";
import callusbg from "../app/assets/call-us.png";



import "swiper/css/navigation";
import "swiper/css/free-mode";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  // 1. Correctly instantiated React target pointers
  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const searchPanelRef = useRef<HTMLDivElement | null>(null);
  const propertyIntroRef = useRef<HTMLDivElement | null>(null);

  


  const router = useRouter();

  const [landType, setLandType] = useState("");
  const [district, setDistrict] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [blockSize, setBlockSize] = useState("");
  const [activeTab, setActiveTab] = useState("All Projects");
  const [priceValue, setPriceValue] = useState(0);

   

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const type = params.get("type");
  const district = params.get("district");
  const blockSize = params.get("blockSize");
  const price = params.get("price");

  if (type) setLandType(type);
  if (district) setDistrict(district);
  if (blockSize) setBlockSize(blockSize);

  if (price === "500000") {
    setPriceValue(500000);
  }

  if (price === "1000000") {
    setPriceValue(1000000);
  }
}, []);

  const slides = [
    {
      imageUrl: land1.src,
      title: "Colombo Prime Residential Plot",
      location: "Colombo 7",
      price: "LKR 1,200,000 / Perch",
      specs: ["12 Perches", "Gated Community", "Sea View"],
      rating: "4.8",
      badge: "For rent",
    },
    {
      imageUrl: land2.src,
      title: "Gampaha Commercial Land",
      location: "Gampaha",
      price: "LKR 900,000 / Perch",
      specs: ["20 Perches", "High Traffic Area", "Corner Plot"],
      rating: "4.5",
      badge: "For sale",

    }
  ]

  const PREMIUM_LAND_LIST = [
    {
      id: 4,
      title: "Ambalangoda Uragaha Plots",
      district: "Galle District",
      neighborhood: "Uragasmanhandiya",
      price: "120,000",
      currency: "LKR",
      pricingNote: "Per Perch Upwards",
      size: "-- Perches",
      access: "50m to Bus Route",
      zoning: "Residential / Investment",
      imageUrl: land1.src
    },
    {
      id: 2,
      title: "Heritage Dambulla",
      district: "Matale District",
      neighborhood: "Dambulla (Municipal Council Limits)",
      price: "125,000",
      currency: "LKR",
      pricingNote: "Per Perch Upwards",
      size: "-- Perches",
      access: "100m to Kandy Road",
      zoning: "Residential / Commercial",
      imageUrl: land2.src
    },
    {
      id: 1,
      title: "Kalutara Residences",
      district: "Kalutara District",
      neighborhood: "Kalutara",
      price: "Contact for Price",
      currency: "LKR",
      pricingNote: "Best Investment",
      size: " -- Perches",
      access: "Facing Galle Road",
      zoning: "Residential / Highly Commercial",
      imageUrl: land3.src
    },
    {
      id: 3,
      title: "Sahana Lands - Dambulla",
      district: "Matale District",
      neighborhood: "Dambulla (Municipal Council Limits)",
      price: "100,000",
      currency: "LKR",
      pricingNote: "Per Unit Upwards",
      size: " -- Perches",
      access: "100m to Kandy Road",
      zoning: "Residential/Investment",
      imageUrl: land4.src
    },
    {
      id: 5,
      title: "Sahana Lands - Yatidola",
      district: "Kalutara District",
      neighborhood: "Yatidola (Mathugama)",
      price: "Coming Soon",
      currency: "LKR",
      pricingNote: "Upcoming Project Development",
      size: "---",
      access: "Initial Ground Clearing Stage",
      zoning: "Residential/Investment",
      imageUrl: land5.src
    },
    {
      id: 6,
      title: "Sahana Lands - Pitigala",
      district: "Galle District",
      neighborhood: "Pitigala",
      price: "Coming soon",
      currency: "LKR",
      pricingNote: "Upcoming Project Development",
      size: " -- ",
      access: "Initial Ground Clearing Stage",
      zoning: "Residential/Investment",
      imageUrl: land6.src
    }
  ];




  useEffect(() => {
    // 2. Bound the missing context 'ctx' wrapper targeting our main element references
    const ctx = gsap.context(() => {

      // A. Scroll-coupled sequential timeline engine targeting textual children
      const heroTimeline = gsap.timeline()



      heroTimeline
        .from(".hero-badge", {
          y: -20,
          opacity: 0,
          duration: 0.6,
        })
        .from(".hero-heading", {
          x: -50,
          opacity: 0,
          filter: "blur(15px)",
          duration: 1,
        }, "-=0.4")
        .from(".hero-paragraph", {
          x: -30,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
        }, "-=0.6")
        .from(".hero-buttons", {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6");

      // B. Isolated reveal animations tracking the side feature card item
      gsap.from(heroCardRef.current, {
        x: 80,
        opacity: 0,
        scale: 0.9,
        filter: "blur(12px)",
        duration: 1.2,



      });

      gsap.from(propertyIntroRef.current, {
        y: 120,
        opacity: 0,
        scale: 0.96,
        filter: "blur(14px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: propertyIntroRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        ".property-bubble-row",
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,

          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: propertyIntroRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.from(searchPanelRef.current, {
        y: 120,
        opacity: 0,
        scale: 0.96,
        rotate: -1.5,
        filter: "blur(10px)",
        duration: 0.60,
        ease: "power1out",
        scrollTrigger: {
          trigger: searchPanelRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
          markers: false,

        },
      });

      gsap.from(".land-section-content", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".land-section-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

    }, pageRef); // Correctly hooks our animation context to page container space

    return () => ctx.revert(); // Erases memory footprint safely on viewport changes
  }, []);

  return (

    <main ref={pageRef} className=" absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-[#F1F4FA]/20 relative w-full overflow-hidden">
      {/* Full website background image */}
      <div className="fixed inset-0 -z-20">
        <img
          src={backgroundImage.src}
          alt="Sahana Group Background"
          className="hidden md:block h-full w-full object-cover object-center "
        />

        <img
          src={mobileBackgroundImage.src}
          alt="Sahana Group Mobile Background"
          className="block md:hidden h-full w-full object-cover object-center "
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 -z-10 bg-black/20" />


      {/* Note: SahanaHeader is handled globally by layout.tsx wrapper */}

      {/* ========================================================== */}
      {/* NEW HERO SECTION WITH BACKGROUND IMAGE & MOVED CONTAINER   */}
      {/* ========================================================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">



        {/* Readability contrast balance tint mask */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-[#F1F4FA]/20"></div> */}

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between mt-25 ">
          {/* B. FIXED HTML: Added text-wrapper container reference along with GSAP style strings */}
          <div ref={heroTextRef} className="w-full md:w-3/5 text-center md:text-left space-y-6">

            <div className="hero-badge inline-block">
              <span className="inline-flex items-center gap-2 bg-[#F6DBB8] text-[#0D2B4D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Trusted Property Investments
              </span>
            </div>

            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-100 leading-tight max-w-3xl">
              Find Your Ideal Plot of Land With <span className="bg-gradient-to-r from-[#e80190] to-[#FF8BE8] bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(230,0,142,0.45)] [-webkit-text-stroke:0.2px_black]">Sahana Group</span>
            </h1>


            <p className="hero-paragraph text-white text-base sm:text-lg max-w-2xl leading-relaxed">
              Secure your future with certified residential and commercial land plots across prime locations in Sri Lanka. Clear deeds and hassle-free processing guaranteed.
            </p>

            <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Link
                href="/properties"
                className="bg-[#2196F3] hover:bg-[#0D2B4D] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Browse Available Lands
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-[#0D2B4D] border border-gray-300 px-8 py-3.5 rounded-xl font-bold shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* A. FIXED HTML: Integrated Swiper Container using heroCardRef  -----  swipercard */}
          <div ref={heroCardRef} className="w-full md:ml-auto md:mr-0 md:max-w-sm self-center">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="w-full rounded-[2.5rem] shadow-[0_20px_50px_rgba(13,43,77,0.25)]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* Main Card Frame Box Layout */}
                  <div className="w-full h-[26rem] rounded-[2.5rem] p-5 flex flex-col justify-between text-white relative overflow-hidden bg-gray-900 border border-white/10 group">

                    {/* A. Dynamic Background Image Cover */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>





                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>



        </div>
      </section>


      {/* ========================================================== */}
      {/* SCROLL SEARCH / SORTING PANEL                               */}
      {/* ========================================================== */}

      <section className="relative px-6 pb-12">
        <div
          ref={searchPanelRef}
          className="mx-auto mt-7 max-w-7xl rounded-[2rem] bg-white p-6 shadow-[0_30px_100px_rgba(13,43,77,0.22)] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-2">
            <h2 className="text-2xl font-black tracking-tight text-[#0D2B4D] md:text-3xl">
              Find the best place
            </h2>
            <p className="text-sm text-gray-500">
              Search lands by location, price, category and land size.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#0D2B4D]">
                Looking for
              </label>
              <select
                value={landType}
                onChange={(e) => setLandType(e.target.value)}
                className="w-full rounded-2xl bg-gray-100 px-4 py-4"
              >
                <option value="">Enter type</option>
                <option value="Residential">Residential Land</option>
                <option value="Commercial">Commercial Land</option>
                <option value="Agricultural">Agricultural Land</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#0D2B4D]">
                Price
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full rounded-2xl bg-gray-100 px-4 py-4"
              >
                <option value="">Any Price</option>
                <option value="500000">Below LKR 500,000</option>
                <option value="1000000">LKR 500,000 - 1,000,000</option>
                <option value="above1000000">Above LKR 1,000,000</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#0D2B4D]">
                Disrtrict
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full rounded-2xl bg-gray-100 px-4 py-4"
              >
                <option value="">Location</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Kalutara">Kalutara</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#0D2B4D]">
                Block size
              </label>
              <select
                value={blockSize}
                onChange={(e) => setBlockSize(e.target.value)}
                className="w-full rounded-2xl bg-gray-100 px-4 py-4" 
              >
                <option value="">Any Block Size</option>
                <option value="below10">Below 10 Block Size</option>
                <option value="10to20">10 - 20 Block Size</option>
                <option value="above20">Above 20 Block Size</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-[#0D2B4D]">Filter:</span>

              {["All Projects", "Residential Land", "Commercial Land", "Agricultural Land"]

              .map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);

                if (tab === "All Projects") setLandType("");
                else if (tab === "Residential Land") setLandType("Residential");
                else if (tab === "Commercial Land") setLandType("Commercial");
                else if (tab === "Agricultural Land") setLandType("Agricultural");
              }}
              className={`rounded-full px-7 py-3 text-sm font-semibold transition ${activeTab === tab
                ? "bg-[#0D2B4D] text-white shadow-lg"
                : "bg-white text-[#0D2B4D] shadow-sm hover:bg-[#F1F4FA]"
                }`}
            >
              {tab}
            </button>
              // .map((item) => (
              //   <button
              //     key={item}
              //     className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition hover:border-[#2196F3] hover:text-[#2196F3]"
              //   >
              //     {item}
              //   </button>
              ))}
            </div>

            <button
              onClick={() => {
                const params = new URLSearchParams();

                if (landType) params.append("type", landType);
                if (district) params.append("district", district);
                if (priceRange) params.append("price", priceRange);
                if (blockSize) params.append("blockSize", blockSize);

                router.push(`/properties?${params.toString()}`);
              }}
              className="rounded-full bg-[#0D2B4D] px-8 py-3.5 text-sm font-bold text-white"
            >
              Search Properties
            </button>
          </div>
        </div>
      </section>

      <div className="h-16 w-full pointer-events-none"></div> {/* spacing between sections */}

      {/* ========================================================== */}
      {/* SCROLL INTRO TEXT SECTION                                  */}
      {/* ========================================================== */}
      <section className="relative px-6 pt-10 pb-0">
        <div
          ref={propertyIntroRef}
          className="mx-auto max-w-7xl rounded-t-[2rem] overflow-hidden"
        >
          <div className="relative min-h-[360px] rounded-t-[2rem] px-6 py-10 md:px-10 md:py-14 backdrop-blur-[2px]">



            {/* Intro content like reference */}
            <div className="space-y-6  ">
              {/* Top white bubbles */}
              <div className="property-bubble-row flex flex-wrap items-center gap-3">
                {["House", "Apartment", "Residential"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0D2B4D] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-[#F1F4FA]"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Headline + right paragraph */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
                {/* Left headline */}
                <div className="md:col-span-7">
                  <h2 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                    Build Your Future, One Property at a Time.
                  </h2>
                </div>

                {/* Right text field */}
                <div className="md:col-span-5  ">
                  <p className="max-w-md text-base font-light leading-relaxed text-white/85 md:text-lg  ">
                    Own your world, one property at a time. Discover carefully selected
                    lands and properties designed for secure living, smart investment,
                    and long-term peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 w-full pointer-events-none"></div> {/* spacing between sections */}

      {/* ========================================================== */}
      {/* MINIMALIST PREMIUM PROPERTIES SECTION                      */}
      {/* ========================================================== */}

      <section className="w-full py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Clean Minimalist Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-[#2196F3] text-xs font-bold uppercase tracking-widest block">
                {/* Optional brand text placeholder */}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D2B4D] tracking-tight">
                Latest Land Releases
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2B4D] hover:text-[#2196F3] transition-colors duration-200 group pb-1 border-b-2 border-gray-100 hover:border-[#2196F3]"
            >
              <span>View All Portfolios</span>
              <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* 3-Column Luxury Real Estate Grid */}
          {/* Swiper Luxury Real Estate Slider */}
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, FreeMode, Autoplay]}
              loop={true}

              speed={600} //. Slows down the transition snap animation for a more premium glide feel 800 to 600 
              touchRatio={1.2}   //  Adjusts touch sensitivity physics so swiping feels effortless
              loopAddBlankSlides={true}
              watchSlidesProgress={true}

              autoplay={{
                delay: 2500,           // Time between auto slides (3.5 seconds)
                disableOnInteraction: false, // Continue autoplay after user interaction
                pauseOnMouseEnter: true,     // Pause autoplay on hover for better UX
              }}

              freeMode={{
                enabled: true,
                sticky: true,            // TRUE prevents cards from stopping halfway cut-off in the middle
                momentumRatio: 0.8,      // Higher value makes it glide further after a quick flick
                momentumVelocityRatio: 0.6,
              }}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: ".prop-swiper-next",
                prevEl: ".prop-swiper-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="w-full !pb-20"
            >
              {PREMIUM_LAND_LIST.map((land) => (
                <SwiperSlide key={land.id} className="h-auto flex">
                  <div className="group w-full flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-300 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl cursor-pointer">

                    {/* 1. UPPER SECTION */}
                    <div className="bg-[#0D2B4D] relative w-full h-72 overflow-hidden transition-all duration-500 ease-out group-hover:scale-[0.95] group-hover:rounded-2xl mt-0 group-hover:mt-2 mx-0 group-hover:mx-2 group-hover:w-[calc(100%-1rem)]">
                      <img
                        src={land.imageUrl}
                        alt={land.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

                      <div className="absolute bottom-4 right-4 bg-[#0D2B4D]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:scale-[1.05]">
                        <p className="text-xs font-medium text-blue-200/80 uppercase tracking-wider text-right -mb-0.5">
                          {land.pricingNote}
                        </p>
                        <p className="text-lg font-black tracking-wide">
                          {land.price}{" "}
                          <span className="text-xs font-bold text-gray-300">
                            {land.currency}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* 2. LOWER SECTION */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2196F3] tracking-widest uppercase">
                          <span>{land.neighborhood}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-500 font-medium">
                            {land.district}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#0D2B4D] tracking-tight leading-snug line-clamp-2 min-h-[3.5rem]">
                          {land.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 pt-1  min-h-[4.5rem] items-start">
                          <span className="bg-[#F1F4FA] px-3 py-1.5 rounded-xl text-xs font-bold text-[#0D2B4D]/80">
                            {land.size}
                          </span>
                          <span className="bg-[#F1F4FA] px-3 py-1.5 rounded-xl text-xs font-bold text-[#0D2B4D]/80">
                            {land.access}
                          </span>
                          <span className="bg-[#F1F4FA] px-3 py-1.5 rounded-xl text-xs font-bold text-[#0D2B4D]/80">
                            {land.zoning}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 pt-2">
                        <hr className="border-gray-100" />

                        <Link
                          href={`/properties/${land.id}`}
                          className="flex items-center justify-between w-full group/link"
                        >
                          <span className="text-sm font-black text-[#0D2B4D] group-hover/link:text-[#2196F3] transition-colors duration-200">
                            Explore Land Plot
                          </span>

                          <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-[#0D2B4D] group-hover/link:bg-[#2196F3] group-hover/link:text-white group-hover/link:border-[#2196F3] transition-all duration-300">
                            <span className="transform transition-transform duration-300 group-hover/link:translate-x-0.5 text-sm">
                              ➔
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Swiper Arrows */}
            <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
              <button className="prop-swiper-prev w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0D2B4D] shadow-sm hover:bg-[#2196F3] hover:text-white hover:border-[#2196F3] transition-all duration-200 active:scale-95">
                ←
              </button>

              <button className="prop-swiper-next w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0D2B4D] shadow-sm hover:bg-[#2196F3] hover:text-white hover:border-[#2196F3] transition-all duration-200 active:scale-95">
                →
              </button>
            </div>
          </div>

        </div>
        <CTASection
          description="Whether you're looking to buy, sell, or invest, our team is here to help you every step of the way. Let's turn your property goals into reality."
          primaryBtnText="Explore Properties"
          primaryBtnHref="/properties"
          secondaryBtnText="Contact Our Team"
          secondaryBtnHref="/contact"
          bgImageSrc={callusbg.src}
        />
      </section>







    </main>
  );
}
