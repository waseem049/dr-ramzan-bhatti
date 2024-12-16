import { ApiResponse, FetchBlogResponse } from "@/utils/types";
import { Blog } from "@prisma/client";
import { useState, useEffect } from "react";

export const useFetchBlogBySlug = (slug: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/blog/${slug}`);

        const data: FetchBlogResponse = await response.json();

        if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
          setBlog(data.data as Blog);
        } else {
          setError(data.response);
        }
      } catch (err) {
        console.error("Error Fetching Blog:", err);
        setError(ApiResponse.FETCH_FAILURE);
        throw err;
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
