"use client";
import { Loading } from "@/components";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Blogs } from "./Components/Blogs";

export const MyBlogsPage = () => {
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

  if (checkingAuth) return <Loading className="text-white" size="4x" />;

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-end items-center border">
      <div className="w-full h-[90%] border flex md:flex-row flex-col md:p-10 p-5 gap-10">
        <div className="w-full h-full overflow-y-auto glassbox p-5 md:p-10">
          <Blogs />
        </div>
      </div>
    </div>
  );
};
