import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import styles from './home-layout.module.scss';
import { SmartImage } from './smart-image';
import { cn } from '@/lib/utils';
import heroBackground from '@/assets/images/home-hero.jpg?w=1280;1600;1920;2560;3200&format=avif;webp;jpeg&quality=65&as=picture';

export function HomeLayout() {
  const [bgReady, setBgReady] = useState(false);

  return (
    <div className={cn(styles['home-layout'], 'home-layout')}>
      <div className={styles['home-layout__hero-frame']}>
        <div
          className={cn(
            styles['home-layout__hero-media'],
            bgReady && styles['home-layout__hero-media--loaded'],
          )}
          aria-hidden="true"
        >
          <SmartImage
            src={heroBackground}
            alt=""
            className={styles['home-layout__hero-media-image']}
            loading="eager"
            fetchPriority="high"
            sizes="calc(100vw * 1.08)"
            onLoaded={() => setBgReady(true)} // ✅ fade starts only after load+decode
            onError={() => setBgReady(true)} // ✅ don’t stay invisible if it fails
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
