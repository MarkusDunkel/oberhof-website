import { page as kontaktContent } from "@/content/pages/kontakt";
import { PageRenderer } from "@/components/page-renderer";
import styles from "./kontakt.module.scss";

export function KontaktPage() {
  return (
    <div className={styles["kontakt-page"]}>
      <PageRenderer content={kontaktContent}>
        <section className={styles["kontakt-page__details"]}>
          <div className={styles["kontakt-page__group"]}>
            <h2 className={styles["kontakt-page__heading"]}>Anfahrt</h2>
            <ol className={styles["kontakt-page__list"]}>
              {kontaktContent.directions.map((step, index) => (
                <li key={`${step}-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles["kontakt-page__group"]}>
            <h3 className={styles["kontakt-page__credits-heading"]}>Credits</h3>
            <ul className={styles["kontakt-page__credits"]}>
              {kontaktContent.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </div>
        </section>
      </PageRenderer>
    </div>
  );
}
