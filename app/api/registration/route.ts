import prisma from "@/utils/prisma";
import { ApiResponse, RegistrationValues } from "@/utils/types";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userName, email, name, salutation, password }: RegistrationValues =
    await request.json();

  // Validate input data
  if (!userName || !email || !password || !name || !salutation) {
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.REGISTRATION_ERROR,
        error: "Mandatory Fields Are Missing",
      },
      { status: 400 }
    );
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          response: ApiResponse.USER_ALREADY_EXISTS,
          success: false,
          error: "User Already Exists",
        },
        { status: 400 }
      );
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    await prisma.user.create({
      data: {
        userName,
        email,
        name,
        salutation,
        password: hashedPassword,
      },
    });

    // Return success response
    return NextResponse.json(
      { response: ApiResponse.REGISTRATION_SUCCESS, success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error During Registration:", error);
    return NextResponse.json(
      {
        response: ApiResponse.REGISTRATION_ERROR,
        error: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
