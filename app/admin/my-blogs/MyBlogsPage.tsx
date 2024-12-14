"use client";
import { Loading } from "@/components";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Blogs } from "./Components/Blogs";
import { Modal } from "@/components/Modal";
import { BlogControl } from "@/components/BlogControl";
import { UpdateBlog } from "./Components/UpdateBlog";
import { useUser } from "@/hooks/useUser";
import { useFetchMyBlogs } from "@/hooks/useFetchMyBlogs";
import { Blog } from "@prisma/client";

export const MyBlogsPage = () => {
  const { blogs, isLoading: loadingBlogs, refetch } = useFetchMyBlogs();
  const { user, isLoading: loadingUser } = useUser();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modal, setModal] = useState(false);
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

  useEffect(() => {
    if (typeof window !== undefined) {
      if (modal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal]);

  const handleToggleModal = () => {
    setModal(!modal);
  };

  if (checkingAuth || loadingUser || loadingBlogs)
    return <Loading className="text-white" size="4x" />;

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-end items-center">
      <div className="w-full h-[90%] flex md:flex-row flex-col md:p-10 p-5 gap-10 ">
        <Blogs
          blogs={blogs}
          selectedBlog={selectedBlog}
          setSelectedBlog={setSelectedBlog}
        />
      </div>
      <BlogControl
        openUpdateModal={handleToggleModal}
        blogSelected={Boolean(selectedBlog)}
      />
      <Modal
        setSelectedBlog={setSelectedBlog}
        refetch={refetch}
        content={UpdateBlog}
        isVisible={modal}
        closeModal={handleToggleModal}
        userId={user?.id || ""}
        blog={selectedBlog}
      />
    </div>
  );
};
