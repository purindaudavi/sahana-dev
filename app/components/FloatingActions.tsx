// "use client";

// import { FaWhatsapp } from "react-icons/fa6";
// import { MessageCircle } from "lucide-react";

// declare global {
//   interface Window {
//     artibotApi?: any;
//   }
// }

// export default function FloatingActions() {
//   const openArtibot = () => {
//     if (window.artibotApi?.trigger) {
//       window.artibotApi.trigger("bot:show");
//       window.artibotApi.trigger("bot:expand");
//       return;
//     }

//     console.log("Artibot is not loaded yet");
//   };

//   return (
//     <>
//       <a
//         href="https://api.whatsapp.com/send/?phone=%2B94772647356&text&type=phone_number&app_absent=0"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed z-[9999] bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110"
//       >
//         <FaWhatsapp size={25} />
//       </a>

//       {/* <button
//         type="button"
//         onClick={openArtibot}
//         className="fixed z-[9999] bottom-8 right-28 flex h-14 items-center gap-3 rounded-full bg-[#0D2B4D] px-5 text-sm font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#E6008E]"
//       >
//         <MessageCircle size={21} />
//         Property Assistant
//       </button> */}
//     </>
//   );
// }