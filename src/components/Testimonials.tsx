// components/Testimonials.tsx
"use client";

import { useState } from "react";

interface Message {
  name: string;
  content: string;
  date: string;
}

export default function Testimonials() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    const newMessage: Message = {
      name,
      content,
      date: new Date().toLocaleString(),
    };

    setMessages((prev) => [newMessage, ...prev].slice(0, 5)); // max 5
    setName("");
    setContent("");
  };

  return (
    <section id="testimonials" className="mt-20 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-600">💬 Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Leave your thoughts or encouragement — I&aposd love to hear from you!
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          required
        />
        <textarea
          placeholder="Your message about Bedasa..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>

      {/* Recent Messages */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-orange-50 dark:bg-zinc-800 border border-orange-200 dark:border-zinc-700 p-5 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">“{msg.content}”</p>
            <div className="mt-4 text-sm text-orange-600 font-medium">
              — {msg.name}
              <div className="text-xs text-gray-500 dark:text-gray-400">{msg.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
