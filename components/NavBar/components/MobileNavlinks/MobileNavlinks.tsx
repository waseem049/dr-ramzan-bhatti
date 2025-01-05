import { NavBarData } from "@/utils/constants";
import Link from "next/link";

type MobileNavlinksProps = {
  pathname: string;
  onItemClick: () => void;
};

export const MobileNavlinks: React.FC<MobileNavlinksProps> = ({
  pathname,
  onItemClick,
}) => {
  return (
    <div className="bg-primary rounded-[3px] overflow-hidden p-[4px]">
      {NavBarData.map((l, i) => {
        const isActivePath = pathname === l.href;
        return (
          <Link
            key={i}
            href={l.href}
            onClick={onItemClick}
            className={`block px-4 py-2 text-lg ${
              isActivePath
                ? "bg-white text-primary"
                : "text-white hover:bg-white/10"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
};
