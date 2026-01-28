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
  contactInfo: {
    title: string;
    items: Array<{ label: string; value: string }>;
  };
  directionsHeading: string;
  directions: string[];
  creditsHeading: string;
  credits: string[];
};

export const page: Record<Language, PageContent> = {
  de: {
    slug: 'kontakt',
    seo: {
      title: 'Kontakt | Oberhof Lunz',
      description:
        'Direkter Draht zu Daniel Kofler, Anreisebeschreibung nach Ertltal 5 in Lunz am See und Bildnachweise.',
    },
    hero: {
      title: 'Kontakt',
      subtitle:
        'Ich freue mich über eine ruhige Nachricht und beantworte Anfragen zeitnah.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Melde dich',
        body: 'Ob Produkte, Retreat oder Vermietung – schreib kurz, was du vorhast. Gemeinsam finden wir den passenden Rahmen.',
      },
    ],
    cta: {
      title: 'Nachricht senden',
      body: 'Wir melden uns persönlich, meist innerhalb weniger Tage.',
      primaryLabel: 'Kontakt aufnehmen',
      primaryHref: 'mailto:daniel@oberhof-lunz.at',
    },
    contactInfo: {
      title: 'Kontakt',
      items: [
        { label: 'Name', value: 'Daniel Kofler' },
        { label: 'Telefon', value: '+43 680 1117299' },
        { label: 'E-Mail', value: 'daniel@oberhof-lunz.at' },
      ],
    },
    directionsHeading: 'Anfahrt',
    directions: [
      'Von Lunz Richtung Göstling fahren; nach der Brücke liegt rechts ein Fußballplatz.',
      'Etwa 200 Meter später rechts über die kleine Brücke mit dem Schild "Trialhof Enöckl" abbiegen – kommt eine 70er‑Zone, war es zu weit.',
      'Durch das steile Waldstück fahren, nach der Haarnadelkurve weiterhin geradeaus; bei der Gabelung mit Birke und Marterl rechts halten.',
      'Der Straße folgen, auch wenn sie zur Schotterpiste wird; alternativ zuerst "Ahorntal 3" ins Navi eingeben und dann weiter zu "Ertltal 1".',
    ],
    creditsHeading: 'Credits',
    credits: ['Fotos: Maximilian Salzer – www.maximiliansalzer.com'],
  },
  en: {
    slug: 'contact',
    seo: {
      title: 'Contact | Oberhof Lunz',
      description:
        'Direct line to Daniel Kofler, driving directions to Ertltal 5 in Lunz am See, plus photo credits.',
    },
    hero: {
      title: 'Contact',
      subtitle:
        'I look forward to thoughtful messages and answer inquiries promptly.',
    },
    sections: [
      {
        kind: 'prose',
        title: 'Reach out',
        body: 'Whether you are interested in products, retreats, or rentals – share a short note about your plans and we will shape the right framework.',
      },
    ],
    cta: {
      title: 'Send a message',
      body: 'We reply personally, usually within a few days.',
      primaryLabel: 'Contact us',
      primaryHref: 'mailto:daniel@oberhof-lunz.at',
    },
    contactInfo: {
      title: 'Contact',
      items: [
        { label: 'Name', value: 'Daniel Kofler' },
        { label: 'Phone', value: '+43 680 1117299' },
        { label: 'Email', value: 'daniel@oberhof-lunz.at' },
      ],
    },
    directionsHeading: 'Directions',
    directions: [
      'Drive from Lunz toward Göstling; after the bridge you will see a soccer field on the right.',
      'Roughly 200 meters later, turn right across the small bridge marked "Trialhof Enöckl" – if you reach the 70 km/h zone you have gone too far.',
      'Continue through the steep forest section, stay straight after the hairpin turn, and keep right at the fork with the birch tree and shrine.',
      'Follow the road even as it turns to gravel; alternatively enter "Ahorntal 3" in your GPS first and continue on to "Ertltal 1".',
    ],
    creditsHeading: 'Credits',
    credits: ['Photos: Maximilian Salzer – www.maximiliansalzer.com'],
  },
};
