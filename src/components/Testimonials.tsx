"use client";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const messages = testimonials.slice(0, 5);

  return (
    <section id="testimonials" className="mt-20 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-300">💬 Testimonials</h2>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg">
          What people say about working with me.
        </p>
      </div>

      {/* Display testimonials */}
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
