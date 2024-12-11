import { useState } from "react";
import { Registration } from "@/utils/types";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async ({
    name,
    email,
    password,
    salutation,
    userName,
  }: Registration) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, salutation, userName }),
      });

      if (response.ok) {
        return { message: "Account Created Successfully", status: 201 };
      }
    } catch (error) {
      console.error(error);
      console.log(error);
      setError("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
