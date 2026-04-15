"use client";

import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Clock3, Route } from "lucide-react";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent, statHighlights } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="top" className="section-gap overflow-hidden">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm text-[var(--muted-foreground)] shadow-sm">
            <span className="size-2 rounded-full bg-[var(--accent)]" />
            Urban mobility for Prague rides, work, and fleets
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.06em] text-balance sm:text-6xl md:text-7xl"
          >
            {siteContent.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]"
          >
            {siteContent.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
                {siteContent.primaryCta}
                <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href="#business"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
                {siteContent.secondaryCta}
            </a>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {statHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
              >
                <Card>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute inset-x-8 -top-8 h-40 rounded-full bg-[rgba(95,170,105,0.18)] blur-3xl" />
          <Card className="relative overflow-hidden">
            <CardContent className="p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#dde9d8]">
                <div className="soft-grid absolute inset-0 opacity-60" />
                <Image
                  src="/site/hero-bike.jpg"
                  alt="Smartbike electric bicycle"
                  width={920}
                  height={980}
                  className="relative h-[460px] w-full object-cover object-center"
                  priority
                />
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-3">
                {[
                  { icon: Route, label: "City-ready mobility" },
                  { icon: Clock3, label: "Flexible rental timing" },
                  { icon: BriefcaseBusiness, label: "Courier & B2B fit" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-black/6 bg-[var(--background)] px-4 py-4"
                  >
                    <item.icon className="mb-3 size-5 text-[var(--accent-strong)]" />
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
