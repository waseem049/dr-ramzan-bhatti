"use client";
import { FeedbackCard } from "@/components";
import { Testimonials } from "@/utils/constants";
import { Icon } from "@/components";
import { useState, useEffect } from "react";

export const FeedbackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(Testimonials.length / 2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const totalSlides = Math.ceil(Testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
              Patient Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
            What Our Patients
            <span className="block text-primary">Say About Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
            Real stories from real patients who have experienced life-changing
            orthopedic care and regained their mobility and quality of life.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {[
            { number: "98%", label: "Patient Satisfaction", icon: "about" },
            { number: "4.9/5", label: "Average Rating", icon: "about" },
            { number: "1000+", label: "Success Stories", icon: "home" },
            { number: "24/7", label: "Patient Support", icon: "phone" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon iconName={stat.icon} className="text-primary" size="lg" />
              </div>
              <div className="text-2xl lg:text-3xl font-montserratBold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-poppinsRegular text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8 p-4">
                    {Testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map(
                      (testimonial, index) => (
                        <div key={index} className="h-full">
                          <FeedbackCard {...testimonial} />
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <Icon
              iconName="caretRight"
              className="text-primary rotate-180 group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <Icon
              iconName="caretRight"
              className="text-primary group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-xl lg:text-2xl font-montserratRegular text-gray-700 mb-6 italic leading-relaxed">
                {`"Dr. Jibran Bashir's expertise and compassionate care
                transformed my life. After years of pain, I can now enjoy
                activities I thought were lost forever. His advanced surgical
                techniques and dedicated follow-up care made all the
                difference."`}
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon iconName="about" className="text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-montserratBold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-gray-600 text-sm">
                    Total Hip Replacement Patient
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have regained their mobility and
              quality of life through expert orthopedic care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Icon
                  iconName="calendar"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Schedule Consultation</span>
              </button>

              <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-primary font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300">
                <Icon iconName="phone" className="text-primary" />
                <span>Read More Stories</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
