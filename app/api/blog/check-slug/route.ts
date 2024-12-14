import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const blogId = searchParams.get("blogId");

  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter is required" },
      { status: 400 }
    );
  }

  try {
    const existingBlog = await prisma.blog.findFirst({
      where: {
        slug: {
          equals: slug,
          mode: "insensitive",
        },
        ...(blogId && { NOT: { id: blogId } }),
      },
    });

    return NextResponse.json({ exists: !!existingBlog });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to check slug" },
      { status: 500 }
    );
  }
}
