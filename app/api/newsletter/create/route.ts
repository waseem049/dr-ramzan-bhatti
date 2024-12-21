import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ApiResponse } from "@/utils/types";
import { NewsletterStatus } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
  try {
    // Extract and validate the Authorization token
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
        { status: 500 }
      );
    }

    let decoded;
    try {
      // Verify the JWT token
      decoded = jwt.verify(token, JWT_SECRET) as {
        userId: string;
      };
    } catch (err) {
      console.error("Error Verifying JWT Token", err);
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.AUTH_INVALID_TOKEN,
          error: "Invalid Authorization Token",
        },
        { status: 401 }
      );
    }

    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
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

    // Parse the request body
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.VALIDATION_ERROR,
          error: "Title and Content are required",
        },
        { status: 400 }
      );
    }

    // Create a new newsletter in the database
    const newsletter = await prisma.newsletter.create({
      data: {
        title,
        content,
        status: NewsletterStatus.READY_TO_SEND,
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.CREATION_SUCCESS,
        data: newsletter,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Creating Newsletter", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.CREATION_FAILURE,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
