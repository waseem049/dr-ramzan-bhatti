"use client";
import Link from "next/link";
import { PreviewBlogCards } from "./components/PreviewBlogCards";
import { Icon } from "@/components";
import { useState } from "react";

export const BlogsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "surgery", label: "Dermatology" },
    { id: "prosthetics", label: "Laser" },
    { id: "recovery", label: "Aesthetics" },
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">

        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16 animate-fadeInUp">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-primary/60"></div>
              <span className="text-primary font-montserratSemibold text-xs tracking-[0.2em] uppercase">Skin Health Education</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserratBold text-gray-900 leading-tight mb-6">
              Medical Insights <br />
              <span className="text-gray-400 font-poppinsLight italic">& Innovations</span>
            </h2>
            <p className="text-gray-500 font-poppinsRegular text-lg leading-relaxed">
              Stay informed with expert-curated articles on the latest in dermatology, laser treatments, and skin health maintenance.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-montserratMedium transition-all duration-300 border ${selectedCategory === category.id
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white border-gray-200 text-gray-500 hover:border-primary/50 hover:text-primary"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mb-16">
          <PreviewBlogCards selectedCategory={selectedCategory} />
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-montserratBold text-sm uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary hover:gap-4 transition-all duration-300"
          >
            <span>View All Articles</span>
            <Icon iconName="arrowRight" className="text-lg" />
          </Link>
        </div>

      </div>
    </section>
  );
};
