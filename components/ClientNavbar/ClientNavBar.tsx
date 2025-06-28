"use client";
import { Navlinks } from "./components/Navlinks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MobileNavlinks } from "./components/MobileNavlinks";
import { Icon } from "../Icon";

export const ClientNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldHide =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (shouldHide) {
    return null;
  }

  const isHomePage = pathname === "/";
  const showLogo = false;

  return (
    <nav
      className={`w-full py-3 px-4 lg:px-10 fixed top-0 z-50 transition-all duration-500 ${
        hasScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {showLogo ? (
          <div
            className="logo-container"
            style={{
              backgroundImage: `url(${
                hasScrolled || !isHomePage
                  ? "/svgs/logo_black.svg"
                  : "/svgs/logo_white.svg"
              })`,
            }}
          />
        ) : (
          <div className="flex flex-col space-y-0.5">
            <h1
              className={`font-poppinsSemibold text-[16px] lg:text-[20px] transition-colors duration-300 ${
                hasScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              Dr Jibran Bashir
            </h1>
            <div className="space-y-0.5">
              <p
                className={`font-poppinsRegular text-[9px] lg:text-[11px] transition-colors duration-300 ${
                  hasScrolled || !isHomePage ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Consultant Orthopedic Surgeon
              </p>
              <p
                className={`font-poppinsRegular text-[9px] lg:text-[11px] transition-colors duration-300 ${
                  hasScrolled || !isHomePage ? "text-gray-600" : "text-gray-200"
                }`}
              >
                MBBS, D-Ortho, DNB Orthopedics, MNAMS
              </p>
              <p
                className={`font-poppinsRegular text-[9px] lg:text-[11px] transition-colors duration-300 ${
                  hasScrolled || !isHomePage ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Fellowship Hip Arthroplasty & Advanced Knee Arthroscopy, Germany
              </p>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navlinks
            pathname={pathname}
            hasScrolled={hasScrolled}
            isHomePage={isHomePage}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
            hasScrolled || !isHomePage
              ? "text-primary hover:bg-primary/10"
              : "text-white hover:bg-white/10"
          }`}
        >
          <Icon iconName={isOpen ? "close" : "menu"} size="lg" />
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 animate-fadeIn">
          <MobileNavlinks
            pathname={pathname}
            onItemClick={() => setIsOpen(false)}
            hasScrolled={hasScrolled}
            isHomePage={isHomePage}
          />
        </div>
      )}
    </nav>
  );
};
