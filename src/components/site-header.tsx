import { useEffect } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { siteContent } from '@/content/site';
import styles from './site-header.module.scss';
import { useLanguage, type Language } from '@/lib/language';
import { resolveLanguageAlternates, withLang } from '@/lib/seo';

const navItemsByLanguage: Record<
  Language,
  Array<{ label: string; href: string }>
> = {
  de: [
    { label: 'Der Hof', href: '/the-farm' },
    { label: 'Produkte', href: '/products' },
    { label: 'Vermietung', href: '/rentals' },
    { label: 'Kontakt', href: '/contact' },
  ],
  en: [
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
  const { lang } = resolveLanguageAlternates(location.pathname);

  useEffect(() => {
    if (language !== lang) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  const content = siteContent[lang];
  const navItems = navItemsByLanguage[lang];
  const srMessage = srMessageByLanguage[lang];
  const ctaLabel = ctaLabelByLanguage[lang];
  const currentPath = location.pathname || '/';
  const baseGermanPath =
    lang === 'en'
      ? currentPath.replace(/^\/en/, '') || '/'
      : currentPath;
  const germanPath = baseGermanPath.startsWith('/')
    ? baseGermanPath
    : `/${baseGermanPath}`;
  const englishPath = withLang(germanPath, 'en');
  const pathSuffix = `${location.search}${location.hash}`;
  const languageTargets = {
    de: `${germanPath}${pathSuffix}`,
    en: `${englishPath}${pathSuffix}`,
  } as const;

  return (
    <header className={`${styles['site-header']} site-header`}>
      <div className={styles['site-header__inner']}>
        <Link to={withLang('/', lang)} className={styles['site-header__brand']}>
          {content.brandName}
        </Link>
        <nav className={styles['site-header__nav']}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={withLang(item.href, lang)}
              className={({ isActive }) =>
                cn(
                  styles['site-header__link'],
                  isActive && styles['site-header__link--active'],
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles['site-header__language']}>
          {languages.map((langOption) => (
            <Link
              key={langOption}
              to={languageTargets[langOption]}
              className={cn(
                styles['site-header__language-button'],
                langOption === lang &&
                  styles['site-header__language-button--active'],
              )}
              aria-current={langOption === lang ? 'page' : undefined}
            >
              {languageLabels[langOption]}
            </Link>
          ))}
        </div>
        <div className={styles['site-header__cta']}>
          <Button asChild>
            <Link to={withLang('/contact', lang)}>{ctaLabel}</Link>
          </Button>
        </div>
        <div className={styles['site-header__mobile-toggle']}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu size={20} />
                <span className={styles['site-header__sr-message']}>
                  {srMessage}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className={styles['site-header__sheet-content']}>
                <SheetClose asChild>
                  <Link
                    to={withLang('/', lang)}
                    className={styles['site-header__sheet-brand']}
                  >
                    {content.brandName}
                  </Link>
                </SheetClose>
                <div className={styles['site-header__sheet-links']}>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink
                        to={withLang(item.href, lang)}
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
                  {languages.map((langOption) => (
                    <Link
                      key={langOption}
                      to={languageTargets[langOption]}
                      className={cn(
                        styles['site-header__language-button'],
                        langOption === lang &&
                          styles['site-header__language-button--active'],
                      )}
                      aria-current={langOption === lang ? 'page' : undefined}
                    >
                      {languageLabels[langOption]}
                    </Link>
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
