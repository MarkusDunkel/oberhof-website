// src/lib/seo.ts
export const SITE_CANONICAL_BASE = 'https://oberhof-lunz.at';
const SITE_URL = SITE_CANONICAL_BASE;

export type RouteName =
  | 'home'
  | 'the-farm'
  | 'products'
  | 'rentals'
  | 'contact';

type SeoEntry = {
  title: string;
  description: string;
};

const seoByRoute: Record<RouteName, SeoEntry> = {
  home: {
    title: 'Oberhof – Bergbauernhof in Lunz am See',
    description:
      'Ruhiger Bergbauernhof zwischen Ötscher und Hochkar: saisonale Hofprodukte, Ferienwohnungen und echte Gastfreundschaft am Oberhof in Lunz am See.',
  },
  'the-farm': {
    title: 'Der Oberhof – Landwirtschaft, Wald & Handwerk',
    description:
      'Lerne den Oberhof kennen: Familienbetrieb im Ertltal, nachhaltige Forstwirtschaft, Jagd und handwerkliche Traditionen in Lunz am See.',
  },
  products: {
    title: 'Hofprodukte vom Oberhof – Wild, Fisch & Honig',
    description:
      'Hausgemachte Spezialitäten vom Oberhof: Hirsch, Wildschwein, frischer Fisch, Säfte, Sirupe und Honig aus eigener Produktion.',
  },
  rentals: {
    title: 'Urlaub am Oberhof – Ferienwohnung & Selbstversorgerhütte',
    description:
      'Gemütliche Apartments und Almhütten am Oberhof mieten: ruhige Auszeit zwischen Ötscher und Hochkar mit Blick ins Ertltal.',
  },
  contact: {
    title: 'Kontakt & Anreise zum Oberhof bei Lunz am See',
    description:
      'Schreibe Familie Kofler, plane deine Anreise zum Oberhof und erhalte alle Kontaktinformationen, Telefonnummern und Wegbeschreibungen.',
  },
};

function normalizeInputPath(pathname: string) {
  if (!pathname) return '/';
  let p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  p = p.replace(/\/{2,}/g, '/');
  if (p === '/en') return '/en/';
  if (p === '/en/') return '/en/';
  if (p !== '/') p = p.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

function normalizeGermanPath(p: string) {
  if (!p || p === '/') return '/';
  let out = p.startsWith('/') ? p : `/${p}`;
  out = out.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  return out === '' ? '/' : out;
}

function buildAbsolute(pathname: string) {
  const clean = pathname === '/' ? '' : pathname.replace(/^\//, '');
  return new URL(clean, SITE_URL).toString();
}

export function resolveLanguageAlternates(pathname: string) {
  const normalized = normalizeInputPath(pathname);
  const isEnglish = normalized === '/en/' || normalized.startsWith('/en/');

  const germanSource = isEnglish
    ? normalized.replace(/^\/en/, '') || '/'
    : normalized;
  const germanPath = normalizeGermanPath(germanSource);
  const englishPath = germanPath === '/' ? '/en/' : `/en${germanPath}`;

  const canonicalPath = isEnglish ? normalized : germanPath;

  return {
    lang: isEnglish ? 'en' : 'de',
    canonical: buildAbsolute(canonicalPath),
    alternates: {
      de: buildAbsolute(germanPath),
      en: buildAbsolute(englishPath),
      xDefault: buildAbsolute(germanPath),
    },
  } as const;
}

export function getRouteSeo(route: RouteName) {
  return seoByRoute[route];
}

export function withLang(path: string, lang: 'de' | 'en') {
  // normalize
  if (!path.startsWith('/')) path = `/${path}`;

  // strip any existing /en prefix
  const unprefixed = path === '/en' ? '/' : path.replace(/^\/en(?=\/|$)/, '');
  const clean = unprefixed === '' ? '/' : unprefixed;

  if (lang === 'en') return clean === '/' ? '/en/' : `/en${clean}`;
  return clean;
}
