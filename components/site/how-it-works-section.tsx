"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <Card className="overflow-hidden bg-[linear-gradient(135deg,rgba(16,34,23,0.98),rgba(31,70,40,0.92))] text-white">
          <CardContent className="p-6 md:p-10">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/62">
                How it works
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl">
                Three steps from request to ride.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/72 md:text-lg">
                The core flow remains straightforward: request, confirm, receive the bike.
                The prototype keeps it concise and highly scannable.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {siteContent.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/72">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
