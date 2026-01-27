import { Outlet, useLocation } from 'react-router-dom';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import styles from './layout.module.scss';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={styles.layout}>
      <SiteHeader />
      <main className={styles.layout__main}>
        {isHome ? (
          <Outlet />
        ) : (
          <div className={styles.layout__container}>
            <Outlet />
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
