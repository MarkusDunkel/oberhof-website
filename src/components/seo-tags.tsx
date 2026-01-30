import { Helmet } from 'react-helmet-async';
import type React from 'react';
import { useLocation } from 'react-router-dom';
import type { RouteName } from '@/lib/seo';
import { getRouteSeo, resolveLanguageAlternates } from '@/lib/seo';

interface SeoTagsProps {
  route: RouteName;
  /** Optional: override title (e.g. from page[lang].seo.title) */
  title?: string;
  /** Optional: override description (e.g. from page[lang].seo.description) */
  description?: string;
  children?: React.ReactNode;
}

export function SeoTags({ route, title, description, children }: SeoTagsProps) {
  const fallback = getRouteSeo(route);
  const { pathname } = useLocation();
  const { lang, canonical, alternates } = resolveLanguageAlternates(pathname);

  const finalTitle = title ?? fallback?.title;
  const finalDescription = description ?? fallback?.description;

  if (!finalTitle || !finalDescription) return null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{finalTitle}</title>

      {/* Basic SEO */}
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={alternates.de} hrefLang="de" />
      <link rel="alternate" href={alternates.en} hrefLang="en" />
      <link rel="alternate" href={alternates.xDefault} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:image"
        content="https://oberhof-lunz.at/og-images/image.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta
        name="twitter:image"
        content="https://oberhof-lunz.at/og-images/image.jpg"
      />

      {children}
    </Helmet>
  );
}
