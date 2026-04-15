import type { LucideIcon } from "lucide-react";
import {
  Bike,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Leaf,
  Package,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type AudienceCard = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  detailsHref: string;
  image: string;
};

export type BenefitItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const siteContent = {
  brand: "Smartbike",
  headline: "Rent an electric bike in Prague without the hassle.",
  subheadline:
    "Modern e-bike rental for city rides, couriers, and companies. Reliable Duotts S29 bikes, flexible terms, and local support when you need it.",
  phone: "+420 728 206 083",
  email: "hello@smartbike.top",
  location: "Prague, Czech Republic",
  primaryCta: "Request a bike",
  secondaryCta: "Business & couriers",
  weeklyPrice: "from 1,600 CZK / week",
  note: "Daily and hourly rentals are available on request.",
  nav: [
    { label: "Use cases", href: "#use-cases" },
    { label: "Bike", href: "#bike" },
    { label: "Pricing", href: "#pricing" },
    { label: "Business", href: "#business" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  audiences: [
    {
      icon: Bike,
      title: "Pro procházky Prahou",
      subtitle: undefined,
      description:
        "Chcete romantickou projížďku, výlet nebo si jednoduše užít krásy města? Pronájem elektrokola je skvělou volbou! Můžete navštívit hlavní památky — Karlův most, Pražský hrad, Staroměstské náměstí, Vyšehrad a mnoho útulných čtvrtí.",
      detailsHref: "#contact",
      image: "/site/use-case-walks.jpg",
    },
    {
      icon: Package,
      title: "Pro kurýry a doručovací služby",
      subtitle: "Elektrokola jsou efektivním řešením pro kurýry v Praze.",
      description:
        "Rychle doručovat objednávky, obejít dopravní zácpy. Zvýšit produktivitu práce kvůli vyššímu počtu splněných zakázek. Snížit fyzickou námahu a únavu. Zkrátit náklady na dopravu a její údržbu.",
      detailsHref: "#business",
      image: "/site/use-case-courier.jpg",
    },
    {
      icon: Building2,
      title: "Podnika",
      subtitle: undefined,
      description:
        "Firmy zabývající se rozvozem jídla, zásilek, květin nebo jiných produktů považují pronájem elektrokol za výhodnou investici, zejména v období vysokého objíždění místních komunikací.",
      detailsHref: "#business",
      image: "/site/use-case-business.jpg",
    },
  ] satisfies AudienceCard[],
  specs: [
    { label: "Model", value: "Duotts S29" },
    { label: "Motor", value: "48V 750W" },
    { label: "Battery", value: "48V 15Ah" },
    { label: "Charge time", value: "6-8 hours" },
    { label: "Display", value: '2.4" HD with Bluetooth app support' },
    { label: "Included", value: "Lock, light, phone mount" },
  ],
  benefits: [
    {
      icon: Leaf,
      title: "Greener urban mobility",
      description:
        "Reduce emissions and move through Prague with a cleaner transport option.",
    },
    {
      icon: Zap,
      title: "Fast in city traffic",
      description:
        "E-bikes help riders keep momentum across short and medium-distance routes.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable service",
      description:
        "Bikes are maintained, checked, and ready for regular practical use.",
    },
    {
      icon: Wrench,
      title: "Support and maintenance",
      description:
        "Service support is part of the offer for business and long-term rentals.",
    },
    {
      icon: Truck,
      title: "Delivery and logistics",
      description:
        "Bike handover and delivery can be arranged across Prague to save time.",
    },
    {
      icon: Sparkles,
      title: "Flexible conditions",
      description:
        "Short-term, weekly, and longer rental scenarios can be adapted to the use case.",
    },
  ] satisfies BenefitItem[],
  steps: [
    {
      title: "Send a request",
      description:
        "Tell us what you need: private ride, courier work, or a business setup.",
    },
    {
      title: "Confirm the terms",
      description:
        "We align on timing, rental conditions, and the right usage scenario.",
    },
    {
      title: "Pick up and ride",
      description:
        "Receive the bike in Prague, get moving quickly, and stay supported during the rental.",
    },
  ],
  pricing: [
    {
      title: "Weekly rental",
      price: "from 1,600 CZK",
      detail: "Best starting point for regular city use",
    },
    {
      title: "Daily / hourly",
      price: "On request",
      detail: "For short rides, testing, or visitor needs",
    },
    {
      title: "Long-term / B2B",
      price: "Custom terms",
      detail: "For couriers, teams, and ongoing fleet usage",
    },
  ],
  pricingIncludes: [
    "Duotts S29 electric bike",
    "Bike light and lock",
    "Phone mount for navigation",
    "Helmet option available",
    "Service support based on rental type",
  ],
  proBlock: {
    title: "Built for courier work and business mobility.",
    description:
      "If you need more than a casual ride, Smartbike can support recurring courier demand, long-term rentals, and company usage with practical service conditions.",
    bullets: [
      "Longer rental terms for active riders and teams",
      "Support, maintenance, and replacement logic for operational continuity",
      "Scalable conversations for companies that need multiple bikes",
    ],
  },
  footerLinks: [
    { label: "WhatsApp", href: "https://wa.me/420728206083" },
    { label: "Telegram", href: "https://t.me/smartbike_prague" },
    { label: "Email", href: "mailto:hello@smartbike.top" },
  ],
};

export const statHighlights = [
  { label: "Core product", value: "Duotts S29" },
  { label: "Weekly price", value: "1,600 CZK+" },
  { label: "Audience fit", value: "Private, courier, B2B" },
];

export const decorativeIcons = [Route, Clock3, BriefcaseBusiness];
