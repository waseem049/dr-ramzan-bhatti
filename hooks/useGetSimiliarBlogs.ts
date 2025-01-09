import { ApiResponse, FetchSimiliarBlogsResponse } from "@/utils/types";
import { Blog } from "@prisma/client";
import { useEffect, useState } from "react";

export const useGetSimiliarBlogs = (slug: string) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const fetchSimiliarBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/blog/similiar-blogs?slug=${slug}&take=10&skip=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data: FetchSimiliarBlogsResponse = await response.json();

      if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
        setBlogs(data.data as Blog[]);
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Fetching Similiar Blogs:", err);
      setError(ApiResponse.FETCH_FAILURE);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSimiliarBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return {
    blogs,
    isLoading,
    error,
  };
};
