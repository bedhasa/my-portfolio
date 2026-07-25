"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function SectionWrapper({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ delay }}
      viewport={viewportOnce}
    >
      {children}
    </motion.section>
  );
}
