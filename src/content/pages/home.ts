export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  tiles: Array<{ title: string; description: string; href: string }>;
  highlights: string[];
  cta: { title: string; body: string; primaryLabel: string; primaryHref: string };
};

export const homeContent: HomeContent = {
  heroTitle: "Oberhof Lunz",
  heroSubtitle:
    "Ein entschleunigter Bergbauernhof, der Naturkreisläufe pflegt und Menschen Raum zum Aufatmen schenkt.",
  tiles: [
    {
      title: "Produkte",
      description: "Wild, Fisch, Honig und mehr – achtsam verarbeitete Spezialitäten in kleinen Chargen.",
      href: "/produkte",
    },
    {
      title: "Veranstaltungen",
      description: "Retreats und Workshops mit viel Naturbezug, Kapelle, Teichhütte und Wald direkt vor der Tür.",
      href: "/veranstaltungen",
    },
    {
      title: "Vermietung",
      description: "Heller Seminarraum, individuelle Pakete und Übernachtungsmöglichkeiten am Hof und in der Umgebung.",
      href: "/vermietung",
    },
  ],
  highlights: [
    "600 Jahre Hofgeschichte zwischen Ötscher und Hochkar.",
    "Permakultur, Selbstversorgung und verantwortungsvolle Landwirtschaft als Haltung.",
    "Naturplätze wie Stiegengraben, Kapelle und Baumzelt für stille Momente.",
  ],
  cta: {
    title: "Den Oberhof erleben",
    body: "Erzähl uns von deinem Anliegen – ob Produkte, Retreat oder Seminar –, wir melden uns zeitnah.",
    primaryLabel: "Kontakt aufnehmen",
    primaryHref: "/kontakt",
  },
};
