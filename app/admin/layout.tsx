"use client";
import { FaGear, FaLandmark, FaNewspaper } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/LogoutButton";
import { createClient } from "@/app/utils/supabase/client";

const Admin = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const buttons = [
        {
            label: "Properties",
            route: "/admin/properties",
            icon: <FaLandmark />
        },
    ]
    async function signOut() {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();
        if(error){
            console.log("error.message");
        }
    }

    return <>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-6">
            <div className="h-full pt-28 p-4 space-y-2 shadow-inner bg-gray-100 flex flex-col">
                <div className="flex-1 space-y-4">
                    {
                        buttons.map(button => {
                            return <Fragment key={button.route}>
                                <button className="flex justify-between w-full items-center text-blue-500 hover:text-blue-700 hover:bg-white transition font-medium rounded-full p-4" onClick={() => router.push(button.route)}>
                                    {button.label}{button.icon}
                                </button>
                            </Fragment>
                        })
                    }
                </div>
                <div className="border-t border-gray-300 pt-4" onClick={() => {signOut()}}>
                    <LogoutButton />
                </div>
            </div>
            <div className="col-span-1 md:col-span-5 pt-24">
                {children}
            </div>

        </div>
    </>

}


export default Admin;