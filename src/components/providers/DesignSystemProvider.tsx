"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "./ThemeProvider";

const AnimatedBackground = dynamic(
  () => import("@/components/foundation/AnimatedBackground").then((mod) => mod.AnimatedBackground),
  { ssr: false },
);

const MouseFollower = dynamic(
  () => import("@/components/foundation/MouseFollower").then((mod) => mod.MouseFollower),
  { ssr: false },
);

export function DesignSystemProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <MouseFollower />
      {children}
    </ThemeProvider>
  );
}
