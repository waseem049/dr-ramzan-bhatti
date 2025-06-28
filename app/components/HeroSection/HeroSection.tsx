import { Icon } from "@/components";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/images/hero_image.png")` }}
      />

      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content Container - Added top padding to account for navbar */}
      <div className="relative z-10 flex items-center min-h-screen pt-24 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="lg:w-3/5 xl:w-1/2 space-y-8">
            {/* Badge/Tag */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 animate-fadeIn">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white text-sm font-montserratRegular">
                Expert Orthopedic Care
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slideUp">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-montserratBold text-white leading-tight">
                Book Your
                <span className="block text-primary drop-shadow-lg">
                  Appointment
                </span>
                <span className="block">Now</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-4 animate-slideUp animation-delay-200">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-montserratRegular leading-relaxed max-w-2xl">
                A Healthier Tomorrow Starts Today: Schedule your appointment!
                <span className="block mt-2 text-primary font-montserratSemibold">
                  Your wellness, our expertise.
                </span>
              </p>
            </div>

            {/* Doctor Credentials */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 animate-slideUp animation-delay-300">
              <div className="flex items-center gap-2">
                <Icon iconName="about" className="text-primary" />
                <span>MBBS, DNB Orthopedics</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Icon iconName="location" className="text-primary" />
                <span>Fellowship Germany</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideUp animation-delay-400">
              {/* Primary CTA */}
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                <Icon
                  iconName="phone"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Book Consultation</span>
                <Icon
                  iconName="caretRight"
                  className="text-white group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Icon iconName="about" className="text-primary" />
                <span>Learn More</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20 animate-slideUp animation-delay-500">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-montserratBold text-primary">
                  10+
                </div>
                <div className="text-sm text-gray-300 font-montserratRegular">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-montserratBold text-primary">
                  35K+
                </div>
                <div className="text-sm text-gray-300 font-montserratRegular">
                  Happy Patients
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-montserratBold text-primary">
                  3K+
                </div>
                <div className="text-sm text-gray-300 font-montserratRegular">
                  Knee Surgeries
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-montserratBold text-primary">
                  4K+
                </div>
                <div className="text-sm text-gray-300 font-montserratRegular">
                  Hip Surgeries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-montserratRegular">
            Scroll to explore
          </span>
          <Icon iconName="caretRight" className="rotate-90" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden lg:block" />
    </div>
  );
};
