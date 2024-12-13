"use client";
import { AdminNavBarData } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { useLogout } from "@/hooks/useLogout";

export const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRouteChange = (route: string) => {
    router.push(route);
  };

  const isActiveRoute = (route: string): boolean => {
    return route === pathname;
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = localStorage.getItem("jb-admin-token");
      if (!token) {
        router.push("/login");
      }
    };
    checkAuthToken();
    return () => {};
  }, [router]);

  return (
    <div className="relative">
      {/* Full Navbar (for larger screens) */}
      <div className="w-full py-5 px-5 justify-center items-center bg-transparent fixed lg:flex hidden ">
        <div className="glassbox w-[50%] h-14 p-8 rounded-lg shadow-lg flex justify-center items-center gap-10 relative">
          <div className="absolute right-10">
            <Icon iconName="logout" onClick={logout} size="lg" color="white" />
          </div>
          {AdminNavBarData.map((l, i) => (
            <div
              key={i}
              className={`${
                isActiveRoute(l.href) ? "border-b border-white" : ""
              } p-1 `}
            >
              <h1
                onClick={() => handleRouteChange(l.href)}
                className={`text-[20px] font-poppinsSemibold cursor-pointer select-none text-white`}
              >
                {l.label}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Icon (for mobile screens) */}
      <div
        className="w-full lg:hidden fixed top-0 left-0 z-40 glassbox p-5"
        style={{ borderRadius: 0 }}
      >
        <Icon
          iconName={"menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground"
          size="2x"
        />
      </div>

      {/* Sidebar Menu (for mobile screens) */}
      <div
        className={`lg:hidden fixed left-0 top-0 w-[250px] h-full bg-white shadow-lg z-40 flex flex-col items-center py-5 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end px-5">
          <Icon
            iconName="close"
            onClick={() => setIsMenuOpen(false)}
            className="text-background"
            size="2x"
          />
        </div>
        {AdminNavBarData.map((l, i) => (
          <div
            key={i}
            className={`${
              isActiveRoute(l.href) ? "border-b border-black" : ""
            } p-4`}
          >
            <h1
              onClick={() => {
                handleRouteChange(l.href);
                setIsMenuOpen(false);
              }}
              className={`text-[20px] font-poppinsSemibold cursor-pointer select-none`}
            >
              {l.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
