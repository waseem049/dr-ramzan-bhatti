import { NavBarData } from "@/utils/constants";
import Link from "next/link";
import { Icon } from "@/components/Icon";

type NavlinksProps = {
  pathname: string;
  hasScrolled: boolean;
  isHomePage: boolean;
};

export const Navlinks: React.FC<NavlinksProps & { onHoverService: (isHovering: boolean) => void }> = ({
  pathname,
  // hasScrolled,
  isHomePage,
  onHoverService,
}) => {
  const isDarkMode = true; // Force dark text style for the new white header design

  return (
    <div className="flex items-center gap-6">
      {NavBarData.map((l, i) => {
        const isActivePath =
          l.href === "/"
            ? pathname === "/"
            : pathname === l.href || pathname.startsWith(l.href + "/");

        const isTreatments = l.label === "Treatments" || l.label === "Services";

        return (
          <div
            key={i}
            onMouseEnter={() => isTreatments && onHoverService(true)}
            onMouseLeave={() => isTreatments && onHoverService(false)}
            className="relative py-4"
          >
            <Link
              href={l.href}
              className={`text-sm lg:text-[15px] font-montserratMedium tracking-wide transition-all duration-300 relative group ${isActivePath ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
            >
              {l.label}
              {/* Underline animation */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActivePath ? 'w-full' : ''}`}></span>

              {isTreatments && (
                <Icon iconName="chevronDown" className="inline-block ml-1 w-3 h-3 mb-0.5" />
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
