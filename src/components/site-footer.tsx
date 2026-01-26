import { Link } from 'react-router-dom';
import { siteContent } from '@/content/site';
import styles from './site-footer.module.scss';
import { useLanguage } from '@/lib/language';

export function SiteFooter() {
  const { language } = useLanguage();
  const content = siteContent[language];

  return (
    <footer className={styles['site-footer']}>
      <div className={styles['site-footer__inner']}>
        <div className={styles['site-footer__brand']}>
          <div className={styles['site-footer__name']}>{content.brandName}</div>
          <div>{content.tagline}</div>
        </div>
        <div className={styles['site-footer__contact']}>
          <Link
            to="tel:+436801117299"
            className={styles['site-footer__contact-link']}
          >
            {content.contact.phone}
          </Link>
          <Link
            to="mailto:daniel@oberhof-lunz.at"
            className={styles['site-footer__contact-link']}
          >
            {content.contact.email}
          </Link>
          <Link to="/contact" className={styles['site-footer__contact-link']}>
            {content.contactLinkLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
