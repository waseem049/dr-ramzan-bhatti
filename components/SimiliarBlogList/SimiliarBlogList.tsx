"use client";

import { SimiliarBlogCard } from "@/components";
import { Blog } from "@/utils/types";

type SimiliarBlogListProps = {
  slug: string;
};

export const SimiliarBlogList: React.FC<SimiliarBlogListProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slug,
}) => {
  const blogs: Blog[] = [];
  const isLoading = false;

  const renderBlogCards = () => {
    if (isLoading) {
      return <div className="w-full text-center text-primary text-[22px]">Loading...</div>;
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
