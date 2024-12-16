import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/utils/prisma";
import { ApiResponse, LoginValues } from "@/utils/types";

export async function POST(request: Request) {
  try {
    const body: LoginValues = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.LOGIN_ERROR,
          error: "Email and Password are Required",
        },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.USER_NOT_FOUND,
          error: "User Not Found",
        },
        { status: 400 }
      );
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.LOGIN_INVALID_PASSWORD,
          error: "Invalid Password",
        },
        { status: 400 }
      );
    }

    // Check JWT secret configuration
    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.LOGIN_ERROR,
          error: "Server Configuration Error",
        },
        { status: 500 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        userName: user.userName,
      },
      process.env.JWT_SECRET,
      {}
    );

    // Return success response
    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.LOGIN_SUCCESS,
        data: { token },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error During Login:", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.LOGIN_ERROR,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
