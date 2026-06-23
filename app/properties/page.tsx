"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect ,Suspense } from "react";
import Link from "next/link";
import { Search, RotateCcw, SlidersHorizontal, MapPin } from "lucide-react";
import { LAND_PROJECTS } from "./data";


import propertyHeroBg from "../assets/property-hero.png";

import { createClient } from "@/app/utils/supabase/client";

// Replace these with your real land images later
import landBg from "../assets/property-hero.png";
import CTASection from "../components/CTASection";
import callusbg from "../assets//call-us.png";
import { error } from "console";
import { useSearchParams } from "next/navigation";



 function PropertyListContent() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [priceValue, setPriceValue] = useState(0);
  const [landType, setLandType] = useState("");
  const [property, setProperty] = useState<any[]>([]);
  const [district, setDistrict] = useState("");
  const [max, setMax] = useState(1500000);
  const [blockSize, setBlockSize] = useState("");
  const [sortBy, setSortBY] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchParams = useSearchParams();
  const [paramsReady, setParamsReady] = useState(false);


  const fetchFromDB = async () => {
    const supabase = createClient();
    const { data, error, count } = await supabase
      .from("projects")
      .select("*").order("price", { ascending: false });

    if (data) {
      setProperty(data)

      // data.forEach(element => {
      //   priceValue < element?.price && setPriceValue(element.price);
      // });

      if (data.length > 0) {
        setMax(data[0].price);
      }

    } else if (error) {
      console.log(data);
    }


  }


  const fetchfromDB = async () => {
    const supabase = createClient();
    let query = supabase.from("projects").select();




    if (searchTerm.trim() !== "") {
      query = query.ilike(
        "project_name",
        `%${searchTerm.trim()}%`
      );
    }



    if (priceValue === 1000001) {
      query = query.gt("price", 1000000);
    } else if (priceValue > 0) {
      query = query.lte("price", priceValue);
    }

    if (landType.trim() != "") {
      query = query.ilike('type', `%${landType}%`);
    }

    if (district.trim() !== "")
      query = query.ilike("district", `${district}`);



    if (blockSize === "below10") {
      query = query.lt("perch", 10);
    }

    if (blockSize === "10to20") {
      query = query.gte("perch", 10).lte("perch", 20);
    }

    if (blockSize === "above20") {
      query = query.gt("perch", 20);
    }

    if (sortBy === 1) {
      query = query.order("id", { ascending: false });
    }

    if (sortBy === 2) {
      query = query.order("price", { ascending: true });
    }

    if (sortBy === 3) {
      query = query.order("price", { ascending: false });
    }

    const { data, error } = await query;
    if (data) {
      setProperty(data);
      data.forEach(element => {
        max < element?.price && setMax(element.price);
      });




    } else if (error) {
      console.log(error);
    }




  }

  const resetFilters = () => {
    setLandType("");
    setPriceValue(0)
    setActiveTab("All Projects")
    setDistrict("")
    setBlockSize("")
    setSortBY(1)
  }


  //   useEffect(() => {
  //   const type = searchParams.get("type");
  //   const districtParam = searchParams.get("district");
  //   const blockSizeParam = searchParams.get("blockSize");
  //   const priceParam = searchParams.get("price");

  //   if (type) setLandType(type);
  //   if (districtParam) setDistrict(districtParam);
  //   if (blockSizeParam) setBlockSize(blockSizeParam);

  //   if (priceParam) {
  //     if (priceParam === "500000") {
  //       setPriceValue(500000);
  //     } else if (priceParam === "1000000") {
  //       setPriceValue(1000000);
  //     }
  //   }
  // }, [searchParams]);



  useEffect(() => {
    const typeParam = searchParams.get("type") || "";
    const districtParam = searchParams.get("district") || "";
    const blockSizeParam = searchParams.get("blockSize") || "";
    const priceParam = searchParams.get("price") || "";

    setLandType(typeParam);
    setDistrict(districtParam);
    setBlockSize(blockSizeParam);

    if (priceParam === "500000") {
      setPriceValue(500000);
    } else if (priceParam === "1000000") {
      setPriceValue(1000000);
    } else if (priceParam === "above1000000") {
      setPriceValue(1000001);
    } else {
      setPriceValue(0);
    }

    if (typeParam === "") setActiveTab("All Projects");
    else if (typeParam === "Residential") setActiveTab("Residential Land");
    else if (typeParam === "Commercial") setActiveTab("Commercial Land");
    else if (typeParam === "Agricultural") setActiveTab("Agricultural Land");
    setParamsReady(true);
  }, [searchParams]);


  useEffect(() => {
  if (!paramsReady) return;

  const hasAnyFilter =
    priceValue > 0 ||
    landType !== "" ||
    district !== "" ||
    blockSize !== "" ||
    searchTerm !== "";

  if (hasAnyFilter) {
    fetchfromDB();
  } else {
    fetchFromDB();
  }
    }, [paramsReady, priceValue, landType, district, blockSize, sortBy, searchTerm]);


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
              {["Residential", "Commercial", "Agricultural"].map(
                (item) => (
                  <label key={item} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="landType"
                      checked={landType === item}

                      onChange={e => { setLandType(item); console.log(landType) }}

                      className="h-4 w-4 accent-[#E6008E]"
                    />
                    {item} Land
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



            {/* Price Scroll Bar */}
            <div className="pt-2">
              <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-[#0D2B4D]/60">
                <span>LKR 0</span>
                <span>LKR {priceValue}</span>
                <span>LKR 1,000K+</span>
              </div>

              <input
                type="range"
                min="0"
                max={max.toString()}
                step="50000"
                value={priceValue}
                onChange={(e) => { setPriceValue(Number(e.target.value)); console.log(priceValue) }}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#E6008E]"
              />

              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-[#0D2B4D]/50">
                <span>0</span>

                <span>LKR {max}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">⌖</span>
              District
            </h3>

            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#E6008E]"
            >
              <option value="">All Districts</option>
              <option value="Colombo">Colombo</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Kandy">Kandy</option>
              <option value="Matale">Matale</option>
              <option value="NuwaraEliya">Nuwara Eliya</option>
              <option value="Galle">Galle</option>
              <option value="Matara">Matara</option>
              <option value="Hambantota">Hambantota</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Mannar">Mannar</option>
              <option value="Vavuniya">Vavuniya</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Trincomalee">Trincomalee</option>
              <option value="Batticaloa">Batticaloa</option>
              <option value="Ampara">Ampara</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Badulla">Badulla</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Kegalle">Kegalle</option>
            </select>
          </div>




          {/* Block size */}


          <div className="space-y-4 border-gray-100 lg:border-r lg:pr-6">
            <h3 className="flex items-center gap-3 text-lg font-bold text-[#0D2B4D]">
              <span className="text-[#E6008E]">▦</span>
              Block Size
            </h3>

            <div className="space-y-3 text-sm text-[#0D2B4D]/70">
              {[
                { label: "Below 10 Block Size", value: "below10" },
                { label: "10 - 20 Block Size", value: "10to20" },
                { label: "Above 20 Block Size", value: "above20" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="radio"
                    name="blockSize"
                    checked={blockSize === item.value}
                    onChange={() => setBlockSize(item.value)}
                    className="h-4 w-4 accent-[#E6008E]"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">

            {!showSearch ? (
              <button
                onClick={() => setShowSearch(true)}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0D2B4D] px-6 py-4 text-sm font-bold text-white"
              >
                <Search size={18} />
                Search Lands
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Search land by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-4 py-3"
                />

                <button
                  onClick={fetchfromDB}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#0D2B4D] px-6 py-4 text-sm font-bold text-white"
                >
                  Search
                </button>



              </>
            )}

            <button

              onClick={resetFilters}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-[#0D2B4D] transition hover:border-[#2196F3] hover:text-[#2196F3]">
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
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm shadow-sm">
          <span className="text-gray-500">Sort by:</span>
          <select
            onChange={e => { setSortBY(parseInt(e.target.value)) }}
            className="bg-transparent font-bold text-[#0D2B4D] outline-none">
            <option value={1}>Newest First</option>
            <option value={2}>Price: Low to High</option>
            <option value={3} >Price: High to Low</option>
          </select>
        </div>
      </section>

      {/* ========================================================== */}
      {/* PROPERTY GRID                                              */}
      {/* ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {property.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(13,43,77,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(13,43,77,0.12)]"
            > <Link href={`/properties/${property.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={property?.images[0]}
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
                    {property.project_name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {property.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-black text-[#E6008E]">
                      {property.price}{" LKR"}
                      <span className="text-xs text-gray-400">/ Perch</span>
                    </p>

                    <p className="text-sm font-bold text-[#0D2B4D]">
                      {property.perch} perches
                    </p>
                  </div>

                  <div

                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-bold text-[#0D2B4D] transition hover:border-[#E6008E] hover:bg-[#E6008E] hover:text-white"
                  >
                    View Details →
                  </div>





                </div>
              </Link>
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

export default function PropertyListPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen w-full bg-[#F8FAFC] text-[#0D2B4D] flex items-center justify-center">
          <p className="text-sm font-bold">Loading properties...</p>
        </main>
      }
    >
      <PropertyListContent />
    </Suspense>
  );
}