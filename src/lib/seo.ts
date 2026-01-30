import manifest from '@/ssg/manifest.json';

export type RouteSeoEntry = (typeof manifest.routes)[number];

type RouteName = RouteSeoEntry['name'];

const routeMap = new Map<RouteName, RouteSeoEntry>(
  manifest.routes.map((route) => [route.name, route]),
);

function buildCanonical(path: string) {
  const normalized = path === '/' ? '' : path.replace(/^\//, '');
  return new URL(normalized, manifest.siteUrl).toString();
}

export function getRouteSeo(name: RouteName) {
  const entry = routeMap.get(name);
  if (!entry) return null;

  return {
    ...entry,
    canonical: buildCanonical(entry.path),
  };
}

export function getManifestRoutes() {
  return manifest.routes.map((route) => ({
    ...route,
    canonical: buildCanonical(route.path),
  }));
}

export const SITE_CANONICAL_BASE = manifest.siteUrl;
