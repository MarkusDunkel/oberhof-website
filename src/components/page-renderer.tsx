import type { PageContent as GenericPageContent } from '@/content/pages/the-farm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import styles from './page-renderer.module.scss';

type Section = GenericPageContent['sections'][number];

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
      return (
        <img
          className={styles['page-renderer__hero-image']}
          src={section.image.src}
          alt={section.image.alt}
          loading="lazy"
        />
      );
    default:
      return null;
  }
}
