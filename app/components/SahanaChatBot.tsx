"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import chatpic from "../assets/chatbot.png";

type Message = {
  from: "bot" | "user";
  text: string;
};

type Option = {
  label: string;
  next: string;
};

const flows: Record<
  string,
  {
    bot: string;
    options?: Option[];
  }
> = {
  start: {
    bot: "Hi! Welcome to Sahana Group. How can I help you today?",
    options: [
      { label: "View Available Lands", next: "lands" },
      { label: "Search by Location", next: "location" },
      { label: "Payment Plans", next: "payments" },
      { label: "Contact Sales Team", next: "contact" },
    ],
  },

  lands: {
    bot: "Great! What type of land are you looking for?",
    options: [
      { label: "Residential Land", next: "residential" },
      { label: "Commercial Land", next: "commercial" },
      { label: "Investment Land", next: "investment" },
    ],
  },

  residential: {
    bot: "We have residential lands in selected locations. Would you like to view available projects?",
    options: [
      { label: "View Projects", next: "viewProjects" },
      { label: "Talk to Consultant", next: "contact" },
    ],
  },

  commercial: {
    bot: "Commercial lands are available in high-growth areas. Our team can share the latest availability and prices.",
    options: [
      { label: "Contact Sales Team", next: "contact" },
      { label: "View Projects", next: "viewProjects" },
    ],
  },

  investment: {
    bot: "Land is a strong long-term investment. We can help you choose a project based on budget, location, and future value.",
    options: [
      { label: "Get Guidance", next: "contact" },
      { label: "View Projects", next: "viewProjects" },
    ],
  },

  location: {
    bot: "Which location are you interested in?",
    options: [
      { label: "Kalutara", next: "kalutara" },
      { label: "Gampaha", next: "gampaha" },
      { label: "Colombo", next: "colombo" },
      { label: "Kurunegala", next: "kurunegala" },
      { label: "Other Location", next: "contact" },
    ],
  },

  kalutara: {
    bot: "We have land projects around Kalutara. You can view available lands or speak with our team for updated prices.",
    options: [
      { label: "View Kalutara Lands", next: "viewKalutara" },
      { label: "Contact Sales Team", next: "contact" },
    ],
  },

  gampaha: {
    bot: "We have selected projects around Gampaha. Our team can guide you with current availability.",
    options: [
      { label: "View Gampaha Lands", next: "viewGampaha" },
      { label: "Contact Sales Team", next: "contact" },
    ],
  },

  colombo: {
    bot: "We have land opportunities in Colombo with good investment potential.",
    options: [
      { label: "View Colombo Lands", next: "viewColombo" },
      { label: "Contact Sales Team", next: "contact" },
    ],
  },

    kurunegala: {
    bot: "We have land opportunities in Kurunegala with good investment potential.",
    options: [
      { label: "View Kurunegala Lands", next: "viewKurunegala" },
      { label: "Contact Sales Team", next: "contact" },
    ],
  },

  payments: {
    bot: "Selected Sahana Group projects offer flexible payment plans. Final plans depend on the project and plot selection.",
    options: [
      { label: "Ask Payment Details", next: "contact" },
      { label: "View Available Lands", next: "lands" },
    ],
  },

  contact: {
    bot: "Please contact our sales team on WhatsApp. They will help you with prices, availability, deeds, and payment plans.",
    options: [
      { label: "Open WhatsApp", next: "whatsapp" },
      { label: "Start Again", next: "start" },
    ],
  },

  viewProjects: {
    bot: "Sure! Click below to view all available land projects.",
    options: [
      { label: "Go to Properties", next: "properties" },
      { label: "Start Again", next: "start" },
    ],
  },

  viewKalutara: {
    bot: "Opening Kalutara land projects for you.",
    options: [{ label: "Go to Kalutara Lands", next: "kalutaraLink" }],
  },

  viewGampaha: {
    bot: "Opening Gampaha land projects for you.",
    options: [{ label: "Go to Gampaha Lands", next: "gampahaaLink" }],
  },

  viewColombo: {
    bot: "Opening Colombo land projects for you.",
    options: [{ label: "Go to Colombo Lands", next: "colomboLink" }],
  },

  viewKurunegala: {
    bot: "Opening Kurunegala land projects for you.",
    options: [{ label: "Go to Kurunegala Lands", next: "kurunegalaLink" }],
  },
};

export default function SahanaChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: flows.start.bot,
    },
  ]);
  const [currentFlow, setCurrentFlow] = useState("start");

  const handleOptionClick = (option: Option) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option.label },
    ]);

    if (option.next === "whatsapp") {
      window.open(
        "https://api.whatsapp.com/send/?phone=%2B94772647356&text=Hello%20Sahana%20Group%2C%20I%20need%20more%20details%20about%20land%20projects.",
        "_blank"
      );
      return;
    }

    if (option.next === "properties") {
      window.location.href = "/properties";
      return;
    }

    if (option.next === "kalutaraLink") {
      window.location.href = "/properties?district=Kalutara";
      return;
    }

    if (option.next === "gampahaaLink") { 
      window.location.href = "/properties?district=Gampaha";
      return;
    }

    if (option.next === "colomboLink") {
      window.location.href = "/properties?district=Colombo";
      return;
    }

      if (option.next === "kurunegalaLink") {
      window.location.href = "/properties?district=Kurunegala";
      return;
    }


    const nextFlow = flows[option.next];

    if (nextFlow) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: nextFlow.bot },
        ]);
        setCurrentFlow(option.next);
      }, 300);
    }
  };

  const currentOptions = flows[currentFlow]?.options || [];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="  fixed bottom-8 right-24 z-[9999] flex h-14 items-center gap-2 rounded-full hover:scale-105 shadow-xl"
          // bg-[#0D2B4D] px-5 text-sm font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#E6008E]
        >
         <img 
      src={chatpic.src} 
      alt="Chat icon" 
      className="h-20 w-20 object-contain" 
    />
           {/* <MessageCircle size={21} /> */}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-[9999] w-[360px] overflow-hidden rounded-3xl border border-white/30 bg-white shadow-[0_25px_80px_rgba(13,43,77,0.25)]">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0D2B4D] px-5 py-4 text-white">
            <div>
              <h3 className="text-sm font-black">Sahana Property Assistant</h3>
              <p className="text-xs text-white/70">Online now</p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[390px] space-y-3 overflow-y-auto bg-[#F8FAFC] p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.from === "user"
                      ? "bg-[#2196F3] text-white"
                      : "bg-white text-[#0D2B4D] shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options */}
          <div className="border-t border-gray-100 bg-white p-4">
            <div className="flex flex-wrap gap-2">
              {currentOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleOptionClick(option)}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-[#0D2B4D] transition hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-full bg-[#F1F4FA] px-4 py-3 text-xs text-gray-400">
              <Send size={14} />
              Click an option to continue
            </div>
          </div>
        </div>
      )}
    </>
  );
}