import { BlogDataDto } from "@/utils/dto";
import { useState } from "react";

export const useUpdateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateBlog = async (blogId: string | undefined, data: BlogDataDto) => {
    if (!blogId) {
      throw new Error("Blog Id is required");
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/blog/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId,
          ...data,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to update blog");
      }

      return result;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while updating the blog"
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateBlog,
    isLoading,
    error,
  };
};
