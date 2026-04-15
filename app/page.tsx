import Image from "next/image";

import { BenefitsSection } from "@/components/site/benefits-section";
import { ContactSection } from "@/components/site/contact-section";
import { FeaturedBikeSection } from "@/components/site/featured-bike-section";
import { HeroSection } from "@/components/site/hero-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { MobileCta } from "@/components/site/mobile-cta";
import { PricingSection } from "@/components/site/pricing-section";
import { ProSection } from "@/components/site/pro-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { UseCasesSection } from "@/components/site/use-cases-section";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <UseCasesSection />
      <FeaturedBikeSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection />
      <ProSection />

      <section className="section-gap pt-0">
        <div className="container-shell">
          <Card className="overflow-hidden">
            <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Prague focus
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] sm:text-4xl">
                  A local service site should feel grounded in the city, not in a template demo.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
                  This supporting block reinforces place, movement, and trust. It helps the page
                  feel like a real Prague rental service while keeping the prototype lean and
                  single-page.
                </p>
              </div>
              <Image
                src="/site/prague-ride.jpg"
                alt="Electric bike riding in Prague"
                width={1200}
                height={900}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
      <MobileCta />
    </main>
  );
}
