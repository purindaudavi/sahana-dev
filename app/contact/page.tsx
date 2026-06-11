"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import contactHeroBg from "../assets/contact-HeroBg.png";
import faqImage from "../assets/contact-faq.png"
import single from "../assets/sahana-single-logo.png"
import { Map, Eye, Icon } from "lucide-react";
import { BsInstagram,BsFacebook, BsWhatsapp ,BsMailbox } from "react-icons/bs";


import {
  Mail,
  Phone,
  Smartphone,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  Plus,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

// Put your generated contact hero image here:
// public/images/contact-hero.jpg
// const contactHeroBg = "/images/contact-hero.jpg";

// Optional image for FAQ area:
// public/images/contact-faq.jpg
// const faqImage = "/assets/contact-faq.png";

const FAQ_DATA = [
  {
    id: 1,
    question: "How soon will I get a response?",
    answer:
      "We usually respond within 24 hours. Our team will review your request and guide you with the most suitable property solution.",
  },
  {
    id: 2,
    question: "Can I schedule a property visit?",
    answer:
      "Yes. You can schedule a visit through the contact form, WhatsApp, or by calling our team directly.",
  },
  {
    id: 3,
    question: "What areas do you specialize in?",
    answer:
      "We focus on residential and commercial lands in prime and fast-growing locations across Sri Lanka.",
  },
  {
    id: 4,
    question: "Do you assist with property financing?",
    answer:
      "Yes. Our team can guide you with payment options and financing support depending on the selected property.",
  },
];

export default function ContactUsPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [mapType, setMapType] = useState("3d");

  const map3dSrc = "https://www.google.com/maps/embed?pb=!3m2!1sen!2slk!4v1780553484597!5m2!1sen!2slk!6m8!1m7!1sLPwT4eDTzgavoPMtzwEnhw!2m2!1d6.717587260683677!2d80.06653117233996!3f99.69158502655553!4f20.324966829397795!5f0.7820865974627469";
  const mapNormalSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10236.274414800615!2d80.0615734!3d6.7174122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b4ffff0d5b1%3A0x9c974cc28a117f40!2sSahana%20Group!5e1!3m2!1sen!2slk!4v1780553667586!5m2!1sen!2slk";


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-fade-up", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen w-full bg-[#F8FAFD] text-[#0D2B4D]"
    >
      {/* ========================================================== */}
      {/* HERO SECTION                                               */}
      {/* ========================================================== */}
      <section className="relative  min-h-[620px]  overflow-hidden pt-32">
        <img
          src={contactHeroBg.src}
          alt="Sahana Group contact background"
          className="absolute inset-0 h-full w-full object-cover object-cover h-[85vh]  max-h-[750px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-white/20 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="animate-fade-up lg:col-span-7">
              <div className="mb-5 flex items-center gap-5">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-[#E6008E]">
                  Contact Us
                </span>
                <span className="h-[2px] w-16 bg-[#E6008E]" />
              </div>

              <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-[#0D2B4D] sm:text-6xl lg:text-7xl">
                We’re here to help you find your perfect space
                <span className="text-[#E6008E]">.</span>
              </h1>

              <div className="mt-8 flex max-w-xl gap-5 border-l-2 border-[#E6008E] pl-5">
                <p className="text-base leading-relaxed text-[#0D2B4D]/70">
                  Whether you have a question about our properties, need
                  guidance, or want to schedule a visit — our team is ready to
                  assist you.
                </p>
              </div>
            </div>

            <div className="animate-fade-up lg:col-span-5">
              <div className="ml-auto max-w-md rounded-[2rem] border border-white/40 bg-white/25 p-8 shadow-[0_25px_80px_rgba(13,43,77,0.16)] backdrop-blur-xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#E6008E] shadow-md">
                    <img
                      className="h-8 w-auto object-contain rounded "
                      src={single.src} alt="sahana single logo " />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-sm">
                      Trusted real estate partner in Sri Lanka
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Local expertise. Transparent process. Exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM + OFFICE CARD */}
          <div className="animate-fade-up mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_25px_80px_rgba(13,43,77,0.10)] md:p-10">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E6008E]/10 text-[#E6008E]">
                    <Mail size={22} />
                  </div>
                  <h2 className="text-2xl font-semibold text-[#0D2B4D]">
                    Send us a message
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2196F3]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2196F3]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2196F3]"
                  />
                  <select className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-400 outline-none transition focus:border-[#2196F3]">
                    <option>Preferred Contact Method</option>
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                    <option>Email</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2196F3]"
                />

                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2196F3]"
                />

                <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs text-gray-500">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="sr-only"
                  />
                  <span
                    className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded border ${agreed
                      ? "border-[#E6008E] bg-[#E6008E]"
                      : "border-gray-300 bg-white"
                      }`}
                  >
                    {agreed && <Check size={11} className="text-white" />}
                  </span>
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy" className="text-[#2196F3]">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-[#2196F3]">
                      Terms of Use
                    </Link>
                    .
                  </span>
                </label>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E6008E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition hover:bg-[#0D2B4D]">
                    Send Message
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                    <Check size={16} className="text-emerald-500" />
                    We typically respond within 1 business day.
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-[2rem] bg-[#0D2B4D] p-8 text-white shadow-[0_25px_80px_rgba(13,43,77,0.18)] md:p-10">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#E6008E]">
                    <MapPin size={22} />
                  </div>
                  <h2 className="text-2xl font-semibold">Sahana Group Office</h2>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-white/75">
                  No. 60, Dharmapala Mawatha,
                  <br />
                  Colombo 07, Sri Lanka.
                </p>

                <div className="my-7 h-px bg-white/15" />

                {/* CONTACT LINKS MATRIX */}
                <div className="space-y-5">
                  {/* 1. Landline Call Link */}
                  <a
                    href="tel:+94342267979"
                    className="flex items-center gap-4 group/item w-fit transition-colors hover:text-[#2196F3]"
                  >
                    <Phone size={18} className="text-white/70 group-hover/item:text-[#2196F3] transition-colors" />
                    <span className="font-medium">+94 34 22 679 79</span>
                  </a>

                  {/* 2. Mobile Call Link */}
                  <a
                    href="tel:+94342262125"
                    className="flex items-center gap-4 group/item w-fit transition-colors hover:text-[#2196F3]"
                  >
                    <Smartphone size={18} className="text-white/70 group-hover/item:text-[#2196F3] transition-colors" />
                    <span className="font-medium">+94 34 22 621 25</span>
                  </a>

                  {/* 3. Direct Email Link */}
                  <a
                    href="mailto:info@sahanagroup.lk"
                    className="flex items-center gap-4 group/item w-fit transition-colors hover:text-[#2196F3]"
                  >
                    <Mail size={18} className="text-white/70 group-hover/item:text-[#2196F3] transition-colors" />
                    <span className="font-medium underline decoration-white/20 group-hover/item:decoration-[#2196F3]">
                      info@sahanagroup.lk
                    </span>
                  </a>

                  {/* 4. Operational Hours Block */}
                  <div className="flex items-start gap-4 text-white/90">
                    <Clock size={18} className="mt-1 text-white/70" />
                    <div className="text-sm font-light">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="my-7 h-px bg-white/15" />

               {/* SOCIAL MEDIA HOVER SYSTEM */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Follow us</span>
                  <div className="flex gap-3">
                    {[
                      { icon: BsFacebook, url: "https://www.facebook.com/SahanaIdamHorana" },
                      { icon: BsInstagram, url: "https://www.instagram.com/sahana_idam/" },
                      { icon: BsWhatsapp, url: "https://api.whatsapp.com/send/?phone=%2B94772647356&text&type=phone_number&app_absent=0" }, // FIX 1: Standardized key name to 'icon'
                      { icon: BsMailbox, url: "mailto:info@sahanagroup.lk" } 
                    ].map((item, index) => {
                      
                      {/* FIX 2: Assign the object property to a Capitalized variable tag */}
                      const IconComponent = item.icon;

                      return (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-[#2196F3] hover:text-white hover:scale-105"
                        >
                          {/* FIX 3: Render the actual component inside the link wrapper */}
                          <IconComponent size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>


              </div>
            </div>

          </div>

          {/* QUICK CONTACT CARDS */}
          <div className="animate-fade-up mt-6 rounded-[1.5rem] border border-gray-200 bg-white p-4 shadow-[0_20px_60px_rgba(13,43,77,0.08)]">
            <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <QuickContact
                icon={<MessageCircle size={22} />}
                title="WhatsApp"
                text="Chat with our team instantly on WhatsApp."
                link="Chat Now"
                color="text-emerald-500 bg-emerald-50"
              />
              <QuickContact
                icon={<Phone size={22} />}
                title="Call Us"
                text="Speak with our property experts directly."
                link="Call Now"
                color="text-[#2196F3] bg-blue-50"
              />
              <QuickContact
                icon={<Mail size={22} />}
                title="Email Us"
                text="Drop us an email anytime, we’ll reply soon."
                link="Send Email"
                color="text-[#E6008E] bg-pink-50"
              />
              <QuickContact
                icon={<MapPin size={22} />}
                title="Visit Office"
                text="Walk in anytime during office hours."
                link="Get Directions"
                color="text-orange-500 bg-orange-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* MAP SECTION                                                */}
      {/* ========================================================== */}
      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(13,43,77,0.08)]">
          <div className="relative min-h-[480px] bg-[#EAF6FB]">

            {/* 2. DYNAMIC IFRAME CONTAINER: Toggles the source path variable instantly on state change */}
            <iframe
              src={mapType === "3d" ? map3dSrc : mapNormalSrc}
              className="absolute inset-0 w-full h-full object-cover z-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* 3. FLOATING VIEPORT VIEW TOGGLE TRIGGER BUTTON CONTROLS */}
            {/* Placed in the top right corner so it balances out against your left address information card */}
            <div className="absolute right-6 top-6 z-20 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-1.5">
              {/* 3D Interactive Street View Switch Button */}
              <button
                type="button"
                onClick={() => setMapType("3d")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${mapType === "3d"
                  ? "bg-[#E6008E] text-white shadow-md shadow-pink-500/10"
                  : "text-[#0D2B4D] hover:bg-gray-100"
                  }`}
              >
                <Eye size={14} />
                3D View
              </button>

              {/* Standard Grid Route Map Switch Button */}
              <button
                type="button"
                onClick={() => setMapType("normal")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${mapType === "normal"
                  ? "bg-[#2196F3] text-white shadow-md shadow-blue-500/10"
                  : "text-[#0D2B4D] hover:bg-gray-100"
                  }`}
              >
                <Map size={14} />
                Map View
              </button>
            </div>

            {/* Floating High-End Glassmorphic Navigation Card */}
            <div className="relative  md:absolute  md:left-6 md:bottom-6 md:top-65  top-95 right-8 z-10 max-w-sm m-4 md:m-0 rounded-2xl md:bg-white/90 md:backdrop-blur-md p-6 md:shadow-xl md:border md:border-white/50 block">
              <h3 className="text-xl font-bold text-[#0D2B4D] hidden md:block">
                Our Head Office
              </h3>
              <p className="mt-2 text-sm : text-gray-500 leading-relaxed hidden md:block">
                Sahana Group, Horana, Sri Lanka. Open for walk-ins and consultation appointments.
              </p>

              <Link
                href="https://maps.app.goo.gl/BvSyJFNM2Umd9pTv6"
                target="_blank"
                rel="noopener noreferrer"
                className="md:mt-5 inline-flex  b items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-[#0D2B4D] transition hover:border-[#2196F3] hover:text-[#2196F3]"
              >
                Get Directions
                <ExternalLink size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================== */}
      {/* FAQ SECTION                                                */}
      {/* ========================================================== */}
      <section className="bg-white px-6 pb-20 pt-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="overflow-hidden rounded-[2rem] lg:col-span-5">
            <img
              src={faqImage.src}
              alt="Sahana Group property support"
              className="h-full min-h-[330px] w-full object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(13,43,77,0.08)] lg:col-span-7">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-[#0D2B4D]">
                  Quick Answers
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Common questions from property seekers.
                </p>
              </div>

              <div className="hidden rounded-2xl bg-gray-50 px-5 py-4 md:block">
                <p className="text-xs text-gray-500">We respond within</p>
                <p className="font-bold text-[#0D2B4D]">24 hours</p>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {FAQ_DATA.map((faq) => {
                const isOpen = activeFaq === faq.id;

                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between py-5 text-left font-semibold text-[#0D2B4D]"
                    >
                      <span>{faq.question}</span>
                      <Plus
                        size={20}
                        className={`transition ${isOpen ? "rotate-45 text-[#E6008E]" : "text-gray-500"
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <p className="pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickContact({
  icon,
  title,
  text,
  link,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
  color: string;
}) {
  return (
    <div className="flex gap-4 p-6">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${color}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#0D2B4D]">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-500">{text}</p>
        <Link
          href="#"
          className="mt-3 inline-flex text-xs font-bold text-[#2196F3]"
        >
          {link} →
        </Link>
      </div>
    </div>
  );
}