import { page as contactContent } from '@/content/pages/contact';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import styles from './contact.module.scss';

export function ContactPage() {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <div className={styles['contact-page']}>
      <PageRenderer content={content}>
        <section className={styles['contact-page__details']}>
          <div id="directions" className={styles['contact-page__group']}>
            <h2 className={styles['contact-page__heading']}>
              {content.directionsHeading}
            </h2>
            <ol className={styles['contact-page__list']}>
              {content.directions.map((step, index) => (
                <li key={`${step}-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles['contact-page__group']}>
            <h3 className={styles['contact-page__credits-heading']}>
              {content.creditsHeading}
            </h3>
            <ul className={styles['contact-page__credits']}>
              {content.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
        </section>
      </PageRenderer>
    </div>
  );
}
