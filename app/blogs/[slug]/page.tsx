import { Loading } from "@/components";
import { BlogPage } from "./BlogPage";
import { Suspense } from "react";

type BlogProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <BlogPage slug={slug} />
    </Suspense>
  );
}
