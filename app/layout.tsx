import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa6";

// 1. IMPORT YOUR SEPARATE COMPONENTS HERE
import SahanaHeader from "./components/Header";
import Footer from "./components/Footer";

const ubuntuBold = Ubuntu({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-ubuntu-bold",
});

const ubuntuLight = Ubuntu({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-ubuntu-light",
});

const ubuntuRegular = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu-regular",
});

export const metadata: Metadata = {
  title: "SAHANA GROUP | Premium Lands & Properties",
  description: "Find and secure prime residential, commercial, and agricultural lands with certified deeds.",
};

// 2. CRITICAL FIX: This MUST be the "export default function"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ubuntuRegular.variable} ${ubuntuLight.variable} ${ubuntuBold.variable} h-full`}
    >
      <body className={`${ubuntuRegular.className} min-h-full flex flex-col relative antialiased bg-gray-50 text-[#0D2B4D]`}>
        
        {/* Global Background Grid Layer */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-40" 
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://w3.org' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23d9d9d9' fill-opacity='0.2' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Global Content Stacking Container */}
        <div className="relative z-10 flex-1 flex flex-col">
          
          {/* A. Separate Client Header Mounted */}
          <SahanaHeader />

          {/* pt-28 clears the floating glass navigation nicely */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* B. Separate Footer Mounted */}
          <Footer />
          
        </div>

        {/* WhatsApp Float */}
        <a 
          href="https://wa.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed z-50 bottom-10 right-10 bg-green-600 hover:bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <FaWhatsapp size={24}/>
        </a>
        
      </body>
    </html>
  );
}
