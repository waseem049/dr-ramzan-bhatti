"use client";
import { Navlinks } from "./components/Navlinks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileNavlinks } from "./components/MobileNavlinks";
import { Icon } from "../Icon";
import { MegaMenu } from "./components/MegaMenu/MegaMenu";
import { TreatmentsModal } from "./components/TreatmentsModal/TreatmentsModal";
import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export const ClientNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isTreatmentsModalOpen, setIsTreatmentsModalOpen] = useState(false);
  const { scrollDirection } = useScrollDirection();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed z-50 transition-all duration-500 left-0 right-0 mx-auto
          ${scrollDirection === "down" ? "-translate-y-[150%]" : "translate-y-0"}
          top-4 max-w-[95%] lg:max-w-7xl rounded-full
          bg-white/90 backdrop-blur-md border border-white/40 shadow-xl`}
      >
        <div className="relative w-full px-4 lg:px-8 py-3 lg:py-3 flex justify-between items-center text-gray-900">

          {/* Mobile Header Layout (Aligned to Screenshot) */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 -ml-1 text-gray-700 hover:text-primary hover:bg-gray-100/50 rounded-md transition-colors"
              >
                <Icon iconName={isOpen ? "close" : "menu"} size="lg" />
              </button>

              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <h1 className="font-montserratBold text-base text-gray-900 tracking-tight leading-tight">
                  Dr. Ramzan
                </h1>
              </Link>

              {/* Mobile 'Our Treatments' Button (Next to Logo) */}
              <button
                onClick={() => setIsTreatmentsModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[10px] font-montserratSemibold text-gray-700 shadow-sm hover:bg-gray-50 active:scale-95 transition-all ml-auto sm:ml-2"
              >
                Our Treatments
                <Icon iconName="chevronDown" size="xs" className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Desktop Header Layout */}
          <div className="hidden lg:flex justify-between items-center w-full">
            <Link href="/" className="flex flex-col">
              <h1 className="font-montserratBold text-2xl text-gray-900 tracking-tight">
                Dr. Ramzan Bhatti
              </h1>
              <p className="font-medium text-xs text-gray-500 tracking-wider">
                DERMATOLOGIST & LASER SPECIALIST
              </p>
            </Link>

            <div className="flex items-center gap-8">
              {/* Desktop 'Our Treatments' Button */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white text-sm font-montserratSemibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all"
              >
                Our Treatments
                <Icon iconName="chevronDown" size="xs" className="text-gray-400" />
              </button>

              <div className="text-gray-900">
                <Navlinks
                  pathname={pathname}
                  onHoverService={setIsMegaMenuOpen}
                />
              </div>

              <Link
                href="/contact-us"
                className="px-6 py-2.5 text-sm font-montserratBold text-white bg-[#008080] rounded-full hover:bg-[#006666] transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <MegaMenu
            isVisible={isMegaMenuOpen}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          />
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fadeIn border-t border-gray-100 h-[calc(100vh-80px)] overflow-y-auto rounded-b-2xl mt-2">
            <MobileNavlinks
              pathname={pathname}
              onItemClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </nav>

      {/* Mobile Treatments Modal (Outside Nav specific styles, but portal or fixed overlay) */}
      <TreatmentsModal
        isVisible={isTreatmentsModalOpen}
        onClose={() => setIsTreatmentsModalOpen(false)}
      />

      {/* Mobile Sticky Bottom Bar (Decoupled from Nav) */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 transition-transform duration-500 
        ${scrollDirection === "down" ? "translate-y-[200%]" : "translate-y-0"}`}
      >
        <Link
          href="/contact-us"
          className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-[#008080] to-[#006666] text-white font-montserratBold text-sm uppercase tracking-wide rounded-full shadow-lg hover:shadow-teal-500/30 active:scale-[0.98] transition-all"
        >
          Book Appointment
          <Icon iconName="arrowRight" size="sm" className="ml-2" />
        </Link>
      </div>
    </>
  );
};
