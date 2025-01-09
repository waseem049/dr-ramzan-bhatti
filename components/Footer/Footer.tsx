"use client";
import Link from "next/link";
import { Icon } from "../Icon";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname === "/login") {
    return null;
  }
  return (
    <div className="w-full bg-primary px-3 lg:px-12 py-8 lg:py-16 flex flex-col gap-10 lg:gap-14">
      <div className="w-full flex flex-col gap-10 lg:gap-0 items-center lg:flex-row lg:justify-evenly lg:items-start">
        <div
          className="logo-container flex lg:hidden"
          style={{ backgroundImage: "url(/svgs/white_logo.svg)" }}
        />
        <div className="flex flex-col items-center lg:items-start gap-4 ">
          <div className="flex flex-col">
            <h1 className="font-montserratRegular text-[28px] text-white">
              Contact Details
            </h1>
            <div className="border-b-[1px] border-white w-[100%] lg:w-[50%]" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon iconName={"phone"} className="text-white" />
            <Link
              href="tel:+919999999999"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              +91-9999999999
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon iconName={"email"} className="text-white" />
            <Link
              href="mailto:hello@drjibranbashir.com"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              hello@drjibranbashir.com
            </Link>
          </div>
        </div>
        <div
          className="logo-container hidden lg:flex"
          style={{ backgroundImage: "url(/svgs/white_logo.svg)" }}
        />
        <div className="flex flex-col items-center lg:items-start gap-4 ">
          <div className="flex flex-col">
            <h1 className="font-montserratRegular text-[28px] text-white">
              Userful Links
            </h1>
            <div className="border-b-[1px] border-white w-[100%] lg:w-[50%]" />
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon iconName={"home"} className="text-white" />
            <Link
              href="/"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              Home
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon iconName={"blog"} className="text-white" />
            <Link
              href="/blogs"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              Blogs
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon iconName={"about"} className="text-white" />
            <Link
              href="#about"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              About
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon iconName={"email"} className="text-white" />
            <Link
              href="/"
              className="text-white font-poppinsRegular text-[16px] hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-white font-montserratRegular text-[12px] lg:text-[16px]">
          © {new Date().getFullYear()} Dr. Jibran Bashir. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};
