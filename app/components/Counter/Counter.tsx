"use client";
import { AnimatedNumber, Icon } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById("counter-section");
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  const achievements = [
    {
      number: 10,
      suffix: "+",
      title: "Years Experience",
      icon: "calendar",
      delay: "0ms",
    },
    {
      number: 5000,
      suffix: "+",
      title: "Happy Patients",
      icon: "about",
      delay: "100ms",
    },
    {
      number: 2000,
      suffix: "+",
      title: "Laser Procedures",
      icon: "home",
      delay: "200ms",
    },
    {
      number: 15,
      suffix: "+",
      title: "Awards Won",
      icon: "about",
      delay: "300ms",
    },
    {
      number: 98,
      suffix: "%",
      title: "Success Rate",
      icon: "about",
      delay: "400ms",
    },
  ];

  return (
    <section id="counter-section" className="w-full py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Premium Dark Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 center w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-0 opacity-20" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary/90 text-xs font-montserratBold tracking-[0.2em] uppercase">
              Proven Excellence
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-montserratBold text-white leading-tight mb-6">
            Refining Beauty, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#EFCAC4] to-primary">Restoring Confidence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-poppinsLight leading-relaxed">
            Join thousands who have trusted Dr. Ramzan for their skin health journey. Precision, safety, and artistry in every procedure.
          </p>
        </div>

        {/* Glass Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: item.delay }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-white/10 to-transparent border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-lg">
                <Icon iconName={item.icon} className="text-gray-300 group-hover:text-primary text-xl transition-colors" />
              </div>

              {/* Number - Brand Gradient */}
              <div className="text-4xl lg:text-5xl font-montserratBold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-white group-hover:to-primary transition-all duration-500 mb-2">
                {isVisible ? <AnimatedNumber value={item.number} /> : 0}
                <span className="text-sm align-top ml-1 text-gray-500 group-hover:text-primary/80 transition-colors">{item.suffix}</span>
              </div>

              {/* Title */}
              <p className="text-gray-400 group-hover:text-white font-montserratSemibold text-sm uppercase tracking-wide transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Content Area - Restored & Styled */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-white/5 pt-16">

          {/* Left: Recognized Excellence */}
          <div className="space-y-8 animate-fadeInUp delay-200">
            <h3 className="text-3xl font-montserratBold text-white">
              Recognized <span className="text-primary">Excellence</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Education", value: "MD Dermatology" },
                { label: "Success Rate", value: "98% Satisfaction" },
                { label: "Specialization", value: "Laser & Aesthetics" },
                { label: "Affiliation", value: "IADVL Member" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-primary/20 transition-colors duration-300 group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 group-hover:text-primary/80 transition-colors">{item.label}</p>
                  <p className="text-white font-montserratSemibold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA & Story */}
          <div className="text-center lg:text-right space-y-8 animate-fadeInUp delay-300">
            <div className="space-y-4">
              <h3 className="text-3xl font-montserratBold text-white">
                Start Your <span className="text-primary">Journey</span>
              </h3>
              <p className="text-gray-400 font-poppinsLight leading-relaxed text-lg">
                Experience the perfect blend of medical expertise and aesthetic artistry.
                Your path to radiant, healthy skin begins with a conversation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-4">
              <Link href="/appointment" className="group relative px-8 py-4 bg-primary text-white font-montserratBold rounded-full overflow-hidden shadow-[0_0_20px_rgba(216,141,127,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,141,127,0.6)]">
                <span className="relative z-10 flex items-center gap-3">
                  Book Consultation
                  <Icon iconName="caretRight" className="text-xl group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Trust Indicators (Subtle) */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 lg:gap-12 opacity-30 hover:opacity-100 transition-opacity duration-500">
          {["Board Certified", "FDA Approved Tech", "Award Winning Clinic"].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon iconName="check" className="text-primary text-xs" />
              <span className="text-sm font-montserratMedium text-gray-300 tracking-widest uppercase">{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
