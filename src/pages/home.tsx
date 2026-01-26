import { homeContent } from "@/content/pages/home";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";

export function HomePage() {
  return (
    <div className={styles["home-page"]}>
      <section className={styles["home-page__hero"]}>
        <p className={styles["home-page__hero-label"]}>Oberhof</p>
        <h1 className={styles["home-page__hero-title"]}>{homeContent.heroTitle}</h1>
        <p className={styles["home-page__hero-subtitle"]}>{homeContent.heroSubtitle}</p>
        <div className={styles["home-page__hero-actions"]}>
          <Button asChild size="lg">
            <Link to={homeContent.cta.primaryHref}>{homeContent.cta.primaryLabel}</Link>
          </Button>
        </div>
      </section>
      <section className={styles["home-page__tiles"]}>
        {homeContent.tiles.map((tile) => (
          <Link key={tile.title} to={tile.href} className={styles["home-page__tile"]}>
            <div className={styles["home-page__tile-heading"]}>
              <p className={styles["home-page__tile-title"]}>{tile.title}</p>
              <p className={styles["home-page__tile-description"]}>{tile.description}</p>
            </div>
            <span className={styles["home-page__tile-link"]}>Mehr erfahren →</span>
          </Link>
        ))}
      </section>
      <section className={styles["home-page__highlights"]}>
        <div className={styles["home-page__highlights-grid"]}>
          {homeContent.highlights.map((highlight) => (
            <p key={highlight} className={styles["home-page__highlight"]}>
              {highlight}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
