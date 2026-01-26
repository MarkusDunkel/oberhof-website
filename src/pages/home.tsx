import { homeContent } from "@/content/pages/home";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";
import { useLanguage } from "@/lib/language";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <div className={styles["home-page"]}>
      <section className={styles["home-page__hero"]}>
        <p className={styles["home-page__hero-label"]}>Oberhof</p>
        <h1 className={styles["home-page__hero-title"]}>{content.heroTitle}</h1>
        <p className={styles["home-page__hero-subtitle"]}>{content.heroSubtitle}</p>
        <div className={styles["home-page__hero-actions"]}>
          <Button asChild size="lg">
            <Link to={content.cta.primaryHref}>{content.cta.primaryLabel}</Link>
          </Button>
        </div>
      </section>
      <section className={styles["home-page__tiles"]}>
        {content.tiles.map((tile) => (
          <Link key={tile.title} to={tile.href} className={styles["home-page__tile"]}>
            <div className={styles["home-page__tile-heading"]}>
              <p className={styles["home-page__tile-title"]}>{tile.title}</p>
              <p className={styles["home-page__tile-description"]}>{tile.description}</p>
            </div>
            <span className={styles["home-page__tile-link"]}>{content.tileCtaLabel}</span>
          </Link>
        ))}
      </section>
      <section className={styles["home-page__highlights"]}>
        <div className={styles["home-page__highlights-grid"]}>
          {content.highlights.map((highlight) => (
            <p key={highlight} className={styles["home-page__highlight"]}>
              {highlight}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
