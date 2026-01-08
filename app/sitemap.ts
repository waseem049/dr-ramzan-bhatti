import prisma from "@/utils/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs: { slug: string; updatedAt: Date }[] = [];

  try {
    blogs = await prisma.blog.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    // If DATABASE_URL is not available during build, continue without blog entries
    console.warn("Could not fetch blogs for sitemap:", error);
  }

  return [
    {
      url: "https://drramzanbhatti.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...blogs.map((blog) => ({
      url: `https://drramzanbhatti.com/blogs/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
