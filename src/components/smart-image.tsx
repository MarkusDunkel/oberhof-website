import * as React from 'react';
import type { GeneratedPicture, SmartImageSource } from '@/types/images';

const DEFAULT_SIZES = '(max-width: 768px) 90vw, 800px';

type SmartImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'children'
> & {
  src: SmartImageSource;
  sizes?: string;
};

function isGeneratedPicture(value: SmartImageSource): value is GeneratedPicture {
  return (
    typeof value === 'object' &&
    value !== null &&
    'img' in value &&
    'sources' in value
  );
}

function getMimeType(format: string) {
  if (!format) return undefined;
  if (format === 'jpg') return 'image/jpeg';
  if (format === 'jpeg') return 'image/jpeg';
  return `image/${format}`;
}

export function SmartImage({
  src,
  alt,
  sizes = DEFAULT_SIZES,
  loading = 'lazy',
  ...rest
}: SmartImageProps) {
  const { width, height, ...imgProps } = rest;

  if (isGeneratedPicture(src)) {
    const { img, sources } = src;
    const fallbackSrc = img?.src ?? '';
    const resolvedWidth = img?.w ?? width;
    const resolvedHeight = img?.h ?? height;

    return (
      <picture>
        {Object.entries(sources).map(([format, srcset]) => (
          <source
            key={format}
            type={getMimeType(format)}
            srcSet={srcset}
            sizes={sizes}
          />
        ))}
        <img
          {...imgProps}
          src={fallbackSrc}
          width={resolvedWidth}
          height={resolvedHeight}
          alt={alt}
          loading={loading}
          decoding="async"
          sizes={sizes}
        />
      </picture>
    );
  }

  return (
    <img
      {...imgProps}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={sizes}
      width={width}
      height={height}
    />
  );
}
