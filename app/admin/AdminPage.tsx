"use client";
import { Loading } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AdminPage = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthToken = () => {
      const token = localStorage.getItem("jb-admin-token");
      if (!token) {
        router.push("/login");
      }
    };
    checkAuthToken();
    setCheckingAuth(false);
    return () => {};
  }, [router]);

  if (checkingAuth) return <Loading className="text-black" />;

  return (
    <div className="w-[100vw] h-[100vh] bg-background  flex justify-center items-center">
      <h1 className="font-poppinsRegular text-foreground text-[40px]">
        Admin Page
      </h1>
    </div>
  );
};
