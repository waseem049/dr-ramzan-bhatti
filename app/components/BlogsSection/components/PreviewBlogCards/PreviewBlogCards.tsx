"use client";

import { BlogCard } from "@/components";
import { Blog } from "@/utils/types";

type PreviewBlogCardsProps = {
  selectedCategory?: string;
};

export const PreviewBlogCards: React.FC<PreviewBlogCardsProps> = ({
  selectedCategory = "all",
}) => {
  const blogs: Blog[] = [];
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 rounded-2xl h-96"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!blogs || blogs.length < 1) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-montserratBold text-gray-900 mb-2">
          No Articles Found
        </h3>
        <p className="text-gray-600 font-poppinsRegular">
          Check back soon for new medical insights and articles.
        </p>
      </div>
    );
  }

  // Filter blogs based on selected category (for demo purposes)
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs.slice(0, 3)
      : blogs
          .filter((blog) => blog.category?.toLowerCase() === selectedCategory)
          .slice(0, 3);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {filteredBlogs.map((blog, index) => (
        <div
          key={blog.id}
          className="animate-slideUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <BlogCard {...blog} />
        </div>
      ))}
    </div>
  );
};
