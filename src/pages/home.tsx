import { homeContent } from '@/content/pages/home';
import styles from './home.module.scss';
import { useLanguage } from '@/lib/language';

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <section className={styles['home-page']}>
      <div className={styles['home-page__content']}>
        <h1 className={styles['home-page__title']}>{content.heroTitle}</h1>
        <h3 className={styles['home-page__subtitle']}>
          {content.heroSubtitle}
        </h3>
        <img
          src="/images/logo-trans.png"
          alt="Oberhof Logo"
          className={styles['home-page__logo']}
        />
        <p className={styles['home-page__sub-subtitle']}>
          {content.heroSubSubtitle}
        </p>
      </div>
    </section>
  );
}
