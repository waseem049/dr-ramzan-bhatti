import { useState } from "react";
import { Contact } from "@prisma/client";
import { ContactResponses, CreateContactResponse } from "@/utils/types";

export const useCreateContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ContactResponses | null>(null);
  const [contact, setContact] = useState<Contact | null>(null);

  const createContact = async (contactData: CreateContactResponse) => {
    setIsLoading(true);
    setError(null);
    setContact(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data: CreateContactResponse = await response.json();

      if (
        data.success &&
        data.response === ContactResponses.SUBMISSION_SUCCESS
      ) {
        setContact(data.data as Contact);
        return data.data;
      } else {
        setError(ContactResponses.SUBMISSION_FAILURE);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Creating Contact:", err);
      setError(ContactResponses.SUBMISSION_FAILURE);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createContact,
    isLoading,
    error,
    contact,
  };
};
