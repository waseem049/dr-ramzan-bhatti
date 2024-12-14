import { UserDataDto } from "@/utils/dto";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState<UserDataDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch user data");
      }

      const userData = await response.json();

      setUser(userData);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      setUser(null);
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
