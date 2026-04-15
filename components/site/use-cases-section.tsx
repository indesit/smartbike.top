"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/site/section-heading";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-gap pt-0">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Use cases"
          title="Původní scénáře použití zachované, ale v čistší a silnější prezentaci."
          description="Цей блок перенесено зі старого сайту зі збереженням бізнес-суті, фото й основних текстів, але без важкого Elementor-вигляду."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {siteContent.audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <div className="relative aspect-[1.2/0.8] overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="flex h-full flex-col">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[rgba(74,139,82,0.12)]">
                    <item.icon className="size-5 text-[var(--accent-strong)]" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-3 text-lg font-medium leading-7 text-[var(--foreground)]">
                      {item.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                  <div className="mt-8">
                    <a
                      href={item.detailsHref}
                      className={buttonVariants({
                        className: "w-full sm:w-auto",
                      })}
                    >
                      Zobrazit podrobnosti
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
