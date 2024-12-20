"use client";

import { useState } from "react";
import { Contact } from "@prisma/client";

export type ContactRequestCardProps = Omit<Contact, "updatedAt" | "id"> & {
  containerClasses?: string;
};

export const ContactRequestCard: React.FC<ContactRequestCardProps> = ({
  name,
  email,
  countryCode,
  phone,
  subject,
  message,
  createdAt,
  containerClasses = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${containerClasses} glassbox overflow-hidden rounded-lg transition-all duration-1500 flex flex-col px-6 py-4`}
    >
      {/* Header Section */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row cursor-pointer justify-between items-center "
      >
        <div className="flex flex-col gap-1 ">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-gray-100">{name}</h3>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-200">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="truncate">{email}</span>
              {phone && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span>
                    {countryCode}-{phone}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="text-sm font-medium text-gray-200">{subject}</div>
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/50 text-gray-200 transition-colors hover:bg-gray-600/50"
          aria-label={isOpen ? "Collapse details" : "Expand details"}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {/* Message Section - Always rendered for smooth transition */}
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          transition: isOpen
            ? "max-height 0.5s ease-in-out, padding 0.3s ease-in-out, opacity 0.3s ease-in-out"
            : "max-height 0.3s ease-in-out, padding 0.2s ease-in-out, opacity 0.2s ease-in-out",
        }}
        className={`overflow-hidden`}
      >
        <div className="space-y-4">
          <div className="text-gray-300 break-all whitespace-normal pt-1">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};
