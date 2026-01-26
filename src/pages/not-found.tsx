import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import styles from "./not-found.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles["not-found-page"]}>
      <p className={styles["not-found-page__label"]}>404</p>
      <h1 className={styles["not-found-page__title"]}>Seite nicht gefunden</h1>
      <p className={styles["not-found-page__body"]}>Vielleicht hilft dir ein Blick zurück zur Startseite.</p>
      <div className={styles["not-found-page__actions"]}>
        <Button asChild>
          <Link to="/">Zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
}
