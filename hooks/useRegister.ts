import { useState } from "react";
import {
  RegistrationValues,
  RegistrationResponse,
  ApiResponse,
} from "@/utils/types";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

  const register = async ({
    name,
    email,
    password,
    salutation,
    userName,
  }: RegistrationValues) => {
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
      const data: RegistrationResponse = await response.json();
      if (data.response === ApiResponse.REGISTRATION_SUCCESS && data.success) {
        return {
          success: true,
          response: ApiResponse.REGISTRATION_SUCCESS,
          status: 201,
        };
      } else {
        setError(data.response);
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Error Registering:", err);
      setError(ApiResponse.REGISTRATION_ERROR);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
