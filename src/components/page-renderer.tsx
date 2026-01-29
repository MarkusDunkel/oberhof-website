import type { PageContent as GenericPageContent } from '@/content/pages/the-farm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './page-renderer.module.scss';
import type { GeneratedPicture } from '@/types/images';
import { SmartImage } from './smart-image';

type Section = GenericPageContent['sections'][number];
type HeroImageSection = Extract<Section, { kind: 'heroImage' }>;
type HeroSlide = {
  src: GeneratedPicture;
  alt: string;
  topCropPercent?: number;
};
type HeroHeightStyle = React.CSSProperties & {
  '--hero-max-height'?: string;
};

type PageRendererProps<T extends GenericPageContent> = {
  content: T;
  children?: React.ReactNode;
};

export function PageRenderer<T extends GenericPageContent>({
  content,
  children,
}: PageRendererProps<T>) {
  const isExternalCta =
    /^(https?:)\/\//.test(content.cta.primaryHref) ||
    content.cta.primaryHref.startsWith('mailto:') ||
    content.cta.primaryHref.startsWith('tel:');

  return (
    <div className={styles['page-renderer']}>
      <header className={styles['page-renderer__intro']}>
        <p className={styles['page-renderer__slug']}>{content.slug}</p>
        <h1 className={styles['page-renderer__title']}>{content.hero.title}</h1>
        <p className={styles['page-renderer__subtitle']}>
          {content.hero.subtitle}
        </p>
      </header>
      <div className={styles['page-renderer__sections']}>
        {content.sections.map((section, index) => {
          const hasTitle = 'title' in section;
          const sectionClassName =
            section.kind === 'heroImage'
              ? styles['page-renderer__section-hero']
              : styles['page-renderer__section'];
          const key = hasTitle
            ? `${section.title}-${index}`
            : `hero-image-${index}`;

          return (
            <section key={key} className={sectionClassName}>
              {hasTitle ? (
                <h2 className={styles['page-renderer__section-title']}>
                  {section.title}
                </h2>
              ) : null}
              {renderSection(section)}
            </section>
          );
        })}
      </div>
      {children}
      <section className={styles['page-renderer__cta']}>
        <div className={styles['page-renderer__cta-copy']}>
          <p className={styles['page-renderer__cta-title']}>
            {content.cta.title}
          </p>
          <p className={styles['page-renderer__cta-body']}>
            {content.cta.body}
          </p>
        </div>
        <div className={styles['page-renderer__cta-actions']}>
          <Button asChild>
            {isExternalCta ? (
              <a
                href={content.cta.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.cta.primaryLabel}
              </a>
            ) : (
              <Link to={content.cta.primaryHref}>
                {content.cta.primaryLabel}
              </Link>
            )}
          </Button>
        </div>
      </section>
    </div>
  );
}

function renderSection(section: Section) {
  switch (section.kind) {
    case 'prose':
      return <p className={styles['page-renderer__text']}>{section.body}</p>;
    case 'bullets':
      return (
        <ul className={styles['page-renderer__list']}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'facts':
      return (
        <dl className={styles['page-renderer__facts']}>
          {section.items.map((fact) => (
            <div key={fact.label} className={styles['page-renderer__fact']}>
              <dt className={styles['page-renderer__fact-label']}>
                {fact.label}
              </dt>
              <dd className={styles['page-renderer__fact-value']}>
                {fact.value}
              </dd>
              {fact.image ? (
                <SmartImage
                  className={styles['page-renderer__fact-image']}
                  src={fact.image.src}
                  alt={fact.image.alt}
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              ) : null}
            </div>
          ))}
        </dl>
      );
    case 'heroImage':
      return <HeroImage section={section} />;
    default:
      return null;
  }
}

function HeroImage({ section }: { section: HeroImageSection }) {
  const slides = useMemo<HeroSlide[]>(() => {
    if (section.images && section.images.length > 0) {
      return section.images;
    }
    if (section.image) {
      return [section.image];
    }
    return [];
  }, [section.images, section.image]);

  const sliderEnabled = slides.length > 1 && (section.slider?.enabled ?? true);
  const maxHeight = section.maxHeight ?? 500;
  const heroHeightStyle = useMemo(
    () => getHeroHeightStyle(maxHeight),
    [maxHeight],
  );

  if (slides.length === 0) {
    return null;
  }

  if (!sliderEnabled) {
    const single = slides[0];
    return (
      <SmartImage
        className={styles['page-renderer__hero-image']}
        src={single.src}
        alt={single.alt}
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 1200px"
        style={{
          ...heroHeightStyle,
          objectPosition: getObjectPosition(single.topCropPercent),
        }}
      />
    );
  }

  return (
    <HeroImageSlider
      slides={slides}
      autoPlayMs={section.slider?.autoPlayMs}
      heroHeightStyle={heroHeightStyle}
    />
  );
}

type HeroImageSliderProps = {
  slides: HeroSlide[];
  autoPlayMs?: number;
  heroHeightStyle: HeroHeightStyle;
};

function HeroImageSlider({
  slides,
  autoPlayMs,
  heroHeightStyle,
}: HeroImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);

  const clearAutoPlayInterval = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearAutoPlayInterval();
      clearResumeTimeout();
    };
  }, []);

  useEffect(() => {
    clearAutoPlayInterval();

    if (!autoPlayMs || isAutoPaused) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, autoPlayMs);

    return clearAutoPlayInterval;
  }, [autoPlayMs, slides.length, isAutoPaused]);

  const pauseAutoAdvance = () => {
    if (!autoPlayMs) {
      return;
    }
    setIsAutoPaused(true);
    clearResumeTimeout();
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPaused(false);
      resumeTimeoutRef.current = null;
    }, 30000);
  };

  const goNext = () => setCurrentIndex((index) => (index + 1) % slides.length);
  const goPrev = () =>
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    if (clickX < rect.width / 2) {
      pauseAutoAdvance();
      goPrev();
    } else {
      pauseAutoAdvance();
      goNext();
    }
  };

  return (
    <div
      className={styles['page-renderer__hero-slider']}
      onClick={handleSliderClick}
      style={heroHeightStyle}
    >
      {slides.map((slide, index) => (
        <div
          key={`${slide.src.img?.src ?? slide.alt}-${index}`}
          className={`${styles['page-renderer__hero-slide']} ${
            index === currentIndex
              ? styles['page-renderer__hero-slide--active']
              : ''
          }`}
        >
          <SmartImage
            src={slide.src}
            alt={slide.alt}
            loading={index === currentIndex ? 'eager' : 'lazy'}
            sizes="(max-width: 1024px) 100vw, 1200px"
            style={{ objectPosition: getObjectPosition(slide.topCropPercent) }}
          />
        </div>
      ))}
      <div className={styles['page-renderer__hero-slider-dots']}>
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`${styles['page-renderer__hero-slider-dot']} ${
              currentIndex === index
                ? styles['page-renderer__hero-slider-dot--active']
                : ''
            }`}
            aria-label={`Go to image ${index + 1}`}
            onClick={(event) => {
              event.stopPropagation();
              pauseAutoAdvance();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function clampPercent(value: number) {
  return Math.min(100, Math.max(0, value));
}

function getObjectPosition(topCropPercent?: number) {
  const percent = clampPercent(topCropPercent ?? 50);
  return `50% ${percent}%`;
}

function getHeroHeightStyle(maxHeight: number): HeroHeightStyle {
  return { ['--hero-max-height' as const]: `${maxHeight}px` };
}
