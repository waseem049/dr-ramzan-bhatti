"use client";
import { useState, useEffect } from "react";
import { BlogCard } from "../BlogCard";
import { BlogModal } from "@/components/BlogModal";
import { PaginationBar } from "@/components";
import { Icon } from "@/components";
import { Blog } from "@/utils/types";

type BlogListProps = {
  selectedCategory?: string;
};

export const BlogList: React.FC<BlogListProps> = ({
  selectedCategory = "all",
}) => {
  const [skip, setSkip] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory && selectedCategory !== 'all') {
          params.append('category', selectedCategory);
        }

        const response = await fetch(`/api/blogs?${params.toString()}`);
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs);
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

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

  const handleBlogClick = async (blog: Blog) => {
    // Fetch full blog content if not already loaded
    if (!blog.content || blog.content.length < 100) {
      try {
        const response = await fetch(`/api/blogs/${blog.slug}`);
        const data = await response.json();
        if (data.success) {
          setSelectedBlog(data.blog);
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    } else {
      setSelectedBlog(blog);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBlog(null), 300);
  };

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
            <BlogCard {...blog} onClick={() => handleBlogClick(blog)} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
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

      {/* Blog Modal */}
      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
