/* eslint-disable @typescript-eslint/no-explicit-any */

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

  /** Fires after load + decode */
  onLoaded?: () => void;

  /** Optional: disable the default fade-in */
  disableFadeIn?: boolean;
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
  try {
    if (typeof img.decode === 'function') {
      await img.decode();
    }
  } catch {
    // ignore
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
  disableFadeIn = false,
  style,
  className,
  ...rest
}: SmartImageProps) {
  const { width, height, onLoad, onError, ...imgProps } = rest;

  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [ready, setReady] = React.useState(false);

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

  const markReady = React.useCallback(() => {
    setReady(true);
    onLoaded?.();
  }, [onLoaded]);

  // ✅ Fix: if image is already loaded before React attaches onLoad, don't keep opacity:0 forever
  React.useEffect(() => {
    if (disableFadeIn) return;

    const img = imgRef.current;
    if (!img) return;

    // If already complete (from cache), onLoad might never fire.
    if (img.complete) {
      // naturalWidth > 0 means successful load
      if (img.naturalWidth > 0) {
        markReady();
      } else {
        // complete but failed -> don't keep invisible forever
        setReady(true);
      }
    }
  }, [disableFadeIn, markReady]);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = async (e) => {
    onLoad?.(e);

    await decodeIfPossible(e.currentTarget);

    markReady();
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    onError?.(e);
    // Don't stay invisible forever if the request fails
    setReady(true);
  };

  const fadeStyle: React.CSSProperties = disableFadeIn
    ? {}
    : {
        opacity: ready ? 1 : 0,
        transition: 'opacity 800ms ease-out',
      };

  const mergedStyle = { ...fadeStyle, ...style };

  const fetchPriorityAttr = fetchPriority
    ? ({ fetchpriority: fetchPriority } as any)
    : undefined;

  const imgElement = (
    <img
      ref={imgRef}
      {...imgProps}
      {...fetchPriorityAttr}
      src={fallbackSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={sizes}
      width={fallbackWidth}
      height={fallbackHeight}
      onLoad={handleLoad}
      onError={handleError}
      style={mergedStyle}
      className={className}
    />
  );

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
          {imgElement}
        </picture>
      );
    }
  }

  return imgElement;
}
