import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_12px_30px_rgba(82,152,91,0.28)] hover:bg-[var(--accent-strong)]",
        secondary:
          "bg-white/75 text-[var(--foreground)] ring-1 ring-white/60 backdrop-blur hover:bg-white",
        ghost:
          "text-[var(--foreground)] hover:bg-black/5",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-6 text-base",
        sm: "h-9 px-4 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
