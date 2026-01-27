import type { Language } from '@/lib/language';

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroSubSubtitle: string;
  tiles: Array<{ title: string; description: string; href: string }>;
  tileCtaLabel: string;
  highlights: string[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

export const homeContent: Record<Language, HomeContent> = {
  de: {
    heroTitle: 'Oberhof',
    heroSubtitle: 'Lunz am See',
    heroSubSubtitle:
      'Ein entschleunigter Bergbauernhof, der Naturkreisläufe pflegt und Menschen Raum zum Aufatmen schenkt. — Daniel Kofler',
    tiles: [
      {
        title: 'Der Hof',
        description:
          'Geschichte, Haltung und Selbstversorgung – ein Blick hinter die Kulissen des Bergbauernhofs.',
        href: '/the-farm',
      },
      {
        title: 'Produkte',
        description:
          'Wild, Fisch, Honig und mehr – achtsam verarbeitete Spezialitäten in kleinen Chargen.',
        href: '/products',
      },
      {
        title: 'Vermietung',
        description:
          'Heller Seminarraum, individuelle Pakete und Übernachtungsmöglichkeiten am Hof und in der Umgebung.',
        href: '/rentals',
      },
    ],
    tileCtaLabel: 'Mehr erfahren →',
    highlights: [
      '600 Jahre Hofgeschichte zwischen Ötscher und Hochkar.',
      'Permakultur, Selbstversorgung und verantwortungsvolle Landwirtschaft als Haltung.',
      'Naturplätze wie Stiegengraben, Kapelle und Baumzelt für stille Momente.',
    ],
    cta: {
      title: 'Den Oberhof erleben',
      body: 'Erzähl uns von deinem Anliegen – ob Produkte, Retreat oder Seminar –, wir melden uns zeitnah.',
      primaryLabel: 'Kontakt aufnehmen',
      primaryHref: '/contact',
    },
  },
  en: {
    heroTitle: 'Oberhof',
    heroSubtitle: 'Lunz am See',
    heroSubSubtitle:
      'A slow-paced mountain farm that nurtures natural cycles and offers people space to breathe. — Daniel Kofler',
    tiles: [
      {
        title: 'The Farm',
        description:
          'History, mindset, and self-sufficiency – a look behind the scenes of the mountain farm.',
        href: '/the-farm',
      },
      {
        title: 'Products',
        description:
          'Venison, fish, honey, and more – carefully crafted specialties in small batches.',
        href: '/products',
      },
      {
        title: 'Rentals',
        description:
          'Bright seminar room, tailored packages, and places to stay on the farm and nearby.',
        href: '/rentals',
      },
    ],
    tileCtaLabel: 'Learn more →',
    highlights: [
      '600 years of farm history between the Ötscher and Hochkar mountains.',
      'Permaculture, self-sufficiency, and responsible agriculture as a guiding attitude.',
      'Nature spots like Stiegengraben, chapel, and tree tent for quiet moments.',
    ],
    cta: {
      title: 'Experience the Oberhof',
      body: 'Tell us what you are looking for – products, retreat, or seminar – and we will reply shortly.',
      primaryLabel: 'Get in touch',
      primaryHref: '/contact',
    },
  },
};
