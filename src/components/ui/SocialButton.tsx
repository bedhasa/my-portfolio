import * as React from "react";
import { cn } from "@/lib/utils";

type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export function SocialButton({ label, className, children, ...props }: SocialButtonProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-token-full border border-border bg-surface text-muted transition-token hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
