"use client";
import { CareerHighlightsCard } from "@/components"; // standardized import
import { CareerHighlights } from "@/utils/constants";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("qualification");

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. Hero Section - Minimalist "Statement" */}
      <section className="relative pt-32 pb-20 px-4 lg:px-16 max-w-[1440px] mx-auto text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulseSlow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] -z-10 animate-pulseSlow animation-delay-500" />

        <h4 className="text-primary font-montserratBold text-sm tracking-[0.2em] uppercase mb-6 animate-fadeInUp">
          Dr. Ramzan Bhatti
        </h4>
        <h1 className="text-5xl lg:text-7xl font-montserratBold text-gray-900 leading-[1.1] mb-8 animate-fadeInUp delay-100">
          The Art & Science <br /> of <span className="text-primary">Skin Health</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-500 font-poppinsLight leading-relaxed animate-fadeInUp delay-200">
          Blending medical expertise with aesthetic vision to deliver personalized, results-driven dermatology care.
        </p>
      </section>

      {/* 2. Portrait & Bio - Split */}
      <section className="px-4 lg:px-16 pb-24 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-slideInLeft">
            <Image src="/images/doctor.png" alt="Dr. Ramzan" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            {/* Overlay Stat */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10 backdrop-blur-[2px]">
              <p className="text-white text-lg font-montserratRegular italic border-l-4 border-primary pl-4">"Healthy skin is the foundation of confidence."</p>
            </div>
          </div>

          <div className="space-y-8 animate-slideInRight delay-200">
            <h3 className="text-3xl font-montserratBold text-gray-900 leading-tight">
              A Decade of <span className="text-primary border-b-4 border-primary/20">Dedication</span>
            </h3>
            <p className="text-gray-600 font-poppinsRegular leading-relaxed text-lg">
              Dr. Ramzan Bhatti is more than just a dermatologist; he is a partner in your skin health journey. With over 10 years of clinical experience, he has treated thousands of patients, addressing complex skin conditions with a compassionate, evidence-based approach.
            </p>
            <p className="text-gray-600 font-poppinsRegular leading-relaxed text-lg">
              His clinic is equipped with state-of-the-art laser technology, ensuring that every treatment—whether medical or cosmetic—adheres to the highest global safety standards.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="group cursor-default">
                <h4 className="text-4xl font-montserratBold text-primary mb-1 group-hover:translate-x-2 transition-transform duration-300">10+</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500">Years Experience</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-4xl font-montserratBold text-primary mb-1 group-hover:translate-x-2 transition-transform duration-300">5k+</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500">Procedures Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Journey - Clean Tabs */}
      <section className="bg-gray-50 py-24 px-4 lg:px-16 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 border-[40px] border-white/40 rounded-full animate-float -z-0" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-montserratBold text-gray-900 mb-4">Professional Journey</h2>
            <p className="text-gray-500">A timeline of excellence and continuous learning.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp delay-100">
            {Object.entries(CareerHighlights).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full text-sm font-montserratSemibold transition-all duration-300 ${activeTab === key
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white text-gray-500 hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-1"
                  }`}
              >
                {data.heading}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-2xl animate-fadeIn border-t-4 border-primary/20">
            <CareerHighlightsCard
              highlights={CareerHighlights[activeTab as keyof typeof CareerHighlights].highlights}
              heading={CareerHighlights[activeTab as keyof typeof CareerHighlights].heading}
              icon="about"
              isActive={true}
            />
          </div>
        </div>
      </section>

      {/* 4. Values Grid */}
      <section className="py-24 px-4 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Patient-First Approach", desc: "We listen, understand, and tailor every treatment to your unique needs." },
            { title: "Evidence-Based Care", desc: "Treatments grounded in scientific research and global dermatological protocols." },
            { title: "Advanced Technology", desc: "Utilizing FDA-approved lasers and equipment for safe, effective results." }
          ].map((v, i) => (
            <div key={i}
              className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group animate-fadeInUp hover:-translate-y-2"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 group-hover:rotate-6">
                <span className="font-montserratBold text-xl text-primary group-hover:text-white">{i + 1}</span>
              </div>
              <h3 className="text-xl font-montserratBold text-gray-900 mb-4">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <h2 className="text-4xl font-montserratBold mb-8">Start Your Journey to Radiant Skin</h2>
        <Link href="/contact-us" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-montserratBold hover:bg-gray-100 transition-colors shadow-xl">
          Book Consultation
        </Link>
      </section>

    </div>
  );
};
