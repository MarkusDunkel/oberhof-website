import { homeContent } from '@/content/pages/home';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { useLanguage } from '@/lib/language';
import { useEffect } from 'react';

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const contactHref = '/contact';

  useEffect(() => {
    const body = document.body;
    const activeClass = 'home-hero-active';
    const scrolledClass = 'home-hero-scrolled';

    const handleScroll = () => {
      if (window.scrollY > 0) {
        body.classList.add(scrolledClass);
      } else {
        body.classList.remove(scrolledClass);
      }
    };

    body.classList.add(activeClass);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      body.classList.remove(activeClass);
      body.classList.remove(scrolledClass);
    };
  }, []);

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
