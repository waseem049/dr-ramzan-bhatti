"use client";

import { ClinicsData } from "@/utils/constants";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React from "react";

const ClinicDetailsPage = () => {
    const params = useParams();
    const slug = params.slug;

    const clinic = ClinicsData.find((c) => c.slug === slug);

    if (!clinic) {
        return notFound();
    }

    return (
        <div className="w-full bg-white pt-32 pb-20">
            {/* 1. Header Section */}
            <section className="px-4 lg:px-16 max-w-[1440px] mx-auto mb-16">
                <Link href="/clinics" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 font-montserratSemibold text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to All Locations
                </Link>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                        <h4 className="text-primary font-montserratBold text-sm tracking-[0.2em] uppercase mb-4">
                            Welcome To
                        </h4>
                        <h1 className="text-4xl lg:text-6xl font-montserratBold text-gray-900 mb-6 leading-tight">
                            {clinic.name}
                        </h1>
                        <p className="text-xl text-gray-500 font-poppinsLight leading-relaxed mb-8">
                            {clinic.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-montserratBold text-gray-900 mb-1">Address</h5>
                                    <p className="font-poppinsRegular text-gray-600 leading-relaxed">{clinic.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-montserratBold text-gray-900 mb-1">Contact</h5>
                                    <p className="font-poppinsRegular text-gray-600 leading-relaxed">{clinic.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-montserratBold text-gray-900 mb-1">Clinic Timings</h5>
                                    <p className="font-poppinsRegular text-gray-600 leading-relaxed">{clinic.timings}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="/contact-us" className="inline-block bg-primary text-white font-montserratSemibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1">
                                Book Appointment
                            </Link>
                        </div>
                    </div>

                    {/* 2. Map Section */}
                    <div className="flex-1 w-full h-full min-h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe
                            src={clinic.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "500px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClinicDetailsPage;
