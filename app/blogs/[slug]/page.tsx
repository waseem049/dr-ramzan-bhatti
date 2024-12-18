import { Loading } from "@/components";
import { BlogPage } from "./BlogPage";
import { Suspense } from "react";
import "@/app/blogs/blog.css";
import prisma from "@/utils/prisma";
import { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";

type BlogProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBaseUrl() {
  const headersList = headers();
  const host = (await headersList).get("host") || "";
  const proto = (await headersList).get("x-forwarded-proto") || "http";
  return `${proto}://${host}`;
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }
  const baseUrl = await getBaseUrl();
  return {
    title: blog.title,
    description: blog.excerpt,
    authors: [{ name: blog.author }],
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      images: blog.coverImage ? [blog.coverImage] : [],
      publishedTime: blog.createdAt.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
    alternates: {
      canonical: `${baseUrl}/blogs/${slug}`,
    },
  };
}

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  const baseUrl = await getBaseUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    image: blog.coverImage,
    url: `${baseUrl}/blogs/${slug}`,
    keywords: blog.tags.join(", "),
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<Loading />}>
        <BlogPage blog={blog} />
      </Suspense>
    </>
  );
}
