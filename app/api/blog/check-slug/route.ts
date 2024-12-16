import prisma from "@/utils/prisma";
import { ApiResponse } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const blogId = searchParams.get("blogId");

  if (!slug) {
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.BLOG_SLUG_MISSING,
        error: "Blog Slug Missing",
      },
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

    return NextResponse.json({
      success: true,
      response: ApiResponse.FETCH_SUCCESS,
      exists: !!existingBlog,
    });
  } catch (error) {
    console.error("Failed To Check Slug:", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.SLUG_CHECK_ERROR,
        error: "Failed to Check Slug",
      },
      { status: 500 }
    );
  }
}
