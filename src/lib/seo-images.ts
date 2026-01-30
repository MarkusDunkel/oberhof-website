import type { RouteSeoEntry } from '@/lib/seo';
import type { GeneratedPicture } from '@/types/images';

type RouteName = RouteSeoEntry['name'];

export type SeoImage = {
  /** Relative path emitted by Vite; gets converted to an absolute URL later. */
  src: string;
  width?: number;
  height?: number;
};

/**
 * OG/Twitter images: use a single JPEG rendition (1200px wide) per route.
 * This is the most compatible format for social scrapers.
 *
 * We still import via `as=picture` so we can reuse your existing typings and
 * (optionally) grab width/height from the generated image metadata.
 */
import homeOg from '@/assets/images/home-hero.jpg?w=1200&format=jpeg&quality=80&as=picture';
import farmOg from '@/assets/images/the-farm/hero1.jpg?w=1200&format=jpeg&quality=80&as=picture';
import productsOg from '@/assets/images/products/hero.jpg?w=1200&format=jpeg&quality=80&as=picture';
import rentalsOg from '@/assets/images/rentals/apart1.jpeg?w=1200&format=jpeg&quality=80&as=picture';
import contactOg from '@/assets/images/contact/daniel.jpg?w=1200&format=jpeg&quality=80&as=picture';

function createSeoImage(picture: GeneratedPicture): SeoImage {
  const { img } = picture;

  // `img.src` should be a single generated JPEG file URL.
  // Width/height are optional; keep them if available.
  return {
    src: img?.src ?? '',
    width: img?.width ?? img?.w,
    height: img?.height ?? img?.h,
  };
}

const defaultImage = createSeoImage(homeOg);

const imagesByRoute: Partial<Record<RouteName, SeoImage>> = {
  home: defaultImage,
  'the-farm': createSeoImage(farmOg),
  products: createSeoImage(productsOg),
  rentals: createSeoImage(rentalsOg),
  contact: createSeoImage(contactOg),
};

export function getRouteSeoImage(route: RouteName): SeoImage {
  return imagesByRoute[route] ?? defaultImage;
}
