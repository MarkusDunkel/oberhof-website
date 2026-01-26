import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import styles from './layout.module.scss';

export function Layout() {
  return (
    <div className={styles.layout}>
      <SiteHeader />
      <main className={styles['layout__main']}>
        <div className={styles['layout__container']}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
