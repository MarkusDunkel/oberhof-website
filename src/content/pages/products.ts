import deer from '@/assets/images/products/deer.jpg';
import fish from '@/assets/images/products/fish.jpg';
import honey from '@/assets/images/products/honey.jpg';
import juice from '@/assets/images/products/juice.png';
import productsHeroImg from '@/assets/images/products/hero.jpg';
import productsHeroImg2 from '@/assets/images/products/hero2.jpg';
import productsHeroImg3 from '@/assets/images/products/hero3.jpg';
import productsHeroImg4 from '@/assets/images/products/hero4.jpg';

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
        image?: { src: string; alt: string };
        images?: Array<{ src: string; alt: string }>;
        slider?: {
          enabled?: boolean;
          autoPlayMs?: number;
        };
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
    slug: 'produkte',
    seo: {
      title: 'Produkte | Oberhof Lunz',
      description:
        'Wildfleisch, Gebirgs-Saiblinge, Honig, Pilze, Sirupe und Fichtenbier – sorgfältig erzeugt in kleinen Mengen.',
    },
    hero: {
      title: 'Produkte',
      subtitle:
        'Wir erzeugen Lebensmittel mit Charakter, fernab von Massenproduktion und so regional wie möglich.',
    },
    sections: [
      {
        kind: 'heroImage',
        images: [
          {
            src: productsHeroImg,
            alt: 'Produkte des Oberhofs in einer rustikalen Präsentation',
          },
          {
            src: productsHeroImg2,
            alt: 'Produkte des Oberhofs in einer rustikalen Präsentation',
          },
          {
            src: productsHeroImg3,
            alt: 'Produkte des Oberhofs in einer rustikalen Präsentation',
          },
          {
            src: productsHeroImg4,
            alt: 'Produkte des Oberhofs in einer rustikalen Präsentation',
          },
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3000,
        },
      },
      {
        kind: 'prose',
        title: 'Unsere Philosophie',
        body: 'Der Oberhof ist nie auf konventionelle Landwirtschaft umgestiegen. Biologische Bewirtschaftung, respektvolle Tierhaltung und handwerkliche Verarbeitung sind für uns selbstverständlich. Wir achten auf Qualität statt Menge und geben jedem Produkt so viel Zeit, wie es braucht.',
      },
      {
        kind: 'facts',
        title: 'Kuratierte Auswahl',
        items: [
          {
            label: 'Sika-Hirsche',
            value:
              'Standorttreue Tiere, eigene Zucht bis zur stressfreien Schlachtung – begehrt wegen des aromatischen Wildfleisches.',
            image: { src: deer, alt: 'Platzhalterbild für Sika-Hirsche' },
          },
          {
            label: 'Gebirgs-Saiblinge',
            value:
              'Langsam wachsende Bach-Saiblinge, Bio-Futter und klares Quellwasser für feines Fleisch, frisch oder geräuchert.',
            image: {
              src: fish,
              alt: 'Platzhalterbild für Gebirgs-Saiblinge',
            },
          },
          {
            label: 'Honig & Met',
            value:
              'Bienen auf artenreichen Naturwiesen liefern einen vielschichtigen Jahrgangshonig als Basis für Honigwein.',
            image: { src: honey, alt: 'Platzhalterbild für Honig & Met' },
          },
          {
            label: 'Säfte & Sirupe',
            value:
              'Apfel, Birne, Holler, Minze oder Fichtenwipfel landen handverlesen in saisonalen Pressungen und Auszügen.',
            image: {
              src: juice,
              alt: 'Platzhalterbild für Säfte & Sirupe',
            },
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'So erhältst du unsere Spezialitäten',
        items: [
          'Nur limitierte Mengen – bitte frühzeitig Interesse melden.',
          'Wir informieren per Mail, welche Produkte saisonal verfügbar sind.',
          'Abholung nach Vereinbarung direkt am Hof oder bei gemeinsamen Übergaben.',
        ],
      },
    ],
    cta: {
      title: 'Produkte anfragen',
      body: 'Sag uns, wofür du dich interessierst, und wir teilen mit, wann und wie du es bekommst.',
      primaryLabel: 'Nachricht senden',
      primaryHref: '/contact',
    },
  },
  en: {
    slug: 'products',
    seo: {
      title: 'Products | Oberhof Lunz',
      description:
        'Venison, alpine char, honey, mushrooms, syrups, and spruce-tip beer – carefully crafted in small batches.',
    },
    hero: {
      title: 'Products',
      subtitle:
        'We create characterful foods, far from mass production and as regional as possible.',
    },
    sections: [
      {
        kind: 'heroImage',
        image: {
          src: productsHeroImg,
          alt: 'Oberhof product display used as a visual opener',
        },
      },
      {
        kind: 'prose',
        title: 'Our philosophy',
        body: 'The Oberhof never converted to conventional agriculture. Organic cultivation, respectful animal husbandry, and artisanal processing are second nature to us. We focus on quality instead of quantity and give every product the time it needs.',
      },
      {
        kind: 'facts',
        title: 'Curated selection',
        items: [
          {
            label: 'Sika deer',
            value:
              'Site-faithful animals, our own breeding through low-stress slaughter – prized for their aromatic venison.',
            image: { src: deer, alt: 'Placeholder image for Sika deer' },
          },
          {
            label: 'Alpine char',
            value:
              'Slow-growing brook char, organic feed, and clear spring water for delicate meat, fresh or smoked.',
            image: { src: fish, alt: 'Placeholder image for Alpine char' },
          },
          {
            label: 'Honey & mead',
            value:
              'Bees on species-rich meadows deliver a multi-layered vintage honey that becomes the base for mead.',
            image: {
              src: honey,
              alt: 'Placeholder image for Honey & mead',
            },
          },
          {
            label: 'Juices & syrups',
            value:
              'Apple, pear, elderflower, mint, or spruce tips are hand-picked for seasonal pressings and extracts.',
            image: {
              src: juice,
              alt: 'Placeholder image for Juices & syrups',
            },
          },
        ],
      },
      {
        kind: 'bullets',
        title: 'How to order',
        items: [
          'Availability is limited – please reach out early.',
          'We share seasonal availability updates via email.',
          'Pickup by appointment on the farm or during coordinated meetups.',
        ],
      },
    ],
    cta: {
      title: 'Request products',
      body: 'Tell us what you are interested in and we will let you know when and how you can receive it.',
      primaryLabel: 'Send message',
      primaryHref: '/contact',
    },
  },
};
