"use client";
import { BlogCard, Loading } from "@/components";
import { useFetchMyBlogs } from "@/hooks/useFetchMyBlogs";

export const Blogs: React.FC = () => {
  const { blogs, isLoading } = useFetchMyBlogs();

  if (isLoading) return <Loading className="text-white" size="2x" />;

  return (
    <div className="w-full h-full flex flex-row flex-wrap overflow-y-auto">
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          slug={b.slug}
          title={b.title}
          author={b.author}
          excerpt={b.excerpt}
          createdAt={b.createdAt}
        />
      ))}
    </div>
  );
};
