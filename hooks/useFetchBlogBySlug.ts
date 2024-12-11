import { Blog } from "@prisma/client";
import { useState, useEffect } from "react";

export const useFetchBlogBySlug = (slug: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/blog/${slug}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch blog");
        }

        const data: Blog = await response.json();
        setBlog(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  return { blog, isLoading, error };
};
