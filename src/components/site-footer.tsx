import { Link } from "react-router-dom";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/95">
      <div className="container flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-serif text-lg text-foreground">{siteContent.brandName}</div>
          <div>{siteContent.tagline}</div>
        </div>
        <div className="flex flex-col gap-1">
          <Link to="tel:+436801117299" className="hover:text-foreground">
            {siteContent.contact.phone}
          </Link>
          <Link to="mailto:daniel@oberhof-lunz.at" className="hover:text-foreground">
            {siteContent.contact.email}
          </Link>
          <Link to="/kontakt" className="hover:text-foreground">
            Kontakt &amp; Anfahrt
          </Link>
        </div>
      </div>
    </footer>
  );
}
