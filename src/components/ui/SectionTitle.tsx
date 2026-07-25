import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)} {...props}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
