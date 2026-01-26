import { useLocation, NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteContent } from "@/content/site";
import styles from "./site-header.module.scss";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Der Hof", href: "/the-farm" },
  { label: "Produkte", href: "/products" },
  { label: "Vermietung", href: "/rentals" },
  { label: "Kontakt", href: "/contact" },
];

export function SiteHeader() {
  const location = useLocation();

  return (
    <header className={styles["site-header"]}>
      <div className={styles["site-header__inner"]}>
        <Link to="/" className={styles["site-header__brand"]}>
          {siteContent.brandName}
        </Link>
        <nav className={styles["site-header__nav"]}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  styles["site-header__link"],
                  isActive && styles["site-header__link--active"],
                )
              }
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles["site-header__cta"]}>
          <Button asChild>
            <Link to="/contact">Kontakt</Link>
          </Button>
        </div>
        <div className={styles["site-header__mobile-toggle"]}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu size={20} />
                <span className={styles["site-header__sr-message"]}>Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className={styles["site-header__sheet-content"]}>
                <div className={styles["site-header__sheet-brand"]}>{siteContent.brandName}</div>
                <div className={styles["site-header__sheet-links"]}>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            styles["site-header__sheet-link"],
                            isActive && styles["site-header__sheet-link--active"],
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
