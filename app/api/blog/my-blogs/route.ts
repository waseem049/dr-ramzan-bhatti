import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ApiResponse } from "@/utils/types";

const JWT_SECRET = process.env.JWT_SECRET;
export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.AUTH_TOKEN_MISSING,
          error: "Authorization Token Is Required",
        },
        { status: 400 }
      );
    }

    if (!JWT_SECRET) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.AUTH_SECRET_MISSING,
          error: "Server Configuration Error",
        },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET) as unknown;

    // Cast the decoded token to a more specific type
    const { userId } = decoded as { userId: string };

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        blogs: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.USER_NOT_FOUND,
          error: "User Not Found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.FETCH_SUCCESS,
        data: user.blogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Fetching User Blogs", error);
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
