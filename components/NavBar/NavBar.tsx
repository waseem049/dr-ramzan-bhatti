"use client";
import { AdminNavBarData } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";
export const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRouteChange = (route: string) => {
    router.push(route);
  };

  const isActiveRoute = (route: string): boolean => {
    return route === pathname;
  };

  if (pathname === "/") {
    return null;
  } else if (pathname.startsWith("/admin")) {
    return (
      <div className="w-full py-5 px-5 flex justify-center items-center bg-transparent fixed">
        <div className="glassbox w-[50%] h-14  p-8 rounded-lg shadow-lg flex justify-center items-center gap-10">
          {AdminNavBarData.map((l, i) => (
            <div
              key={i}
              className={`${
                isActiveRoute(l.href) ? "border-b border-black" : ""
              } p-1`}
            >
              <h1
                onClick={() => handleRouteChange(l.href)}
                className={`${
                  isActiveRoute(l.href) ? "text-[26px]" : "text-[20px]"
                } font-poppinsSemibold  cursor-pointer select-none`}
              >
                {l.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
