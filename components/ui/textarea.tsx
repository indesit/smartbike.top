import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[color:color-mix(in_srgb,var(--accent)_18%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
