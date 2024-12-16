import { useState } from "react";
import { Contact } from "@prisma/client";
import { FetchContactResponse, ContactResponses } from "@/utils/types";

export const useGetContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ContactResponses | null>(null);

  const fetchContacts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("jb-admin-token");

      if (!token) {
        setError(ContactResponses.AUTH_TOKEN_MISSING);
        throw new Error("Authentication Token Not Found");
      }

      const response = await fetch("/api/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data: FetchContactResponse = await response.json();

      if (data.success && data.response === ContactResponses.FETCH_SUCCESS) {
        setContacts(data.data || []);
      } else {
        setError(data.response);
      }
    } catch (err) {
      console.error("Error Fetching Contacts:", err);
      setError(ContactResponses.FETCH_FAILURE);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => fetchContacts();

  return {
    contacts,
    isLoading,
    error,
    refetch,
  };
};
