import { Link } from "react-router-dom";
import { siteContent } from "@/content/site";
import styles from "./site-footer.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["site-footer__inner"]}>
        <div className={styles["site-footer__brand"]}>
          <div className={styles["site-footer__name"]}>{siteContent.brandName}</div>
          <div>{siteContent.tagline}</div>
        </div>
        <div className={styles["site-footer__contact"]}>
          <Link to="tel:+436801117299" className={styles["site-footer__contact-link"]}>
            {siteContent.contact.phone}
          </Link>
          <Link to="mailto:daniel@oberhof-lunz.at" className={styles["site-footer__contact-link"]}>
            {siteContent.contact.email}
          </Link>
          <Link to="/kontakt" className={styles["site-footer__contact-link"]}>
            Kontakt &amp; Anfahrt
          </Link>
        </div>
      </div>
    </footer>
  );
}
