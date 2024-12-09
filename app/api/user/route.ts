import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/utils/prisma";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
  try {
    // Extract token from Authorization header
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Authorization Token Missing" },
        { status: 401 }
      );
    }

    if (!JWT_SECRET) {
      return NextResponse.json(
        { error: "Authorization Secret Missing" },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET) as unknown;

    // Cast the decoded token to a more specific type
    const { userId } = decoded as { userId: string };

    // If the token is invalid or expired, it will throw an error
    if (!userId) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Fetch the user from the database using the decoded userId
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        blogs: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userData = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      name: user.name,
      salutation: user.salutation,
      createdAt: user.createdAt,
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
