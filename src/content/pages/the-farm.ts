import type { Language } from '@/lib/language';

export type PageContent = {
  slug: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<
    | { kind: 'prose'; title: string; body: string }
    | { kind: 'bullets'; title: string; items: string[] }
    | {
        kind: 'facts';
        title: string;
        items: Array<{ label: string; value: string; image?: { src: string; alt: string } }>;
      }
  >;
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

export const page: Record<Language, PageContent> = {
  de: {
    slug: 'der-hof',
    seo: {
      title: 'Der Hof | Oberhof Lunz',
      description:
        '600 Jahre alter Bergbauernhof, der nach Permakultur-Prinzipien arbeitet und Menschen wie Natur Raum gibt.',
    },
    hero: {
      title: 'Der Oberhof',
      subtitle:
        'Ein Bergbauernhof in Lunz am See, der seit Jahrhunderten besteht und heute behutsam in Richtung Selbstversorgung wächst.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Ein lebendiger Bergbauernhof',
        body: 'Ich bewirtschafte den Oberhof seit 2014 und sehe ihn als ganzheitliches System, in dem Menschen, Tiere und Landschaft sich gegenseitig stärken. Wir beobachten Kreisläufe, setzen auf ökologische Landwirtschaft und holen uns Inspiration aus alten Kulturtechniken.',
      },
      {
        kind: 'bullets',
        title: 'Unsere Haltung',
        items: [
          'Permakultur-Prinzipien leiten den Alltag und jede Entscheidung.',
          'Natürliche Ökosysteme bekommen Zeit und Platz, sich zu regenerieren.',
          'Wissen aus der Region und jahrhundertealte Methoden wird bewusst gepflegt.',
          'Der Hof bleibt klein, persönlich und energieeffizient.',
        ],
      },
      {
        kind: 'facts',
        title: 'Drei Standbeine',
        items: [
          {
            label: 'Selbstversorgung',
            value:
              'Schritt für Schritt entstehen autarke Energie- und Lebensmittelkreisläufe, die unabhängig machen.',
          },
          {
            label: 'Spezialitätenverkauf',
            value:
              'Saisonale Produkte aus eigener Haltung und Verarbeitung, immer in überschaubaren Mengen.',
          },
          {
            label: 'Seminare',
            value:
              'Ein kleines Retreat-Zentrum mit Raum für Workshops und Naturerfahrungen.',
          },
        ],
      },
    ],
    cta: {
      title: 'Mehr über den Hof',
      body: 'Du willst wissen, wie wir arbeiten oder uns besuchen? Melde dich und wir nehmen uns Zeit.',
      primaryLabel: 'Kontakt aufnehmen',
      primaryHref: '/contact',
    },
  },
  en: {
    slug: 'the-farm',
    seo: {
      title: 'The Farm | Oberhof Lunz',
      description:
        'A 600-year-old mountain farm guided by permaculture principles, creating space for both people and nature.',
    },
    hero: {
      title: 'The Oberhof',
      subtitle:
        'A mountain farm in Lunz am See that has existed for centuries and is now gently evolving toward self-sufficiency.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'A living mountain farm',
        body: 'I have been stewarding the Oberhof since 2014 and see it as an interconnected system where people, animals, and landscape strengthen one another. We observe natural cycles, practice ecological agriculture, and draw inspiration from traditional techniques.',
      },
      {
        kind: 'bullets',
        title: 'Our approach',
        items: [
          'Permaculture principles guide daily life and every decision.',
          'Natural ecosystems receive the time and space they need to regenerate.',
          'Regional knowledge and centuries-old methods are actively cultivated.',
          'The farm remains small, personal, and energy-efficient.',
        ],
      },
      {
        kind: 'facts',
        title: 'Three pillars',
        items: [
          {
            label: 'Self-sufficiency',
            value:
              'Step by step, autonomous energy and food cycles emerge that make us independent.',
          },
          {
            label: 'Specialty products',
            value:
              'Seasonal goods from our own husbandry and processing, always in carefully curated quantities.',
          },
          {
            label: 'Workshops',
            value:
              'A small retreat center that offers space for workshops and nature experiences.',
          },
        ],
      },
    ],
    cta: {
      title: 'Learn more about the farm',
      body: 'Want to see how we work or plan a visit? Reach out and we will take the time for you.',
      primaryLabel: 'Get in touch',
      primaryHref: '/contact',
    },
  },
};
