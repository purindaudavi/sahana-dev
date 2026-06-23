"use client";

import { FaGear, FaLandmark, FaNewspaper, FaPlus } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";

import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();
    return <>
        <div className="w-full h-full p-10">
           <div className="p-10 rounded-lg bg-white shadow-xl flex flex-col  w-fit justify-center items-center space-y-2" onClick={() => {router.push("admin/properties")}}>
                <div className="bg-brand-cyan p-4 rounded-full w-fit">
                    <FaPlus />
                    
                </div>
                <p className="text-brand-navy">Manage Properties</p>
           </div>
        </div>
    </>

}


export default Dashboard;