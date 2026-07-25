import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("py-section-y scroll-mt-28", className)}
      {...props}
    />
  );
}
