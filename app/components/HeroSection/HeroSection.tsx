"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#F9F4F0]">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Skin Care Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        {/* Soft elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F4F0]/90 via-[#F9F4F0]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl pt-20 lg:pt-0">
          <div className="inline-flex animate-fadeIn">
            <span className="px-4 py-1.5 rounded-full bg-[#1b3a4b] text-white text-xs font-montserratMedium tracking-wide flex items-center gap-2 bg-opacity-90 backdrop-blur-sm shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Expert Skin Care
            </span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-montserratLight text-gray-900 leading-[1.1] animate-fadeIn delay-100">
            Reveal Your Skin's <br />
            <span className="font-montserratBold text-primary">
              True Radiance
            </span>
          </h1>

          {/* Enhanced Description */}
          <div className="space-y-4 animate-fadeIn delay-200">
            <p className="text-gray-700 text-base leading-relaxed font-poppinsRegular max-w-lg">
              Expert dermatological care combining{" "}
              <span className="text-gray-900 font-poppinsSemiBold">medical precision</span>{" "}
              with{" "}
              <span className="text-gray-900 font-poppinsSemiBold">aesthetic artistry</span>.
            </p>

            {/* Specialties with elegant separators */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-gray-500 font-poppinsRegular">Specialized in</span>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-montserratMedium text-xs">
                  Acne Treatment
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-montserratMedium text-xs">
                  Laser Hair Removal
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-montserratMedium text-xs">
                  Anti-Aging
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fadeIn delay-300">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-primary text-white rounded-full font-montserratSemibold text-sm tracking-wide hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              <Icon iconName="phone" className="w-4 h-4" />
              Book Consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-[#2C3E50] text-white rounded-full font-montserratSemibold text-sm tracking-wide hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Icon iconName="about" className="w-4 h-4" />
              Learn More
            </Link>
          </div>

          <div className="flex items-center gap-8 mt-8 border-t border-gray-200 pt-8 animate-fadeIn delay-500">
            <div>
              <p className="text-3xl font-montserratBold text-gray-900">10+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Years Exp
              </p>
            </div>
            <div>
              <p className="text-3xl font-montserratBold text-gray-900">5k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Happy Patients
              </p>
            </div>
          </div>
        </div>

        {/* Right Image/Content - Optional subtle floating element */}
        <div className="hidden lg:block relative py-12">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700">
            <Image
              src="/images/doctor.png"
              alt="Dr. Ramzan Bhatti"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-montserratBold text-xl">Dr. Ramzan Bhatti</p>
              <p className="text-sm opacity-90">MD Dermatology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
