import prisma from "@/utils/prisma";
import { ApiResponse, SubscribeValues } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email }: SubscribeValues = await request.json();

  if (!email) {
    return NextResponse.json(
      {
        success: false,
        response: ApiResponse.SUBSCRIPTION_FAILURE,
        error: "Email Is Missing",
      },
      { status: 400 }
    );
  }

  try {
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        {
          success: false,
          response: ApiResponse.SUBSCRIPTION_ALREADY_ACTIVE,
          error: "Email Already Subscribed",
        },
        { status: 400 }
      );
    }

    await prisma.subscriber.create({
      data: {
        email,
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: ApiResponse.SUBSCRIPTION_SUCCESS,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error During Registration:", error);
    return NextResponse.json(
      {
        response: ApiResponse.SUBSCRIPTION_FAILURE,
        error: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
