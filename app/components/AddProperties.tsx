"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { Zap, Droplets, Milestone, FileCheck, ShieldAlert, MapPin, Loader2, Plus, Trash2, Video } from "lucide-react";

interface amenityType {
  icon: string;
  title: string;
  description: string;
}

interface landmarksType {
  name: string;
  distance: string;
}

const amenitiesList: amenityType[] = [
  { icon: "zap", title: "Three-Phase Electricity", description: "Reliable electricity supply to every plot" },
  { icon: "droplets", title: "Tap Water Line Connection", description: "Piped water supply system" },
  { icon: "road", title: "20ft Wide Asphalt Roadways", description: "20ft internal carpeted roads" },
  { icon: "fileCheck", title: "Clear Freehold Deeds", description: "Clear titles with individual deeds" },
  { icon: "drainage", title: "Concrete Drainage System", description: "Well-planned drainage system" },
  { icon: "mapPin", title: "Close to Gampaha Highway Interchange", description: "Quick access to major highways" }
];

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "zap": return <Zap className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    case "droplets": return <Droplets className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    case "road": return <Milestone className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    case "fileCheck": return <FileCheck className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    case "drainage": return <ShieldAlert className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    case "mapPin": return <MapPin className="w-5 h-5 text-[var(--color-brand-blue)]" />;
    default: return <MapPin className="w-5 h-5 text-[var(--color-brand-blue)]" />;
  }
};

export default function AddProperties({ propertyId }: { propertyId: number | null }) {
  const supabase = createClient();
  const isEditMode = propertyId !== null;

  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // --- Form State ---
  const [formData, setFormData] = useState({
    project_name: "",
    video_url: "", // Keeps fallback compatibility for embedded strings
    video_Image : "",
    desc: "",
    location: "",
    type: "",
    type_color: "#2196F3",
    price: 0,
    acres: "",
    available_plots: "",
    mapembed_url: "",
    blocksize: "",
    district: ""
  });

  const [selectedAmenities, setSelectedAmenities] = useState<amenityType[]>([]);
  const [landmarks, setLandmarks] = useState<landmarksType[]>([{ name: "", distance: "" }]);

  // --- Existing Storage Asset URLs (For Edit Retention) ---
  const [existingUrls, setExistingUrls] = useState({
    main_img: "",
    video_Image: "",
    plan_image: "",
    images: [] as string[]
  });
  // --- Staged File States ---
  const [mainImgFile, setMainImgFile] = useState<File | null>(null);
  const [videoImgFile, setVideoImgFile] = useState<File | null>(null);
  const [planImgFile, setPlanImgFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null); 
-
  useEffect(() => {
    if (!isEditMode) return;

    const fetchPropertyData = async () => {
      setFetchingData(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from("projects")
          .select("*")
          .eq("id", propertyId)
          .single();

        if (fetchError) throw fetchError;

        if (data) {
          setFormData({
            project_name: data.project_name || "",
            video_url: data.video_url || "",
            desc: data.desc || "",
            location: data.location || "",
            type: data.type || "",
            type_color: data.type_color || "#2196F3",
            price: data.price || 0,
            acres: data.acres || "",
            available_plots: data.available_plots || "",
            mapembed_url: data.mapembed_url || "",
            blocksize: data.blocksize || "",
            district: data.district || "",
            video_Image : data.video_Image || "",
          });

          setSelectedAmenities(data.amenities || []);
          setLandmarks(data.landmarks && data.landmarks.length > 0 ? data.landmarks : [{ name: "", distance: "" }]);
          setExistingUrls({
            main_img: data.main_img || "",
            video_Image: data.video_image || "",
            plan_image: data.plan_image || "",
            images: data.images || []
          });
        }
      } catch (err: any) {
        setError(`Failed to retrieve property information: ${err.message}`);
      } finally {
        setFetchingData(false);
      }
    };

    fetchPropertyData();
  }, [propertyId, isEditMode]);

  // --- Handlers ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "price" ? Number(value) : value }));
  };

  const handleVideoFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // 10 MB limit verification validation check (10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        setError("Selected video clip exceeds our 10 MB limit. Please compress or optimize your file.");
        setVideoFile(null);
        e.target.value = ""; // Resets field value
        return;
      }
      setError(null);
      setVideoFile(file);
    }
  };

  const handleAmenityChange = (amenity: amenityType) => {
    setSelectedAmenities((prev) =>
      prev.some((a) => a.title === amenity.title)
        ? prev.filter((a) => a.title !== amenity.title)
        : [...prev, amenity]
    );
  };

  const handleLandmarkChange = (index: number, field: keyof landmarksType, value: string) => {
    const updated = [...landmarks];
    updated[index][field] = value;
    setLandmarks(updated);
  };

  const addLandmarkRow = () => setLandmarks([...landmarks, { name: "", distance: "" }]);
  const removeLandmarkRow = (index: number) => setLandmarks(landmarks.filter((_, i) => i !== index));

  // --- Upload Storage Helper ---
  const uploadFile = async (file: File, folder: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from("projects")
      .upload(fileName, file);

    if (error) throw new Error(`Upload failed for ${file.name}: ${error.message}`);
    
    const { data: publicUrlData } = supabase.storage.from("projects").getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  };

  // --- Form Submission ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
    
      if (!isEditMode && (!mainImgFile || !videoImgFile || !planImgFile || galleryFiles.length === 0)) {
        throw new Error("Please upload all mandatory image elements (Cover, Video Preview, Blueprint Plan, and Gallery assets).");
      }

      const main_img_url = mainImgFile ? await uploadFile(mainImgFile, "main") : existingUrls.main_img;
      const video_image_url = videoImgFile ? await uploadFile(videoImgFile, "video_covers") : existingUrls.video_Image;
      const plan_image_url = planImgFile ? await uploadFile(planImgFile, "plans") : existingUrls.plan_image;

      const final_video_url = videoFile ? await uploadFile(videoFile, "videos") : formData.video_url;

      let gallery_urls: string[] = existingUrls.images;
      if (galleryFiles.length > 0) {
        const freshUrls: string[] = [];
        for (const file of galleryFiles) {
          const url = await uploadFile(file, "gallery");
          freshUrls.push(url);
        }
        gallery_urls = freshUrls;
      }

      const finalLandmarks = landmarks.filter(l => l.name.trim() !== "" && l.distance.trim() !== "");

 
      const payload = {
        ...formData,
        video_url: final_video_url,
        main_img: main_img_url,
        video_image: video_image_url,
        plan_image: plan_image_url,
        images: gallery_urls,
        amenities: selectedAmenities,
        landmarks: finalLandmarks
      };

      // 3. Conditional database transaction execution step
      if (isEditMode) {
        const { error: updateError } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", propertyId);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from("projects")
          .insert([payload]);

        if (insertError) throw insertError;
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected storage or database sync transaction errored out.");
    } finally {
      setLoading(false);
    }
  };

  if (fetchingData) {
    return (
      <div className="flex flex-col items-center justify-center my-20 space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-[var(--color-brand-blue)]" />
        <p className="text-sm font-semibold text-gray-500">Fetching property record fields...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[var(--color-brand-gray)] rounded-2xl shadow-xl border border-gray-200 text-[var(--color-brand-navy)]">
      <h2 className="text-3xl font-extrabold mb-2 text-[var(--color-brand-navy)]">
        {isEditMode ? "Update Existing Property" : "Add New Property"}
      </h2>
      <p className="text-sm text-gray-500 mb-8">
        {isEditMode ? `Modifying project records for ID: ${propertyId}` : "Fill in the fields below to list a new project on your platform."}
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-[var(--color-brand-magenta)] text-[var(--color-brand-magenta)] font-medium rounded-r-md text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 font-medium rounded-r-md text-sm">
          Property records {isEditMode ? "updated" : "saved"} successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Project Name *</label>
            <input required type="text" name="project_name" value={formData.project_name} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">District *</label>
            <input required type="text" name="district" value={formData.district} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
        </div>

        {/* Location & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Location Address *</label>
            <input required type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Google Maps Embed URL *</label>
            <input required type="text" name="mapembed_url" value={formData.mapembed_url} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
        </div>

        {/* Pricing & Sizing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Price (LKR) *</label>
            <input required type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Total Acres *</label>
            <input required type="text" name="acres" value={formData.acres} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Available Plots *</label>
            <input required type="text" name="available_plots" value={formData.available_plots} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Block Size *</label>
            <input required type="text" name="blocksize" value={formData.blocksize} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
        </div>

        {/* Badges and Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Project Type Tag *</label>
            <input required type="text" name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Tag Theme Color</label>
            <input type="color" name="type_color" value={formData.type_color} onChange={handleInputChange} className="w-full h-11 p-1 bg-white border rounded-lg cursor-pointer border-gray-300" />
          </div>
        </div>

        {/* Video Management Section (Direct File Upload & String URL Fallback) */}
        <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand-navy)]">
            <Video className="w-4 h-4 text-blue-600" />
            <h3>Project Video Content</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Upload Video (MP4 / WebM — Max 10MB)</label>
              <input 
                type="file" 
                accept="video/mp4,video/webm" 
                onChange={handleVideoFileChange} 
                className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--color-brand-gray)] file:text-[var(--color-brand-navy)]" 
              />
              {isEditMode && formData.video_url && !videoFile && (
                <p className="text-[10px] text-gray-400 mt-1 truncate">Active Path: {formData.video_url}</p>
              )}
            </div>
            <div>
              <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Or External Embed Video URL</label>
              <input 
                type="text" 
                name="video_url" 
                disabled={videoFile !== null}
                placeholder={videoFile ? "Using uploaded storage file..." : "YouTube or Vimeo address"}
                value={videoFile ? "" : formData.video_url} 
                onChange={handleInputChange} 
                className="w-full px-3 py-1.5 text-sm rounded border bg-white focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)] border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed" 
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold mb-2">Project Description *</label>
          <textarea required name="desc" rows={4} value={formData.desc} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] border-gray-300"></textarea>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* --- Image File Storage Configuration --- */}
        <div>
          <h3 className="text-lg font-bold mb-1 tracking-wide">Property Media Storage</h3>
          {isEditMode && <p className="text-xs text-[var(--color-brand-blue)] mb-4 font-medium">Leave files empty to maintain previously uploaded cloud graphics.</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Main Cover Image {!isEditMode && "*"}</label>
              <input required={!isEditMode} type="file" accept="image/*" onChange={(e) => setMainImgFile(e.target.files?.[0] || null)} className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--color-brand-gray)] file:text-[var(--color-brand-navy)]" />
              {isEditMode && existingUrls.main_img && <p className="text-[10px] text-gray-400 mt-1 truncate">Current: {existingUrls.main_img}</p>}
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Video Cover Image {!isEditMode && "*"}</label>
              <input required={!isEditMode} type="file" accept="image/*" onChange={(e) => setVideoImgFile(e.target.files?.[0] || null)} className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--color-brand-gray)] file:text-[var(--color-brand-navy)]" />
              {isEditMode && existingUrls.video_Image && <p className="text-[10px] text-gray-400 mt-1 truncate">Current: {existingUrls.video_Image}</p>}
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Plan Map Blueprint {!isEditMode && "*"}</label>
              <input required={!isEditMode} type="file" accept="image/*" onChange={(e) => setPlanImgFile(e.target.files?.[0] || null)} className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--color-brand-gray)] file:text-[var(--color-brand-navy)]" />
              {isEditMode && existingUrls.plan_image && <p className="text-[10px] text-gray-400 mt-1 truncate">Current: {existingUrls.plan_image}</p>}
            </div>
          </div>
        </div>

        {/* Multi Gallery Images */}
        <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
          <label className="block text-xs uppercase font-extrabold text-gray-500 mb-2">Gallery Showcase Images (Select Multiple) {!isEditMode && "*"}</label>
          <input required={!isEditMode} type="file" accept="image/*" multiple onChange={(e) => setGalleryFiles(Array.from(e.target.files || []))} className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[var(--color-brand-gray)] file:text-[var(--color-brand-navy)]" />
          {galleryFiles.length > 0 ? (
            <p className="text-xs text-[var(--color-brand-pink)] mt-2 font-medium">{galleryFiles.length} new images staged to override gallery slots.</p>
          ) : (
            isEditMode && <p className="text-[10px] text-gray-400 mt-1">{existingUrls.images.length} images currently loaded in active record gallery.</p>
          )}
        </div>

        <hr className="border-gray-300 my-6" />

        {/* --- Amenities Checklist --- */}
        <div>
          <h3 className="text-lg font-bold mb-1">Available Project Amenities</h3>
          <p className="text-xs text-gray-400 mb-4">Select all applicable infrastructural amenities built into this property plot.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenitiesList.map((amenity, idx) => (
              <label key={idx} className={`flex items-start p-3 bg-white border rounded-xl cursor-pointer transition-all hover:shadow-md ${selectedAmenities.some(a => a.title === amenity.title) ? 'border-[var(--color-brand-blue)] ring-1 ring-[var(--color-brand-blue)]' : 'border-gray-200'}`}>
                <input type="checkbox" checked={selectedAmenities.some(a => a.title === amenity.title)} onChange={() => handleAmenityChange(amenity)} className="mt-1 mr-3 rounded text-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)] w-4 h-4" />
                <div className="flex gap-2.5">
                  <div className="mt-0.5">{renderIcon(amenity.icon)}</div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-brand-navy)]">{amenity.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{amenity.description}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* --- Dynamic Landmarks Section --- */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">Key Neighborhood Landmarks</h3>
            <button type="button" onClick={addLandmarkRow} className="flex items-center text-xs font-bold gap-1 px-3 py-1.5 rounded-md bg-[var(--color-brand-navy)] text-white hover:bg-opacity-90">
              <Plus className="w-3.5 h-3.5" /> Add Landmark
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-4">Provide key surrounding spots and distances from the property line.</p>
          
          <div className="space-y-3">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <input required type="text" placeholder="Destination (e.g., Highway Entrance)" value={landmark.name} onChange={(e) => handleLandmarkChange(index, "name", e.target.value)} className="w-full text-sm px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)]" />
                </div>
                <div className="w-1/3">
                  <input required type="text" placeholder="Distance (e.g., 5 mins)" value={landmark.distance} onChange={(e) => handleLandmarkChange(index, "distance", e.target.value)} className="w-full text-sm px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-blue)]" />
                </div>
                {landmarks.length > 1 && (
                  <button type="button" onClick={() => removeLandmarkRow(index)} className="p-1.5 text-red-500 hover:bg-red-50 rounded transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Submission Action --- */}
        <div className="pt-4">
          <button type="submit" disabled={loading} className="w-full py-4 rounded-xl text-white font-bold tracking-wide transition shadow-lg flex items-center justify-center bg-gradient-to-r from-[var(--color-brand-navy)] via-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" /> Saving and sync changes...
              </>
            ) : (
              isEditMode ? "Update Property Record" : "Submit Listing & Assets to Cloud"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}