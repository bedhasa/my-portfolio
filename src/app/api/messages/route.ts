// app/api/messages/route.ts
import { NextResponse } from "next/server";

let messages: any[] = [];

export async function GET() {
  return NextResponse.json(messages.slice(0, 5));
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, content, date } = body;

  if (!name || !content) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const newMessage = { name, content, date };
  messages.unshift(newMessage);
  messages = messages.slice(0, 5);

  return NextResponse.json({ success: true }, { status: 201 });
}
