import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-base text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[color:color-mix(in_srgb,var(--accent)_18%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
