// src/app/api/messages/route.ts
import { NextResponse } from "next/server";

interface Message {
  name: string;
  content: string;
  date: string;
}

// ✅ Use proper types instead of "any"
let messages: Message[] = [];

export async function GET() {
  return NextResponse.json(messages.slice(0, 5));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, content, date } = body;

    if (!name || !content) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const newMessage: Message = { name, content, date };
    messages.unshift(newMessage);
    messages = messages.slice(0, 5);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    // ✅ Removed unused 'err'
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
