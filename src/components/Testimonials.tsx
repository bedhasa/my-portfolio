"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const messages = testimonials.slice(0, 5);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!name.trim() || !content.trim()) {
      setError("Please fill in both your name and your testimonial.");
      return;
    }

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), content: content.trim() }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit testimonial");
      }

      setSubmitted(true);
      setName("");
      setContent("");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="testimonials" className="mt-20 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-300">💬 Testimonials</h2>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg">
          What people say about working with me.
        </p>
      </div>

      {/* Submit a testimonial form */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 border border-orange-300 dark:border-zinc-700 rounded-xl p-6 shadow">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Share Your Experience
        </h3>

        {submitted && (
          <p className="mb-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 text-sm">
            Thank you! Your testimonial has been received and will appear here soon.
          </p>
        )}

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="testimonial-name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Your Name
            </label>
            <input
              id="testimonial-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full rounded-lg border border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="testimonial-content" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Your Testimonial
            </label>
            <textarea
              id="testimonial-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your experience working with me..."
              rows={4}
              className="w-full rounded-lg border border-orange-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-6 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Submit Testimonial
          </button>
        </form>
      </div>

      {/* Display testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.length === 0 ? (
          <div className="sm:col-span-2 lg:col-span-3 text-center rounded-xl bg-orange-50 dark:bg-zinc-800 border border-dashed border-orange-300 dark:border-zinc-700 p-10">
            <p className="text-lg text-orange-700 dark:text-orange-300 font-medium">
              No testimonials yet.
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Be the first to share your experience using the form above!
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
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
          ))
        )}
      </div>
    </section>
  );
}

