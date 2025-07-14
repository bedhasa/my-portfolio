"use client";
import { useState, useEffect } from "react";

interface Message {
  name: string;
  content: string;
  date: string;
}

export default function Testimonials() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState("");

  // Load existing messages from your own backend
  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data.slice(0, 5)))
      .catch(() => setStatus("Failed to load messages"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage: Message = {
      name,
      content,
      date: new Date().toLocaleString(),
    };

    try {
      // Send to your own API to store for viewer display
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      // Send to Formspree (for email)
      await fetch("https://formspree.io/f/xrblzaoo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          name: name,
          message: content,
        }),
      });

      setMessages((prev) => [newMessage, ...prev].slice(0, 5));
      setName("");
      setContent("");
      setStatus("✅ Message sent!");
    } catch (err) {
      setStatus("❌ Failed to send message");
    }
  };

  return (
    <section id="testimonials" className="mt-20 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-600">💬 Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Leave your thoughts or encouragement — I&apos;d love to hear from you!
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your message about Bedasa..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>

      {/* Display top 5 messages */}
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
