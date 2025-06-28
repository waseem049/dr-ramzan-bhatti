"use client";
import { CareerHighlightsCard } from "@/components";
import { CareerHighlights } from "@/utils/constants";
import { Icon } from "@/components";
import { useState } from "react";

export const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("qualification");

  const sectionIcons = {
    qualification: "about",
    careerHighlights: "home",
    workExperience: "calendar",
    affiliations: "about",
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white text-sm font-montserratSemibold uppercase tracking-wider">
                    Meet the Expert
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-montserratBold leading-tight">
                    Dr. Jibran Bashir
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-montserratSemibold text-white/90">
                    Consultant Orthopedic Surgeon
                  </h2>
                  <div className="w-24 h-1 bg-white rounded-full" />
                </div>

                <p className="text-lg lg:text-xl text-white/90 font-poppinsRegular leading-relaxed">
                  Leading orthopedic surgeon with specialized training in
                  Germany, expertise in robotic joint replacement, and a
                  commitment to advancing patient care through innovative
                  surgical techniques.
                </p>

                {/* Key Credentials */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Experience", value: "10+ Years" },
                    { label: "Fellowship", value: "Germany" },
                    { label: "Procedures", value: "20,000+" },
                    { label: "Specialty", value: "Robotic Surgery" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                    >
                      <div className="text-2xl font-montserratBold text-white">
                        {item.value}
                      </div>
                      <div className="text-white/80 font-poppinsRegular text-sm">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary font-montserratBold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Icon
                      iconName="calendar"
                      className="text-primary group-hover:animate-pulse"
                    />
                    <span>Book Consultation</span>
                  </button>

                  <button className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-montserratBold px-8 py-4 rounded-lg transition-all duration-300">
                    <Icon iconName="phone" className="text-white" />
                    <span>Contact Doctor</span>
                  </button>
                </div>
              </div>

              {/* Professional Image */}
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon iconName="about" className="text-white" size="4x" />
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-primary font-montserratBold text-sm">
                    Fellowship
                  </div>
                  <div className="text-gray-600 text-xs">Germany</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-primary font-montserratBold text-sm">
                    MNAMS
                  </div>
                  <div className="text-gray-600 text-xs">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Journey Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
                Professional Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
              Excellence in
              <span className="block text-primary">Orthopedic Medicine</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
              {`A comprehensive overview of Dr. Jibran Bashir's educational
              background, professional achievements, and commitment to advancing
              orthopedic care.`}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(CareerHighlights).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-montserratSemibold transition-all duration-300 ${
                  activeSection === key
                    ? "bg-primary text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                }`}
              >
                <Icon
                  iconName={sectionIcons[key as keyof typeof sectionIcons]}
                  className={
                    activeSection === key ? "text-white" : "text-primary"
                  }
                />
                <span>{section.heading}</span>
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(CareerHighlights).map(([key, section]) => (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  activeSection === key
                    ? "lg:col-span-2 opacity-100"
                    : "lg:col-span-1 opacity-60 hover:opacity-80"
                }`}
              >
                <CareerHighlightsCard
                  heading={section.heading}
                  highlights={section.highlights}
                  isActive={activeSection === key}
                  icon={sectionIcons[key as keyof typeof sectionIcons]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recognition & Trust Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-6">
              Recognized Excellence in Orthopedic Care
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg max-w-2xl mx-auto">
              {`  Dr. Jibran's commitment to excellence is reflected in his
              international training, professional affiliations, and patient
              outcomes.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "International Training",
                subtitle: "RWTH University, Germany",
                icon: "about",
              },
              {
                title: "Board Certifications",
                subtitle: "Multiple Specializations",
                icon: "home",
              },
              {
                title: "Professional Memberships",
                subtitle: "Global Associations",
                icon: "calendar",
              },
              {
                title: "Patient Satisfaction",
                subtitle: "98% Success Rate",
                icon: "about",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon
                    iconName={item.icon}
                    className="text-primary"
                    size="lg"
                  />
                </div>
                <h4 className="font-montserratBold text-gray-900 text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-poppinsRegular text-sm">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100 text-center">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Experience Expert Orthopedic Care
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              {`Benefit from Dr. Jibran Bashir's extensive experience,
              international training, and commitment to providing the highest
              quality orthopedic care.`}
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
                <span>Contact Office</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
