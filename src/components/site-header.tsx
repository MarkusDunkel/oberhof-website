import { useLocation, NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { siteContent } from '@/content/site';
import styles from './site-header.module.scss';
import { useLanguage, type Language } from '@/lib/language';

const navItemsByLanguage: Record<
  Language,
  Array<{ label: string; href: string }>
> = {
  de: [
    { label: 'Startseite', href: '/' },
    { label: 'Der Hof', href: '/the-farm' },
    { label: 'Produkte', href: '/products' },
    { label: 'Vermietung', href: '/rentals' },
    { label: 'Kontakt', href: '/contact' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'The Farm', href: '/the-farm' },
    { label: 'Products', href: '/products' },
    { label: 'Rentals', href: '/rentals' },
    { label: 'Contact', href: '/contact' },
  ],
};

const ctaLabelByLanguage: Record<Language, string> = {
  de: 'Kontakt',
  en: 'Contact',
};

const srMessageByLanguage: Record<Language, string> = {
  de: 'Menü öffnen',
  en: 'Open menu',
};

const languageLabels: Record<Language, string> = {
  de: 'DE',
  en: 'EN',
};

const languages: Language[] = ['de', 'en'];

export function SiteHeader() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const content = siteContent[language];
  const navItems = navItemsByLanguage[language];

  return (
    <header className={`${styles['site-header']} site-header`}>
      <div className={styles['site-header__inner']}>
        <Link to="/" className={styles['site-header__brand']}>
          {content.brandName}
        </Link>
        <nav className={styles['site-header__nav']}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  styles['site-header__link'],
                  isActive && styles['site-header__link--active'],
                )
              }
              aria-current={
                location.pathname === item.href ? 'page' : undefined
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles['site-header__language']}>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              className={cn(
                styles['site-header__language-button'],
                language === lang &&
                  styles['site-header__language-button--active'],
              )}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
        <div className={styles['site-header__cta']}>
          <Button asChild>
            <Link to="/contact">{ctaLabelByLanguage[language]}</Link>
          </Button>
        </div>
        <div className={styles['site-header__mobile-toggle']}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu size={20} />
                <span className={styles['site-header__sr-message']}>
                  {srMessageByLanguage[language]}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className={styles['site-header__sheet-content']}>
                <div className={styles['site-header__sheet-brand']}>
                  {content.brandName}
                </div>
                <div className={styles['site-header__sheet-links']}>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            styles['site-header__sheet-link'],
                            isActive &&
                              styles['site-header__sheet-link--active'],
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
                <div className={styles['site-header__sheet-language']}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      className={cn(
                        styles['site-header__language-button'],
                        language === lang &&
                          styles['site-header__language-button--active'],
                      )}
                      onClick={() => setLanguage(lang)}
                      aria-pressed={language === lang}
                    >
                      {languageLabels[lang]}
                    </button>
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
