import { UserDataDto } from "@/utils/dto";
import { FetchUserResponse, ApiResponse } from "@/utils/types";
import { User } from "@prisma/client";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState<UserDataDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiResponse | null>(null);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("jb-admin-token");

      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data: FetchUserResponse = await response.json();

      if (data.success && data.response === ApiResponse.USER_FOUND) {
        setUser(data.data as User);
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Fetching User", err);
      setError(ApiResponse.USER_FETCH_ERROR);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    isLoading,
    error,
  };
};
