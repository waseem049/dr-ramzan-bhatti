"use client";
import { Loading } from "@/components";
import { BlogCard } from "@/components";
import { useFetchMyBlogs } from "@/hooks/useFetchMyBlogs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const MyBlogsPage = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();
  const { blogs, isLoading } = useFetchMyBlogs();

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

  if (checkingAuth || isLoading) return <Loading />;

  return (
    <div className="w-[100vw] h-[100vh] bg-background flex flex-col justify-center items-center">
      <h1 className="font-poppinsRegular text-foreground text-[40px]">
        My Blogs Page
      </h1>
      {blogs &&
        blogs.map((b) => (
          <BlogCard
            key={b.id}
            title={b.title}
            author={b.author}
            excerpt={b.excerpt}
            createdAt={b.createdAt}
            slug={b.slug}
          />
        ))}
    </div>
  );
};
