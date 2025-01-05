import { NavBarData } from "@/utils/constants";
import Link from "next/link";

type NavlinksProps = {
  pathname: string;
};

export const Navlinks: React.FC<NavlinksProps> = ({ pathname }) => {
  return (
    <div className="bg-primary p-[4px] flex flex-row rounded-[3px]">
      {NavBarData.map((l, i) => {
        const isActivePath = pathname === l.href;
        return (
          <div
            key={i}
            className={`${
              isActivePath ? "bg-white" : "transparent"
            } rounded-[3px]`}
          >
            <Link
              href={l.href}
              className={`px-8 py-1 text-[25px] ${
                isActivePath ? "text-primary" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
