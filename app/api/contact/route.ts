import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { ApiResponse, CreateContactInput } from "@/utils/types";

export async function POST(request: NextRequest) {
  try {
    const body: CreateContactInput = await request.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.VALIDATION_ERROR,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        countryCode: body.countryCode || null,
        phone: body.phone || null,
        subject: body.subject,
        message: body.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.CREATION_SUCCESS,
        data: {
          name: contact.name,
          email: contact.email,
          countryCode: contact.countryCode,
          phone: contact.phone,
          subject: contact.subject,
          message: contact.message,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Creating Contact:", error);
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.CREATION_FAILURE,
        error: "Error Creating Contact",
      },
      { status: 500 }
    );
  }
}

