import { NavBarData } from "@/utils/constants";
import Link from "next/link";

type MobileNavlinksProps = {
  pathname: string;
  onItemClick: () => void;
  hasScrolled: boolean;
  isHomePage: boolean;
};

export const MobileNavlinks: React.FC<MobileNavlinksProps> = ({
  pathname,
  onItemClick,
  hasScrolled,
  isHomePage,
}) => {
  const isDarkMode = true; // Force white theme for mobile menu

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm gap-0">
      {NavBarData.map((l, i) => {
        const isActivePath =
          pathname === l.href || pathname.startsWith(l.href + "/");

        return (
          <Link
            key={i}
            href={l.href}
            onClick={onItemClick}
            className={`flex items-center px-6 py-4 text-[15px] font-montserratMedium transition-all duration-300 border-b border-gray-100 last:border-0 ${isActivePath
                ? "text-primary bg-primary/5 font-montserratSemibold"
                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
          >
            {l.label}
          </Link>
        );
      })}
      <Link
        href="tel:+918491999816"
        className="px-4 lg:px-6 py-2 text-sm lg:text-base font-montserratSemibold transition-all duration-300 bg-primary text-white"
      >
        CALL US
      </Link>
    </div>
  );
};
