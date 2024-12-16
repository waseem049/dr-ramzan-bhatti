import prisma from "@/utils/prisma";
import { ApiResponse } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;

    const blog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.FETCH_FAILURE,
          error: "Error Fetching Blog",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, response: ApiResponse.FETCH_SUCCESS, data: blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Fetching Blog:", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.FETCH_FAILURE,
        error: "Error Fetching Blog",
      },
      { status: 500 }
    );
  }
}
