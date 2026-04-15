"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/content";

export function BenefitsSection() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Why Smartbike"
          title="A service proposition built around speed, support, and practical trust."
          description="The benefits are framed around real rental value: mobility, service readiness, logistics, and flexible conditions for everyday and professional usage."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent>
                  <benefit.icon className="size-6 text-[var(--accent-strong)]" />
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
