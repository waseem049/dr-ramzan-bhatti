import prisma from "@/utils/prisma";
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
        { message: "User Already Exists" },
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
      { message: "User Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 500 }
    );
  }
}
