import { ArrowUpRight } from "lucide-react";

import { siteContent } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[-0.04em]">{siteContent.brand}</p>
          <p className="mt-3 max-w-md text-base leading-7 text-[var(--muted-foreground)]">
            Electric bike rental in Prague for everyday city movement, courier work, and
            business mobility.
          </p>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            {siteContent.location}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {siteContent.footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm"
              >
                {item.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-[var(--muted-foreground)]">
            <a href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}>{siteContent.phone}</a>
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
            <a href="#contact" className="text-[var(--foreground)]">
              Request a rental
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
