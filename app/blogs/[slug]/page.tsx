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

async function getBlogPost(slug: string): Promise<Blog | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.blog : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Dr. Ramzan Bhatti",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.seo?.metaTitle || `${blog.title} | Dr. Ramzan Bhatti`,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords: blog.seo?.keywords || blog.tags?.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.featuredImage ? [blog.featuredImage] : [],
      type: 'article',
      publishedTime: blog.publishedDate || blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author],
      tags: blog.tags,
    },
  };
}

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-montserratBold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 font-poppinsRegular mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-montserratSemiBold hover:bg-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <BlogPage blog={blog} />
    </Suspense>
  );
}
