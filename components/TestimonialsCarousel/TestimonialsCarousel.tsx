"use client";
import { useState, useEffect } from "react";
import { FeedbackCard } from "../FeedbackCard";
import { Icon } from "../Icon";
import { Testimonials } from "@/utils/constants";

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const totalTestimonials = Testimonials.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, totalTestimonials]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-12">
        
        {/* Testimonial Cards */}
        <div className="relative min-h-[400px] lg:min-h-[350px]">
          {Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <FeedbackCard
                name={testimonial.name}
                treatmentReceived={testimonial.treatmentReceived}
                feedback={testimonial.feedback}
                displayPicture={testimonial.displayPicture}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary text-gray-800 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
          aria-label="Previous testimonial"
        >
          <Icon iconName="arrow-left" className="text-xl group-hover:animate-pulse" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary text-gray-800 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
          aria-label="Next testimonial"
        >
          <Icon iconName="arrow-right" className="text-xl group-hover:animate-pulse" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {Testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-10 h-3 bg-primary"
                : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="flex items-center gap-2 text-sm font-poppinsRegular text-gray-600 hover:text-primary transition-colors"
        >
          <Icon iconName={isAutoPlay ? "pause" : "play"} className="text-lg" />
          <span>{isAutoPlay ? "Pause" : "Play"} Auto-play</span>
        </button>
        
        <div className="text-sm text-gray-500 font-poppinsRegular">
          {currentIndex + 1} / {totalTestimonials}
        </div>
      </div>

      {/* Progress Bar */}
      {isAutoPlay && !isPaused && (
        <div className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 animate-progress"
            style={{ 
              animation: "progress 5s linear forwards",
              animationPlayState: isPaused ? "paused" : "running"
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
