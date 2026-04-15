"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/content";

export function ProSection() {
  return (
    <section id="business" className="section-gap">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="h-full overflow-hidden">
            <Image
              src="/site/courier.jpg"
              alt="Courier-focused electric bike use"
              width={900}
              height={980}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between">
              <div>
                <SectionHeading
                  eyebrow="For couriers & business"
                  title={siteContent.proBlock.title}
                  description={siteContent.proBlock.description}
                />
                <ul className="mt-8 space-y-4">
                  {siteContent.proBlock.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7">
                      <span className="mt-2 size-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className={buttonVariants({ size: "lg" })}>
                    Talk about fleet terms
                    <ArrowRight className="ml-2 size-4" />
                </a>
                <a
                  href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                    Call {siteContent.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
