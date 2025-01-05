"use client";
import { Navlinks } from "./components/Navlinks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileNavlinks } from "./components/MobileNavlinks";
import { Icon } from "../Icon";

export const ClientNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const shouldHide =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (shouldHide) {
    return null;
  }

  return (
    <nav className="w-full py-2 px-4 lg:px-10 fixed bg-transparent">
      <div className="flex justify-between items-center">
        <div className="logo-container" />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navlinks pathname={pathname} />
        </div>

        {/* Mobile Menu Button */}
        <Icon
          className="lg:hidden flex items-center text-primary"
          onClick={() => setIsOpen(!isOpen)}
          iconName={isOpen ? "close" : "menu"}
        />
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-2">
          <MobileNavlinks
            pathname={pathname}
            onItemClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};
