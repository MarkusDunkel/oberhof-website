import { Helmet } from 'react-helmet-async';
import type React from 'react';
import type { RouteSeoEntry } from '@/lib/seo';
import { getRouteSeo } from '@/lib/seo';

interface SeoTagsProps {
  route: RouteSeoEntry['name'];
  children?: React.ReactNode;
}

export function SeoTags({ route, children }: SeoTagsProps) {
  const meta = getRouteSeo(route);
  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {children}
    </Helmet>
  );
}
