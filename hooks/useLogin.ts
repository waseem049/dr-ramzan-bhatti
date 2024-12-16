import { Login, LoginResponses } from "@/utils/types";
import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<LoginResponses | null>(null);

  const login = async ({ email, password }: Login) => {
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

      const data = await response.json();

      if (data.response === LoginResponses.LOGIN_SUCCESS) {
        localStorage.setItem("jb-admin-token", data.token);
        return { token: data.token };
      } else {
        setError(data.response);
      }
    } catch (error) {
      console.error(error);
      setError(LoginResponses.ERROR_LOGGING_IN);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
