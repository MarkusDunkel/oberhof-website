import type { PageContent as GenericPageContent } from '@/content/pages/the-farm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import styles from './page-renderer.module.scss';

type Section = GenericPageContent['sections'][number];
type HeroImageSection = Extract<Section, { kind: 'heroImage' }>;

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
              <a href={content.cta.primaryHref}>{content.cta.primaryLabel}</a>
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
                <img
                  className={styles['page-renderer__fact-image']}
                  src={fact.image.src}
                  alt={fact.image.alt}
                  loading="lazy"
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
  const slides = useMemo(() => {
    if (section.images && section.images.length > 0) {
      return section.images;
    }
    if (section.image) {
      return [section.image];
    }
    return [];
  }, [section.images, section.image]);

  if (slides.length === 0) {
    return null;
  }

  const sliderEnabled = slides.length > 1 && (section.slider?.enabled ?? true);

  console.log('slide enabled: ', sliderEnabled);

  if (!sliderEnabled) {
    const single = slides[0];
    return (
      <img
        className={styles['page-renderer__hero-image']}
        src={single.src}
        alt={single.alt}
        loading="lazy"
      />
    );
  }

  return (
    <HeroImageSlider slides={slides} autoPlayMs={section.slider?.autoPlayMs} />
  );
}

type HeroImageSliderProps = {
  slides: Array<{ src: string; alt: string }>;
  autoPlayMs?: number;
};

function HeroImageSlider({ slides, autoPlayMs }: HeroImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);

  useEffect(() => {
    if (!autoPlayMs) {
      return;
    }

    const id = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, autoPlayMs);

    return () => window.clearInterval(id);
  }, [autoPlayMs, slides.length]);

  const goNext = () => setCurrentIndex((index) => (index + 1) % slides.length);
  const goPrev = () =>
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);

  return (
    <div className={styles['page-renderer__hero-slider']}>
      {slides.map((slide, index) => (
        <div
          key={`${slide.src}-${index}`}
          className={`${styles['page-renderer__hero-slide']} ${
            index === currentIndex
              ? styles['page-renderer__hero-slide--active']
              : ''
          }`}
        >
          <img src={slide.src} alt={slide.alt} loading="lazy" />
        </div>
      ))}
      <button
        type="button"
        className={`${styles['page-renderer__hero-slider-button']} ${styles['page-renderer__hero-slider-button--prev']}`}
        onClick={goPrev}
        aria-label="Previous image"
      >
        {'<'}
      </button>
      <button
        type="button"
        className={`${styles['page-renderer__hero-slider-button']} ${styles['page-renderer__hero-slider-button--next']}`}
        onClick={goNext}
        aria-label="Next image"
      >
        {'>'}
      </button>
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
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
