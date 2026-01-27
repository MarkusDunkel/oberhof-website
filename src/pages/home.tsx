import { homeContent } from '@/content/pages/home';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { useLanguage } from '@/lib/language';

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const contactHref = '/contact';

  return (
    <section className={styles['home-page']}>
      <div className={styles['home-page__content']}>
        <img
          src="/images/logo-trans.png"
          alt="Oberhof Logo"
          className={styles['home-page__logo']}
        />
        <h1 className={styles['home-page__title']}>{content.heroTitle}</h1>
        <p className={styles['home-page__subtitle']}>{content.heroSubtitle}</p>
        <Button asChild size="lg" className={styles['home-page__cta']}>
          <Link to={contactHref}>{content.cta.primaryLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
