"use client";
import Link from "next/link";
import { PreviewBlogCards } from "./components/PreviewBlogCards";
import { Icon } from "@/components";
import { useState } from "react";

export const BlogsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "surgery", label: "Surgery" },
    { id: "prosthetics", label: "Prosthetics" },
    { id: "recovery", label: "Recovery" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
              Medical Insights
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
            Latest Medical
            <span className="block text-primary">Articles & Insights</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
            {`Stay informed with the latest developments in orthopedic surgery,
            patient care tips, and medical insights from Dr. Jibran Bashir's
            expertise and experience.`}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-montserratSemibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon iconName="blog" className="text-primary" size="lg" />
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900">
              Recent Articles
            </h3>
          </div>

          <PreviewBlogCards selectedCategory={selectedCategory} />
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon iconName="email" className="text-primary" size="lg" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900">
                  Stay Updated
                </h3>
              </div>

              <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg leading-relaxed">
                Subscribe to our newsletter for the latest medical insights,
                treatment updates, and health tips from Dr. Jibran Bashir.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 font-poppinsRegular"
                />
                <button className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-montserratSemibold px-6 py-3 rounded-lg transition-all duration-300">
                  <span>Subscribe</span>
                  <Icon
                    iconName="email"
                    className="text-white group-hover:animate-pulse"
                  />
                </button>
              </div>
              <p className="text-gray-500 text-sm font-poppinsRegular">
                Join 5,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* View More Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Explore More Medical Insights
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Discover comprehensive articles covering all aspects of orthopedic
              care, from prevention to advanced surgical techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blogs"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon
                  iconName="blog"
                  className="text-white group-hover:animate-pulse"
                />
                <span>View All Articles</span>
                <Icon
                  iconName="circleRight"
                  className="text-white group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-primary font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300">
                <Icon iconName="about" className="text-primary" />
                <span>Browse by Category</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
