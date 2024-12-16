import { useState } from "react";
import { Registration, RegistrationResponses } from "@/utils/types";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<RegistrationResponses | null>(null);

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
      const data = await response.json();
      if (data.response === RegistrationResponses.REGISTRATION_SUCCESS) {
        return {
          response: RegistrationResponses.REGISTRATION_SUCCESS,
          status: 201,
        };
      } else {
        setError(data.response);
      }
    } catch (error) {
      console.error(error);
      setError(RegistrationResponses.ERROR_REGISTERING);
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
