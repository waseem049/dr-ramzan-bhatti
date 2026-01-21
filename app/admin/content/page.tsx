"use client";
import { useState } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";
import Link from "next/link";

type ContentType = "blogs" | "treatments" | "faqs" | "testimonials";

export default function ContentPage() {
  const { hasPermission } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<ContentType>("blogs");

  // Check permissions
  if (!hasPermission(["doctor", "editor"])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-600 font-poppinsRegular">
          You don't have permission to manage content.
        </p>
      </div>
    );
  }

  const contentTypes = [
    { id: "blogs" as ContentType, label: "Blog Posts", icon: "file-lines", count: 24 },
    { id: "treatments" as ContentType, label: "Treatments", icon: "syringe", count: 8 },
    { id: "faqs" as ContentType, label: "FAQs", icon: "circle-question", count: 6 },
    { id: "testimonials" as ContentType, label: "Testimonials", icon: "star", count: 15 },
  ];

  const mockBlogs = [
    {
      id: "1",
      title: "Complete Guide to Acne Treatment",
      slug: "complete-guide-acne-treatment",
      status: "published",
      author: "Dr. Ramzan Bhatti",
      publishedDate: "2026-01-15",
      views: 1234,
    },
    {
      id: "2",
      title: "Laser Hair Removal: Everything You Need to Know",
      slug: "laser-hair-removal-guide",
      status: "published",
      author: "Dr. Ramzan Bhatti",
      publishedDate: "2026-01-10",
      views: 2156,
    },
    {
      id: "3",
      title: "Understanding Melasma and Treatment Options",
      slug: "melasma-treatment-options",
      status: "draft",
      author: "John Smith",
      publishedDate: null,
      views: 0,
    },
  ];

  const mockTreatments = [
    { id: "1", name: "Acne & Scar Treatment", status: "published", updated: "2026-01-15" },
    { id: "2", name: "Laser Hair Removal", status: "published", updated: "2026-01-12" },
    { id: "3", name: "Pigmentation & Melasma", status: "published", updated: "2026-01-10" },
  ];

  const mockFAQs = [
    { id: "1", question: "Is Laser Hair Removal permanent?", status: "published" },
    { id: "2", question: "How can I get rid of Acne Scars?", status: "published" },
    { id: "3", question: "What is the downtime for Chemical Peel?", status: "draft" },
  ];

  const mockTestimonials = [
    { id: "1", patient: "Sarah A.", treatment: "Laser Hair Removal", status: "published", rating: 5 },
    { id: "2", patient: "Ahmed K.", treatment: "Acne Treatment", status: "published", rating: 5 },
    { id: "3", patient: "Priya S.", treatment: "HydraFacial", status: "pending", rating: 5 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "blogs":
        return (
          <div className="space-y-4">
            {mockBlogs.map((blog) => (
              <div
                key={blog.id}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-montserratBold text-gray-900">
                        {blog.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-poppinsMedium capitalize ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-poppinsRegular mb-3">
                      /{blog.slug}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-poppinsRegular">
                      <span className="flex items-center gap-2">
                        <Icon iconName="user" />
                        {blog.author}
                      </span>
                      {blog.publishedDate && (
                        <span className="flex items-center gap-2">
                          <Icon iconName="calendar" />
                          {new Date(blog.publishedDate).toLocaleDateString()}
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <Icon iconName="eye" />
                        {blog.views} views
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Icon iconName="eye" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Icon iconName="pen-to-square" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Icon iconName="trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "treatments":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon iconName="syringe" className="text-primary text-xl" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-poppinsMedium bg-green-100 text-green-800">
                    {treatment.status}
                  </span>
                </div>
                <h3 className="text-lg font-montserratBold text-gray-900 mb-2">
                  {treatment.name}
                </h3>
                <p className="text-sm text-gray-600 font-poppinsRegular mb-4">
                  Updated: {new Date(treatment.updated).toLocaleDateString()}
                </p>
                <div className="flex items-center gap-2">
                  <button className="flex-1 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors font-poppinsMedium text-sm">
                    Edit
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Icon iconName="trash" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "faqs":
        return (
          <div className="space-y-4">
            {mockFAQs.map((faq) => (
              <div
                key={faq.id}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon iconName="circle-question" className="text-primary text-xl" />
                      <h3 className="text-lg font-poppinsMedium text-gray-900">
                        {faq.question}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-poppinsMedium capitalize ${
                          faq.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {faq.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Icon iconName="pen-to-square" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Icon iconName="trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "testimonials":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-montserratBold text-lg">
                        {testimonial.patient.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-montserratBold text-gray-900">
                        {testimonial.patient}
                      </h3>
                      <p className="text-sm text-gray-600 font-poppinsRegular">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-poppinsMedium capitalize ${
                      testimonial.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {testimonial.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} iconName="star" className="text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors font-poppinsMedium text-sm">
                    View
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Icon iconName="pen-to-square" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Icon iconName="trash" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Content Type Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contentTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveTab(type.id)}
            className={`p-6 rounded-xl border-2 transition-all ${
              activeTab === type.id
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <Icon
              iconName={type.icon}
              className={`text-3xl mb-3 ${
                activeTab === type.id ? "text-primary" : "text-gray-400"
              }`}
            />
            <h3 className="font-montserratBold text-lg text-gray-900 mb-1">
              {type.count}
            </h3>
            <p className="text-sm text-gray-600 font-poppinsRegular">{type.label}</p>
          </button>
        ))}
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-montserratBold text-gray-900">
            Manage {contentTypes.find((t) => t.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-poppinsMedium hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Icon iconName="filter" />
              Filter
            </button>
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors flex items-center gap-2">
              <Icon iconName="plus" />
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Content List */}
      {renderContent()}
    </div>
  );
}
