"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", delay: 0 },
  { left: "28%", top: "72%", delay: 0.7 },
  { left: "51%", top: "26%", delay: 1.1 },
  { left: "76%", top: "64%", delay: 0.35 },
  { left: "88%", top: "22%", delay: 1.5 },
  { left: "64%", top: "84%", delay: 0.95 },
];

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-40 dark:opacity-55" />
      <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
      <div className="absolute bottom-[-18rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />
      {!reduceMotion
        ? particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-accent/40 shadow-glow"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -16, 0], opacity: [0.18, 0.55, 0.18] }}
              transition={{
                duration: 5 + index * 0.6,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        : null}
    </div>
  );
}
