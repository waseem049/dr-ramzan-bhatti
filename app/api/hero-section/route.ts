import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

// Fetch Hero Section Content
export async function GET() {
  const heroSection = await prisma.heroSection.findFirst();
  return NextResponse.json(heroSection);
}

export async function POST(req: Request) {
  try {
    const { id, ...data } = await req.json();

    // If no ID is provided, create a new HeroSection (MongoDB will auto-generate the ID)
    if (!id) {
      // Create a new HeroSection if it doesn't exist
      const newHeroSection = await prisma.heroSection.create({
        data,
      });

      return NextResponse.json(newHeroSection);
    }

    // If an ID is provided, update the existing HeroSection
    const updatedHeroSection = await prisma.heroSection.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedHeroSection);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
