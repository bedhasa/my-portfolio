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
    } catch {
      setStatus("Failed to send message");
    }
  };

  return (
    <section id="testimonials" className="mt-20 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-300">💬 Testimonials</h2>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg">
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
          className="w-full px-4 py-2 border rounded-lg border-orange-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-neutral-950 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your message about Bedasa..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-orange-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-neutral-950 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-neutral-950 hover:bg-accent text-white dark:bg-accent dark:hover:bg-accent-strong px-6 py-2 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm mt-2 text-neutral-950 dark:text-white">{status}</p>}
      </form>

      {/* Display top 5 messages */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-orange-50 dark:bg-zinc-800 border border-orange-300 dark:border-zinc-700 p-5 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <p className="text-neutral-900 dark:text-neutral-200 italic">“{msg.content}”</p>
            <div className="mt-4 text-sm text-orange-700 dark:text-orange-300 font-medium">
              — {msg.name}
              <div className="text-xs text-neutral-700 dark:text-neutral-300">{msg.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
