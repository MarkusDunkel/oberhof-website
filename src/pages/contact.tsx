import { page as contactContent } from '@/content/pages/contact';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import danielImage from '@/assets/images/contact/daniel.jpg';
import { SmartImage } from '@/components/smart-image';
import styles from './contact.module.scss';
import { SeoTags } from '@/components/seo-tags';
import { siteContent } from '@/content/site';
import { SITE_CANONICAL_BASE } from '@/lib/seo';

const DESTINATION = {
  latitude: 47.83053656105003,
  longitude: 14.975329097871985,
  address: 'Ertltal 5, 3293 Lunz am See, Österreich',
};

export function ContactPage() {
  const { language } = useLanguage();
  const content = contactContent[language];
  const site = siteContent[language];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.brandName,
    url: SITE_CANONICAL_BASE,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: new URL('images/favicon.png', SITE_CANONICAL_BASE).toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ertltal 5',
      addressLocality: 'Lunz am See',
      postalCode: '3293',
      addressRegion: 'Niederösterreich',
      addressCountry: 'AT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: DESTINATION.latitude,
      longitude: DESTINATION.longitude,
    },
  } as const;

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
        <SmartImage
          src={danielImage}
          alt={
            language === 'de'
              ? 'Porträt von Daniel Kofler'
              : 'Portrait of Daniel Kofler'
          }
          sizes="(max-width: 768px) 90vw, 420px"
        />
      </div>
    </section>
  );

  return (
    <div className={styles['contact-page']}>
      <SeoTags route="contact">
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </SeoTags>

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
            <div className={styles['contact-page__maps-links']}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${DESTINATION.latitude},${DESTINATION.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === 'de'
                  ? 'In Google Maps ansehen'
                  : 'View in Google Maps'}
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${DESTINATION.latitude},${DESTINATION.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === 'de' ? 'Route planen' : 'Plan route'}
              </a>
            </div>
          </div>
        </section>
      </PageRenderer>
    </div>
  );
}
