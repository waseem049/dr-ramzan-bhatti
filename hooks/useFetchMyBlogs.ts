import { ApiResponse, FetchBlogResponse } from "@/utils/types";
import { Blog } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFetchMyBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("jb-admin-token");

      if (!token) {
        throw new Error("Authentication Token Not Found");
      }

      const response = await fetch("/api/blog/my-blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data: FetchBlogResponse = await response.json();

      if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
        setBlogs(data.data as Blog[]);
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Fetching User Blogs:", err);
      setError(ApiResponse.FETCH_FAILURE);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const refetch = () => {
    fetchBlogs();
  };

  return { blogs, isLoading, error, refetch };
};
