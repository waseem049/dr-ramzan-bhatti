"use client";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { Blog } from "@/utils/types";
import ReactMarkdown from "react-markdown";

interface BlogModalProps {
  blog: Blog;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ blog, isOpen, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const modalContent = document.getElementById("blog-modal-content");
      const handleScroll = () => {
        if (modalContent) {
          const scrollTop = modalContent.scrollTop;
          const scrollHeight = modalContent.scrollHeight - modalContent.clientHeight;
          const progress = (scrollTop / scrollHeight) * 100;
          setScrollProgress(progress);
        }
      };

      modalContent?.addEventListener("scroll", handleScroll);
      return () => {
        document.body.style.overflow = "unset";
        modalContent?.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[101]">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        
        {/* Header with Close Button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-montserratBold uppercase tracking-wider">
              {blog.category || "Article"}
            </span>
            <span className="text-gray-400 text-sm font-poppinsRegular">
              {blog.views || 0} views
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
            aria-label="Close modal"
          >
            <Icon iconName="times" className="text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div id="blog-modal-content" className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 lg:px-12 py-8">
          
          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden mb-8 bg-gray-100">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <div className="mb-8 pb-8 border-b border-gray-100">
            <h1 className="text-3xl lg:text-4xl font-montserratBold text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            
            <p className="text-lg text-gray-600 font-poppinsRegular mb-6">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Icon iconName="user-doctor" className="text-white text-xl" />
              </div>
              <div>
                <p className="font-montserratSemiBold text-sm text-gray-900">
                  {blog.author || "Dr. Ramzan Bhatti"}
                </p>
                <p className="font-poppinsRegular text-xs text-gray-500">
                  Dermatologist & Laser Specialist
                </p>
              </div>
              
              {blog.publishedDate && (
                <div className="ml-auto text-right">
                  <p className="text-xs text-gray-500 font-poppinsRegular">
                    Published on
                  </p>
                  <p className="text-sm text-gray-700 font-montserratMedium">
                    {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none font-poppinsRegular text-gray-700 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-montserratBold text-gray-900 mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-montserratBold text-gray-900 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-montserratSemiBold text-gray-900 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="ml-4">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-montserratBold text-gray-900">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary hover:text-primary-600 underline font-montserratMedium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-gray-600 bg-gray-50 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 text-primary px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-montserratBold text-gray-700 mb-3">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-poppinsRegular hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-montserratBold text-gray-700 mb-2">
                Share this article
              </p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon iconName="facebook-f" />
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Icon iconName="twitter" />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Icon iconName="instagram" />
                </button>
                <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Icon iconName="whatsapp" />
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 bg-primary text-white rounded-full font-montserratSemiBold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
