"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaPencil as FaEdit, FaTrash, FaMagnifyingGlass as FaSearch, FaEye, FaXmark } from "react-icons/fa6";

import { createClient } from "@/app/utils/supabase/client";
import AddProperties from "@/app/components/AddProperties";

import { useRouter } from "next/navigation";

const Properties = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [properties, setProperties] = useState<any[]>([]);

    const router = useRouter();
    
    // --- Modal Configuration States ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModal , setIsDeleteModal] = useState(false);
    const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

    const filteredProperties = properties.filter((property) => {
        const matchesSearch =
            property?.project_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property?.location?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === "All" || property?.type?.toLowerCase().includes(filterType.toLowerCase());
        return matchesSearch && matchesFilter;
    });

    const fetchFromDB = async () => {
        const supabase = createClient();
        // NOTE: Standardized table name to 'projects' as per your fetch query
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("price", { ascending: false });

        if (data) {
            setProperties(data);
        } else if (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        fetchFromDB();
    }, []);

    // --- Action Handlers ---
    const handleOpenAddModal = () => {
        setSelectedPropertyId(null); 
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (id: number) => {
        setSelectedPropertyId(id); 
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPropertyId(null);
        fetchFromDB(); 
    };

    const handleOpenDeleteModal = (id: number) => {
        setSelectedPropertyId(id); 
        setIsDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModal(false);
        setSelectedPropertyId(null);
    };

    const deleteProperty = async () => {
        if (!selectedPropertyId) return;

        const supabase = createClient();
        // Changed "properties" to "projects" to match your fetch query table name
        const { error } = await supabase
            .from("projects") 
            .delete()
            .eq("id", selectedPropertyId);

        if (!error) {
            console.log("Data deleted successfully");
            // Optimistically update UI or just re-fetch
            fetchFromDB(); 
            handleCloseDeleteModal();
        } else {
            console.error("Error deleting property:", error.message);
        }
    };

    return (
        <div className="p-6 space-y-6 relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#0D2B4D]">Properties Management</h1>
                    <p className="text-gray-600 text-sm mt-1">Manage all properties in your portfolio</p>
                </div>
                <button 
                    onClick={handleOpenAddModal}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer"
                >
                    <FaPlus size={16} />
                    Add Property
                </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                    <FaSearch className="absolute left-3 top-3 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search by name, location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                </div>

                {/* Filter */}
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                    <option value="All">All Types</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agricultural">Agricultural</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Property Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Size</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Plots Available</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredProperties.length > 0 ? (
                                filteredProperties.map((property) => (
                                    <tr key={property.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 text-sm font-medium text-[#0D2B4D]">{property.project_name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{property.location}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span 
                                                className={`px-3 py-1 rounded-full text-xs font-medium text-white ${property.type_color} shadow-sm`}
                                            >
                                                {property.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{property.blocksize}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                                            {property.price}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{property.available_plots}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex items-center gap-3">
                                                <button className="text-blue-600 hover:text-blue-800 transition cursor-pointer" title="View" onClick={() => {router.push(`/properties/${property.id}`)}}>
                                                    <FaEye size={16} />
                                                </button>
                                                <button 
                                                    onClick={() => handleOpenEditModal(property.id)}
                                                    className="text-amber-600 hover:text-amber-800 transition cursor-pointer" 
                                                    title="Edit"
                                                >
                                                    <FaEdit size={16} />
                                                </button>
                                                <button 
                                                    onClick={() => handleOpenDeleteModal(property.id)}
                                                    className="text-red-600 hover:text-red-800 transition cursor-pointer" 
                                                    title="Delete"
                                                >
                                                    <FaTrash size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                        No properties found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- Unified Form Modal Overlay --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs overflow-y-auto">
                    <div className="relative w-fit bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]" style={{scrollbarWidth : 'none'}}>
                        <button 
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition z-10 cursor-pointer"
                        >
                            <FaXmark size={20} />
                        </button>
                        <div className="p-2">
                            <AddProperties propertyId={selectedPropertyId} />
                        </div>
                    </div>
                </div>
            )}

            {/* --- Delete Confirmation Modal --- */}
            {isDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
                    <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full mx-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Property</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Are you sure you want to delete this property? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={handleCloseDeleteModal}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={deleteProperty}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Properties;