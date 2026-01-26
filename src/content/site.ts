export type CtaLink = {
  label: string;
  href: string;
};

export type Contact = {
  name: string;
  phone: string;
  email: string;
};

export type SocialLinks = {
  instagram: string;
  facebook: string;
};

export type SiteContent = {
  brandName: string;
  tagline: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  contact: Contact;
  addressRegion: string;
  social: SocialLinks;
  contactLinkLabel: string;
};
import type { Language } from "@/lib/language";

const baseContact: Contact = {
  name: "Daniel Kofler",
  phone: "+43 680 1117299",
  email: "daniel@oberhof-lunz.at",
};

const baseSocial: SocialLinks = {
  instagram: "",
  facebook: "",
};

export const siteContent: Record<Language, SiteContent> = {
  de: {
    brandName: "Oberhof",
    tagline: "Ruhiger Bergbauernhof zwischen Ötscher und Hochkar.",
    primaryCta: {
      label: "Anfrage senden",
      href: "/contact",
    },
    secondaryCta: {
      label: "Anreise planen",
      href: "/contact#directions",
    },
    contact: baseContact,
    addressRegion: "Ertltal · Lunz am See, Niederösterreich",
    social: baseSocial,
    contactLinkLabel: "Kontakt & Anfahrt",
  },
  en: {
    brandName: "Oberhof",
    tagline: "Tranquil mountain farm between the Ötscher and Hochkar peaks.",
    primaryCta: {
      label: "Send request",
      href: "/contact",
    },
    secondaryCta: {
      label: "Plan your trip",
      href: "/contact#directions",
    },
    contact: baseContact,
    addressRegion: "Ertltal · Lunz am See, Lower Austria",
    social: baseSocial,
    contactLinkLabel: "Contact & directions",
  },
};
