import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-token-lg border border-border bg-surface/85 shadow-soft backdrop-blur transition-token",
        className,
      )}
      {...props}
    />
  );
}
