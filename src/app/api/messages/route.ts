// src/app/api/messages/route.ts
import { NextResponse } from "next/server";
import { testimonials } from "@/data/testimonials";

export async function GET() {
  return NextResponse.json(testimonials.slice(0, 5));
}

export async function POST() {
  // New submissions are not persisted on Vercel's serverless filesystem.
  // Testimonials are maintained statically in src/data/testimonials.ts.
  return NextResponse.json(
    { success: true, message: "Testimonials are managed statically." },
    { status: 201 }
  );
}
