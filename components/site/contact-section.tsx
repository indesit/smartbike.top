"use client";

import { useState, useTransition } from "react";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/content";

type FormState = {
  message: string;
  status: "idle" | "success" | "error";
};

const initialState: FormState = {
  message: "",
  status: "idle",
};

export function ContactSection() {
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, startTransition] = useTransition();

  return (
    <section id="contact" className="section-gap">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <Card className="h-full">
          <CardContent className="h-full">
            <SectionHeading
              eyebrow="Contact"
              title="Request a bike, consultation, or test ride."
              description="This prototype keeps the primary action simple: leave your contact details and we can match the rental scenario to your needs."
            />

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-4 rounded-[1.5rem] bg-[var(--background)] p-4"
              >
                <Phone className="mt-1 size-5 text-[var(--accent-strong)]" />
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Phone</p>
                  <p className="text-base font-semibold">{siteContent.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteContent.email}`}
                className="flex items-start gap-4 rounded-[1.5rem] bg-[var(--background)] p-4"
              >
                <Mail className="mt-1 size-5 text-[var(--accent-strong)]" />
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Email</p>
                  <p className="text-base font-semibold">{siteContent.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-[1.5rem] bg-[var(--background)] p-4">
                <MapPin className="mt-1 size-5 text-[var(--accent-strong)]" />
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Location</p>
                  <p className="text-base font-semibold">{siteContent.location}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);

                startTransition(async () => {
                  const response = await fetch("/api/request", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: formData.get("name"),
                      phone: formData.get("phone"),
                      email: formData.get("email"),
                      message: formData.get("message"),
                    }),
                  });

                  const data = (await response.json()) as { message: string };

                  if (!response.ok) {
                    setState({ status: "error", message: data.message });
                    return;
                  }

                  event.currentTarget.reset();
                  setState({ status: "success", message: data.message });
                });
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Name</span>
                  <Input name="name" placeholder="Your name" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Phone</span>
                  <Input name="phone" placeholder="+420..." required />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium">Email</span>
                <Input name="email" type="email" placeholder="you@example.com" required />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium">Optional message</span>
                <Textarea
                  name="message"
                  placeholder="Tell us what you need: private ride, courier shift, business fleet, or test ride."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                  <MessageCircleMore className="size-4" />
                  Response flow ready for CRM or email integration
                </div>
                <Button type="submit" size="lg" disabled={isPending}>
                  {isPending ? "Sending..." : "Send request"}
                </Button>
              </div>

              {state.status !== "idle" ? (
                <p
                  className={
                    state.status === "success"
                      ? "text-sm text-[var(--accent-strong)]"
                      : "text-sm text-red-600"
                  }
                >
                  {state.message}
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
