import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import styles from './home-layout.module.scss';

export function HomeLayout() {
  return (
    <div className={`${styles['home-layout']} home-layout`}>
      <div className={styles['home-layout__hero-frame']}>
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
