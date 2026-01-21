"use client";
import { BlogContent, SimiliarBlogList } from "@/components";
import { Blog } from "@/utils/types";
import Link from "next/link";
import { Icon } from "@/components";
import { useState, useEffect } from "react";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

type BlogPageProps = {
  blog: Blog;
};

export const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openModal } = useAppointmentBooking();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Modern Breadcrumb / Header */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-4 flex items-center justify-between">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors font-montserratMedium"
          >
            <Icon iconName="arrowLeft" className="text-xs" />
            <span>Back to Journal</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-poppinsRegular text-gray-400">Share this article:</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Icon iconName="facebook" className="text-xs" />
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Icon iconName="twitter" className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Content Area (Centered & Focused) */}
          <div className="lg:col-span-8 lg:col-start-1">
            <article className="prose prose-lg max-w-none">
              {/* Article Header */}
              <div className="mb-12 border-b border-gray-100 pb-12 animate-fadeInUp">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-montserratBold uppercase tracking-wider">
                    {blog.category || "Medical Insight"}
                  </span>
                  <span className="text-gray-400 text-sm font-poppinsRegular">
                    5 min read
                  </span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 leading-tight mb-8">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                    <Icon iconName="user" className="text-gray-400" />
                  </div>
                  <div>
                    <p className="font-montserratSemiBold text-sm text-gray-900">Dr. Ramzan Bhatti</p>
                    <p className="font-poppinsRegular text-xs text-gray-500">Dermatologist & Laser Specialist</p>
                  </div>
                </div>
              </div>

              {/* Actual Content Block */}
              <div className="font-poppinsRegular text-gray-600 leading-relaxed space-y-6">
                <BlogContent blog={blog} />
              </div>
            </article>

            {/* Post-Article Navigation */}
            <div className="mt-16 pt-16 border-t border-gray-100 flex justify-between items-center">
              <Link href="/blogs" className="text-primary font-montserratBold text-sm hover:underline">
                &larr; Previous Article
              </Link>
              <Link href="/blogs" className="text-primary font-montserratBold text-sm hover:underline">
                Next Article &rarr;
              </Link>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <div className="sticky top-24 space-y-8 animate-fadeInUp delay-100">

              {/* Author / Booking Card */}
              <div className="bg-skin-lighter rounded-3xl p-8 text-center border border-accent/20">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Icon iconName="stethoscope" className="text-3xl text-primary" />
                </div>
                <h3 className="font-montserratBold text-gray-900 text-lg mb-2">Expert Consultation</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Have questions about your skin health? Book a session with Dr. Ramzan Bhatti today.
                </p>
                <button
                  onClick={openModal}
                  className="block w-full py-3 bg-primary text-white rounded-full font-montserratSemiBold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Book Appointment
                </button>
              </div>

              {/* Related Articles (Clean List) */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8">
                <h4 className="font-montserratBold text-gray-900 text-sm uppercase tracking-wider mb-6">Related Insights</h4>
                <SimiliarBlogList slug={blog.slug} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
