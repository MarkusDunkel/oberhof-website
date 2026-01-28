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
        'Eigenständiges Ferien-Apartment mit 70 m² Wohnfläche, Küche und Blick ins Grüne.',
    },
    hero: {
      title: 'Vermietung',
      subtitle:
        'Für Paare, Familien oder Freund*innen, die Ruhe und Natur direkt am Hof erleben möchten.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Ferien-Apartment',
        body: 'Das Apartment umfasst rund 70 m², einen offenen Wohnbereich mit Holzofen, zwei Schlafräume und eine voll ausgestattete Küche. Naturmaterialien, warme Farben und der Blick über die Wiesen sorgen sofort für Entschleunigung.',
      },
      {
        kind: 'facts',
        title: 'Ausstattung',
        items: [
          {
            label: 'Wohnbereich',
            value:
              'Heller Ess- und Wohnzimmerbereich mit großem Tisch, Sofa, Holzofen und Bibliothek.',
          },
          {
            label: 'Infrastruktur',
            value:
              'Voll ausgestattete Küche, eigenes Bad mit Dusche, separates WC und Wäschepaket.',
          },
          {
            label: 'Außenplätze',
            value:
              'Eigene Terrasse, Zugang zum Teich, Feuerstelle sowie stille Plätze rund ums Haus.',
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'Übernachtung & Versorgung',
        items: [
          'Platz für bis zu vier Personen, optional mit Kinderbett.',
          'Selbstversorgerküche mit Grundausstattung aus Hofprodukten.',
          'Bio-Frühstückskorb oder Hofführungen auf Wunsch zubuchbar.',
          'Anreise per Auto, Bahn + Shuttle oder Fahrrad problemlos möglich.',
        ],
      },
    ],
    cta: {
      title: 'Aufenthalt anfragen',
      body: 'Teile uns Zeitraum und Wünsche mit – wir melden uns mit Details zum Ferien-Apartment.',
      primaryLabel: 'Unverbindlich anfragen',
      primaryHref: '/contact',
    },
  },
  en: {
    slug: 'rentals',
    seo: {
      title: 'Rentals | Oberhof Lunz',
      description:
        'Self-contained holiday apartment with 70 m² of living space, kitchen, and calming views.',
    },
    hero: {
      title: 'Rentals',
      subtitle:
        'Perfect for couples, families, or friends seeking a quiet stay on the farm.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Holiday apartment',
        body: 'The apartment covers roughly 70 m² with an airy living space, wood-burning stove, two bedrooms, and a fully equipped kitchen. Natural materials, warm tones, and views across the meadows invite you to slow down.',
      },
      {
        kind: 'facts',
        title: 'Amenities',
        items: [
          {
            label: 'Living area',
            value:
              'Bright lounge and dining space with large table, sofa, wood stove, and small library.',
          },
          {
            label: 'Infrastructure',
            value:
              'Fully equipped kitchen, private bathroom with shower, separate WC, and fresh linens.',
          },
          {
            label: 'Outdoor spaces',
            value:
              'Private terrace, access to the pond, fire pit, and quiet forest clearings around the farm.',
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'Stay & catering',
        items: [
          'Sleeps up to four guests, baby cot available on request.',
          'Self-catering kitchen stocked with farm essentials.',
          'Organic breakfast basket or farm tours available as add-ons.',
          'Easy arrival by car, train plus pickup, or bike.',
        ],
      },
    ],
    cta: {
      title: 'Request a stay',
      body: 'Tell us your preferred dates and wishes – we will send details about the holiday apartment.',
      primaryLabel: 'Request details',
      primaryHref: '/contact',
    },
  },
};
