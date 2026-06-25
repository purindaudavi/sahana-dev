"use client";

import React, { useState, useEffect } from "react";

import headerBg from "../../assets/aboutbg.png";

import { createClient } from "@/app/utils/supabase/client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BriefcaseBusiness,
    Building2,
    Download,
    Droplets,
    FileCheck2,
    Leaf,
    MapPin,
    Play,
    Share2,
    ShieldCheck,
    Zap,
    Route,
    Waves,
} from "lucide-react";

import { LAND_PROJECTS } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

interface PropertyPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
    const resolvedParams = React.use(params);
    const [property, setProperty] = useState<any>();

    const fetchdata = async () => {
        const supabase = createClient();
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("id", parseInt(resolvedParams.id, 10))
            .single();

        if (error) {
            console.error(error);
            return;
        }

        setProperty(data);
        if (data) {
            console.log(data);
            setProperty(data);
        } else {
            return (
                <main className="flex min-h-screen flex-col items-center justify-center bg-[#F1F4FA] pt-32 text-[#0D2B4D]">
                    <h2 className="text-2xl font-bold">Property Not Found</h2>
                    <p className="mt-2 text-gray-500">
                        The land plot specification ID does not exist.
                    </p>
                    <Link
                        href="/properties"
                        className="mt-6 rounded-xl bg-[#2196F3] px-6 py-3 text-sm font-bold text-white"
                    >
                        ← Back to Property List
                    </Link>
                </main>
            );
        }
    }

    // const property = LAND_PROJECTS.find(
    //     (item) => item.id === parseInt(resolvedParams.id, 10)
    // );

    // if (!property) {

    // }

    const galleryImages = ["gg"];
    //     property.images && property.images.length > 0
    //         ? property.images
    //         : [property.img];

    const otherProjects = LAND_PROJECTS.filter((item) => item.id !== parseInt(resolvedParams.id)).slice(
        0,
        4
    );

    const amenities = []
    //     property.amenities && property.amenities.length > 0
    //         ? property.amenities
    //         : [
    //             {
    //                 title: "Wide Access Roads",
    //                 description: "20ft internal carpeted roads",
    //                 icon: "road",
    //             },
    //             {
    //                 title: "Electricity",
    //                 description: "Reliable electricity supply",
    //                 icon: "zap",
    //             },
    //             {
    //                 title: "Water Supply",
    //                 description: "Piped water supply system",
    //                 icon: "droplets",
    //             },
    //             {
    //                 title: "Drainage",
    //                 description: "Well-planned drainage system",
    //                 icon: "drainage",
    //             },
    //             {
    //                 title: "Clear Deed",
    //                 description: "Clear titles with individual deeds",
    //                 icon: "fileCheck",
    //             },
    //             {
    //                 title: "Peaceful Environment",
    //                 description: "Green and calm surroundings",
    //                 icon: "leaf",
    //             },
    //         ];


    useEffect(() => {
        fetchdata();
    }, [resolvedParams.id])

    const overviewPoints: string[] = Array.isArray(property?.overview_points)
  ? property.overview_points
  : [];

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F8FAFC] pb-20 text-[#0D2B4D]">


            {/* Header Background Image */}
            <section className="absolute left-0 top-0 z-0 h-[230px] w-full overflow-hidden">
                <img
                    src={headerBg.src}
                    alt="Sahana Group header background"
                    className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
            </section>


            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32">
                {/* Back Link */}
                <Link
                    href="/properties"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#d2e6f7] transition hover:text-[#0D2B4D]"
                >
                    <ArrowLeft size={16} />
                    Back to Listings
                </Link>

                {/* Top Gallery + Details */}
                <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                    <div className="lg:col-span-8">
                        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-[0_18px_55px_rgba(13,43,77,0.08)]">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-gray-100">
                                <Swiper
                                    modules={[Navigation, Autoplay, Thumbs, FreeMode]}
                                    loop={true}
                                    speed={550}
                                    autoplay={{
                                        delay: 4200,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    navigation={{
                                        nextEl: ".gallery-swiper-next",
                                        prevEl: ".gallery-swiper-prev",
                                    }}
                                    thumbs={{
                                        swiper:
                                            thumbsSwiper && !thumbsSwiper.destroyed
                                                ? thumbsSwiper
                                                : null,
                                    }}
                                    className="h-full w-full"
                                >
                                    {property?.images?.map((imgUrl: string, index: number) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={imgUrl}
                                                alt={`${property.title} view ${index + 1}`}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <span
                                    className={`absolute left-4 top-4 z-20 rounded-full px-4 py-2 text-xs font-black text-white shadow-md ${property?.type_color || "bg-[#E6008E]"
                                        }`}
                                >
                                    {property?.type || "Residential Land"}
                                </span>

                                <button className="gallery-swiper-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-[#0D2B4D] shadow-md backdrop-blur transition hover:bg-[#2196F3] hover:text-white opacity-0">
                                    ←
                                </button>

                                <button className="gallery-swiper-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-[#0D2B4D] shadow-md backdrop-blur transition hover:bg-[#2196F3] hover:text-white opacity-0">
                                    →
                                </button>
                            </div>

                            <div className="mt-4">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    modules={[FreeMode, Thumbs]}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    spaceBetween={14}
                                    slidesPerView={4}
                                    breakpoints={{
                                        0: { slidesPerView: 2.4 },
                                        640: { slidesPerView: 3.4 },
                                        1024: { slidesPerView: 4 },
                                    }}
                                    className="h-24 w-full"
                                >
                                    {property?.images?.map((imgUrl: string, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div className="h-full cursor-pointer overflow-hidden rounded-xl border border-gray-200 opacity-70 transition hover:opacity-100">
                                                <img
                                                    src={imgUrl}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(13,43,77,0.08)]">
                            <p className="text-xs font-black uppercase tracking-widest text-[#2196F3]">
                                Premium Land Project
                            </p>

                            <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#0D2B4D]">
                                {property?.project_name || "Land for sale"}
                            </h1>

                            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[#0D2B4D]/60">
                                <MapPin size={16} className="text-[#2196F3]" />
                                {property?.location || "gg"}
                            </div>

                            <div className="my-6 h-px bg-gray-200" />

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                        Price
                                    </p>
                                    <p className="mt-1 text-2xl font-black text-[#E6008E]">
                                        {property?.price || "0"}
                                    </p>
                                    <p className="text-xs text-gray-500">Per Perch</p>
                                </div>

                                <div className="border-l border-gray-200 pl-5">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                        Total Acres
                                    </p>
                                    <p className="mt-1 text-2xl font-black">
                                        {property?.acres || "25"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                        Available Plots
                                    </p>
                                    <p className="mt-1 text-2xl font-black">
                                        {property?.available_plots || "120+"}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 space-y-3">
                                <Link
                                    href="/contact"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0D2B4D] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#E6008E]"
                                >
                                    Enquire Now
                                    <ArrowRight size={17} />
                                </Link>



                                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F1F4FA] px-6 py-4 text-sm font-bold text-[#0D2B4D] transition hover:bg-gray-200">
                                    Share Property
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Property Overview */}
                <section className="mt-8 rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2196F3]/10 text-[#2196F3]">
                            <BriefcaseBusiness size={21} />
                        </div>

                        <h2 className="text-xl font-black">Property Overview</h2>
                    </div>

                    <div className="mb-5 h-[3px] w-12 rounded-full bg-[#E6008E]" />

                    <div className="max-w-5xl space-y-5">
                        <p className="text-sm leading-relaxed text-[#0D2B4D]/70">
                            {property?.desc || "gg"}
                        </p>

                        {overviewPoints.length > 0 && (
                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {overviewPoints.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#0D2B4D]/75"
                                    >
                                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E6008E] text-[10px] font-black text-white">
                                            ✓
                                        </span>

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>

                {/* Infrastructure */}
                <section className="mt-8 rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <h2 className="text-xl font-black">Infrastructure & Amenities</h2>
                    <div className="mt-3 h-[3px] w-12 rounded-full bg-[#E6008E]" />

                    <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {property?.amenities.map((amenity: { title: string; description: string; icon: string }, index: number) => (
                            <AmenityCard
                                key={index}
                                title={amenity.title}
                                description={amenity.description}
                                icon={amenity.icon}
                            />
                        ))}
                    </div>
                </section>

                {/* Location + Plan */}
                <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* LOCATION CARD */}
                    <div className="rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm lg:col-span-7">
                        <h2 className="text-xl font-black">Location</h2>
                        <div className="mt-3 h-[3px] w-12 rounded-full bg-[#E6008E]" />

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
                            {/* Bigger Map Area */}
                            <div className="overflow-hidden rounded-2xl bg-[#F1F4FA] min-h-[380px]">
                                <iframe
                                    src={property?.mapembed_url}
                                    width="200%"
                                    height="380"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="h-full w-full"
                                />
                            </div>

                            {/* Smaller Nearby Landmarks Area */}
                            <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5">
                                <h3 className="mb-4 text-sm font-black">Nearby Landmarks</h3>

                                {/* DYNAMIC MATRIX LOOP: Maps out whatever landmarks belong to this ID page */}
                                {property?.landmarks?.map((landmark: { name: string; distance: string }, index: number) => (
                                    <LocationRow
                                        key={index}
                                        name={landmark.name}
                                        distance={landmark.distance}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* LAND PLAN CARD */}
                    <div className="rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm lg:col-span-5">
                        <div className="lg:col-span-6 w-full transform-gpu flex flex-row items-center gap-6 lg:justify-self-end"    >
                            <h2 className="text-xl font-black">Land Plan (Master Plan)</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2">
                                <h2 className="text-sm font-black text-center">{property?.perches_P || "120+"} Perches</h2> 
                            </div>
                        </div>
                        <div className="mt-3 h-[3px] w-12 rounded-full bg-[#E6008E]" />

                        <div className="mt-6 overflow-hidden rounded-2xl bg-[#F1F4FA]">
                            <img
                                src={property?.plan_image || galleryImages[0]}
                                alt={`${property?.title} master plan`}
                                className="h-[380px] w-full object-cover"
                            />
                        </div>

                        {/* <div className="lg:col-span-6 w-full transform-gpu flex flex-row items-center gap-6 lg:justify-self-end"> */}
                        <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#2196F3] px-5 py-3 text-sm font-bold text-[#2196F3] transition hover:bg-[#2196F3] hover:text-white">
                            Download Plan
                            <Download size={16} />
                        </button>


                    </div>
                </section>
                {/* ========================================================== */}
                {/* Video                                                      */}
                {/* ========================================================== */}
                <section className="mt-8 grid grid-cols-1 gap-8 rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <h2 className="text-xl font-black">Project Video</h2>
                        <div className="mt-3 h-[3px] w-12 rounded-full bg-[#E6008E]" />

                        <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl bg-[#0D2B4D]">

                            {/* DYNAMIC VIEW CONDITIONAL SWITCHING INTERACTION ENGINE */}
                            {!isPlayingVideo ? (
                                <>
                                    {/* Display static placeholder thumbnail image layout by default */}
                                    <img
                                        src={property?.video_Image}
                                        alt={`${property?.title} project video preview thumbnail`}
                                        className="h-full w-full object-cover opacity-80"
                                    />

                                    {/* Clicking this button sets isPlayingVideo state toggle to true */}
                                    <button
                                        type="button"
                                        onClick={() => setIsPlayingVideo(true)}
                                        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0D2B4D] shadow-xl transition hover:scale-105 cursor-pointer z-10"
                                    >
                                        <Play size={32} fill="currentColor" />
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />

                                </>
                            ) : (
                                /* DYNAMIC NATIVE HTML5 VIDEO CONTROLLER PLAYER */
                                <video
                                    src={property?.video_url}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain bg-black"
                                />
                            )}

                        </div>
                    </div>

                    <div className="flex flex-col justify-center lg:col-span-5">
                        <p className="text-xs font-black uppercase tracking-widest text-[#29D6ED]">
                            Explore {property?.project_name}
                        </p>

                        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">
                            See the Potential. Feel the Difference.
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-[#0D2B4D]/65">
                            Watch our project video to experience the surrounding
                            neighbourhood, infrastructure, access roads, and the lifestyle this
                            land development offers.
                        </p>

                        {/* Anchored direct attachment download capability path trigger */}
                        <a
                            href={property?.video_url}
                            download={`${property?.project_name}-Project-Video.mp4`}
                            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#2196F3] px-6 py-3 text-sm font-bold text-[#2196F3] transition hover:bg-[#2196F3] hover:text-white"
                        >
                            Download Video
                            <Download size={16} />
                        </a>
                    </div>
                </section>

                {/* Other Premium Land Projects */}
                <section className="mt-8 rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-sm">
                    {/* Header Row */}
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-[#2196F3]">
                                More Land Opportunities
                            </p>

                            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0D2B4D]">
                                Other Premium Land Projects
                            </h2>
                        </div>

                        <Link
                            href="/properties"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2B4D] transition-colors duration-200 hover:text-[#2196F3]"
                        >
                            View All Projects
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Slider */}
                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation, FreeMode, Autoplay]}
                            loop={otherProjects.length > 3}
                            speed={600}
                            touchRatio={1.2}
                            watchSlidesProgress={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            freeMode={{
                                enabled: true,
                                sticky: true,
                                momentumRatio: 0.8,
                                momentumVelocityRatio: 0.6,
                            }}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".other-prop-swiper-next",
                                prevEl: ".other-prop-swiper-prev",
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                            className="w-full !pb-16"
                        >
                            {otherProjects.map((land) => {
                                const landImage =
                                    land.images && land.images.length > 0 ? land.images[0] : land.img;

                                return (
                                    <SwiperSlide key={land.id} className="h-auto">
                                        <Link
                                            href={`/properties/${land.id}`}
                                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            {/* Image */}
                                            <div className="relative h-64 w-full overflow-hidden bg-[#0D2B4D]">
                                                <img
                                                    src={landImage}
                                                    alt={land.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

                                                <span
                                                    className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-black text-white shadow-md ${land.typeColor || "bg-[#E6008E]"
                                                        }`}
                                                >
                                                    {land.type}
                                                </span>

                                                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-[#0D2B4D]/90 px-4 py-2.5 text-right text-white shadow-lg backdrop-blur-md">
                                                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200/80">
                                                        Starting From
                                                    </p>
                                                    <p className="text-lg font-black tracking-wide">
                                                        {land.price}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-1 flex-col justify-between p-6">
                                                <div>
                                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2196F3]">
                                                        <span>{land.location}</span>
                                                    </div>

                                                    <h3 className="mt-4 min-h-[3.5rem] text-xl font-black leading-snug tracking-tight text-[#0D2B4D] line-clamp-2">
                                                        {land.title}
                                                    </h3>

                                                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
                                                        {land.desc}
                                                    </p>

                                                    <div className="mt-5 flex flex-wrap gap-2">
                                                        <span className="rounded-xl bg-[#F1F4FA] px-3 py-1.5 text-xs font-bold text-[#0D2B4D]/80">
                                                            {land.perch}
                                                        </span>

                                                        <span className="rounded-xl bg-[#F1F4FA] px-3 py-1.5 text-xs font-bold text-[#0D2B4D]/80">
                                                            {land.acres || "25"} Acres
                                                        </span>

                                                        <span className="rounded-xl bg-[#F1F4FA] px-3 py-1.5 text-xs font-bold text-[#0D2B4D]/80">
                                                            {land.availablePlots || "120+"} Plots
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mt-6 border-t border-gray-100 pt-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-black text-[#0D2B4D] transition group-hover:text-[#2196F3]">
                                                            Explore Land Plot
                                                        </span>

                                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-[#0D2B4D] transition group-hover:border-[#2196F3] group-hover:bg-[#2196F3] group-hover:text-white">
                                                            →
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        {/* Arrows */}
                        <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
                            <button className="other-prop-swiper-prev flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D2B4D] shadow-sm transition hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white active:scale-95">
                                ←
                            </button>

                            <button className="other-prop-swiper-next flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D2B4D] shadow-sm transition hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white active:scale-95">
                                →
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}



function AmenityCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    const icons: Record<string, React.ReactNode> = {
        zap: <Zap size={32} />,
        droplets: <Droplets size={32} />,
        road: <Route size={32} />,
        fileCheck: <FileCheck2 size={32} />,
        drainage: <Waves size={32} />,
        leaf: <Leaf size={32} />,
        mapPin: <MapPin size={32} />,
        building: <Building2 size={32} />,
        shield: <ShieldCheck size={32} />,
        default: <BriefcaseBusiness size={32} />,
    };

    return (
        <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:shadow-md">
            <div className="text-[#2196F3]">
                {icons[icon] || icons.default}
            </div>

            <h3 className="mt-4 text-sm font-black text-[#0D2B4D]">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {description}
            </p>
        </div>
    );
}


function LocationRow({ name, distance }: { name: string; distance: string }) {
    return (
        <div className="flex items-center justify-between border-b border-gray-100 py-3 text-sm">
            <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2196F3]/10 text-[#2196F3]">
                    <MapPin size={13} />
                </span>
                <span className="font-medium text-[#0D2B4D]/75">{name}</span>
            </div>

            <span className="font-bold text-[#0D2B4D]">{distance}</span>
        </div>
    );
}