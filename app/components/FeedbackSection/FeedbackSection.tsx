"use client";
import { Icon } from "@/components";
import { Testimonials } from "@/utils/constants";
import { useState, useEffect } from "react";

export const FeedbackSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Responsive: 2 items per slide for desktop
    const itemsPerSlide = 2;
    const totalSlides = Math.ceil(Testimonials.length / itemsPerSlide);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };

    return (
        <section className="w-full py-24 bg-skin-lightest relative overflow-hidden">

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D88D7F_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 lg:px-16 relative z-10">

                {/* Elegant Header */}
                <div className="text-center mb-20 animate-fadeInUp">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="h-[1px] w-8 bg-primary/40"></div>
                            <span className="text-primary font-montserratSemibold text-xs tracking-[0.25em] uppercase">Testimonials</span>
                            <div className="h-[1px] w-8 bg-primary/40"></div>
                        </div>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
                        Patient Stories
                    </h2>
                    <p className="font-poppinsLight text-2xl lg:text-3xl text-gray-400 italic">
                        &quot;What our patients <span className="text-primary font-poppinsRegular not-italic">Say About Us</span>&quot;
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative max-w-7xl mx-auto">

                    <div className="overflow-hidden px-4 py-8 -mx-4 -my-8">
                        <div
                            className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {Testimonials.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((testimonial, idx) => (
                                            <div key={idx} className="bg-white p-10 rounded-[24px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(216,141,127,0.15)] transition-all duration-300 group ring-1 ring-gray-100 hover:ring-primary/20">

                                                {/* Header: Quote Icon & Rating */}
                                                <div className="flex justify-between items-start mb-8">
                                                    <div className="text-primary/10 group-hover:text-primary transition-colors duration-300">
                                                        <Icon iconName="quote" className="text-5xl" />
                                                    </div>
                                                    <div className="flex gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Icon key={i} iconName="star" className="text-amber-400 w-3 h-3" />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Review Text */}
                                                <p className="text-gray-600 font-poppinsRegular text-lg leading-relaxed mb-8 min-h-[100px]">
                                                    {testimonial.feedback}
                                                </p>

                                                {/* Author Footer */}
                                                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                                    <div className="w-12 h-12 rounded-full bg-skin-lighter flex items-center justify-center text-primary border border-primary/10">
                                                        <Icon iconName="user" className="text-xl" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-900 font-montserratBold text-base">{testimonial.name}</h4>
                                                        <p className="text-gray-400 text-xs font-montserratMedium uppercase tracking-wide">{testimonial.treatmentReceived || "Patient"}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Elegant Controls */}
                    <div className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 z-20">
                        <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300">
                            <Icon iconName="caretRight" className="rotate-180 text-xl" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 z-20">
                        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300">
                            <Icon iconName="caretRight" className="text-xl" />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center mt-12 gap-3">
                        {Array.from({ length: totalSlides }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
                                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                            />
                        ))}
                    </div>

                    {/* Trust Indicators & CTA */}
                    <div className="mt-20 pt-10 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left: Aggregate Score */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                                    <Icon iconName="quote" className="text-primary text-xl" />
                                </div>
                                <div>
                                    <p className="font-montserratBold text-gray-900 leading-tight">4.9/5.0</p>
                                    <p className="text-xs text-gray-400 font-poppinsRegular">Average Rating</p>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-200"></div>
                            <div className="text-sm text-gray-500 font-poppinsRegular">
                                Trusted by <span className="font-montserratBold text-primary">5,000+</span> Confidence Seekers
                            </div>
                        </div>

                        {/* Right: Write Review CTA */}
                        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-primary hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                            <span className="text-sm font-montserratMedium tracking-wide">Read all 200+ Reviews</span>
                            <Icon iconName="caretRight" className="text-xs group-hover:translate-x-1 transition-transform" />
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
};
