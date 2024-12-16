import { useState } from "react";
import { BlogDataDto } from "@/utils/dto";
import { ApiResponse, FetchBlogResponse } from "@/utils/types";

export const useCreateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const createBlog = async (blogData: BlogDataDto) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const data: FetchBlogResponse = await response.json();

      if (data.success && data.response === ApiResponse.CREATION_SUCCESS) {
        return { success: true, response: data.response, data: data.data };
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Creating Blog:", err);
      setError(ApiResponse.CREATION_FAILURE);
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
};
