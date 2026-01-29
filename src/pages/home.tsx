import { useEffect, useState } from 'react';
import { homeContent } from '@/content/pages/home';
import styles from './home.module.scss';
import { useLanguage } from '@/lib/language';
import logoMark from '@/assets/images/logo-trans.png';
import { SmartImage } from '@/components/smart-image';
import { cn } from '@/lib/utils';

const HOME_CONTENT_ANIMATED_KEY = 'home-content-animated';

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  const [shouldBlendIn, setShouldBlendIn] = useState(false);

  useEffect(() => {
    // Runs only on client
    const alreadyAnimated = sessionStorage.getItem(HOME_CONTENT_ANIMATED_KEY);
    if (!alreadyAnimated) {
      setShouldBlendIn(true);
      sessionStorage.setItem(HOME_CONTENT_ANIMATED_KEY, '1');
    }
  }, []);

  return (
    <section className={styles['home-page']}>
      <div
        className={cn(
          styles['home-page__content'],
          shouldBlendIn && styles['home-page__content--blend-in'],
        )}
      >
        <h1 className={styles['home-page__title']}>{content.heroTitle}</h1>
        <h3 className={styles['home-page__subtitle']}>
          {content.heroSubtitle}
        </h3>

        <SmartImage
          src={logoMark}
          alt="Oberhof Logo"
          className={styles['home-page__logo']}
          loading="eager"
          sizes="(max-width: 768px) 60vw, 240px"
        />

        <p className={styles['home-page__sub-subtitle']}>
          {content.heroSubSubtitle}
        </p>
      </div>
    </section>
  );
}
