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
  slug: "products",
  seo: {
    title: "Produkte | Oberhof Lunz",
    description:
      "Wildfleisch, Gebirgs-Saiblinge, Honig, Pilze, Sirupe und Fichtenbier – sorgfältig erzeugt in kleinen Mengen.",
  },
  hero: {
    title: "Produkte",
    subtitle:
      "Wir erzeugen Lebensmittel mit Charakter, fernab von Massenproduktion und so regional wie möglich.",
  },
  sections: [
    {
      kind: "prose",
      title: "Unsere Philosophie",
      body:
        "Der Oberhof ist nie auf konventionelle Landwirtschaft umgestiegen. Biologische Bewirtschaftung, respektvolle Tierhaltung und handwerkliche Verarbeitung sind für uns selbstverständlich. Wir achten auf Qualität statt Menge und geben jedem Produkt so viel Zeit, wie es braucht.",
    },
    {
      kind: "facts",
      title: "Kuratierte Auswahl",
      items: [
        {
          label: "Sika-Hirsche",
          value: "Standorttreue Tiere, eigene Zucht bis zur stressfreien Schlachtung – begehrt wegen des aromatischen Wildfleisches.",
        },
        {
          label: "Gebirgs-Saiblinge",
          value: "Langsam wachsende Bach-Saiblinge, Bio-Futter und klares Quellwasser für feines Fleisch, frisch oder geräuchert.",
        },
        {
          label: "Honig & Met",
          value: "Bienen auf artenreichen Naturwiesen liefern einen vielschichtigen Jahrgangshonig als Basis für Honigwein.",
        },
        {
          label: "Säfte & Sirupe",
          value: "Apfel, Birne, Holler, Minze oder Fichtenwipfel landen handverlesen in saisonalen Pressungen und Auszügen.",
        },
        {
          label: "Shii-Take",
          value: "Widerstandsfähige Pilze mit kräftigem Umami-Geschmack – frisch für die Küche kultiviert.",
        },
        {
          label: "Fichtenbier",
          value: "Gemeinsam mit Erzbräu gebrautes Bio-Bier, veredelt mit unseren Maiwipfeln und ihren ätherischen Ölen.",
        },
      ],
    },
    {
      kind: "bullets",
      title: "So erhältst du unsere Spezialitäten",
      items: [
        "Nur limitierte Mengen – bitte frühzeitig Interesse melden.",
        "Wir informieren per Mail, welche Produkte saisonal verfügbar sind.",
        "Abholung nach Vereinbarung direkt am Hof oder bei gemeinsamen Übergaben.",
      ],
    },
  ],
  cta: {
    title: "Produkte anfragen",
    body: "Sag uns, wofür du dich interessierst, und wir teilen mit, wann und wie du es bekommst.",
    primaryLabel: "Nachricht senden",
    primaryHref: "/contact",
  },
};
