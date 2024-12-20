import { useState, useEffect } from "react";
import { Contact } from "@prisma/client";
import { FetchContactResponse, ApiResponse } from "@/utils/types";

export const useGetContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const fetchContacts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("jb-admin-token");

      if (!token) {
        setError(ApiResponse.AUTH_TOKEN_MISSING);
        throw new Error("Authentication Token Not Found");
      }

      const response = await fetch("/api/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data: FetchContactResponse = await response.json();

      if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
        setContacts(data.data || []);
      } else {
        setError(data.response);
      }
    } catch (err) {
      console.error("Error Fetching Contacts:", err);
      setError(ApiResponse.FETCH_FAILURE);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const refetch = () => fetchContacts();

  return {
    contacts,
    isLoading,
    error,
    refetch,
  };
};
