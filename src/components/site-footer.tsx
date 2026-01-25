import { Link } from "react-router-dom";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-background/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="font-serif text-lg text-foreground">{siteContent.brandName}</div>
          <div>{siteContent.tagline}</div>
        </div>
        <div className="flex flex-col gap-1 text-foreground/70">
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
