import { BlogDataDto } from "@/utils/dto";
import { ApiResponse, FetchBlogResponse } from "@/utils/types";
import { useState } from "react";

export const useUpdateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateBlog = async (
    blogId: string | undefined,
    updationData: BlogDataDto
  ) => {
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
          ...updationData,
        }),
      });

      const data: FetchBlogResponse = await response.json();

      if (data.success && data.response === ApiResponse.UPDATE_SUCCESS) {
        return {
          response: data.response,
          success: data.success,
          data: data.data,
        };
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Updating Blog:", err);
      setError(ApiResponse.UPDATE_FAILURE);
      throw err;
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
