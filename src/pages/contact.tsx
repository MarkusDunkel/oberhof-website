import { page as contactContent } from '@/content/pages/contact';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import danielImage from '@/assets/images/contact/daniel.jpg';
import styles from './contact.module.scss';

export function ContactPage() {
  const { language } = useLanguage();
  const content = contactContent[language];

  const contactHighlight = (
    <section className={styles['contact-page__highlight']}>
      <div className={styles['contact-page__highlight-card']}>
        <p className={styles['contact-page__highlight-title']}>
          {content.contactInfo.title}
        </p>
        <dl className={styles['contact-page__highlight-facts']}>
          {content.contactInfo.items.map((item) => (
            <div
              key={item.label}
              className={styles['contact-page__highlight-fact']}
            >
              <dt className={styles['contact-page__highlight-label']}>
                {item.label}
              </dt>
              <dd className={styles['contact-page__highlight-value']}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={styles['contact-page__highlight-image']}>
        <img
          src={danielImage}
          alt={
            language === 'de'
              ? 'Porträt von Daniel Kofler'
              : 'Portrait of Daniel Kofler'
          }
          loading="lazy"
        />
      </div>
    </section>
  );

  return (
    <div className={styles['contact-page']}>
      <PageRenderer content={content}>
        {contactHighlight}
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
        </section>
      </PageRenderer>
    </div>
  );
}
