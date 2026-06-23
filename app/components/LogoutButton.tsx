"use client";

import { useState } from "react";
import { FaBackwardStep as FaSignOutAlt } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { createClient } from "@/app/utils/supabase/client";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout failed:", error.message);
      }

      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition duration-200 font-medium text-sm disabled:opacity-50"
    >
      <FaSignOutAlt size={16} />
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
