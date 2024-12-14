import { Blog } from "@prisma/client";
import { useState, useEffect } from "react";

export const useFetchMyBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("jb-admin-token");

      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await fetch("/api/blog/my-blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data.blogs);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Return function to manually refetch blogs if needed
  const refetch = () => {
    fetchBlogs();
  };

  return { blogs, isLoading, error, refetch };
};
