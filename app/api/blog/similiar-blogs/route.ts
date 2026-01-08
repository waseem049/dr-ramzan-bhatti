import { NextRequest, NextResponse } from "next/server";

import { BlogStatus } from "@prisma/client";
import prisma from "@/utils/prisma";
import { ApiResponse } from "@/utils/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const take = Number(searchParams.get("take")) || 10;
    const skip = Number(searchParams.get("skip")) || 0;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.VALIDATION_ERROR,
          error: "Slug Parameter Is Required",
        },
        { status: 400 }
      );
    }

    const currentBlog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!currentBlog) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.BLOG_NOT_FOUND,
          error: "Blog Not Found",
        },
        { status: 404 }
      );
    }

    const relatedBlogs = await prisma.blog.findMany({
      where: {
        AND: [
          { status: BlogStatus.PUBLISHED },
          { id: { not: currentBlog.id } },
          {
            OR: [
              ...(currentBlog.category
                ? [{ category: currentBlog.category }]
                : []),
              ...(currentBlog.tags.length > 0
                ? [{ tags: { hasSome: currentBlog.tags } }]
                : []),
            ],
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take,
      skip,
    });

    return NextResponse.json({
      success: true,
      response: ApiResponse.FETCH_SUCCESS,
      data: relatedBlogs,
    });
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.FETCH_FAILURE,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
