import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/55 bg-white/72 shadow-[0_20px_60px_rgba(19,38,27,0.08)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-7", className)} {...props} />;
}

export { Card, CardContent };
