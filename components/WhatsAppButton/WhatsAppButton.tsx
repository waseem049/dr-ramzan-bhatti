"use client";
import { useState } from "react";
import { Icon } from "../Icon";
import { ContactInfo } from "@/utils/constants";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp contact info loaded from JSON (edit in content/site/contact.json)
  const phoneNumber = ContactInfo.whatsapp.number;
  const message = encodeURIComponent(ContactInfo.whatsapp.message);

  const handleClick = () => {
    // Using api.whatsapp.com for better compatibility across all devices
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      {/* Professional WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <Icon iconName="whatsapp" className="text-2xl" />
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
      </button>

      {/* Professional Tooltip */}
      {isHovered && (
        <div className="absolute bottom-16 left-0 bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-poppinsRegular whitespace-nowrap shadow-lg transition-all duration-200">
          Chat on WhatsApp
          <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900/95 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};
