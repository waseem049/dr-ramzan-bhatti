"use client";
import { AnimatedNumber } from "@/components";
import { Icon } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("counter-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const achievements = [
    {
      number: 10,
      suffix: "+",
      title: "Years of Experience",
      description: "Dedicated orthopedic practice",
      icon: "calendar",
      color: "from-blue-500 to-blue-600",
      delay: "0ms",
    },
    {
      number: 35000,
      suffix: "+",
      title: "Happy Patients",
      description: "Successful treatments delivered",
      icon: "about",
      color: "from-green-500 to-green-600",
      delay: "200ms",
    },
    {
      number: 20000,
      suffix: "+",
      title: "Orthopedic Procedures",
      description: "Complex surgeries performed",
      icon: "home",
      color: "from-purple-500 to-purple-600",
      delay: "400ms",
    },
    {
      number: 3000,
      suffix: "+",
      title: "Knee Replacement Surgeries",
      description: "Advanced joint replacements",
      icon: "about",
      color: "from-red-500 to-red-600",
      delay: "600ms",
    },
    {
      number: 4000,
      suffix: "+",
      title: "Hip Replacement Surgeries",
      description: "Life-changing procedures",
      icon: "home",
      color: "from-indigo-500 to-indigo-600",
      delay: "800ms",
    },
  ];

  return (
    <section
      id="counter-section"
      className="w-full py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white text-sm font-montserratSemibold uppercase tracking-wider">
              Our Achievements
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-white mb-4">
            Excellence in
            <span className="block">Orthopedic Care</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6" />
          <p className="text-lg lg:text-xl text-white/90 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
            Over a decade of dedicated service, thousands of successful
            procedures, and countless lives transformed through expert
            orthopedic care.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15 ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
              style={{ animationDelay: achievement.delay }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Icon
                    iconName={achievement.icon}
                    className="text-white"
                    size="lg"
                  />
                </div>
              </div>

              {/* Number */}
              <div className="text-center mb-4">
                <div className="text-3xl font-montserratBold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {isVisible ? (
                    <AnimatedNumber value={achievement.number} />
                  ) : (
                    0
                  )}
                  <span className="text-white/80">{achievement.suffix}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-montserratBold text-base lg:text-lg text-center mb-2 group-hover:text-white transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 font-poppinsRegular text-sm text-center leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {achievement.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-white rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Credentials */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-montserratBold text-white mb-6">
                Recognized Excellence
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Fellowship Training",
                    value: "RWTH University, Germany",
                  },
                  { label: "Success Rate", value: "98% Patient Satisfaction" },
                  {
                    label: "Specialization",
                    value: "Robotic Joint Replacement",
                  },
                  { label: "Recognition", value: "International Affiliations" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="flex-1">
                      <span className="text-white/80 text-sm font-poppinsRegular">
                        {item.label}:
                      </span>
                      <span className="text-white font-montserratSemibold text-sm ml-2">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="text-center lg:text-right">
              <h3 className="text-2xl lg:text-3xl font-montserratBold text-white mb-6">
                Join Our Success Stories
              </h3>
              <p className="text-white/90 font-poppinsRegular text-base lg:text-lg mb-8 leading-relaxed">
                Experience the same level of excellence that has helped
                thousands of patients regain their mobility and quality of life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link
                  href={"/contact-us"}
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary font-montserratBold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Icon
                    iconName="calendar"
                    className="text-primary group-hover:animate-pulse"
                  />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            {[
              { icon: "about", text: "Board Certified" },
              { icon: "home", text: "International Training" },
              { icon: "calendar", text: "10+ Years Experience" },
            ].map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon iconName={indicator.icon} className="text-white" />
                <span className="text-white font-montserratSemibold text-sm">
                  {indicator.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
