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
      title: "Der Hof",
      description: "Geschichte, Haltung und Selbstversorgung – ein Blick hinter die Kulissen des Bergbauernhofs.",
      href: "/the-farm",
    },
    {
      title: "Produkte",
      description: "Wild, Fisch, Honig und mehr – achtsam verarbeitete Spezialitäten in kleinen Chargen.",
      href: "/products",
    },
    {
      title: "Vermietung",
      description: "Heller Seminarraum, individuelle Pakete und Übernachtungsmöglichkeiten am Hof und in der Umgebung.",
      href: "/rentals",
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
    primaryHref: "/contact",
  },
};
