"use client";
import { ClinicsData } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const ClinicsPage = () => {
    // Clinics Page Component
    return (
        <div className="w-full bg-white pt-32 pb-20">
            <section className="px-4 lg:px-16 max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-primary font-montserratBold text-sm tracking-[0.2em] uppercase mb-4">
                        Our Locations
                    </h4>
                    <h1 className="text-4xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
                        Visit Our <span className="text-primary">Clinics</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 font-poppinsLight leading-relaxed">
                        Conveniently located centers offering world-class dermatological care.
                        Choose the location nearest to you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ClinicsData.map((clinic, index) => (
                        <Link
                            href={`/clinics/${clinic.slug}`}
                            key={index}
                            className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Map Placeholder / Image */}
                            <div className="relative h-64 bg-gray-100 overflow-hidden">
                                <iframe
                                    src={clinic.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-montserratBold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {clinic.name}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3 text-gray-600">
                                        <div className="w-5 h-5 text-primary mt-1 shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-poppinsRegular leading-relaxed">{clinic.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-5 h-5 text-primary shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                                <line x1="12" y1="18" x2="12.01" y2="18" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-poppinsRegular">{clinic.phone}</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-5 h-5 text-primary shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-poppinsRegular">{clinic.timings}</p>
                                    </div>
                                </div>

                                <div className="flex items-center text-primary font-montserratSemibold text-sm tracking-wide">
                                    VIEW DETAILS
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClinicsPage;
