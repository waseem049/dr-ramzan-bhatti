"use client";
import { AccordionList, Icon } from "@/components"; // standardized import
import { FAQs } from "@/utils/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const FaqSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = FAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-24 bg-white">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h4 className="text-primary font-montserratBold text-sm tracking-[0.2em] uppercase mb-4">
            Common Queries
          </h4>
          <h2 className="text-4xl lg:text-5xl font-montserratBold text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Interactive Search & Accordion */}
          <div className="lg:col-span-7 space-y-8 animate-slideInLeft">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon iconName="search" className="text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for acne, laser, fillers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 font-poppinsRegular outline-none"
              />
            </div>

            {/* Categories (Visual only for now as constants don't have categories mapped yet, but good for UI) */}
            <div className="flex flex-wrap gap-2">
              {["All", "Treatments", "Consultation", "Recovery"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-xs font-montserratSemibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.toLowerCase()
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {filteredFAQs.length > 0 ? (
                <AccordionList accordianItems={filteredFAQs} />
              ) : (
                <div className="p-12 text-center text-gray-500">
                  <p>No matching questions found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Interaction Card */}
          <div className="lg:col-span-5 relative animate-slideInRight delay-200">
            <div className="relative bg-skin-lighter rounded-[2rem] p-8 lg:p-12 overflow-hidden shadow-lg border border-white">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />

              <div className="relative z-10 space-y-6 text-center">
                <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl animate-pulseSlow">
                  <Image
                    src="/images/doctor.png"
                    alt="Dr. Ramzan Bhatti"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="text-2xl font-montserratBold text-gray-900">Still have questions?</h3>
                <p className="text-gray-600 font-poppinsRegular leading-relaxed">
                  Can&apos;t find the answer you&apos;re looking for? Dr. Ramzan and his team are here to help.
                </p>

                <div className="pt-4">
                  <Link href="/contact-us" className="inline-block w-full bg-primary hover:bg-primary/90 text-white font-montserratSemibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                    Contact Support
                  </Link>
                  <p className="mt-4 text-sm text-gray-400">Usually responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
