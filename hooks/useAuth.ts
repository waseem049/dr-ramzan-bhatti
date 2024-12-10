import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    setIsLoggedIn(!!token);
  }, []);

  return { isLoggedIn };
};
