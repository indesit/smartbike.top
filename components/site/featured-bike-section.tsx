"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/content";

export function FeaturedBikeSection() {
  return (
    <section id="bike" className="section-gap">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          className="flex"
        >
          <Card className="relative flex-1 overflow-hidden">
            <div className="absolute right-6 top-6 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
              Featured bike
            </div>
            <Image
              src="/site/bike-detail.jpg"
              alt="Duotts S29 electric bike"
              width={900}
              height={980}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between">
              <div>
                <SectionHeading
                  eyebrow="Duotts S29"
                  title="A single core bike model keeps the offer simple and dependable."
                  description="The old site already points to Duotts S29 as the core product. This prototype keeps that logic and presents the bike as the main rental platform instead of burying it below irrelevant sections."
                />

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {siteContent.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-[1.5rem] border border-black/8 bg-[var(--background)] px-4 py-4"
                    >
                      <p className="text-sm text-[var(--muted-foreground)]">{spec.label}</p>
                      <p className="mt-1 text-base font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
