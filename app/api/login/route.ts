import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { LoginResponses } from "@/utils/types";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Validate input data
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and Password are required" },
      { status: 400 }
    );
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { response: LoginResponses.USER_NOT_FOUND },
        { status: 400 }
      );
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { response: LoginResponses.INVALID_PASSWORD },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, userName: user.userName },
      process.env.JWT_SECRET!,
      {}
    );

    // Return the token
    return NextResponse.json({ response: LoginResponses.LOGIN_SUCCESS, token });
  } catch (error) {
    return NextResponse.json(
      { response: LoginResponses.ERROR_LOGGING_IN, error },
      { status: 500 }
    );
  }
}
