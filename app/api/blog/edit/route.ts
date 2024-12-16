import prisma from "@/utils/prisma";
import { ApiResponse } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { blogId, ...data } = await req.json();

    if (!blogId) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.BLOG_ID_MISSING,
          error: "Blog Id Is Missing",
        },
        { status: 400 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        ...data,
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.UPDATE_SUCCESS,
        data: updatedBlog,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.UPDATE_FAILURE,
        error: "Blog Updation Failed",
      },
      { status: 500 }
    );
  }
}
