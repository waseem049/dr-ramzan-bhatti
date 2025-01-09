import { ApiResponse, FetchBlogsWithPaginationResponse } from "@/utils/types";
import { Blog } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFetchBlogs = (skip: number, take: number) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);
  const [count, setCount] = useState<number>(0);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/blog?skip=${skip}&take=${take}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: FetchBlogsWithPaginationResponse = await response.json();

      if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
        setBlogs(data.data?.blogs as Blog[]);
        setCount(data.data?.count as number);
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Fetching User Blogs:", err);
      setError(ApiResponse.FETCH_FAILURE);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, take]);

  return {
    blogs,
    count,
    isLoading,
    error,
  };
};
