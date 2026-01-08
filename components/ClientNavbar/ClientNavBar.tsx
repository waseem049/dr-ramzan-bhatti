"use client";
import { Navlinks } from "./components/Navlinks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MobileNavlinks } from "./components/MobileNavlinks";
import { Icon } from "../Icon";
import { MegaMenu } from "./components/MegaMenu/MegaMenu";
import Link from "next/link";

export const ClientNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  // const [hasScrolled, setHasScrolled] = useState(false);

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const scrollPosition = window.scrollY;
      // setHasScrolled(scrollPosition > 20); // Lower threshold for sticky effect
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
  // Always use standard look now as per reference design

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 bg-white shadow-sm`}
    >
      <div className="relative w-full px-4 lg:px-10 py-4 lg:py-5 flex justify-between items-center max-w-[1440px] mx-auto bg-white z-50">
        <Link href="/" className="flex flex-col">
          <h1 className="font-montserratBold text-xl lg:text-2xl text-primary tracking-tight">
            Dr. Ramzan Bhatti
          </h1>
          <p className="font-medium text-[10px] lg:text-xs text-gray-500 tracking-wider hidden sm:block">
            DERMATOLOGIST & LASER SPECIALIST
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <Navlinks
            pathname={pathname}
            hasScrolled={true}
            isHomePage={isHomePage}
            onHoverService={setIsMegaMenuOpen}
          />

          <Link
            href="/contact-us"
            className="px-8 py-3 text-sm font-montserratSemibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Icon iconName={isOpen ? "close" : "menu"} size="lg" />
        </button>
      </div>

      {/* Mega Menu Component - Rendered outside the z-50 container to be safe, or relative */}
      {/* Passing state handlers to keep it open when hovering the menu itself via a wrapper if needed, 
          but simpler to just pass handler to the component which wraps the content */}
      <div className="hidden lg:block">
        <MegaMenu
          isVisible={isMegaMenuOpen}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        />
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fadeIn border-t border-gray-100 h-[calc(100vh-80px)] overflow-y-auto">
          <MobileNavlinks
            pathname={pathname}
            onItemClick={() => setIsOpen(false)}
            hasScrolled={true}
            isHomePage={isHomePage}
          />
        </div>
      )}
    </nav>
  );
};
