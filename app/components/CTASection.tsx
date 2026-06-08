// src/components/CTASection.tsx
"use client";

import React from "react";
import Link from "next/link";

// Define flexible parameters (Props) so you can change text or links on different pages
interface CTASectionProps {
  headline?: React.ReactNode; // Allows strings or JSX elements like <br />
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  bgImageSrc: string; // Accepts the .src string path from any imported image asset
}

export default function CTASection({
  headline = <>Let&apos;s Build Your <br />Future Together</>, // Default fallback headline
  description,
  primaryBtnText,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnHref,
  bgImageSrc
}: CTASectionProps) {
  return (
    <section className="w-full py-16 md:py-24 text-[#0D2B4D]">
      <div className="max-w-7xl mx-auto px-6">
          
        {/* Card Frame Shell */}
        <div className="w-full bg-gradient-to-r via-black to-gray-50/50 border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(13,43,77,0.04)] overflow-hidden flex flex-col md:flex-row items-stretch min-h-[380px] relative">

          {/* LEFT AREA: GRADIENT CONTENT MASK LAYER */}
          <div className="absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r md:from-white/80 md:via-white/30 bg-gradient-to-r from-black/30 via-black/0 to-transparent z-10"></div>

          {/* WRAPPER LAYER FOR TEXT CONTENT */}
          <div className="w-full p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6 relative z-20">

            {/* Dynamic Headline */}
            <h2 className="text-4xl md:text-5xl font-black md:text-[#0D2B4D] text-white  tracking-tight leading-tight max-w-md  drop-shadow-[0_4px_18px_rgba(13,43,77,0.65)] md:drop-shadow-none">
              {headline}
            </h2>

            {/* Signature Magenta Accent Line */}
            <div className="w-12 h-1 bg-[#E6008E] rounded-full shadow-md shadow-pink-500/20"></div>

            {/* Dynamic Descriptive Copy */}
            <p className="md:text-gray-500 text-white md:[text-shadow:none] [text-shadow:_black_1px_1px_1px] font-light text-sm md:text-base leading-relaxed max-w-sm">
              {description}
            </p>

            {/* Reusable Button Control Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Dynamic Action Button */}
              <Link
                href={primaryBtnHref}
                className="inline-flex items-center gap-2 bg-[#2196F3] hover:bg-[#0D2B4D] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                {primaryBtnText}
                <span className="transform transition-transform duration-200 group-hover:translate-x-0.5 text-xs">
                  ➔
                </span>
              </Link>

              {/* Secondary Dynamic Action Button */}
              <Link
                href={secondaryBtnHref}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-[#0D2B4D] px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                {secondaryBtnText}
                <svg
                  className="w-4 h-4 stroke-[2.2] ml-0.5 text-[#0D2B4D]/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </Link>
            </div>

          </div>

          {/* RIGHT AREA: FULL-CANVAS BACKGROUND IMAGE ACCELERATOR */}
          <div className="w-full absolute inset-0 min-h-[250px] md:min-h-full z-0">
            <img
              src={bgImageSrc}
              alt="Sahana Real Estate Asset Development Preview"
              className="w-full h-full object-cover object-center absolute inset-0 md:scale-103 scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
