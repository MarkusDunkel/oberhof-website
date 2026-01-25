import { useLocation, NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteContent } from "@/content/site";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Der Hof", href: "/der-hof" },
  { label: "Produkte", href: "/produkte" },
  { label: "Veranstaltungen", href: "/veranstaltungen" },
  { label: "Vermietung", href: "/vermietung" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="font-serif text-2xl text-foreground">
          {siteContent.brandName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-foreground/70 transition-colors hover:text-foreground",
                  isActive && "text-foreground font-medium",
                )
              }
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6">
                <div className="font-serif text-xl">{siteContent.brandName}</div>
                <div className="flex flex-col gap-3 text-lg">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            "text-foreground/80",
                            isActive && "text-foreground font-semibold",
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
