"use client";

import { Menu, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { siteContent } from "@/lib/content";
import { Button, buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-[rgba(248,251,247,0.7)] backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-[var(--foreground)] text-sm font-bold text-white">
            SB
          </span>
          <div>
            <p className="font-display text-lg tracking-[-0.04em]">{siteContent.brand}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Prague e-bike rental
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)]"
          >
            <Phone className="size-4" />
            {siteContent.phone}
          </a>
          <a href="#contact" className={buttonVariants()}>
            {siteContent.primaryCta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-white/80 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/45 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-4 py-4">
              {siteContent.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-[var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={buttonVariants({ className: "w-full" })}
              >
                {siteContent.primaryCta}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
