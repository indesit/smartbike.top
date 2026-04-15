import { MessageCircleMore } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-white/70 bg-[rgba(255,255,255,0.86)] p-2 shadow-[0_16px_45px_rgba(16,34,23,0.16)] backdrop-blur-xl">
        <div className="pl-3">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Smartbike Prague
          </p>
          <p className="text-sm font-semibold">Book a ride or ask about business terms</p>
        </div>
        <a href="#contact" className={buttonVariants({ size: "sm" })}>
            <MessageCircleMore className="mr-2 size-4" />
            Request
        </a>
      </div>
    </div>
  );
}
