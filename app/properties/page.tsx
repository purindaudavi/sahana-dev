"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, RotateCcw, SlidersHorizontal, MapPin } from "lucide-react";
import { LAND_PROJECTS } from "./data";

import propertyHeroBg from "../assets/property-hero.png";

// Replace these with your real land images later
import landBg from "../assets/property-hero.png";
import CTASection from "../components/CTASection";
import callusbg from "../assets//call-us.png";



export default function PropertyListPage() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [priceValue, setPriceValue] = useState(500000);

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] text-[#0D2B4D]">
      {/* ========================================================== */}
      {/* HERO SECTION                                               */}
      {/* ========================================================== */}
      <section className="relative min-h-[560px] w-full overflow-hidden pt-36">
        <img
          src={propertyHeroBg.src}
          alt="Sahana Lands"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
          <h1 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] text-white drop-shadow-sm sm:text-5xl md:text-6xl">
            Discover Premium Lands <br />
            Across Sri Lanka
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Explore handpicked residential, commercial and agricultural lands in
            prime locations with excellent potential.
          </p>

          <div className="mt-3">
            <div className="mb-4 h-[2px] w-20 bg-gradient-to-r from-[#29D6ED] to-[#E6008E]" />
            <p className="text-xl font-bold text-white">
            {" "}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FILTER PANEL                                               */}
      {/* ========================================================== */}
      <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-6">
        <div className="grid w-full grid-cols-1 gap-8 rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_25px_70px_rgba(13,43,77,0.12)] lg:grid-cols-[1.1fr_1.4fr_1.1fr_1.1fr_1.1fr]">
          {/* Land Type */}
          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">⌘</span>
              Land Type
            </h3>

            <div className="space-y-3 text-sm text-[#0D2B4D]/70">
              {["Residential Land", "Commercial Land", "Agricultural Land"].map(
                (item) => (
                  <label key={item} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="landType"
                      className="h-4 w-4 accent-[#E6008E]"
                    />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">◇</span>
              Price
            </h3>

            <div className="space-y-3 text-sm text-[#0D2B4D]/70">
              {[
                "Any Price",
                "Below LKR 500,000",
                "LKR 500,000 - 1,000,000",
                "Above LKR 1,000,000",
              ].map((item, index) => (
                <label key={item} className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="price"
                    defaultChecked={index === 0}
                    className="h-4 w-4 accent-[#E6008E]"
                  />
                  {item}
                </label>
              ))}
            </div>

            {/* Price Scroll Bar */}
            <div className="pt-2">
              <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-[#0D2B4D]/60">
                <span>LKR 0</span>
                <span>LKR 1,000K+</span>
              </div>

              <input
                type="range"
                min="0"
                max="1500000"
                step="50000"
                value={priceValue}
                onChange={(e) => setPriceValue(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#E6008E]"
              />

              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-[#0D2B4D]/50">
                <span>0</span>
                <span>500K</span>
                <span>1M</span>
                <span>1.5M+</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">⌖</span>
              Location
            </h3>

            <div className="space-y-3 text-sm text-[#0D2B4D]/70">
              {["Colombo", "Gampaha", "Kurunegala", "Kalutara"].map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="location"
                    className="h-4 w-4 accent-[#E6008E]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Perches */}
          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">▦</span>
              Perches
            </h3>

            <div className="space-y-3 text-sm text-[#0D2B4D]/70">
              {["Below 10 Perches", "10 - 20 Perches", "Above 20 Perches"].map(
                (item) => (
                  <label key={item} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="perches"
                      className="h-4 w-4 accent-[#E6008E]"
                    />
                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4">
            <button className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0D2B4D] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#2196F3]">
              <Search size={18} />
              Search Lands
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-[#0D2B4D] transition hover:border-[#2196F3] hover:text-[#2196F3]">
              <RotateCcw size={18} />
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* TABS + SORT                                                */}
      {/* ========================================================== */}
      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 pb-8 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          {[
            "All Projects",
            "Residential Land",
            "Commercial Land",
            "Agricultural Land",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-7 py-3 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-[#0D2B4D] text-white shadow-lg"
                  : "bg-white text-[#0D2B4D] shadow-sm hover:bg-[#F1F4FA]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm shadow-sm">
          <span className="text-gray-500">Sort by:</span>
          <select className="bg-transparent font-bold text-[#0D2B4D] outline-none">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </section>

      {/* ========================================================== */}
      {/* PROPERTY GRID                                              */}
      {/* ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LAND_PROJECTS.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(13,43,77,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(13,43,77,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-[10px] font-black text-white ${property.typeColor}`}
                >
                  {property.type}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400">
                  <MapPin size={13} />
                  <span>{property.location}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#0D2B4D]">
                  {property.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  {property.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-black text-[#E6008E]">
                    {property.price}{" "}
                    <span className="text-xs text-gray-400">/ Perch</span>
                  </p>

                  <p className="text-sm font-bold text-[#0D2B4D]">
                    {property.perch}
                  </p>
                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-bold text-[#0D2B4D] transition hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* BOTTOM FEATURE STRIP                                       */}
      {/* ========================================================== */}
      {/* <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm md:grid-cols-4">
          {[
            ["Clear Titles", "All lands with clear legal ownership and documents."],
            ["Prime Locations", "Handpicked lands in high growth areas."],
            ["Modern Infrastructure", "Access to roads, water, electricity and more."],
            ["High Investment Value", "Great potential for future appreciation."],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1F4FA] text-[#0D2B4D]">
                <SlidersHorizontal size={22} />
              </div>

              <div>
                <h3 className="font-bold text-[#0D2B4D]">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

       <CTASection
        description="Whether you're looking to buy, sell, or invest, our team is here to help you every step of the way. Let's turn your property goals into reality."
        primaryBtnText="Explore Properties"
        primaryBtnHref="/properties"
        secondaryBtnText="Contact Our Team"
        secondaryBtnHref="/contact"
        bgImageSrc={callusbg.src}
      />

    </main>
  );
}