"use client";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";
import { useState } from "react";
import { Loading } from "../Loading";
import { BlogCard } from "../BlogCard";
import { PaginationBar } from "@/components";
export const BlogList = () => {
  const [skip, setSkip] = useState<number>(0);
  const { blogs, count, isLoading } = useFetchBlogs(skip, 6);

  const currentPage = Math.floor(skip / 6) + 1;
  const totalPages = Math.ceil(count / 6);

  const handlePageChange = (page: number) => {
    setSkip((page - 1) * 6);
  };

  const renderBlogs = () => {
    if (isLoading) {
      return <Loading size="4x" className="text-primary" />;
    } else if (blogs.length < 1) {
      return (
        <div className="text-primary text-center text-[20px] font-montserratSemibold">
          No Blogs Found
        </div>
      );
    } else {
      return blogs.map((b) => <BlogCard key={b.id} {...b} />);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 lg:gap-12">
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center py-6 lg:py-12 gap-6 lg:gap-12 px-2 lg:px-0">
        {renderBlogs()}
      </div>
      {totalPages > 1 && (
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
