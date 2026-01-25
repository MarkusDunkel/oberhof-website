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
  slug: "vermietung",
  seo: {
    title: "Vermietung | Oberhof Lunz",
    description:
      "Abgetrennter Retreat-Bereich mit 70 m² Seminarraum, Küche und flexiblen Übernachtungs-Optionen.",
  },
  hero: {
    title: "Vermietung",
    subtitle:
      "Für Gruppen, die bewusst arbeiten und die Ruhe des Lunzertals in ihr Programm einbinden möchten.",
  },
  sections: [
    {
      kind: "prose",
      title: "Retreat-Bereich",
      body:
        "Der Seminarbereich ist eigenständig, hell und offen. Holz, warme Farben und der Blick ins Grüne sorgen dafür, dass sich Gruppen auf ihre Inhalte konzentrieren können. Bei kühleren Temperaturen spendet der Holzofen Wärme.",
    },
    {
      kind: "facts",
      title: "Ausstattung",
      items: [
        {
          label: "Seminarraum",
          value: "Rund 70 m², lichtdurchflutet, ausgestattet mit Sesseln, Meditationskissen, Yogamatten und Holzofen.",
        },
        {
          label: "Infrastruktur",
          value: "Kleine Küche mit Sitzecke, separates WC und Dusche ausschließlich für Gäste.",
        },
        {
          label: "Außenplätze",
          value: "Teichhütte, Labyrinth, Baumzelt, Schwitzhütte und ruhige Waldstücke.",
        },
      ],
    },
    {
      kind: "bullets",
      title: "Übernachtung & Versorgung",
      items: [
        "Vier Zimmer direkt im Haus.",
        "Zahlreiche Outdoor-Schlafplätze und Zeltmöglichkeiten am Gelände.",
        "Zusätzliche Pensionen und Bauernhöfe in der näheren Umgebung.",
        "Individuelle Pakete für Verpflegung und Betreuung nach Absprache.",
      ],
    },
  ],
  cta: {
    title: "Aufenthalt anfragen",
    body: "Teile uns Gruppengröße, Zeitraum und Bedürfnisse mit – wir stellen ein passendes Angebot zusammen.",
    primaryLabel: "Unverbindlich anfragen",
    primaryHref: "/kontakt",
  },
};
