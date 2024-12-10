import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
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

      if (response.ok) {
        localStorage.setItem("jb-admin-token", data.token);
        return { token: data.token };
      } else {
        setError(data.message || "Login Failed");
      }
    } catch (error) {
      setError("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
