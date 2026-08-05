// src/app/api/messages/route.ts
import { NextResponse } from "next/server";
import { getMessages, addMessage } from "@/lib/messageStore";

export async function GET() {
  return NextResponse.json(getMessages());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, content, date } = body;

    if (!name || !content) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const newMessage = { name, content, date };
    addMessage(newMessage);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
