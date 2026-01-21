"use client";
import { useState, useEffect } from "react";
import { SimiliarBlogCard } from "@/components";
import { Blog } from "@/utils/types";

type SimiliarBlogListProps = {
  slug: string;
};

export const SimiliarBlogList: React.FC<SimiliarBlogListProps> = ({
  slug,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/blogs?excludeSlug=${slug}&limit=4`);
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, [slug]);

  const renderBlogCards = () => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-24"></div>
            </div>
          ))}
        </div>
      );
    } else if (blogs.length < 1) {
      return (
        <div className="text-center text-gray-500 text-sm py-8">
          No related articles found
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <SimiliarBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      );
    }
  };

  return <div className="w-full">{renderBlogCards()}</div>;
};
