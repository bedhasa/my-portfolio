import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-token-md text-sm font-semibold transition-token focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
primary: "bg-neutral-950 text-white shadow-glow hover:bg-accent hover:text-white hover:shadow-[0_0_36px_rgb(255_122_0_/_0.55)] dark:bg-accent dark:text-white dark:hover:bg-accent-strong",
        secondary: "border border-border bg-background text-foreground hover:border-accent hover:bg-accent hover:text-white dark:bg-surface dark:text-white dark:hover:bg-accent dark:hover:text-white",
        ghost: "text-foreground hover:bg-accent hover:text-white dark:text-white dark:hover:bg-accent dark:hover:text-white",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { buttonVariants };
