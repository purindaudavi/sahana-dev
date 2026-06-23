import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0D2B4D] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Top Section: Branding and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-13 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile (5 cols wide on desktop) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/sahana-group-logo-upscaledd.png"
                alt="Sahana Group"
                width={180}
                height={60}
                className="h-10 w-auto rounded-md object-contain bg-white/5 p-1"
              />
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Your premier partner for secure and high-yielding land investments in Sri Lanka. 
              We offer certified residential and commercial plots with 100% legal clearance.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29D6ED]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#E6008E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#E6008E] transition-colors flex items-center gap-1">
                  Properties <ArrowUpRight size={14} className="opacity-50" />
                </Link>
              </li>
              
            </ul>
          </div>


          {/* Column 2: Quick Links (3 cols wide on desktop) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29D6ED]">
              Our Portfolios
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/properties?type=Residential" className="hover:text-[#E6008E] transition-colors flex items-center gap-1">
                  Residential Lands <ArrowUpRight size={14} className="opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Commercial" className="hover:text-[#E6008E] transition-colors flex items-center gap-1">
                  Commercial Lands <ArrowUpRight size={14} className="opacity-50" />
                </Link>
              </li>

              <li>
                <Link href="/properties?type=Agricultural" className="hover:text-[#E6008E] transition-colors flex items-center gap-1">
                  Agricultural Lands <ArrowUpRight size={14} className="opacity-50" />
                </Link>
              </li>
             
            </ul>
          </div>

          
          {/* Column 3: Contact Info (4 cols wide on desktop) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29D6ED]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E6008E] shrink-0 mt-0.5" />
                <span>No. 240 Ratnapura - Horana - Panadura Hwy, Horana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#E6008E] shrink-0" />
                <a href="tel:+94112345678" className="hover:text-white transition-colors">
                  +94342267979
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#E6008E] shrink-0" />
                <a href="mailto:info@sahanagroup.lk" className="hover:text-white transition-colors">
                  info@sahanagroup.lk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sahana Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
