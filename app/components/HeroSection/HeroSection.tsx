"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

// Sleek Counter Hook
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
};

export const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hasScrolled, setHasScrolled] = useState(false);
    const { openModal } = useAppointmentBooking();
    const yearsExp = useCountUp(10, 2500);
    const patients = useCountUp(5000, 2500);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;
        setMousePos({ x, y });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-skin-lightest via-skin-light to-primary-50"
            onMouseMove={handleMouseMove}
        >
            {/* Sophisticated Background with Parallax */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {/* Radiance glow - appropriate for skin care */}
                <div
                    className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-primary/8 via-primary/5 to-transparent rounded-full blur-[120px] transition-transform duration-1000 ease-out"
                    style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-white/60 via-white/30 to-transparent rounded-full blur-[100px] transition-transform duration-1000 ease-out"
                    style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
                />
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-[0.35] bg-[url('/images/noise.png')] mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-28 pb-16 lg:pt-20 lg:pb-12">
                {/* Left Content */}
                <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl">

                    {/* Premium Badge */}
                    <div className="inline-flex animate-fadeInUp">
                        <div className="group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1b3a4b] to-[#0f2838] text-white text-xs font-montserratMedium tracking-wide flex items-center gap-2.5 shadow-lg shadow-[#1b3a4b]/25 hover:shadow-xl hover:shadow-[#1b3a4b]/30 transition-all duration-300 cursor-default border border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span className="relative">Expert Dermatology & Laser Care</span>
                            <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Refined Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-montserratLight text-gray-900 leading-[1.1] tracking-tight animate-fadeInUp delay-100">
                        <span className="block mb-1">Reveal Your Skin&apos;s</span>
                        <span className="font-montserratBold text-primary relative inline-block group">
                            True Radiance
                            {/* Sophisticated underline */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 transition-all duration-500 group-hover:text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulseSlow" />
                            </svg>
                        </span>
                    </h1>

                    {/* Value Proposition */}
                    <div className="space-y-5 lg:space-y-6 animate-fadeInUp delay-200">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-poppinsRegular max-w-lg">
                            Experience transformative results through <span className="text-gray-900 font-poppinsSemiBold">advanced medical dermatology</span> combined with <span className="text-gray-900 font-poppinsSemiBold">state-of-the-art laser technology</span>.
                        </p>

                        {/* Core Specialties with Icons */}
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                            <span className="text-gray-900 font-montserratBold text-sm hidden sm:inline">
                                Core Specialties:
                            </span>
                            {[
                                { name: "Acne & Scars", icon: "✦" },
                                { name: "Laser Treatments", icon: "◈" },
                                { name: "Anti-Aging", icon: "✧" }
                            ].map((specialty, i) => (
                                <span
                                    key={i}
                                    className="group px-4 py-2.5 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-montserratMedium text-xs border border-gray-200/50 hover:border-primary/40 hover:text-primary hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
                                >
                                    <span className="text-primary text-[10px] opacity-60 group-hover:opacity-100 transition-opacity">{specialty.icon}</span>
                                    {specialty.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Premium CTAs */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2 animate-fadeInUp delay-300">
                        <button
                            onClick={openModal}
                            className="group relative px-8 py-4 bg-primary text-white rounded-full font-montserratSemibold text-sm tracking-wide hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Icon iconName="calendar" className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                Book Your Consultation
                            </span>
                        </button>
                        <Link
                            href="/treatments"
                            className="group px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-900 border-2 border-gray-300 rounded-full font-montserratSemibold text-sm tracking-wide hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5"
                        >
                            Explore Treatments
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Animated Stats & Trust */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 mt-6 lg:mt-8 pt-6 border-t border-gray-200/60 animate-fadeInUp delay-500">
                        <div className="flex items-center gap-8 sm:gap-12">
                            <div className="group cursor-default">
                                <p className="text-3xl lg:text-4xl font-montserratBold text-gray-900 flex items-baseline gap-1">
                                    {yearsExp}<span className="text-2xl text-primary">+</span>
                                </p>
                                <p className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest mt-1 font-montserratMedium group-hover:text-primary transition-colors">
                                    Years Experience
                                </p>
                            </div>
                            <div className="w-px h-12 bg-gray-300/ 50"></div>
                            <div className="group cursor-default">
                                <p className="text-3xl lg:text-4xl font-montserratBold text-gray-900 flex items-baseline gap-1">
                                    {patients > 999 ? (patients / 1000).toFixed(0) : patients}<span className="text-2xl text-primary">k+</span>
                                </p>
                                <p className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest mt-1 font-montserratMedium group-hover:text-primary transition-colors">
                                    Happy Patients
                                </p>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-xs">
                                <p className="font-montserratBold text-gray-900">Board Certified</p>
                                <p className="text-gray-500 text-[10px]">MD Dermatology</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image - Premium Portrait */}
                <div className="hidden lg:block relative py-12 animate-fadeIn delay-300 perspective-1000">
                    <div
                        className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-[1.01] transition-all duration-700 ease-out origin-center border-[8px] border-white group"
                        style={{
                            transformStyle: 'preserve-3d',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <Image
                            src="/images/doctor.png"
                            alt="Dr. Ramzan Bhatti - Board Certified Dermatologist"
                            fill
                            className="object-cover transition-transform duration-700"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Sophisticated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

                        {/* Premium shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shine" />

                        {/* Doctor Info Card */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="font-montserratBold text-xl lg:text-2xl tracking-tight">Dr. Ramzan Bhatti</p>
                                <p className="text-sm opacity-90 font-montserratMedium mt-1 flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-primary/20 backdrop-blur-sm rounded text-xs font-bold border border-white/20">MD</span>
                                    Dermatology & Laser Specialist
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-[60px] -z-10 rounded-full" />
                </div>

                {/* Mobile Image - Simplified */}
                <div className="lg:hidden relative w-full max-w-md mx-auto animate-fadeIn delay-200">
                    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/images/doctor.png"
                            alt="Dr. Ramzan Bhatti"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 90vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="font-montserratBold text-xl">Dr. Ramzan Bhatti</p>
                            <p className="text-sm opacity-90 font-montserratMedium">MD Dermatology</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden after scroll */}
            {!hasScrolled && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fadeIn delay-700">
                    <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
                        <span className="text-xs text-gray-500 font-montserratMedium uppercase tracking-widest hidden sm:block">Explore More</span>
                        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2 group-hover:border-primary transition-colors">
                            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce group-hover:bg-primary transition-colors"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
