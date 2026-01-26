import { page as contactContent } from "@/content/pages/contact";
import { PageRenderer } from "@/components/page-renderer";
import styles from "./contact.module.scss";

export function ContactPage() {
  return (
    <div className={styles["contact-page"]}>
      <PageRenderer content={contactContent}>
        <section className={styles["contact-page__details"]}>
          <div id="directions" className={styles["contact-page__group"]}>
            <h2 className={styles["contact-page__heading"]}>Anfahrt</h2>
            <ol className={styles["contact-page__list"]}>
              {contactContent.directions.map((step, index) => (
                <li key={`${step}-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles["contact-page__group"]}>
            <h3 className={styles["contact-page__credits-heading"]}>Credits</h3>
            <ul className={styles["contact-page__credits"]}>
              {contactContent.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
        </section>
      </PageRenderer>
    </div>
  );
}
