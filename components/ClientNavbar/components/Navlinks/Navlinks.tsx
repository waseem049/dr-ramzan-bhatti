import { NavBarData } from "@/utils/constants";
import Link from "next/link";

type NavlinksProps = {
  pathname: string;
  hasScrolled: boolean;
  isHomePage: boolean;
};

export const Navlinks: React.FC<NavlinksProps> = ({
  pathname,
  hasScrolled,
  isHomePage,
}) => {
  const isDarkMode = hasScrolled || !isHomePage;

  return (
    <div
      className={`flex items-center rounded-lg p-1 transition-all duration-300 gap-2 ${
        isDarkMode
          ? "bg-gray-100 shadow-sm"
          : "bg-white/10 backdrop-blur-sm border border-white/20"
      }`}
    >
      {NavBarData.map((l, i) => {
        const isActivePath =
          l.href === "/"
            ? pathname === "/"
            : pathname === l.href || pathname.startsWith(l.href + "/");

        return (
          <Link
            key={i}
            href={l.href}
            className={`px-4 lg:px-6 py-2 text-sm lg:text-base font-montserratSemibold rounded-md transition-all duration-300 ${
              isActivePath
                ? isDarkMode
                  ? "bg-primary text-white shadow-sm"
                  : "bg-primary text-white shadow-lg"
                : isDarkMode
                ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                : "text-white hover:text-primary hover:bg-white/10"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
      <Link
        href="tel:+918491999816"
        className="px-4 lg:px-6 py-2 text-sm lg:text-base font-montserratSemibold rounded-md transition-all duration-300 bg-primary text-white"
      >
        CALL US
      </Link>
    </div>
  );
};
