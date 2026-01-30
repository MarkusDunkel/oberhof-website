import { Helmet } from 'react-helmet-async';
import type React from 'react';
import type { RouteSeoEntry } from '@/lib/seo';
import { SITE_CANONICAL_BASE, getRouteSeo } from '@/lib/seo';
import { getRouteSeoImage } from '@/lib/seo-images';

interface SeoTagsProps {
  route: RouteSeoEntry['name'];
  children?: React.ReactNode;
}

export function SeoTags({ route, children }: SeoTagsProps) {
  const meta = getRouteSeo(route);
  if (!meta) return null;

  const image = getRouteSeoImage(route);
  const imageUrl = buildAbsoluteImageUrl(image.src);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      {imageUrl ? (
        <>
          <meta property="og:image" content={imageUrl} />
          {image.width ? (
            <meta property="og:image:width" content={String(image.width)} />
          ) : null}
          {image.height ? (
            <meta property="og:image:height" content={String(image.height)} />
          ) : null}
          <meta name="twitter:image" content={imageUrl} />
        </>
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {children}
    </Helmet>
  );
}

function buildAbsoluteImageUrl(src?: string) {
  if (!src) return null;

  try {
    return new URL(src, SITE_CANONICAL_BASE).toString();
  } catch {
    return null;
  }
}
