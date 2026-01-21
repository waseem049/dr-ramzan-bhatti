"use client";
import { useState, useEffect } from "react";
import { BlogCard } from "@/components";
import { BlogModal } from "@/components/BlogModal";
import { Blog } from "@/utils/types";

type PreviewBlogCardsProps = {
  selectedCategory?: string;
};

export const PreviewBlogCards: React.FC<PreviewBlogCardsProps> = ({
  selectedCategory = "all",
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        // Fetch featured blogs or latest 3 blogs
        const response = await fetch('/api/blogs?limit=6');
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

  // Display first 3 blogs
  const displayBlogs = blogs.slice(0, 3);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <BlogCard {...blog} onClick={() => handleBlogClick(blog)} />
          </div>
        ))}
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
