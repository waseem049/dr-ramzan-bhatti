import { useState } from "react";
import { LoginValues, LoginResponse, ApiResponse } from "@/utils/types";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const login = async ({ email, password }: LoginValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await response.json();

      if (
        data.success &&
        data.response === ApiResponse.LOGIN_SUCCESS &&
        data.data?.token
      ) {
        localStorage.setItem("jb-admin-token", data.data.token);
        return { success: true, status: 200, response: data.response };
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Logging In:", err);
      setError(ApiResponse.LOGIN_ERROR);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error,
  };
};
