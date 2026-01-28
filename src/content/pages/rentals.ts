import apart1 from '@/assets/images/rentals/apart1.jpeg';
import apart3 from '@/assets/images/rentals/apart3.jpeg';
import apart4 from '@/assets/images/rentals/apart4.jpeg';
import apart5 from '@/assets/images/rentals/apart5.jpeg';
import apart6 from '@/assets/images/rentals/apart6.jpeg';
import apart7 from '@/assets/images/rentals/apart7.jpeg';
import apart8 from '@/assets/images/rentals/apart8.jpeg';

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
        items: Array<{
          label: string;
          value: string;
          image?: { src: string; alt: string };
        }>;
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
        kind: 'heroImage',
        images: [
          {
            src: apart1,
            alt: 'Wohnbereich des Ferien-Apartments mit Sofa und Ofen',
            topCropPercent: 40,
          },
          {
            src: apart3,
            alt: 'Essbereich des Apartments mit Blick ins Grüne',
            topCropPercent: 45,
          },
          {
            src: apart4,
            alt: 'Schlafzimmer mit Holz und warmen Textilien',
            topCropPercent: 35,
          },
          {
            src: apart5,
            alt: 'Detailaufnahme der Küche im Ferien-Apartment',
            topCropPercent: 50,
          },
          {
            src: apart6,
            alt: 'Außenbereich mit Zugang zum Garten',
            topCropPercent: 30,
          },
          {
            src: apart7,
            alt: 'Leseecke im Apartment mit Bibliothek',
            topCropPercent: 50,
          },
          {
            src: apart8,
            alt: 'Blick vom Apartment auf die umliegende Landschaft',
            topCropPercent: 35,
          },
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3000,
        },
        maxHeight: 800,
      },
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
      title: 'Buche jetzt',
      body: 'Wähle deinen Wunschtermin und buche das Ferien-Apartment direkt über Airbnb.',
      primaryLabel: 'Jetzt auf Airbnb buchen',
      primaryHref: 'https://www.airbnb.com/rooms',
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
        kind: 'heroImage',
        images: [
          {
            src: apart1,
            alt: 'Living area of the holiday apartment with sofa and stove',
            topCropPercent: 40,
          },
          {
            src: apart3,
            alt: 'Dining space with views into the greenery',
            topCropPercent: 45,
          },
          {
            src: apart4,
            alt: 'Bedroom with wooden interior and soft textiles',
            topCropPercent: 35,
          },
          {
            src: apart5,
            alt: 'Kitchen details inside the holiday apartment',
            topCropPercent: 50,
          },
          {
            src: apart6,
            alt: 'Outdoor area leading into the garden',
            topCropPercent: 30,
          },
          {
            src: apart7,
            alt: 'Reading nook and library inside the apartment',
            topCropPercent: 50,
          },
          {
            src: apart8,
            alt: 'View from the apartment across the surrounding landscape',
            topCropPercent: 35,
          },
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3000,
        },
        maxHeight: 800,
      },
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
      title: 'Book now',
      body: 'Pick your preferred dates and book the holiday apartment directly via Airbnb.',
      primaryLabel: 'Book on Airbnb',
      primaryHref: 'https://www.airbnb.com/rooms',
    },
  },
};
