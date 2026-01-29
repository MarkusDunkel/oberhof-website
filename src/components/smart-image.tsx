import * as React from 'react';
import type {
  GeneratedPicture,
  PictureSourceArray,
  PictureSourceRecord,
  SmartImageSource,
} from '@/types/images';

const DEFAULT_SIZES = '(max-width: 768px) 90vw, 800px';

type SmartImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'children'
> & {
  src: SmartImageSource;
  sizes?: string;
  fetchPriority?: 'high' | 'low' | 'auto';

  /**
   * Fires after the image has loaded and (best-effort) finished decoding,
   * i.e. it's ready to paint crisply.
   */
  onLoaded?: () => void;
};

type NormalizedSource = {
  type?: string;
  srcSet: string;
  sizes?: string;
};

/* ------------------------------------------------------------------ */
/* type guards                                                         */
/* ------------------------------------------------------------------ */

function isPictureSourceArray(value: unknown): value is PictureSourceArray {
  return (
    Array.isArray(value) &&
    value.every(
      (entry) =>
        !!entry &&
        typeof entry === 'object' &&
        typeof (entry as any).srcset === 'string',
    )
  );
}

function isPictureSourceRecord(value: unknown): value is PictureSourceRecord {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function isGeneratedPicture(
  value: SmartImageSource,
): value is GeneratedPicture {
  if (!value || typeof value !== 'object') return false;

  const maybe = value as GeneratedPicture;
  return (
    !!maybe.img &&
    typeof maybe.img === 'object' &&
    typeof maybe.img.src === 'string' &&
    (isPictureSourceArray(maybe.sources) ||
      isPictureSourceRecord(maybe.sources))
  );
}

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

function normalizeMimeType(type?: string | null, format?: string) {
  const value = (type ?? format ?? '').toLowerCase().trim();
  if (!value) return undefined;

  if (value.startsWith('image/')) return value;
  if (value === 'jpg' || value === 'jpeg') return 'image/jpeg';
  if (value === 'svg') return 'image/svg+xml';

  return `image/${value}`;
}

function normalizeSources(
  sources: GeneratedPicture['sources'],
): NormalizedSource[] {
  if (isPictureSourceArray(sources)) {
    return sources.map((source) => ({
      srcSet: source.srcset,
      type: normalizeMimeType(source.type ?? undefined),
      sizes: source.sizes ?? undefined,
    }));
  }

  if (isPictureSourceRecord(sources)) {
    return Object.entries(sources).map(([format, srcset]) => ({
      srcSet: srcset,
      type: normalizeMimeType(undefined, format),
    }));
  }

  return [];
}

function resolveDimension(
  explicit: React.ImgHTMLAttributes<HTMLImageElement>['width'],
  primary?: number,
  secondary?: number,
) {
  return explicit ?? primary ?? secondary;
}

async function decodeIfPossible(img: HTMLImageElement) {
  // Best-effort: decode can throw (e.g., cancelled loads); ignore and continue.
  try {
    if (typeof (img as any).decode === 'function') {
      await img.decode();
    }
  } catch {
    // noop
  }
}

/* ------------------------------------------------------------------ */
/* component                                                           */
/* ------------------------------------------------------------------ */

export function SmartImage({
  src,
  alt,
  sizes = DEFAULT_SIZES,
  loading = 'lazy',
  fetchPriority,
  onLoaded,
  ...rest
}: SmartImageProps) {
  const { width, height, onLoad, ...imgProps } = rest;

  const generatedPicture = isGeneratedPicture(src) ? src : null;

  const fallbackWidth = generatedPicture
    ? resolveDimension(
        width,
        generatedPicture.img.width,
        generatedPicture.img.w,
      )
    : width;

  const fallbackHeight = generatedPicture
    ? resolveDimension(
        height,
        generatedPicture.img.height,
        generatedPicture.img.h,
      )
    : height;

  const fallbackSrc =
    typeof src === 'string' ? src : (generatedPicture?.img.src ?? '');

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = async (e) => {
    // Preserve default onLoad behavior if consumer provided it
    onLoad?.(e);

    // Ensure image is ready to paint (best-effort)
    await decodeIfPossible(e.currentTarget);

    // Notify consumer that the image is fully ready (loaded + decoded)
    onLoaded?.();
  };

  if (generatedPicture) {
    const pictureSources = normalizeSources(generatedPicture.sources);

    if (pictureSources.length > 0) {
      return (
        <picture>
          {pictureSources.map((source) => (
            <source
              key={source.type ?? source.srcSet}
              type={source.type}
              srcSet={source.srcSet}
              sizes={source.sizes ?? sizes}
            />
          ))}
          <img
            {...imgProps}
            src={generatedPicture.img.src}
            alt={alt}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            width={fallbackWidth}
            height={fallbackHeight}
            onLoad={handleLoad}
          />
        </picture>
      );
    }
  }

  return (
    <img
      {...imgProps}
      src={fallbackSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      sizes={sizes}
      width={fallbackWidth}
      height={fallbackHeight}
      onLoad={handleLoad}
    />
  );
}
