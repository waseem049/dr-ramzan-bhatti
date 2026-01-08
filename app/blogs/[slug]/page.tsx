import { Loading } from "@/components";
import { BlogPage } from "./BlogPage";
import { Suspense } from "react";
import "@/app/blogs/blog.css";
import { Metadata } from "next";
import type { Blog } from "@/utils/types";

type BlogProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = await params;

  return {
    title: "Blog Not Found",
    description: "The requested blog post could not be found.",
  };
}

export default async function Blog({ params }: BlogProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = await params;
  
  // Blog data is no longer available - API and database removed
  const blog: Blog | null = null;

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-600">The requested blog post could not be found.</p>
      </div>
    </div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <BlogPage blog={blog} />
    </Suspense>
  );
}
