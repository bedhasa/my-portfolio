"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 160, damping: 26, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 160, damping: 26, mass: 0.35 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || reduceMotion) return;

    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 16);
      mouseY.set(event.clientY - 16);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, reduceMotion]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-8 w-8 rounded-full border border-accent/50 bg-accent/10 shadow-glow mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
}
