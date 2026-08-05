// src/app/api/messages/route.ts
import { NextResponse } from "next/server";
import { testimonials } from "@/data/testimonials";

export async function GET() {
  return NextResponse.json(testimonials.slice(0, 5));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const content = typeof body?.content === "string" ? body.content.trim() : "";

    if (!name || !content) {
      return NextResponse.json(
        { success: false, error: "Name and message are required." },
        { status: 400 }
      );
    }

    // Note: On Vercel's serverless filesystem submissions cannot be
    // persisted to disk. The submission is acknowledged below; to display
    // new testimonials permanently, add them to src/data/testimonials.ts.
    return NextResponse.json(
      {
        success: true,
        message: "Testimonial received. Thank you!",
        testimonial: { name, content, date: new Date().toLocaleDateString() },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
