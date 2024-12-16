import { useState } from "react";

import { ApiResponse, CreateContactResponse } from "@/utils/types";

export const useCreateContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const createContact = async (contactData: CreateContactResponse) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data: CreateContactResponse = await response.json();

      if (data.success && data.response === ApiResponse.CREATION_SUCCESS) {
        return { success: true, response: data.response, data: data.data };
      } else {
        setError(ApiResponse.CREATION_FAILURE);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Creating Contact:", err);
      setError(ApiResponse.CREATION_FAILURE);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createContact,
    isLoading,
    error,
  };
};
