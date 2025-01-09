import prisma from "@/utils/prisma";
import { ApiResponse } from "@/utils/types";
import { BlogStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const skip = parseInt(searchParams.get("skip") ?? "0");
    const take = parseInt(searchParams.get("take") ?? "10");

    // Get blogs with pagination
    const blogs = await prisma.blog.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        status: BlogStatus.PUBLISHED,
      },
    });

    const total = await prisma.blog.count();

    return NextResponse.json({
      success: true,
      response: ApiResponse.FETCH_SUCCESS,
      data: {
        blogs,
        total,
        skip,
        take,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.FETCH_FAILURE,
        error: "Error Fetching Blogs",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { userId, ...data } = await req.json();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.USER_ID_REQUIRED,
          error: "User Id Is Required",
        },
        { status: 400 }
      );
    }
    const newBlog = await prisma.blog.create({
      data: {
        ...data,
        user: {
          connect: { id: userId },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.CREATION_SUCCESS,
        data: newBlog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Creating Blog", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.CREATION_FAILURE,
        error: "Error Creating Blog.",
      },
      { status: 500 }
    );
  }
}
