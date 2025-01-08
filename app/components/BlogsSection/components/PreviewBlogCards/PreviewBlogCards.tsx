"use client";

import { BlogCard, Loading } from "@/components";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";

export const PreviewBlogCards = () => {
  const { blogs, isLoading } = useFetchBlogs(0, 3);

  if (isLoading) return <Loading className="text-primary" size="4x" />;
  if (!blogs || blogs.length < 1) return <h1>No Blogs Found</h1>;

  return blogs.map((b) => <BlogCard key={b.id} {...b} />);
};
