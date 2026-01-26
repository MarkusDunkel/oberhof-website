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
};

export const page: PageContent = {
  slug: "the-farm",
  seo: {
    title: "Der Hof | Oberhof Lunz",
    description:
      "600 Jahre alter Bergbauernhof, der nach Permakultur-Prinzipien arbeitet und Menschen wie Natur Raum gibt.",
  },
  hero: {
    title: "Der Oberhof",
    subtitle:
      "Ein Bergbauernhof in Lunz am See, der seit Jahrhunderten besteht und heute behutsam in Richtung Selbstversorgung wächst.",
  },
  sections: [
    {
      kind: "prose",
      title: "Ein lebendiger Bergbauernhof",
      body:
        "Ich bewirtschafte den Oberhof seit 2014 und sehe ihn als ganzheitliches System, in dem Menschen, Tiere und Landschaft sich gegenseitig stärken. Wir beobachten Kreisläufe, setzen auf ökologische Landwirtschaft und holen uns Inspiration aus alten Kulturtechniken.",
    },
    {
      kind: "bullets",
      title: "Unsere Haltung",
      items: [
        "Permakultur-Prinzipien leiten den Alltag und jede Entscheidung.",
        "Natürliche Ökosysteme bekommen Zeit und Platz, sich zu regenerieren.",
        "Wissen aus der Region und jahrhundertealte Methoden wird bewusst gepflegt.",
        "Der Hof bleibt klein, persönlich und energieeffizient.",
      ],
    },
    {
      kind: "facts",
      title: "Drei Standbeine",
      items: [
        {
          label: "Selbstversorgung",
          value: "Schritt für Schritt entstehen autarke Energie- und Lebensmittelkreisläufe, die unabhängig machen.",
        },
        {
          label: "Spezialitätenverkauf",
          value: "Saisonale Produkte aus eigener Haltung und Verarbeitung, immer in überschaubaren Mengen.",
        },
        {
          label: "Seminare",
          value: "Ein kleines Retreat-Zentrum mit Raum für Workshops und Naturerfahrungen.",
        },
      ],
    },
  ],
  cta: {
    title: "Mehr über den Hof",
    body: "Du willst wissen, wie wir arbeiten oder uns besuchen? Melde dich und wir nehmen uns Zeit.",
    primaryLabel: "Kontakt aufnehmen",
    primaryHref: "/contact",
  },
};
