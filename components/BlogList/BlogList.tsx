"use client";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";
import { useState } from "react";
import { BlogCard } from "../BlogCard";
import { PaginationBar } from "@/components";
import { Icon } from "@/components";

type BlogListProps = {
  selectedCategory?: string;
};

export const BlogList: React.FC<BlogListProps> = ({
  selectedCategory = "all",
}) => {
  const [skip, setSkip] = useState<number>(0);
  const { blogs, count, isLoading } = useFetchBlogs(skip, 9);

  const currentPage = Math.floor(skip / 9) + 1;
  const totalPages = Math.ceil(count / 9);

  const handlePageChange = (page: number) => {
    setSkip((page - 1) * 9);
    // Scroll to top of blog list
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter blogs by category
  const filteredBlogs = blogs.filter((blog) => {
    return (
      selectedCategory === "all" ||
      blog.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  });

  const renderBlogs = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-2xl h-96"></div>
            </div>
          ))}
        </div>
      );
    }

    if (filteredBlogs.length < 1) {
      return (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon iconName="blog" className="text-gray-400" size="2x" />
          </div>
          <h3 className="text-2xl font-montserratBold text-gray-900 mb-4">
            No Articles Found
          </h3>
          <p className="text-gray-600 font-poppinsRegular text-lg mb-8 max-w-md mx-auto">
            {selectedCategory !== "all"
              ? "No articles found in this category. Try browsing other categories."
              : "Check back soon for new medical insights and articles."}
          </p>
        </div>
      );
    }

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

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Blog Grid */}
      <div className="min-h-[400px]">{renderBlogs()}</div>

      {/* Pagination */}
      {totalPages > 1 && !isLoading && filteredBlogs.length > 0 && (
        <div className="flex justify-center">
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
