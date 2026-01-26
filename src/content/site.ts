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
};

export const brandName = "Oberhof";
export const tagline = "Ruhiger Bergbauernhof zwischen Ötscher und Hochkar.";

export const primaryCta: CtaLink = {
  label: "Anfrage senden",
  href: "/contact",
};

export const secondaryCta: CtaLink = {
  label: "Anreise planen",
  href: "/contact#directions",
};

export const contact: Contact = {
  name: "Daniel Kofler",
  phone: "+43 680 1117299",
  email: "daniel@oberhof-lunz.at",
};

export const addressRegion = "Ertltal · Lunz am See, Niederösterreich";

export const social: SocialLinks = {
  instagram: "",
  facebook: "",
};

export const siteContent: SiteContent = {
  brandName,
  tagline,
  primaryCta,
  secondaryCta,
  contact,
  addressRegion,
  social,
};
