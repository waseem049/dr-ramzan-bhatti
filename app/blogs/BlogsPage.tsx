"use client";
import { BlogList } from "@/components";
import { Icon } from "@/components";
import { useState } from "react";

export const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "skin-care", label: "Skin Care" },
    { id: "treatments", label: "Treatments" },
    { id: "skin-conditions", label: "Skin Conditions" },
    { id: "anti-aging", label: "Anti-Aging" },
    { id: "hair-care", label: "Hair Care" },
    { id: "cosmetic-procedures", label: "Cosmetic Procedures" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">

      {/* Premium Hero Section */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Subtle Background Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative z-10 text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-5">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-montserratSemibold uppercase tracking-widest">
                Skin Care Knowledge
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-montserratBold text-gray-900 mb-5 tracking-tight">
              Dermatology Articles &
              <span className="block text-primary">Expert Insights</span>
            </h1>

            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-5" />

            <p className="text-base lg:text-lg text-gray-600 font-poppinsRegular leading-relaxed max-w-2xl mx-auto">
              Explore comprehensive articles on dermatology, skin care
              routines, and medical innovations from Dr. Ramzan Bhatti&apos;s expertise
              and clinical experience.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="px-4 sm:px-6 lg:px-16 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 animate-fadeInUp">
            <div className="text-center">
              <h3 className="text-base font-montserratSemibold text-gray-700 mb-5">
                Browse by Category
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm font-montserratSemibold transition-all duration-300 ${selectedCategory === category.id
                      ? "bg-primary text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 hover:border-primary/30"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog List */}
      <div className="px-4 sm:px-6 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-fadeInUp">
            <Icon iconName="blog" className="text-primary" />
            <h2 className="text-xl lg:text-2xl font-montserratBold text-gray-900">
              All Articles
            </h2>
          </div>

          <BlogList selectedCategory={selectedCategory} />
        </div>
      </div>

      {/* Premium Newsletter Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon iconName="email" className="text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-montserratBold text-gray-900">
                    Stay Informed
                  </h3>
                </div>

                <p className="text-gray-600 font-poppinsRegular text-sm lg:text-base leading-relaxed">
                  Subscribe to our medical newsletter for the latest research
                  insights, treatment updates, and health tips delivered
                  directly to your inbox.
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Icon iconName="check" className="text-primary" />
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon iconName="check" className="text-primary" />
                    <span>No spam guarantee</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 font-poppinsRegular"
                  />
                  <button className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-montserratSemibold px-5 py-2.5 text-sm rounded-lg transition-all duration-300">
                    <span>Subscribe</span>
                    <Icon
                      iconName="email"
                      className="text-white group-hover:animate-pulse text-sm"
                    />
                  </button>
                </div>
                <p className="text-gray-500 text-xs font-poppinsRegular">
                  Join healthcare professionals and patients. Unsubscribe
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
