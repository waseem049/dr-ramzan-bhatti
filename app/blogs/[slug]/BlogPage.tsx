"use client";
import { BlogContent, SimiliarBlogList } from "@/components";
import { Blog } from "@prisma/client";
import Link from "next/link";
import { Icon } from "@/components";
import { useState, useEffect } from "react";

type BlogPageProps = {
  blog: Blog;
};

export const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors duration-200 flex items-center gap-1"
            >
              <Icon iconName="home" className="w-4 h-4" />
              Home
            </Link>
            <Icon iconName="chevron-right" className="w-4 h-4 text-gray-400" />
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Blogs
            </Link>
            <Icon iconName="chevron-right" className="w-4 h-4 text-gray-400" />
            <span className="text-primary font-medium truncate max-w-xs">
              {blog.title}
            </span>
          </nav>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="w-full xl:w-[70%]">
              <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
                <div className="p-6 lg:p-8">
                  <BlogContent blog={blog} />
                </div>
              </div>

              {/* Back to Blogs Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Icon iconName="arrow-left" className="w-4 h-4" />
                  Back to All Blogs
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full xl:w-[30%]">
              <div className="xl:sticky xl:top-24 space-y-6">
                {/* Related Blogs Card */}
                <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <SimiliarBlogList slug={blog.slug} />
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-2xl border border-primary/10 overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon
                          iconName="stethoscope"
                          className="w-8 h-8 text-primary"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Need a Consultation?
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Get professional orthopedic advice from Dr. Jibran
                        Bashir
                      </p>
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                      >
                        <Icon iconName="calendar" className="w-4 h-4" />
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Share Card */}
                {/* <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      Share This Article
                    </h3>
                    <div className="flex justify-center space-x-3">
                      <button className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-200">
                        <Icon iconName="facebook" className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100 transition-colors duration-200">
                        <Icon iconName="twitter" className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors duration-200">
                        <Icon iconName="whatsapp" className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <Icon iconName="link" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div> */}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl text-white overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      <Icon
                        iconName="mail"
                        className="w-12 h-12 mx-auto mb-4 opacity-90"
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        Stay Updated
                      </h3>
                      <p className="text-primary-50 mb-4 text-sm">
                        Get the latest medical insights and health tips
                      </p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <button className="w-full px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-gray-50 transition-colors duration-200">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
