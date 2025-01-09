"use client";

import { useGetSimiliarBlogs } from "@/hooks/useGetSimiliarBlogs";
import { Loading } from "../Loading";
import { SimiliarBlogCard } from "@/components";

type SimiliarBlogListProps = {
  slug: string;
};

export const SimiliarBlogList: React.FC<SimiliarBlogListProps> = ({ slug }) => {
  const { blogs, isLoading } = useGetSimiliarBlogs(slug);
  const renderBlogCards = () => {
    if (isLoading) {
      return <Loading size="4x" className="text-primary" />;
    } else if (blogs.length < 1) {
      return (
        <div className="w-full text-center text-primary text-[22px]">
          No Blogs Found
        </div>
      );
    } else {
      return blogs.map((blog) => {
        return <SimiliarBlogCard key={blog.id} blog={blog} />;
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-[22px] lg:text-[28px] font-montserratSemibold text-primary text-center">
        Related Blogs
      </h1>
      <div className="w-full gap-4 p-2">{renderBlogCards()}</div>
    </div>
  );
};
