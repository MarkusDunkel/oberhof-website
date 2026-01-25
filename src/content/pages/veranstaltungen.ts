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
  slug: "veranstaltungen",
  seo: {
    title: "Veranstaltungen | Oberhof Lunz",
    description:
      "Retreats und Workshops mit viel Naturbezug, ruhigem Seminarraum und ausgewählten Außenplätzen.",
  },
  hero: {
    title: "Veranstaltungen",
    subtitle:
      "Der Oberhof ist ein Ort für ruhige Gruppen, die persönliche Entwicklung mit Naturerfahrung verbinden möchten.",
  },
  sections: [
    {
      kind: "prose",
      title: "Raum für innere und äußere Stille",
      body:
        "Zwischen Wald, Wasserfällen und dem Lunzer See entstehen hier Retreats mit Fokus auf Achtsamkeit, Körperarbeit oder Natur-Coaching. Der Seminarraum ist abgeschieden, die Atmosphäre reduziert und warm – ideal, um Prozesse zu begleiten.",
    },
    {
      kind: "bullets",
      title: "Außenbereiche, die dich begleiten",
      items: [
        "Kapelle für stille Einheiten",
        "Teichhütte und Baumzelt für Sessions im Freien",
        "Labyrinth, Schwitzhütte und Lagerfeuerplätze",
        "Wanderwege in den Stiegengraben und rund um den Lunzer See",
      ],
    },
    {
      kind: "facts",
      title: "Gut zu wissen",
      items: [
        {
          label: "Verfügbarkeit",
          value: "Nur wenige Veranstaltungen pro Jahr, weil der Hof primär landwirtschaftlich arbeitet.",
        },
        {
          label: "Seminarzentrum",
          value: "Heller Raum mit Holzofen, Yogamatten, Meditationskissen und kleiner Küche.",
        },
        {
          label: "Naturbezug",
          value: "Außenplätze und Wanderungen starten direkt vor der Haustüre.",
        },
      ],
    },
  ],
  cta: {
    title: "Retreat planen",
    body: "Erzähl uns von deinem Seminarvorhaben und wir schauen gemeinsam nach einem passenden Zeitfenster.",
    primaryLabel: "Termin anfragen",
    primaryHref: "/kontakt",
  },
};
