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
    | {
        kind: 'heroImage';
        image?: { src: string; alt: string; topCropPercent?: number };
        images?: Array<{ src: string; alt: string; topCropPercent?: number }>;
        slider?: {
          enabled?: boolean;
          autoPlayMs?: number;
        };
        maxHeight?: number;
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
    slug: 'vermietung',
    seo: {
      title: 'Vermietung | Oberhof Lunz',
      description:
        'Abgetrennter Retreat-Bereich mit 70 m² Seminarraum, Küche und flexiblen Übernachtungs-Optionen.',
    },
    hero: {
      title: 'Vermietung',
      subtitle:
        'Für Gruppen, die bewusst arbeiten und die Ruhe des Lunzertals in ihr Programm einbinden möchten.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Retreat-Bereich',
        body: 'Der Seminarbereich ist eigenständig, hell und offen. Holz, warme Farben und der Blick ins Grüne sorgen dafür, dass sich Gruppen auf ihre Inhalte konzentrieren können. Bei kühleren Temperaturen spendet der Holzofen Wärme.',
      },
      {
        kind: 'facts',
        title: 'Ausstattung',
        items: [
          {
            label: 'Seminarraum',
            value:
              'Rund 70 m², lichtdurchflutet, ausgestattet mit Sesseln, Meditationskissen, Yogamatten und Holzofen.',
          },
          {
            label: 'Infrastruktur',
            value:
              'Kleine Küche mit Sitzecke, separates WC und Dusche ausschließlich für Gäste.',
          },
          {
            label: 'Außenplätze',
            value:
              'Teichhütte, Labyrinth, Baumzelt, Schwitzhütte und ruhige Waldstücke.',
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'Übernachtung & Versorgung',
        items: [
          'Vier Zimmer direkt im Haus.',
          'Zahlreiche Outdoor-Schlafplätze und Zeltmöglichkeiten am Gelände.',
          'Zusätzliche Pensionen und Bauernhöfe in der näheren Umgebung.',
          'Individuelle Pakete für Verpflegung und Betreuung nach Absprache.',
        ],
      },
    ],
    cta: {
      title: 'Aufenthalt anfragen',
      body: 'Teile uns Gruppengröße, Zeitraum und Bedürfnisse mit – wir stellen ein passendes Angebot zusammen.',
      primaryLabel: 'Unverbindlich anfragen',
      primaryHref: '/contact',
    },
  },
  en: {
    slug: 'rentals',
    seo: {
      title: 'Rentals | Oberhof Lunz',
      description:
        'Dedicated retreat wing with a 70 m² seminar room, kitchen, and flexible overnight options.',
    },
    hero: {
      title: 'Rentals',
      subtitle:
        'For groups who value mindful work and want to weave the calm of the Lunz valley into their program.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Retreat area',
        body: 'The seminar area is self-contained, bright, and open. Wood, warm colors, and views into the greenery help groups focus on their content. When temperatures drop, the wood stove provides heat.',
      },
      {
        kind: 'facts',
        title: 'Amenities',
        items: [
          {
            label: 'Seminar room',
            value:
              'About 70 m², flooded with light, equipped with chairs, meditation cushions, yoga mats, and a wood stove.',
          },
          {
            label: 'Infrastructure',
            value:
              'Small kitchen with seating area plus separate restroom and shower exclusively for guests.',
          },
          {
            label: 'Outdoor spaces',
            value:
              'Pond hut, labyrinth, tree tent, sweat lodge, and quiet forest clearings.',
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'Stay & catering',
        items: [
          'Four rooms directly in the house.',
          'Numerous outdoor sleeping spots and tent areas on the grounds.',
          'Additional guesthouses and farms nearby.',
          'Custom catering and support packages on request.',
        ],
      },
    ],
    cta: {
      title: 'Request a stay',
      body: 'Share group size, timing, and needs – we will create a fitting offer.',
      primaryLabel: 'Request details',
      primaryHref: '/contact',
    },
  },
};
