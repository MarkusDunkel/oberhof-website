import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import styles from './not-found.module.scss';
import { useLanguage, type Language } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

const notFoundCopy: Record<
  Language,
  { title: string; body: string; cta: string }
> = {
  de: {
    title: 'Seite nicht gefunden',
    body: 'Vielleicht hilft dir ein Blick zurück zur Startseite.',
    cta: 'Zur Startseite',
  },
  en: {
    title: 'Page not found',
    body: 'Maybe a look back at the homepage will help.',
    cta: 'Back to homepage',
  },
};

export function NotFoundPage() {
  const { language } = useLanguage();
  const copy = notFoundCopy[language];

  return (
    <div className={styles['not-found-page']}>
      <SeoTags route="not-found" />
      <p className={styles['not-found-page__label']}>404</p>
      <h1 className={styles['not-found-page__title']}>{copy.title}</h1>
      <p className={styles['not-found-page__body']}>{copy.body}</p>
      <div className={styles['not-found-page__actions']}>
        <Button asChild>
          <Link to="/">{copy.cta}</Link>
        </Button>
      </div>
    </div>
  );
}
