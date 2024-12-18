import prisma from "@/utils/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await prisma.blog.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  return [
    {
      url: "https://drjibranbashir.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...blogs.map((blog) => ({
      url: `https://drjibranbashir.com/blogs/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
