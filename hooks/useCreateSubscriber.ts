import { ApiResponse } from "@/utils/types";
import { useState } from "react";

export const useCreateSubscriber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const createSubscriber = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success && data.response === ApiResponse.CREATION_SUCCESS) {
        return { success: true, response: data.response, data: data.data };
      } else {
        setError(ApiResponse.CREATION_FAILURE);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Creating Subscriber:", err);
      setError(ApiResponse.CREATION_FAILURE);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    createSubscriber,
    isLoading,
    error,
  };
};
