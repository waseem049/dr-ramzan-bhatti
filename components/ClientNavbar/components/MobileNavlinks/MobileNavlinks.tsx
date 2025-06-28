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
  const isDarkMode = hasScrolled || !isHomePage;

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg ${
        isDarkMode
          ? "bg-white border border-gray-200"
          : "bg-white/10 backdrop-blur-lg border border-white/20"
      }`}
    >
      {NavBarData.map((l, i) => {
        const isActivePath =
          pathname === l.href || pathname.startsWith(l.href + "/");

        return (
          <Link
            key={i}
            href={l.href}
            onClick={onItemClick}
            className={`flex items-center px-4 py-3 text-base font-montserratSemibold transition-all duration-300 ${
              isActivePath
                ? "bg-primary text-white"
                : isDarkMode
                ? "text-gray-700 hover:bg-primary/5 hover:text-primary"
                : "text-white hover:bg-white/10"
            } ${
              i !== NavBarData.length - 1 ? "border-b border-gray-200/20" : ""
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
};
