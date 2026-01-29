import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import styles from './home-layout.module.scss';
import heroBackground from '@/assets/images/home-hero.jpg';
import { SmartImage } from './smart-image';

export function HomeLayout() {
  return (
    <div className={`${styles['home-layout']} home-layout`}>
      <div className={styles['home-layout__hero-frame']}>
        <div className={styles['home-layout__hero-media']} aria-hidden="true">
          <SmartImage
            src={heroBackground}
            alt=""
            className={styles['home-layout__hero-media-image']}
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <SiteHeader />
        <main className={styles['home-layout__main']}>
          <div className={styles['home-layout__container']}>
            <Outlet />
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
