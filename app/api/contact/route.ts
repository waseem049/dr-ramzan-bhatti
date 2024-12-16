import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { ContactResponses } from "@/utils/types";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
  try {
    // Authorization check
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          response: ContactResponses.AUTH_TOKEN_MISSING,
          error: "Authorization Token Is Required",
        },
        { status: 400 }
      );
    }

    if (!JWT_SECRET) {
      return NextResponse.json(
        {
          success: false,
          response: ContactResponses.AUTH_SECRET_MISSING,
          error: "Server Configuration Error",
        },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET) as unknown;
    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          response: ContactResponses.AUTH_TOKEN_MISSING,
          error: "Invalid Authorization Token",
        },
        { status: 401 }
      );
    }

    // Get all contacts
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ContactResponses.FETCH_SUCCESS,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Fetching Contacts:", error);
    return NextResponse.json(
      {
        success: false,
        response: ContactResponses.FETCH_FAILURE,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, countryCode, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          response: ContactResponses.SUBMISSION_FAILURE,
          error: "Required Fields Missing",
        },
        { status: 400 }
      );
    }

    // Create contact
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        countryCode,
        phone,
        subject,
        message,
      },
    });

    return NextResponse.json({
      success: true,
      response: ContactResponses.SUBMISSION_SUCCESS,
      data: contact,
    });
  } catch (error) {
    console.error("Error Creating Contact:", error);
    return NextResponse.json(
      {
        success: false,
        response: ContactResponses.SUBMISSION_FAILURE,
        error: "Error Creating Contact Submission.",
      },
      { status: 500 }
    );
  }
}
