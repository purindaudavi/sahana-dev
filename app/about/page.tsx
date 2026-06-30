"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { translations } from "../lib/translations";
import { useLanguage } from "../lib/useLanguage";
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

// Import your custom background asset
import sectionbg from "../assets/aboutbg.png";
import callusbg from "../assets/call-us.png";
import {
  Calendar, MapPin, Building2,
  Users,
  BadgeCheck,
  Landmark,
} from "lucide-react";
import { GraduationCap, BriefcaseBusiness, Scale } from "lucide-react";
import CTASection from "../components/CTASection";
import trusted from "../assets/proffessional.png";


export default function AboutJourneySection() {
  //curved element track
  const { language } = useLanguage();
  const t = translations[language];
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
          markers: false,
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
            {t.aboutHeroTitle}
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
          <div className="lg:col-span-6 space-y-6">

            {/* Section Small Tagline */}
            <div className="inline-block">
              <span className="inline-flex items-center bg-[#fffc42] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {t.aboutBadge}
              </span>
            </div>

            {/* Main Content Headline */}
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B4D] tracking-tight leading-tight">
              {t.aboutMainTitle}
            </h2>

            {/* Small Brand Divider Line */}
            <div className="w-12 h-1 bg-[#2196F3] rounded-full shadow-lg shadow-blue-500/50"></div>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-600 font-normal leading-relaxed text-base">
                {t.aboutPara1}
              </p>

              <p className="text-gray-600 font-normal leading-relaxed text-base">
                {t.aboutPara2}
              </p>

              <p className="text-gray-600 font-normal leading-relaxed text-base">
                {t.aboutPara3}
              </p>
            </div>

            {/* Sister Companies */}
            <div className="rounded-3xl border border-gray-200 bg-white/80 p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E6008E]/10 text-[#E6008E]">
                  <Building2 size={18} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wide text-[#0D2B4D]">
                  {t.sisterCompanies}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-3 border border-gray-100">
                  <BadgeCheck size={18} className="mt-0.5 text-[#2196F3]" />
                  <p className="text-sm font-bold text-[#0D2B4D]">
                    Sahana Idam (Pvt) Ltd - <span className="text-gray-500">PV 1641</span>
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-3 border border-gray-100">
                  <BadgeCheck size={18} className="mt-0.5 text-[#2196F3]" />
                  <p className="text-sm font-bold text-[#0D2B4D]">
                    Sahana Lanka Investments (Pvt) Ltd - <span className="text-gray-500">PV 1321</span>
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-3 border border-gray-100">
                  <BadgeCheck size={18} className="mt-0.5 text-[#2196F3]" />
                  <p className="text-sm font-bold text-[#0D2B4D]">
                    Sahana Commercial Developments (Pvt) Ltd - <span className="text-gray-500">PV 65171</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Data Row */}

          </div>

          {/* RIGHT COLUMN: BRANDING IMAGE SHOWCASE */}
          <div className="lg:col-span-6 w-full transform-gpu space-y-6 lg:justify-self-end">
            <div className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[16/10] bg-[#0A223C]">
              <img
                src={trusted.src}
                alt="Sahana Group Corporate Showcase"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100">

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#E6008E]/10 flex items-center justify-center text-[#E6008E]">
                  <Calendar size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{t.established}</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">27 July 1999</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 flex items-center justify-center text-[#2196F3]">
                  <MapPin size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{t.headOffice}</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">{t.horanaTown}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#29D6ED]/10 flex items-center justify-center text-[#2196F3]">
                  <Users size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{t.staff}</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">{t.thirtyProfessionals}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#0D2B4D]/10 flex items-center justify-center text-[#0D2B4D]">
                  <Landmark size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{t.completed}</p>
                  <p className="text-sm font-bold text-[#0D2B4D]">{t.completedProjectsLots}</p>
                </div>
              </div>

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
                {t.aboutLegacyTitle}
              </h2>
            </div>

            {/* Right Paragraph Column */}
            <div className=" md:pt-2 md:flex md:justify-end  0  ">
              <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w- md:text-right  ">
                aboutLegacyTitle
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
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug ">
                {/* Years <br className="hidden sm:inline" /> of Experience */}
                {t.years} <br className="hidden sm:inline" /> {t.ofExperience}

              </p>
            </div>

            {/* Metric 2 - Electric Cyan */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-brand-cyan">
                130
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                {t.majorProjectsCompleted}
              </p>
            </div>

            {/* Metric 3 - Hot Vivid Pink */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-brand-pink">
                3,300
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                {t.landLotsSold}
              </p>
            </div>

            {/* Metric 4 - Vibrant Violet Purple */}
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-[#8E2DE2]">
                30
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-[150px] mx-auto leading-snug">
                {t.professionalStaff}
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
              {t.leadershipBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0D2B4D] leading-tight">
              {t.leadershipTitle}
            </h2>
            <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed max-w-2xl pt-2">
              {t.leadershipPara}
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
        description={t.ctaDescription}
        primaryBtnText={t.ctaPrimary}
        primaryBtnHref="/properties"
        secondaryBtnText={t.ctaSecondary}
        secondaryBtnHref="/contact"
        bgImageSrc={callusbg.src}
      />



    </div>





  );
}