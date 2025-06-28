"use client";
import { AccordionList } from "@/components";
import { FAQs } from "@/utils/constants";
import { Icon } from "@/components";
import { useState } from "react";

export const FaqSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter FAQs based on search term
  const filteredFAQs = FAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FAQ Categories for organization
  const categories = [
    { id: "all", label: "All Questions", count: FAQs.length },
    { id: "surgery", label: "Surgery", count: 2 },
    { id: "recovery", label: "Recovery", count: 1 },
    { id: "costs", label: "Costs", count: 1 },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
              Patient Questions
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
            {`Find answers to common questions about orthopedic procedures,
            recovery times, and treatment options. Can't find what you're
            looking for? Contact us directly.`}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Section with Enhanced Design */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Image */}
              <div
                className="w-full h-[400px] lg:h-[600px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("/images/faq_image.png")` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon
                        iconName="about"
                        className="text-primary"
                        size="lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-montserratBold text-gray-900 text-lg">
                        Expert Consultation
                      </h3>
                      <p className="text-gray-600 text-sm font-poppinsRegular">
                        Personalized answers to your questions
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-montserratBold text-primary">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">
                        Support Available
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-montserratBold text-primary">
                        15min
                      </div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* FAQ Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Search and Filter */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon iconName="about" className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 font-poppinsRegular"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-montserratSemibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                <AccordionList accordianItems={filteredFAQs} />
              ) : (
                <div className="text-center py-12">
                  <Icon
                    iconName="error"
                    className="text-gray-400 mb-4"
                    size="2x"
                  />
                  <p className="text-gray-600 font-poppinsRegular">
                    No questions found matching your search.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Contact Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon iconName="phone" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserratBold text-gray-900 text-lg mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 font-poppinsRegular text-sm mb-4">
                    Our medical team is here to provide personalized answers to
                    your specific concerns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-montserratSemibold px-4 py-2 rounded-lg transition-all duration-300">
                      <Icon
                        iconName="phone"
                        className="text-white group-hover:animate-pulse"
                      />
                      <span>Call Now</span>
                    </button>
                    <button className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-primary text-primary font-montserratSemibold px-4 py-2 rounded-lg transition-all duration-300">
                      <Icon iconName="email" className="text-primary" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100 text-center">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Ready to Schedule Your Consultation?
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Get personalized answers and discuss your treatment options with
              Dr. Jibran Bashir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Icon
                  iconName="calendar"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Book Appointment</span>
              </button>

              <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-primary font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300">
                <Icon iconName="phone" className="text-primary" />
                <span>Call (555) 123-4567</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
