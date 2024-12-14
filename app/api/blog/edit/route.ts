import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { blogId, ...data } = await req.json();

    if (!blogId) {
      return NextResponse.json(
        { error: "Blog Id is required" },
        { status: 400 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        ...data,
      },
    });

    return NextResponse.json(updatedBlog, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
