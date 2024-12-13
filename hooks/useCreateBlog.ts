import { Blog } from "@prisma/client";
import { useState } from "react";

export type BlogDataDto = Omit<Blog, "createdAt" | "updatedAt" | "id" | "user">;

interface UseCreateBlogReturn {
  createBlog: (data: BlogDataDto) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useCreateBlog(): UseCreateBlogReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBlog = async (data: BlogDataDto) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create blog");
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred while creating the blog";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createBlog,
    isLoading,
    error,
  };
}
