"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/content";

export function PricingSection() {
  return (
    <section id="pricing" className="section-gap">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing blocks that are easy to scan."
          description="Weekly rental is the anchor offer. Short rentals stay flexible on request, while courier and business setups can move into custom long-term terms."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.pricing.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium text-[var(--muted-foreground)]">
                        {item.title}
                      </p>
                      <p className="mt-4 font-display text-4xl tracking-[-0.05em]">
                        {item.price}
                      </p>
                      <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                        {item.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardContent>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                Included in rental
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                Practical essentials, not upsell clutter.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
                The old content already referenced the lock, light, phone mount, and helmet option.
                This keeps the offer transparent and focused on use.
              </p>
              <ul className="mt-6 space-y-4">
                {siteContent.pricingIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span className="mt-1 flex size-5 items-center justify-center rounded-full bg-[rgba(74,139,82,0.12)]">
                      <Check className="size-3.5 text-[var(--accent-strong)]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
