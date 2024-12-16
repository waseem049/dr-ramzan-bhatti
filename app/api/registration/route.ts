import prisma from "@/utils/prisma";
import { RegistrationResponses } from "@/utils/types";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userName, email, name, salutation, password } = await request.json();

  // Validate input data
  if (!userName || !email || !password || !name || !salutation) {
    return NextResponse.json(
      { message: "Missing Required Fields" },
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
        { response: RegistrationResponses.USER_ALREADY_EXISTS },
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
      { response: RegistrationResponses.REGISTRATION_SUCCESS },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { response: RegistrationResponses.ERROR_REGISTERING, error },
      { status: 500 }
    );
  }
}
