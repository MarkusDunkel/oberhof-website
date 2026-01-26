export type PageContent = {
  slug: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<
    | { kind: "prose"; title: string; body: string }
    | { kind: "bullets"; title: string; items: string[] }
    | { kind: "facts"; title: string; items: Array<{ label: string; value: string }> }
  >;
  cta: { title: string; body: string; primaryLabel: string; primaryHref: string };
  directions: string[];
  credits: string[];
};

export const page: PageContent = {
  slug: "contact",
  seo: {
    title: "Kontakt | Oberhof Lunz",
    description:
      "Direkter Draht zu Daniel Kofler, Anreisebeschreibung nach Ertltal 5 in Lunz am See und Bildnachweise.",
  },
  hero: {
    title: "Kontakt",
    subtitle: "Ich freue mich über eine ruhige Nachricht und beantworte Anfragen zeitnah.",
  },
  sections: [
    {
      kind: "facts",
      title: "Kontakt",
      items: [
        { label: "Name", value: "Daniel Kofler" },
        { label: "Telefon", value: "+43 680 1117299" },
        { label: "E-Mail", value: "daniel@oberhof-lunz.at" },
      ],
    },
    {
      kind: "prose",
      title: "Melde dich",
      body:
        "Ob Produkte, Retreat oder Vermietung – schreib kurz, was du vorhast. Gemeinsam finden wir den passenden Rahmen.",
    },
  ],
  cta: {
    title: "Nachricht senden",
    body: "Wir melden uns persönlich, meist innerhalb weniger Tage.",
    primaryLabel: "Kontakt aufnehmen",
    primaryHref: "mailto:daniel@oberhof-lunz.at",
  },
  directions: [
    "Von Lunz Richtung Göstling fahren; nach der Brücke liegt rechts ein Fußballplatz.",
    "Etwa 200 Meter später rechts über die kleine Brücke mit dem Schild \"Trialhof Enöckl\" abbiegen – kommt eine 70er‑Zone, war es zu weit.",
    "Durch das steile Waldstück fahren, nach der Haarnadelkurve weiterhin geradeaus; bei der Gabelung mit Birke und Marterl rechts halten.",
    "Der Straße folgen, auch wenn sie zur Schotterpiste wird; alternativ zuerst \"Ahorntal 3\" ins Navi eingeben und dann weiter zu \"Ertltal 1\".",
  ],
  credits: [
    "Fotos: Maximilian Salzer – www.maximiliansalzer.com",
  ],
};
