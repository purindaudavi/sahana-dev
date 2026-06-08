"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

// Import your custom background asset
import sectionbg from "../assets/aboutbg.png";
import callusbg from "../assets//call-us.png";
import { Calendar, MapPin } from "lucide-react";
import { GraduationCap, BriefcaseBusiness, Scale } from "lucide-react";
import CTASection from "../components/CTASection";
import trusted from "../assets/proffessional.png";


export default function AboutJourneySection() {
  //curved element track
  const curvedMaskRef = useRef<HTMLDivElement | null>(null);





  const LEADERSHIP_TEAM = [
    {
      id: 1,
      name: "Prof. Lalith Goonatilake",
      role: "Chairman",
      roleColor: "text-[#E6008E]", // Magenta color accent
      description: "Visionary leader with over 40 years in academia and real estate. Former Vice Chancellor and advisor to national development initiatives.",
      qualification: "PhD (Property Economics)",
      university: "University of Sri Jayewardenepura",
      icon: GraduationCap,
      iconColor: "text-[#2196F3]",
      imageUrl: "https://unsplash.com" // Replace with actual photo path
    },
    {
      id: 2,
      name: "Prof. Suren Peter",
      role: "Director (Deputy Chairman)",
      roleColor: "text-[#E6008E]",
      description: "Renowned academic and strategist with expertise in urban planning, infrastructure, and sustainable real estate development.",
      qualification: "PhD (Urban Planning)",
      university: "University of Moratuwa",
      icon: GraduationCap,
      iconColor: "text-[#2196F3]",
      imageUrl: "https://unsplash.com" // Replace with actual photo path
    },
    {
      id: 3,
      name: "Ms. Hemamala Goonatilake",
      role: "Director",
      roleColor: "text-[#E6008E]",
      description: "Finance and operations leader focused on growth, governance, and delivering long-term value for stakeholders.",
      qualification: "MBA (Finance)",
      university: "University of Colombo",
      icon: BriefcaseBusiness,
      iconColor: "text-[#2196F3]",
      imageUrl: "https://unsplash.com" // Replace with actual photo path
    },
    {
      id: 4,
      name: "Mrs. Ranmalie Goonatilake",
      role: "Director",
      roleColor: "text-[#E6008E]",
      description: "Expert in legal and compliance with a strong focus on ethics, risk management, and corporate governance.",
      qualification: "LLB (Hons)",
      university: "University of Colombo",
      icon: Scale,
      iconColor: "text-[#2196F3]",
      imageUrl: "https://unsplash.com" // Replace with actual photo path
    }
  ];

useEffect(() => {
  if (!curvedMaskRef.current) return;



  // Prevent browser from restoring old scroll position on reload
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Force page to start from top on reload
  window.scrollTo(0, 0);
  const ctx = gsap.context(() => {
    gsap.to(curvedMaskRef.current, {
    
      scaleY: 10,
        transformOrigin: "bottom center",
        ease: "none",
   
      
    

      scrollTrigger: {
        trigger: curvedMaskRef.current?.parentElement,
        start: "bottom 40%",
        end: "bottom 20%",
        scrub: 1.5,
        markers: true,
      },
    });
  });

  return () => ctx.revert();
}, []);



  return (
    <div className="w-full bg-white min-h-screen">

      {/* ========================================================== */}
      {/* 1. BRAND NEW HERO BANNER SECTION WITH ASYMMETRIC CURVE       */}
      {/* ========================================================== */}
      <section className="relative w-full h-[40vh] min-h-[300px] md:h-[45vh] overflow-hidden">
        {/* Immersive Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={sectionbg.src}
            alt="Sahana Group About Banner"
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Subtle dark tint to help center text pop out over image details */}
          <div className="absolute inset-0 bg-amber-10"></div>
        </div>

        {/* Centralized Title Layer */}
        <div className="relative z-10 flex h-full w-full items-center justify-center pt-16 text-center pointer-events-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md pointer-events-none">
            About Us
          </h1>
        </div>

        {/* Asymmetric Bottom Curve Cut-out Layer */}
        {/* FIXED: Attached curvedMaskRef and forced full canvas height layout control hooks */}
        <div
          ref={curvedMaskRef}
          className="absolute bottom-[-1px] left-0 right-0 h-30 md:h-28 bg-white z-20 pointer-events-none origin-bottom transform-gpu will-change-transform"
          style={{
            clipPath: "ellipse(80% 100% at 50% 100%)",
          }}
        ></div>


      </section>


      {/* ========================================================== */}
      {/* 2. MATCHED CANVAS: YOUR EXTANT JOURNEY SECTION WRAPPER     */}
      {/* ========================================================== */}
      {/* Note: Switched from bg-[#0D2B4D] to bg-white to match the clean background below the banner */}
      <section className=" bg-white py-16 md:py-24 relative overflow-hidden text-[#0D2B4D] w-full flex items-center justify-center ">

        {/* Background radial atmosphere glow to bring color contrast accents */}
        <div className="absolute top-12 left-12 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-5 space-y-6 ">

            {/* Section Small Tagline */}
            <div className="inline-block">
              <span className="inline-flex items-center bg-[#fffc42] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                About Sahana Group
              </span>
            </div>

            {/* Main Content Headline */}
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B4D] tracking-tight leading-tight">
              A Trusted Partner for Your Real Estate and Financing Needs.
            </h2>

            {/* Small Brand Divider Line */}
            <div className="w-12 h-1 bg-[#2196F3] rounded-full shadow-lg shadow-blue-500/50"></div>

            {/* Description Paragraphs */}
            <p className="text-gray-600 font-normal leading-relaxed text-base">
              Established on 27 July 1999, Sahana Group has grown into one of Sri Lanka's
              most trusted names in real estate and financing. With over 25 years of
              proven experience, we have earned the confidence of thousands through our
              commitment to honesty, transparency, and long-term value.
            </p>

            <p className="text-gray-600 font-normal leading-relaxed text-base">
              From our head office in Horana, we continue to deliver reliable land
              development and customer-first financial solutions that help families
              build a secure future.
            </p>

            {/* Quick Metrics Data Row - Adapted with crisp borders for light backgrounds */}
            <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-gray-100">

              {/* Metric Item 1 */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200 min-w-[180px]">
                <div className="w-10 h-10 rounded-xl bg-[#E6008E]/10 flex items-center justify-center text-[#E6008E]">
                  <Calendar size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Established</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">27 July 1999</p>
                </div>
              </div>

              {/* Metric Item 2 */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200 min-w-[180px]">
                <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 flex items-center justify-center text-[#2196F3]">
                  <MapPin size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Head Office</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">Horana, Sri Lanka</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: BRANDING IMAGE SHOWCASE */}
          <div className="lg:col-span-7 w-full transform-gpu lg:flex lg:justify-self-end ">
            <div className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[16/10] bg-[#0A223C]">
              <img
                src={trusted.src}
                alt="Sahana Group Corporate Showcase"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================== */}
      {/* 3. UPDATED METRICS SHOWCASE SECTION   25+                  */}
      {/* ========================================================== */}
      <section className="w-full bg-gray-100 py-16 md:py-20  text-[#0D2B4D]">
        <div className=" max-w-screen-2xl mx-auto md:px-20 px-10 space-y-12">

          {/* UPPER PART: Two-Column Text Layout (Layout from Image 1) */}
          <div className=" grid grid-cols-1 md:grid-cols-2  items-start w-full">
            {/* Left Headline Column */}
            <div>
              <h2 className=" text-4xl md:text-5xl font-black tracking-tight text-[#0D2B4D] leading-tight max-w-xl  ">
                25+ Years of Excellence. <br></br>A Legacy You Can Rely On.
              </h2>
            </div>

            {/* Right Paragraph Column */}
            <div className=" md:pt-2 md:flex md:justify-end  0  ">
              <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w- md:text-right  ">
                From reliable land development to customer-first financial solutions,<br></br>
                we continue to build lasting relationships <br></br>and communities
                across Sri Lanka.
              </p>
            </div>
          </div>

          {/* Clean Horizontal Separation Line (From Image 1) */}
          <hr className="border-gray-100" />

          {/* LOWER PART: 4-Column Minimal Grid Block (Content & Brand Colors from Image 2) */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center 
           md:flex md:items-start md:justify-between md:w-full md:px-15  ">

            {/* Metric 1 - Deep Corporate Blue */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2B4D]">
                25+
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                Years <br className="hidden sm:inline" /> of Experience
              </p>
            </div>

            {/* Metric 2 - Electric Cyan */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-brand-cyan">
                130
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                Major Projects <br className="hidden sm:inline" /> Completed
              </p>
            </div>

            {/* Metric 3 - Hot Vivid Pink */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-brand-pink">
                3,300
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                Land Lots <br className="hidden sm:inline" /> Sold
              </p>
            </div>

            {/* Metric 4 - Vibrant Violet Purple */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-[#8E2DE2]">
                30
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                Professional <br className="hidden sm:inline" /> Staff
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================== */}
      {/* 4. JOINED LEADERSHIP TEAM MATRIX BLOCK                     */}
      {/* ========================================================== */}
      {/* Note: Extracted the layout function signature wrapper so it integrates natively */}
      <section className="w-full bg-white py-16 md:py-24 text-[#0D2B4D]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* SECTION HEADER BLOCK */}
          <div className="max-w-3xl space-y-3">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#E6008E]">
              Our Leadership Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0D2B4D] leading-tight">
              Meet the People Behind Sahana Group
            </h2>
            <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w-2xl pt-2">
              Our leadership team combines decades of experience in real estate, finance, and development to guide Sahana Group with vision, integrity, and commitment.
            </p>
          </div>

          {/* FOUR COLUMN TEAM MATRIX GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={member.id}
                  className="w-full bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,43,77,0.06)] hover:-translate-y-1"
                >
                  {/* PROFILE PICTURE BOX WITH FIXED ROUND CIRCLE MASK */}
                  <div className="w-44 h-44 rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center mb-6">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* PROFILE DETAILS CONTAINER */}
                  <div className="space-y-4 flex-1 flex flex-col justify-between w-full">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-[#0D2B4D] tracking-tight leading-snug">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-bold tracking-wide ${member.roleColor}`}>
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-500 font-light text-xs leading-relaxed min-h-[4.5rem]">
                      {member.description}
                    </p>

                    <hr className="border-gray-100 my-2" />

                    {/* ACADEMIC CREDENTIALS FOOTER PILL ROW */}
                    <div className="flex gap-3 items-start text-left pt-2 px-1">
                      <div className={`mt-0.5 ${member.iconColor} shrink-0`}>
                        <IconComponent size={18} className="stroke-[2.5]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-[#0D2B4D] leading-none">
                          {member.qualification}
                        </p>
                        <p className="text-[11px] font-medium text-gray-400 leading-snug">
                          {member.university}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>



      </section>

      <CTASection
        description="Whether you're looking to buy, sell, or invest, our team is here to help you every step of the way. Let's turn your property goals into reality."
        primaryBtnText="Explore Properties"
        primaryBtnHref="/properties"
        secondaryBtnText="Contact Our Team"
        secondaryBtnHref="/contact"
        bgImageSrc={callusbg.src}
      />



    </div>





  );
}