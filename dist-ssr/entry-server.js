var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { forwardRef, useEffect, createContext, useState, useCallback, useContext, Component, useRef, useLayoutEffect, useMemo } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useLocation, Link, NavLink, Outlet, Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = ({ className, children, ...props }) => /* @__PURE__ */ jsx(SheetPrimitive.Portal, { ...props, children: /* @__PURE__ */ jsx("div", { className: cn("fixed inset-0 z-50 flex", className), children }) });
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-foreground/20 backdrop-blur",
      className
    ),
    ...props
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const SheetContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsx(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "relative z-50 ml-auto flex h-full w-3/4 flex-col gap-6 overflow-y-auto bg-background p-6 shadow-xl sm:max-w-sm",
        className
      ),
      ...props,
      children
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-medium", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-foreground/70", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        solid: "bg-accent text-white hover:bg-accent/90",
        soft: "bg-surface text-foreground/90 hover:bg-surface/70",
        ghost: "text-foreground/80 hover:bg-foreground/10"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "default"
    }
  }
);
const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size }), className),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const baseContact = {
  name: "Daniel Kofler",
  phone: "+43 680 1117299",
  email: "daniel@oberhof-lunz.at"
};
const baseSocial = {
  instagram: "",
  facebook: ""
};
const siteContent = {
  de: {
    brandName: "Oberhof",
    tagline: "Ruhiger Bergbauernhof zwischen Ötscher und Hochkar.",
    primaryCta: {
      label: "Anfrage senden",
      href: "/contact"
    },
    secondaryCta: {
      label: "Anreise planen",
      href: "/contact#directions"
    },
    contact: baseContact,
    addressRegion: "Ertltal · Lunz am See, Niederösterreich",
    social: baseSocial,
    contactLinkLabel: "Kontakt & Anfahrt"
  },
  en: {
    brandName: "Oberhof",
    tagline: "Tranquil mountain farm between the Ötscher and Hochkar peaks.",
    primaryCta: {
      label: "Send request",
      href: "/contact"
    },
    secondaryCta: {
      label: "Plan your trip",
      href: "/contact#directions"
    },
    contact: baseContact,
    addressRegion: "Ertltal · Lunz am See, Lower Austria",
    social: baseSocial,
    contactLinkLabel: "Contact & directions"
  }
};
const styles$7 = {
  "site-header": "_site-header_uwmjc_1",
  "site-header__inner": "_site-header__inner_uwmjc_9",
  "site-header__brand": "_site-header__brand_uwmjc_20",
  "site-header__nav": "_site-header__nav_uwmjc_26",
  "site-header__language": "_site-header__language_uwmjc_37",
  "site-header__language-button": "_site-header__language-button_uwmjc_49",
  "site-header__language-button--active": "_site-header__language-button--active_uwmjc_63",
  "site-header__link": "_site-header__link_uwmjc_69",
  "site-header__link--active": "_site-header__link--active_uwmjc_78",
  "site-header__cta": "_site-header__cta_uwmjc_83",
  "site-header__mobile-toggle": "_site-header__mobile-toggle_uwmjc_92",
  "site-header__sr-message": "_site-header__sr-message_uwmjc_101",
  "site-header__sheet-brand": "_site-header__sheet-brand_uwmjc_113",
  "site-header__sheet-content": "_site-header__sheet-content_uwmjc_119",
  "site-header__sheet-links": "_site-header__sheet-links_uwmjc_125",
  "site-header__sheet-language": "_site-header__sheet-language_uwmjc_133",
  "site-header__sheet-link": "_site-header__sheet-link_uwmjc_125",
  "site-header__sheet-link--active": "_site-header__sheet-link--active_uwmjc_142"
};
const LanguageContext = React__default.createContext(
  void 0
);
const STORAGE_KEY = "oberhof-language";
function LanguageProvider({
  children,
  initialLanguage
}) {
  const [language, setLanguageState] = React__default.useState(() => {
    if (typeof window === "undefined") {
      return initialLanguage ?? "de";
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "de" || stored === "en") {
        return stored;
      }
    } catch {
    }
    return initialLanguage ?? "de";
  });
  const setLanguage = React__default.useCallback((nextLanguage) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      } catch {
      }
    }
  }, []);
  const value = React__default.useMemo(
    () => ({
      language,
      setLanguage
    }),
    [language, setLanguage]
  );
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value, children });
}
function useLanguage() {
  const context = React__default.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
const SITE_CANONICAL_BASE = "https://oberhof-lunz.at";
const SITE_URL = SITE_CANONICAL_BASE;
const seoByRoute = {
  home: {
    title: "Oberhof – Bergbauernhof in Lunz am See",
    description: "Ruhiger Bergbauernhof zwischen Ötscher und Hochkar: saisonale Hofprodukte, Ferienwohnungen und echte Gastfreundschaft am Oberhof in Lunz am See."
  },
  "the-farm": {
    title: "Der Oberhof – Landwirtschaft, Wald & Handwerk",
    description: "Lerne den Oberhof kennen: Familienbetrieb im Ertltal, nachhaltige Forstwirtschaft, Jagd und handwerkliche Traditionen in Lunz am See."
  },
  products: {
    title: "Hofprodukte vom Oberhof – Wild, Fisch & Honig",
    description: "Hausgemachte Spezialitäten vom Oberhof: Hirsch, Wildschwein, frischer Fisch, Säfte, Sirupe und Honig aus eigener Produktion."
  },
  rentals: {
    title: "Urlaub am Oberhof – Ferienwohnung & Selbstversorgerhütte",
    description: "Gemütliche Apartments und Almhütten am Oberhof mieten: ruhige Auszeit zwischen Ötscher und Hochkar mit Blick ins Ertltal."
  },
  contact: {
    title: "Kontakt & Anreise zum Oberhof bei Lunz am See",
    description: "Schreibe Familie Kofler, plane deine Anreise zum Oberhof und erhalte alle Kontaktinformationen, Telefonnummern und Wegbeschreibungen."
  }
};
function normalizeInputPath(pathname) {
  if (!pathname) return "/";
  let p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  p = p.replace(/\/{2,}/g, "/");
  if (p === "/en") return "/en/";
  if (p === "/en/") return "/en/";
  if (p !== "/") p = p.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}
function normalizeGermanPath(p) {
  if (!p || p === "/") return "/";
  let out = p.startsWith("/") ? p : `/${p}`;
  out = out.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return out === "" ? "/" : out;
}
function buildAbsolute(pathname) {
  const clean = pathname === "/" ? "" : pathname.replace(/^\//, "");
  return new URL(clean, SITE_URL).toString();
}
function resolveLanguageAlternates(pathname) {
  const normalized = normalizeInputPath(pathname);
  const isEnglish = normalized === "/en/" || normalized.startsWith("/en/");
  const germanSource = isEnglish ? normalized.replace(/^\/en/, "") || "/" : normalized;
  const germanPath = normalizeGermanPath(germanSource);
  const englishPath = germanPath === "/" ? "/en/" : `/en${germanPath}`;
  const canonicalPath = isEnglish ? normalized : germanPath;
  return {
    lang: isEnglish ? "en" : "de",
    canonical: buildAbsolute(canonicalPath),
    alternates: {
      de: buildAbsolute(germanPath),
      en: buildAbsolute(englishPath),
      xDefault: buildAbsolute(germanPath)
    }
  };
}
function getRouteSeo(route) {
  return seoByRoute[route];
}
function withLang(path, lang) {
  if (!path.startsWith("/")) path = `/${path}`;
  const unprefixed = path === "/en" ? "/" : path.replace(/^\/en(?=\/|$)/, "");
  const clean = unprefixed === "" ? "/" : unprefixed;
  if (lang === "en") return clean === "/" ? "/en/" : `/en${clean}`;
  return clean;
}
const navItemsByLanguage = {
  de: [
    { label: "Der Hof", href: "/the-farm" },
    { label: "Produkte", href: "/products" },
    { label: "Vermietung", href: "/rentals" },
    { label: "Kontakt", href: "/contact" }
  ],
  en: [
    { label: "The Farm", href: "/the-farm" },
    { label: "Products", href: "/products" },
    { label: "Rentals", href: "/rentals" },
    { label: "Contact", href: "/contact" }
  ]
};
const ctaLabelByLanguage = {
  de: "Kontakt",
  en: "Contact"
};
const srMessageByLanguage = {
  de: "Menü öffnen",
  en: "Open menu"
};
const languageLabels = {
  de: "DE",
  en: "EN"
};
const languages = ["de", "en"];
function SiteHeader() {
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
  const currentPath = location.pathname || "/";
  const baseGermanPath = lang === "en" ? currentPath.replace(/^\/en/, "") || "/" : currentPath;
  const germanPath = baseGermanPath.startsWith("/") ? baseGermanPath : `/${baseGermanPath}`;
  const englishPath = withLang(germanPath, "en");
  const pathSuffix = `${location.search}${location.hash}`;
  const languageTargets = {
    de: `${germanPath}${pathSuffix}`,
    en: `${englishPath}${pathSuffix}`
  };
  return /* @__PURE__ */ jsx("header", { className: `${styles$7["site-header"]} site-header`, children: /* @__PURE__ */ jsxs("div", { className: styles$7["site-header__inner"], children: [
    /* @__PURE__ */ jsx(Link, { to: withLang("/", lang), className: styles$7["site-header__brand"], children: content.brandName }),
    /* @__PURE__ */ jsx("nav", { className: styles$7["site-header__nav"], children: navItems.map((item) => /* @__PURE__ */ jsx(
      NavLink,
      {
        to: withLang(item.href, lang),
        className: ({ isActive }) => cn(
          styles$7["site-header__link"],
          isActive && styles$7["site-header__link--active"]
        ),
        children: item.label
      },
      item.href
    )) }),
    /* @__PURE__ */ jsx("div", { className: styles$7["site-header__language"], children: languages.map((langOption) => /* @__PURE__ */ jsx(
      Link,
      {
        to: languageTargets[langOption],
        className: cn(
          styles$7["site-header__language-button"],
          langOption === lang && styles$7["site-header__language-button--active"]
        ),
        "aria-current": langOption === lang ? "page" : void 0,
        children: languageLabels[langOption]
      },
      langOption
    )) }),
    /* @__PURE__ */ jsx("div", { className: styles$7["site-header__cta"], children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: withLang("/contact", lang), children: ctaLabel }) }) }),
    /* @__PURE__ */ jsx("div", { className: styles$7["site-header__mobile-toggle"], children: /* @__PURE__ */ jsxs(Sheet, { children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", children: [
        /* @__PURE__ */ jsx(Menu, { size: 20 }),
        /* @__PURE__ */ jsx("span", { className: styles$7["site-header__sr-message"], children: srMessage })
      ] }) }),
      /* @__PURE__ */ jsx(SheetContent, { children: /* @__PURE__ */ jsxs("div", { className: styles$7["site-header__sheet-content"], children: [
        /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
          Link,
          {
            to: withLang("/", lang),
            className: styles$7["site-header__sheet-brand"],
            children: content.brandName
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: styles$7["site-header__sheet-links"], children: navItems.map((item) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
          NavLink,
          {
            to: withLang(item.href, lang),
            className: ({ isActive }) => cn(
              styles$7["site-header__sheet-link"],
              isActive && styles$7["site-header__sheet-link--active"]
            ),
            children: item.label
          }
        ) }, item.href)) }),
        /* @__PURE__ */ jsx("div", { className: styles$7["site-header__sheet-language"], children: languages.map((langOption) => /* @__PURE__ */ jsx(
          Link,
          {
            to: languageTargets[langOption],
            className: cn(
              styles$7["site-header__language-button"],
              langOption === lang && styles$7["site-header__language-button--active"]
            ),
            "aria-current": langOption === lang ? "page" : void 0,
            children: languageLabels[langOption]
          },
          langOption
        )) })
      ] }) })
    ] }) })
  ] }) });
}
const styles$6 = {
  "site-footer": "_site-footer_2gwbs_1",
  "site-footer__inner": "_site-footer__inner_2gwbs_6",
  "site-footer__brand": "_site-footer__brand_2gwbs_25",
  "site-footer__name": "_site-footer__name_2gwbs_31",
  "site-footer__contact": "_site-footer__contact_2gwbs_37",
  "site-footer__contact-link": "_site-footer__contact-link_2gwbs_43"
};
function SiteFooter() {
  const { language } = useLanguage();
  const content = siteContent[language];
  return /* @__PURE__ */ jsx("footer", { className: styles$6["site-footer"], children: /* @__PURE__ */ jsxs("div", { className: styles$6["site-footer__inner"], children: [
    /* @__PURE__ */ jsxs("div", { className: styles$6["site-footer__brand"], children: [
      /* @__PURE__ */ jsx("div", { className: styles$6["site-footer__name"], children: content.brandName }),
      /* @__PURE__ */ jsx("div", { children: content.tagline })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$6["site-footer__contact"], children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "tel:+436801117299",
          className: styles$6["site-footer__contact-link"],
          children: content.contact.phone
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "mailto:daniel@oberhof-lunz.at",
          className: styles$6["site-footer__contact-link"],
          children: content.contact.email
        }
      ),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: styles$6["site-footer__contact-link"], children: content.contactLinkLabel })
    ] })
  ] }) });
}
const layout = "_layout_76ov8_1";
const layout__main = "_layout__main_76ov8_9";
const layout__container = "_layout__container_76ov8_13";
const styles$5 = {
  layout,
  layout__main,
  layout__container
};
function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return /* @__PURE__ */ jsxs("div", { className: styles$5.layout, children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: styles$5.layout__main, children: isHome ? /* @__PURE__ */ jsx(Outlet, {}) : /* @__PURE__ */ jsx("div", { className: styles$5.layout__container, children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const styles$4 = {
  "home-layout": "_home-layout_gvq4y_5",
  "home-layout__hero-frame": "_home-layout__hero-frame_gvq4y_16",
  "home-layout__hero-media": "_home-layout__hero-media_gvq4y_37",
  "home-layout__hero-media-image": "_home-layout__hero-media-image_gvq4y_67",
  "home-layout__main": "_home-layout__main_gvq4y_88",
  "home-layout__container": "_home-layout__container_gvq4y_97"
};
const DEFAULT_SIZES = "(max-width: 768px) 90vw, 800px";
function isPictureSourceArray(value) {
  return Array.isArray(value) && value.every(
    (entry) => !!entry && typeof entry === "object" && typeof entry.srcset === "string"
  );
}
function isPictureSourceRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function isGeneratedPicture(value) {
  if (!value || typeof value !== "object") return false;
  const maybe = value;
  return !!maybe.img && typeof maybe.img === "object" && typeof maybe.img.src === "string" && (isPictureSourceArray(maybe.sources) || isPictureSourceRecord(maybe.sources));
}
function normalizeMimeType(type, format) {
  const value = (type ?? format ?? "").toLowerCase().trim();
  if (!value) return void 0;
  if (value.startsWith("image/")) return value;
  if (value === "jpg" || value === "jpeg") return "image/jpeg";
  if (value === "svg") return "image/svg+xml";
  return `image/${value}`;
}
function normalizeSources(sources2) {
  if (isPictureSourceArray(sources2)) {
    return sources2.map((source) => ({
      srcSet: source.srcset,
      type: normalizeMimeType(source.type ?? void 0),
      sizes: source.sizes ?? void 0
    }));
  }
  if (isPictureSourceRecord(sources2)) {
    return Object.entries(sources2).map(([format, srcset]) => ({
      srcSet: srcset,
      type: normalizeMimeType(void 0, format)
    }));
  }
  return [];
}
function resolveDimension(explicit, primary, secondary) {
  return explicit ?? primary ?? secondary;
}
async function decodeIfPossible(img2) {
  try {
    if (typeof img2.decode === "function") {
      await img2.decode();
    }
  } catch {
  }
}
function SmartImage({
  src,
  alt,
  sizes = DEFAULT_SIZES,
  loading = "lazy",
  fetchPriority,
  onLoaded,
  disableFadeIn = false,
  style,
  className,
  ...rest
}) {
  const { width, height, onLoad, ...imgProps } = rest;
  const [ready, setReady] = React.useState(false);
  const generatedPicture = isGeneratedPicture(src) ? src : null;
  const fallbackWidth = generatedPicture ? resolveDimension(
    width,
    generatedPicture.img.width,
    generatedPicture.img.w
  ) : width;
  const fallbackHeight = generatedPicture ? resolveDimension(
    height,
    generatedPicture.img.height,
    generatedPicture.img.h
  ) : height;
  const fallbackSrc = typeof src === "string" ? src : (generatedPicture == null ? void 0 : generatedPicture.img.src) ?? "";
  const handleLoad = async (e) => {
    onLoad == null ? void 0 : onLoad(e);
    await decodeIfPossible(e.currentTarget);
    setReady(true);
    onLoaded == null ? void 0 : onLoaded();
  };
  const fadeStyle = disableFadeIn ? {} : {
    opacity: ready ? 1 : 0,
    transition: "opacity 800ms ease-out"
  };
  const mergedStyle = { ...fadeStyle, ...style };
  const fetchPriorityAttr = fetchPriority ? { fetchpriority: fetchPriority } : void 0;
  const imgElement = /* @__PURE__ */ jsx(
    "img",
    {
      ...imgProps,
      ...fetchPriorityAttr,
      src: fallbackSrc,
      alt,
      loading,
      decoding: "async",
      sizes,
      width: fallbackWidth,
      height: fallbackHeight,
      onLoad: handleLoad,
      style: mergedStyle,
      className
    }
  );
  if (generatedPicture) {
    const pictureSources = normalizeSources(generatedPicture.sources);
    if (pictureSources.length > 0) {
      return /* @__PURE__ */ jsxs("picture", { children: [
        pictureSources.map((source) => /* @__PURE__ */ jsx(
          "source",
          {
            type: source.type,
            srcSet: source.srcSet,
            sizes: source.sizes ?? sizes
          },
          source.type ?? source.srcSet
        )),
        imgElement
      ] });
    }
  }
  return imgElement;
}
const sources$m = {
  avif: "/assets/home-hero-COVFS-7T.avif 1280w, /assets/home-hero-DQsw2AnM.avif 1600w, /assets/home-hero-D1JPvKPI.avif 1920w, /assets/home-hero-CWQentv-.avif 2560w, /assets/home-hero-BWmJitDU.avif 3200w",
  webp: "/assets/home-hero-SBP_Tr6L.webp 1280w, /assets/home-hero-DUY1E0kJ.webp 1600w, /assets/home-hero-DELN98rL.webp 1920w, /assets/home-hero-BIQwra9j.webp 2560w, /assets/home-hero-Ce77HlWd.webp 3200w",
  jpeg: "/assets/home-hero-D3PhH61Z.jpeg 1280w, /assets/home-hero-XHStD7xZ.jpeg 1600w, /assets/home-hero-BCQ0mURq.jpeg 1920w, /assets/home-hero-qkHKWSKx.jpeg 2560w, /assets/home-hero-ZUhbasAx.jpeg 3200w"
};
const img$m = {
  src: "/assets/home-hero-ZUhbasAx.jpeg",
  w: 3200,
  h: 2134
};
const heroBackground = {
  sources: sources$m,
  img: img$m
};
function HomeLayout() {
  return /* @__PURE__ */ jsxs("div", { className: `${styles$4["home-layout"]} home-layout`, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$4["home-layout__hero-frame"], children: [
      /* @__PURE__ */ jsx("div", { className: styles$4["home-layout__hero-media"], "aria-hidden": "true", children: /* @__PURE__ */ jsx(
        SmartImage,
        {
          src: heroBackground,
          alt: "",
          className: styles$4["home-layout__hero-media-image"],
          loading: "eager",
          fetchPriority: "high",
          sizes: "calc(100vw * 1.08)"
        }
      ) }),
      /* @__PURE__ */ jsx(SiteHeader, {}),
      /* @__PURE__ */ jsx("main", { className: styles$4["home-layout__main"], children: /* @__PURE__ */ jsx("div", { className: styles$4["home-layout__container"], children: /* @__PURE__ */ jsx(Outlet, {}) }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const homeContent = {
  de: {
    seo: {
      title: "Oberhof – Bergbauernhof in Lunz am See",
      description: "Ruhiger Bergbauernhof zwischen Ötscher und Hochkar: Landwirtschaft, Hofprodukte, Ferien-Apartment und echte Gastfreundschaft in Lunz am See."
    },
    heroTitle: "Oberhof",
    heroSubtitle: "Lunz am See",
    heroSubSubtitle: `Ein entschleunigter Bergbauernhof, der 
      Naturkreisläufe pflegt und Menschen 
      Raum zum Aufatmen schenkt. 
      — Daniel Kofler`,
    tiles: [
      {
        title: "Der Hof",
        description: "Geschichte, Haltung und Selbstversorgung – ein Blick hinter die Kulissen des Bergbauernhofs.",
        href: "/the-farm"
      },
      {
        title: "Produkte",
        description: "Wild, Fisch, Honig und mehr – achtsam verarbeitete Spezialitäten in kleinen Chargen.",
        href: "/products"
      },
      {
        title: "Vermietung",
        description: "Geräumiges Ferien-Apartment direkt am Hof – ideal zum Abschalten in den Bergen.",
        href: "/rentals"
      }
    ],
    tileCtaLabel: "Mehr erfahren →",
    highlights: [
      "600 Jahre Hofgeschichte zwischen Ötscher und Hochkar.",
      "Permakultur, Selbstversorgung und verantwortungsvolle Landwirtschaft als Haltung.",
      "Naturplätze wie Stiegengraben, Kapelle und Baumzelt für stille Momente."
    ],
    cta: {
      title: "Den Oberhof erleben",
      body: "Erzähl uns von deinem Anliegen – ob Produkte oder Ferien-Apartment –, wir melden uns zeitnah.",
      primaryLabel: "Kontakt aufnehmen",
      primaryHref: "/contact"
    }
  },
  en: {
    seo: {
      title: "Oberhof – Mountain Farm in Lunz am See",
      description: "A tranquil mountain farm between Ötscher and Hochkar: agriculture, farm products, holiday apartment, and genuine hospitality in Lunz am See."
    },
    heroTitle: "Oberhof",
    heroSubtitle: "Lunz am See",
    heroSubSubtitle: `A slow-paced mountain farm that 
      nurtures natural cycles and offers 
      people space to breathe. 
      — Daniel Kofler`,
    tiles: [
      {
        title: "The Farm",
        description: "History, mindset, and self-sufficiency – a look behind the scenes of the mountain farm.",
        href: "/the-farm"
      },
      {
        title: "Products",
        description: "Venison, fish, honey, and more – carefully crafted specialties in small batches.",
        href: "/products"
      },
      {
        title: "Rentals",
        description: "Spacious holiday apartment on the farm – perfect for unwinding in the mountains.",
        href: "/rentals"
      }
    ],
    tileCtaLabel: "Learn more →",
    highlights: [
      "600 years of farm history between the Ötscher and Hochkar mountains.",
      "Permaculture, self-sufficiency, and responsible agriculture as a guiding attitude.",
      "Nature spots like Stiegengraben, chapel, and tree tent for quiet moments."
    ],
    cta: {
      title: "Experience the Oberhof",
      body: "Tell us whether you are interested in products or the holiday apartment – we will reply shortly.",
      primaryLabel: "Get in touch",
      primaryHref: "/contact"
    }
  }
};
const styles$3 = {
  "home-page": "_home-page_50u87_4",
  "home-page__content": "_home-page__content_50u87_15",
  "home-page__content--blend-prepare": "_home-page__content--blend-prepare_50u87_36",
  "home-page__content--blend-in": "_home-page__content--blend-in_50u87_44",
  "home-page__logo": "_home-page__logo_50u87_52",
  "home-page__title": "_home-page__title_50u87_57",
  "home-page__subtitle": "_home-page__subtitle_50u87_65",
  "home-page__sub-subtitle": "_home-page__sub-subtitle_50u87_72"
};
const sources$l = {
  avif: "/assets/logo-trans-DKpYojFN.avif 320w, /assets/logo-trans-DFzQ1qBX.avif 379w",
  webp: "/assets/logo-trans-z3TsmakH.webp 320w, /assets/logo-trans-BsBXjYXW.webp 379w",
  png: "/assets/logo-trans-Bh5triKd.png 320w, /assets/logo-trans-Cq0nQvmi.png 379w"
};
const img$l = {
  src: "/assets/logo-trans-Cq0nQvmi.png",
  w: 379,
  h: 377
};
const logoMark = {
  sources: sources$l,
  img: img$l
};
const Ctx = createContext(null);
function EntranceAnimationProvider({
  children
}) {
  const [homeAnimated, setHomeAnimated] = useState(false);
  const markHomeAnimated = useCallback(() => setHomeAnimated(true), []);
  return /* @__PURE__ */ jsx(Ctx.Provider, { value: { homeAnimated, markHomeAnimated }, children });
}
function useEntranceAnimation() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error(
      "useEntranceAnimation must be used within EntranceAnimationProvider"
    );
  }
  return ctx;
}
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
function SeoTags({ route, title, description, children }) {
  const fallback = getRouteSeo(route);
  const { pathname } = useLocation();
  const { lang, canonical, alternates } = resolveLanguageAlternates(pathname);
  const finalTitle = title ?? (fallback == null ? void 0 : fallback.title);
  const finalDescription = description ?? (fallback == null ? void 0 : fallback.description);
  if (!finalTitle || !finalDescription) return null;
  return /* @__PURE__ */ jsxs(Helmet, { htmlAttributes: { lang }, children: [
    /* @__PURE__ */ jsx("title", { children: finalTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: finalDescription }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", href: alternates.de, hrefLang: "de" }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", href: alternates.en, hrefLang: "en" }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", href: alternates.xDefault, hrefLang: "x-default" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: finalTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        property: "og:image",
        content: "https://oberhof-lunz.at/og-images/image.jpg"
      }
    ),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: finalTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: finalDescription }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "twitter:image",
        content: "https://oberhof-lunz.at/og-images/image.jpg"
      }
    ),
    children
  ] });
}
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const { homeAnimated, markHomeAnimated } = useEntranceAnimation();
  const [phase, setPhase] = useState("prepare");
  const markRef = useRef(markHomeAnimated);
  useEffect(() => {
    markRef.current = markHomeAnimated;
  }, [markHomeAnimated]);
  useIsomorphicLayoutEffect(() => {
    if (homeAnimated) {
      setPhase("idle");
      return;
    }
    setPhase("prepare");
    const raf = requestAnimationFrame(() => {
      setPhase("run");
      markRef.current();
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: styles$3["home-page"], children: [
    /* @__PURE__ */ jsx(
      SeoTags,
      {
        route: "home",
        title: content.seo.title,
        description: content.seo.description
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          styles$3["home-page__content"],
          phase === "prepare" && styles$3["home-page__content--blend-prepare"],
          phase === "run" && styles$3["home-page__content--blend-in"]
        ),
        children: [
          /* @__PURE__ */ jsx("h1", { className: styles$3["home-page__title"], children: content.heroTitle }),
          /* @__PURE__ */ jsx("h3", { className: styles$3["home-page__subtitle"], children: content.heroSubtitle }),
          /* @__PURE__ */ jsx(
            SmartImage,
            {
              src: logoMark,
              alt: "Oberhof Logo",
              className: styles$3["home-page__logo"],
              loading: "eager",
              sizes: "(max-width: 768px) 60vw, 240px"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: styles$3["home-page__sub-subtitle"], children: content.heroSubSubtitle })
        ]
      }
    )
  ] });
}
const sources$k = {
  avif: "/assets/hero1-CuoEfI3i.avif 320w, /assets/hero1-7ZmRZNo8.avif 640w, /assets/hero1-DiyRBTfY.avif 960w, /assets/hero1-DWfel_oZ.avif 1280w, /assets/hero1-DR-png95.avif 1600w",
  webp: "/assets/hero1-D4QMHPRq.webp 320w, /assets/hero1-BXNjzQ7c.webp 640w, /assets/hero1-4oZXdGgB.webp 960w, /assets/hero1-BGB5Qkqp.webp 1280w, /assets/hero1-ByxIwu2j.webp 1600w",
  jpeg: "/assets/hero1-BAnCmddK.jpeg 320w, /assets/hero1-D0mNpbL_.jpeg 640w, /assets/hero1-gvuNVNVD.jpeg 960w, /assets/hero1-CXwiZjGi.jpeg 1280w, /assets/hero1-CFzqnUQE.jpeg 1600w"
};
const img$k = {
  src: "/assets/hero1-CFzqnUQE.jpeg",
  w: 1600,
  h: 1067
};
const hero1 = {
  sources: sources$k,
  img: img$k
};
const sources$j = {
  avif: "/assets/hero2-B86QjtaR.avif 320w, /assets/hero2-CkQIKpeA.avif 640w, /assets/hero2-Bd5_6NgC.avif 960w, /assets/hero2-DtoCfPyw.avif 1280w, /assets/hero2-C9ymhJWz.avif 1600w",
  webp: "/assets/hero2-CiTwXYUL.webp 320w, /assets/hero2-iIlAG8S0.webp 640w, /assets/hero2-C1wstKfR.webp 960w, /assets/hero2-CYgitZNP.webp 1280w, /assets/hero2-CWJ89zuT.webp 1600w",
  jpeg: "/assets/hero2-BgKD_lxx.jpeg 320w, /assets/hero2-Dp3h0x6g.jpeg 640w, /assets/hero2-eMhw-7uy.jpeg 960w, /assets/hero2-BBgA_YB0.jpeg 1280w, /assets/hero2-1rmSHW-G.jpeg 1600w"
};
const img$j = {
  src: "/assets/hero2-1rmSHW-G.jpeg",
  w: 1600,
  h: 1067
};
const hero2 = {
  sources: sources$j,
  img: img$j
};
const sources$i = {
  avif: "/assets/hero3-B1Xt-1yn.avif 320w, /assets/hero3-BlPIKlO6.avif 640w, /assets/hero3-DfI65JlQ.avif 960w, /assets/hero3-D10r7ekE.avif 1280w, /assets/hero3-BkI_znHT.avif 1600w",
  webp: "/assets/hero3-GI5_uViG.webp 320w, /assets/hero3-Bar1yrlp.webp 640w, /assets/hero3-LmuvmDvW.webp 960w, /assets/hero3-CrXCvjOg.webp 1280w, /assets/hero3-hYmQY8Ka.webp 1600w",
  jpeg: "/assets/hero3-DgKvHNWN.jpeg 320w, /assets/hero3-BAPpNggu.jpeg 640w, /assets/hero3-BA9TTBOK.jpeg 960w, /assets/hero3-CRnxRUeo.jpeg 1280w, /assets/hero3-IXSHS7S_.jpeg 1600w"
};
const img$i = {
  src: "/assets/hero3-IXSHS7S_.jpeg",
  w: 1600,
  h: 1067
};
const hero3 = {
  sources: sources$i,
  img: img$i
};
const sources$h = {
  avif: "/assets/hero4-BZ2qH3eo.avif 320w, /assets/hero4-mETWwtJd.avif 640w, /assets/hero4-Cp-u1h-9.avif 960w, /assets/hero4-CA4-z1Lp.avif 1280w, /assets/hero4-DgvS24_c.avif 1600w",
  webp: "/assets/hero4-Bj29b7O4.webp 320w, /assets/hero4-CtbRFHtz.webp 640w, /assets/hero4-CZ1fjapq.webp 960w, /assets/hero4-ty0qtteu.webp 1280w, /assets/hero4-CYmBnVbO.webp 1600w",
  jpeg: "/assets/hero4-BmHLTogv.jpeg 320w, /assets/hero4-Dh48zJyc.jpeg 640w, /assets/hero4-kcTQvUJD.jpeg 960w, /assets/hero4-11zVJk9l.jpeg 1280w, /assets/hero4-A3iPPIg3.jpeg 1600w"
};
const img$h = {
  src: "/assets/hero4-A3iPPIg3.jpeg",
  w: 1600,
  h: 1067
};
const hero4 = {
  sources: sources$h,
  img: img$h
};
const sources$g = {
  avif: "/assets/team-3YhuYFVO.avif 320w, /assets/team-jbt0Ba6e.avif 640w, /assets/team-BGStY6Xw.avif 960w, /assets/team-CReOm-VV.avif 1280w, /assets/team-BsAiJbRC.avif 1600w",
  webp: "/assets/team-DATVS9mE.webp 320w, /assets/team-Dqp6W59y.webp 640w, /assets/team-BdTXN0m6.webp 960w, /assets/team-GGKJH5lK.webp 1280w, /assets/team-DFjvQyUC.webp 1600w",
  jpeg: "/assets/team-DBHI9-B_.jpeg 320w, /assets/team-FmYuFw7U.jpeg 640w, /assets/team-CgLZ7egF.jpeg 960w, /assets/team-SyKdXKbr.jpeg 1280w, /assets/team-DBvKGJx3.jpeg 1600w"
};
const img$g = {
  src: "/assets/team-DBvKGJx3.jpeg",
  w: 1600,
  h: 1067
};
const team = {
  sources: sources$g,
  img: img$g
};
const page$3 = {
  de: {
    slug: "der-hof",
    seo: {
      title: "Der Hof | Oberhof Lunz",
      description: "600 Jahre alter Bergbauernhof, der nach Permakultur-Prinzipien arbeitet und Menschen wie Natur Raum gibt."
    },
    hero: {
      title: "Der Oberhof",
      subtitle: "Ein Bergbauernhof in Lunz am See, der seit Jahrhunderten besteht und heute behutsam in Richtung Selbstversorgung wächst."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          { src: hero1, alt: "Der Oberhof im warmen Morgenlicht" },
          {
            src: hero2,
            alt: "Aussicht über den Hof und die umliegenden Wälder"
          },
          {
            src: hero3,
            alt: "Detailaufnahme der landwirtschaftlichen Arbeit am Hof",
            topCropPercent: 70
          },
          { src: hero4, alt: "Weitblick in das Lunzertal vom Oberhof aus" },
          {
            src: team,
            alt: "Team des Oberhofs bei der Arbeit",
            topCropPercent: 0
          }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        }
      },
      {
        kind: "prose",
        title: "Ein lebendiger Bergbauernhof",
        body: "Ich bewirtschafte den Oberhof seit 2014 und sehe ihn als ganzheitliches System, in dem Menschen, Tiere und Landschaft sich gegenseitig stärken. Wir beobachten Kreisläufe, setzen auf ökologische Landwirtschaft und holen uns Inspiration aus alten Kulturtechniken."
      },
      {
        kind: "bullets",
        title: "Unsere Haltung",
        items: [
          "Permakultur-Prinzipien leiten den Alltag und jede Entscheidung.",
          "Natürliche Ökosysteme bekommen Zeit und Platz, sich zu regenerieren.",
          "Wissen aus der Region und jahrhundertealte Methoden wird bewusst gepflegt.",
          "Der Hof bleibt klein, persönlich und energieeffizient."
        ]
      },
      {
        kind: "facts",
        title: "Drei Standbeine",
        items: [
          {
            label: "Selbstversorgung",
            value: "Schritt für Schritt entstehen autarke Energie- und Lebensmittelkreisläufe, die unabhängig machen."
          },
          {
            label: "Spezialitätenverkauf",
            value: "Saisonale Produkte aus eigener Haltung und Verarbeitung, immer in überschaubaren Mengen."
          },
          {
            label: "Ferien-Apartment",
            value: "Ein eigenständiges Apartment für Gäste, die Hofleben und Natur in Ruhe genießen möchten."
          }
        ]
      },
      {
        kind: "heroImage",
        image: { src: team, alt: "Team des Oberhofs", topCropPercent: 25 },
        maxHeight: 350
      }
    ],
    cta: {
      title: "Mehr über den Hof",
      body: "Du willst wissen, wie wir arbeiten oder uns besuchen? Melde dich und wir nehmen uns Zeit.",
      primaryLabel: "Kontakt aufnehmen",
      primaryHref: "/contact"
    }
  },
  en: {
    slug: "the-farm",
    seo: {
      title: "The Farm | Oberhof Lunz",
      description: "A 600-year-old mountain farm guided by permaculture principles, creating space for both people and nature."
    },
    hero: {
      title: "The Oberhof",
      subtitle: "A mountain farm in Lunz am See that has existed for centuries and is now gently evolving toward self-sufficiency."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          { src: hero1, alt: "The Oberhof bathed in morning light" },
          { src: hero2, alt: "View across the farm and surrounding forests" },
          { src: hero3, alt: "Close-up of daily farm work in progress" },
          { src: hero4, alt: "Panorama of the Lunz valley from the Oberhof" },
          { src: team, alt: "Oberhof team working together" }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        }
      },
      {
        kind: "prose",
        title: "A living mountain farm",
        body: "I have been stewarding the Oberhof since 2014 and see it as an interconnected system where people, animals, and landscape strengthen one another. We observe natural cycles, practice ecological agriculture, and draw inspiration from traditional techniques."
      },
      {
        kind: "bullets",
        title: "Our approach",
        items: [
          "Permaculture principles guide daily life and every decision.",
          "Natural ecosystems receive the time and space they need to regenerate.",
          "Regional knowledge and centuries-old methods are actively cultivated.",
          "The farm remains small, personal, and energy-efficient."
        ]
      },
      {
        kind: "facts",
        title: "Three pillars",
        items: [
          {
            label: "Self-sufficiency",
            value: "Step by step, autonomous energy and food cycles emerge that make us independent."
          },
          {
            label: "Specialty products",
            value: "Seasonal goods from our own husbandry and processing, always in carefully curated quantities."
          },
          {
            label: "Holiday apartment",
            value: "A self-contained apartment for guests who want to enjoy life on the farm at a gentle pace."
          }
        ]
      },
      {
        kind: "heroImage",
        image: { src: team, alt: "Team des Oberhofs", topCropPercent: 25 },
        maxHeight: 350
      }
    ],
    cta: {
      title: "Learn more about the farm",
      body: "Want to see how we work or plan a visit? Reach out and we will take the time for you.",
      primaryLabel: "Get in touch",
      primaryHref: "/contact"
    }
  }
};
const styles$2 = {
  "page-renderer": "_page-renderer_17r5a_1",
  "page-renderer__intro": "_page-renderer__intro_17r5a_7",
  "page-renderer__slug": "_page-renderer__slug_17r5a_13",
  "page-renderer__title": "_page-renderer__title_17r5a_22",
  "page-renderer__subtitle": "_page-renderer__subtitle_17r5a_28",
  "page-renderer__sections": "_page-renderer__sections_17r5a_34",
  "page-renderer__section": "_page-renderer__section_17r5a_34",
  "page-renderer__section-hero": "_page-renderer__section-hero_17r5a_50",
  "page-renderer__section-title": "_page-renderer__section-title_17r5a_55",
  "page-renderer__text": "_page-renderer__text_17r5a_61",
  "page-renderer__list": "_page-renderer__list_17r5a_67",
  "page-renderer__facts": "_page-renderer__facts_17r5a_77",
  "page-renderer__fact": "_page-renderer__fact_17r5a_77",
  "page-renderer__fact-label": "_page-renderer__fact-label_17r5a_97",
  "page-renderer__fact-value": "_page-renderer__fact-value_17r5a_104",
  "page-renderer__fact-image": "_page-renderer__fact-image_17r5a_109",
  "page-renderer__hero-image": "_page-renderer__hero-image_17r5a_117",
  "page-renderer__hero-slider": "_page-renderer__hero-slider_17r5a_126",
  "page-renderer__hero-slide": "_page-renderer__hero-slide_17r5a_126",
  "page-renderer__hero-slide--active": "_page-renderer__hero-slide--active_17r5a_150",
  "page-renderer__hero-slider-dots": "_page-renderer__hero-slider-dots_17r5a_154",
  "page-renderer__hero-slider-dot": "_page-renderer__hero-slider-dot_17r5a_154",
  "page-renderer__hero-slider-dot--active": "_page-renderer__hero-slider-dot--active_17r5a_173",
  "page-renderer__cta": "_page-renderer__cta_17r5a_178",
  "page-renderer__cta-copy": "_page-renderer__cta-copy_17r5a_194",
  "page-renderer__cta-title": "_page-renderer__cta-title_17r5a_200",
  "page-renderer__cta-body": "_page-renderer__cta-body_17r5a_206",
  "page-renderer__cta-actions": "_page-renderer__cta-actions_17r5a_210"
};
function PageRenderer({
  content,
  children
}) {
  const isExternalCta = /^(https?:)\/\//.test(content.cta.primaryHref) || content.cta.primaryHref.startsWith("mailto:") || content.cta.primaryHref.startsWith("tel:");
  return /* @__PURE__ */ jsxs("div", { className: styles$2["page-renderer"], children: [
    /* @__PURE__ */ jsxs("header", { className: styles$2["page-renderer__intro"], children: [
      /* @__PURE__ */ jsx("p", { className: styles$2["page-renderer__slug"], children: content.slug }),
      /* @__PURE__ */ jsx("h1", { className: styles$2["page-renderer__title"], children: content.hero.title }),
      /* @__PURE__ */ jsx("p", { className: styles$2["page-renderer__subtitle"], children: content.hero.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$2["page-renderer__sections"], children: content.sections.map((section, index) => {
      const hasTitle = "title" in section;
      const sectionClassName = section.kind === "heroImage" ? styles$2["page-renderer__section-hero"] : styles$2["page-renderer__section"];
      const key = hasTitle ? `${section.title}-${index}` : `hero-image-${index}`;
      return /* @__PURE__ */ jsxs("section", { className: sectionClassName, children: [
        hasTitle ? /* @__PURE__ */ jsx("h2", { className: styles$2["page-renderer__section-title"], children: section.title }) : null,
        renderSection(section)
      ] }, key);
    }) }),
    children,
    /* @__PURE__ */ jsxs("section", { className: styles$2["page-renderer__cta"], children: [
      /* @__PURE__ */ jsxs("div", { className: styles$2["page-renderer__cta-copy"], children: [
        /* @__PURE__ */ jsx("p", { className: styles$2["page-renderer__cta-title"], children: content.cta.title }),
        /* @__PURE__ */ jsx("p", { className: styles$2["page-renderer__cta-body"], children: content.cta.body })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$2["page-renderer__cta-actions"], children: /* @__PURE__ */ jsx(Button, { asChild: true, children: isExternalCta ? /* @__PURE__ */ jsx(
        "a",
        {
          href: content.cta.primaryHref,
          target: "_blank",
          rel: "noopener noreferrer",
          children: content.cta.primaryLabel
        }
      ) : /* @__PURE__ */ jsx(Link, { to: content.cta.primaryHref, children: content.cta.primaryLabel }) }) })
    ] })
  ] });
}
function renderSection(section) {
  switch (section.kind) {
    case "prose":
      return /* @__PURE__ */ jsx("p", { className: styles$2["page-renderer__text"], children: section.body });
    case "bullets":
      return /* @__PURE__ */ jsx("ul", { className: styles$2["page-renderer__list"], children: section.items.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) });
    case "facts":
      return /* @__PURE__ */ jsx("dl", { className: styles$2["page-renderer__facts"], children: section.items.map((fact) => /* @__PURE__ */ jsxs("div", { className: styles$2["page-renderer__fact"], children: [
        /* @__PURE__ */ jsx("dt", { className: styles$2["page-renderer__fact-label"], children: fact.label }),
        /* @__PURE__ */ jsx("dd", { className: styles$2["page-renderer__fact-value"], children: fact.value }),
        fact.image ? /* @__PURE__ */ jsx(
          SmartImage,
          {
            className: styles$2["page-renderer__fact-image"],
            src: fact.image.src,
            alt: fact.image.alt,
            sizes: "(max-width: 768px) 100vw, 360px"
          }
        ) : null
      ] }, fact.label)) });
    case "heroImage":
      return /* @__PURE__ */ jsx(HeroImage, { section });
    default:
      return null;
  }
}
function HeroImage({ section }) {
  var _a2, _b2;
  const slides = useMemo(() => {
    if (section.images && section.images.length > 0) {
      return section.images;
    }
    if (section.image) {
      return [section.image];
    }
    return [];
  }, [section.images, section.image]);
  const sliderEnabled = slides.length > 1 && (((_a2 = section.slider) == null ? void 0 : _a2.enabled) ?? true);
  const maxHeight = section.maxHeight ?? 500;
  const heroHeightStyle = useMemo(
    () => getHeroHeightStyle(maxHeight),
    [maxHeight]
  );
  if (slides.length === 0) {
    return null;
  }
  if (!sliderEnabled) {
    const single = slides[0];
    return /* @__PURE__ */ jsx(
      SmartImage,
      {
        className: styles$2["page-renderer__hero-image"],
        src: single.src,
        alt: single.alt,
        loading: "lazy",
        sizes: "(max-width: 1024px) 100vw, 1200px",
        style: {
          ...heroHeightStyle,
          objectPosition: getObjectPosition(single.topCropPercent)
        }
      }
    );
  }
  return /* @__PURE__ */ jsx(
    HeroImageSlider,
    {
      slides,
      autoPlayMs: (_b2 = section.slider) == null ? void 0 : _b2.autoPlayMs,
      heroHeightStyle
    }
  );
}
function HeroImageSlider({
  slides,
  autoPlayMs,
  heroHeightStyle
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const intervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);
  const clearAutoPlayInterval = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };
  useEffect(() => {
    return () => {
      clearAutoPlayInterval();
      clearResumeTimeout();
    };
  }, []);
  useEffect(() => {
    clearAutoPlayInterval();
    if (!autoPlayMs || isAutoPaused) {
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, autoPlayMs);
    return clearAutoPlayInterval;
  }, [autoPlayMs, slides.length, isAutoPaused]);
  const pauseAutoAdvance = () => {
    if (!autoPlayMs) {
      return;
    }
    setIsAutoPaused(true);
    clearResumeTimeout();
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPaused(false);
      resumeTimeoutRef.current = null;
    }, 3e4);
  };
  const goNext = () => setCurrentIndex((index) => (index + 1) % slides.length);
  const goPrev = () => setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  const handleSliderClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    if (clickX < rect.width / 2) {
      pauseAutoAdvance();
      goPrev();
    } else {
      pauseAutoAdvance();
      goNext();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$2["page-renderer__hero-slider"],
      onClick: handleSliderClick,
      style: heroHeightStyle,
      children: [
        slides.map((slide, index) => {
          var _a2;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: `${styles$2["page-renderer__hero-slide"]} ${index === currentIndex ? styles$2["page-renderer__hero-slide--active"] : ""}`,
              children: /* @__PURE__ */ jsx(
                SmartImage,
                {
                  src: slide.src,
                  alt: slide.alt,
                  loading: index === currentIndex ? "eager" : "lazy",
                  sizes: "(max-width: 1024px) 100vw, 1200px",
                  style: { objectPosition: getObjectPosition(slide.topCropPercent) }
                }
              )
            },
            `${((_a2 = slide.src.img) == null ? void 0 : _a2.src) ?? slide.alt}-${index}`
          );
        }),
        /* @__PURE__ */ jsx("div", { className: styles$2["page-renderer__hero-slider-dots"], children: slides.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: `${styles$2["page-renderer__hero-slider-dot"]} ${currentIndex === index ? styles$2["page-renderer__hero-slider-dot--active"] : ""}`,
            "aria-label": `Go to image ${index + 1}`,
            onClick: (event) => {
              event.stopPropagation();
              pauseAutoAdvance();
              setCurrentIndex(index);
            }
          },
          `dot-${index}`
        )) })
      ]
    }
  );
}
function clampPercent(value) {
  return Math.min(100, Math.max(0, value));
}
function getObjectPosition(topCropPercent) {
  const percent = clampPercent(topCropPercent ?? 50);
  return `50% ${percent}%`;
}
function getHeroHeightStyle(maxHeight) {
  return { ["--hero-max-height"]: `${maxHeight}px` };
}
function TheFarmPage() {
  const { language } = useLanguage();
  const content = page$3[language];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoTags,
      {
        route: "the-farm",
        title: content.seo.title,
        description: content.seo.description
      }
    ),
    /* @__PURE__ */ jsx(PageRenderer, { content })
  ] });
}
const sources$f = {
  avif: "/assets/deer-713k4Xep.avif 320w, /assets/deer-CWEI-nJS.avif 640w, /assets/deer-D8LCODb7.avif 960w, /assets/deer-DapX9F6L.avif 1280w, /assets/deer-CATpLmR5.avif 1600w",
  webp: "/assets/deer-DWLYpBek.webp 320w, /assets/deer-n603VaFG.webp 640w, /assets/deer-BAA_s9vJ.webp 960w, /assets/deer-D9AaUfyD.webp 1280w, /assets/deer-sVoWuTKX.webp 1600w",
  jpeg: "/assets/deer-ObbHt3h5.jpeg 320w, /assets/deer-78fG1BYu.jpeg 640w, /assets/deer-DaHZ8nAJ.jpeg 960w, /assets/deer-BrEMKVVM.jpeg 1280w, /assets/deer-BX97bk9m.jpeg 1600w"
};
const img$f = {
  src: "/assets/deer-BX97bk9m.jpeg",
  w: 1600,
  h: 1067
};
const deer = {
  sources: sources$f,
  img: img$f
};
const sources$e = {
  avif: "/assets/fish-Dk5Mq55I.avif 320w, /assets/fish-Bul3zA1D.avif 640w, /assets/fish-D8rtliJ8.avif 960w, /assets/fish-DITnq0AA.avif 1280w, /assets/fish-COhPyWou.avif 1600w",
  webp: "/assets/fish-DiyqnGA9.webp 320w, /assets/fish-L4kGR0NJ.webp 640w, /assets/fish-CyUocnpD.webp 960w, /assets/fish-BpjFVZDw.webp 1280w, /assets/fish-D_mAu12W.webp 1600w",
  jpeg: "/assets/fish-I8mrxvS7.jpeg 320w, /assets/fish-CaKd3P3Y.jpeg 640w, /assets/fish-BX6MT1Qr.jpeg 960w, /assets/fish-CAwtPxEb.jpeg 1280w, /assets/fish-DhwVL5kR.jpeg 1600w"
};
const img$e = {
  src: "/assets/fish-DhwVL5kR.jpeg",
  w: 1600,
  h: 1067
};
const fish = {
  sources: sources$e,
  img: img$e
};
const sources$d = {
  avif: "/assets/honey-O2w_CeVX.avif 320w, /assets/honey-axC12Bjb.avif 640w, /assets/honey-iW6eCXCQ.avif 960w, /assets/honey-BvUuguW5.avif 1024w",
  webp: "/assets/honey-LAucJAbz.webp 320w, /assets/honey-DdFD1wXY.webp 640w, /assets/honey-80gbPmIJ.webp 960w, /assets/honey-D5iHxpYf.webp 1024w",
  jpeg: "/assets/honey-CTutCgTj.jpeg 320w, /assets/honey-Crwqi9PB.jpeg 640w, /assets/honey-W2P_QoV_.jpeg 960w, /assets/honey-DOBzU2vb.jpeg 1024w"
};
const img$d = {
  src: "/assets/honey-DOBzU2vb.jpeg",
  w: 1024,
  h: 683
};
const honey = {
  sources: sources$d,
  img: img$d
};
const sources$c = {
  avif: "/assets/juice-CuN9Q031.avif 320w, /assets/juice-QRP_VZN-.avif 640w, /assets/juice-dDs1cQHW.avif 880w",
  webp: "/assets/juice-DHgTfu7Z.webp 320w, /assets/juice-fXIHR7HS.webp 640w, /assets/juice-CVQpCFFQ.webp 880w",
  png: "/assets/juice-DHyoaHiE.png 320w, /assets/juice-BDLNwlCW.png 640w, /assets/juice-iwiHmFsn.png 880w"
};
const img$c = {
  src: "/assets/juice-iwiHmFsn.png",
  w: 880,
  h: 616
};
const juice = {
  sources: sources$c,
  img: img$c
};
const sources$b = {
  avif: "/assets/hero-_C1LUzDN.avif 320w, /assets/hero-_IItRKGP.avif 640w, /assets/hero-B-B8VZi9.avif 960w, /assets/hero-DWxG2MEO.avif 1280w, /assets/hero-BkSQqnqE.avif 1600w",
  webp: "/assets/hero-BEKlHrto.webp 320w, /assets/hero-D8olMxxM.webp 640w, /assets/hero-fH97En3Y.webp 960w, /assets/hero-BjjaZdp5.webp 1280w, /assets/hero-CoTANR8s.webp 1600w",
  jpeg: "/assets/hero-CI39CbD6.jpeg 320w, /assets/hero-CcFhiLOf.jpeg 640w, /assets/hero-Bn_0jVbg.jpeg 960w, /assets/hero-BPw6voei.jpeg 1280w, /assets/hero-DVIV0qe1.jpeg 1600w"
};
const img$b = {
  src: "/assets/hero-DVIV0qe1.jpeg",
  w: 1600,
  h: 1067
};
const productsHeroImg = {
  sources: sources$b,
  img: img$b
};
const sources$a = {
  avif: "/assets/hero2-nulkQ4ql.avif 320w, /assets/hero2-CYqKCg4L.avif 640w, /assets/hero2-DLZLOHKg.avif 960w, /assets/hero2-D_iizdNs.avif 1280w, /assets/hero2-2iCnVext.avif 1600w",
  webp: "/assets/hero2-BR20lrq3.webp 320w, /assets/hero2-4gz_qqXC.webp 640w, /assets/hero2-BwsDcca_.webp 960w, /assets/hero2-DoIZnnd7.webp 1280w, /assets/hero2-swB5hPSO.webp 1600w",
  jpeg: "/assets/hero2-s-F9TVc1.jpeg 320w, /assets/hero2-ChuooOns.jpeg 640w, /assets/hero2-BBSark8K.jpeg 960w, /assets/hero2-ebiIag69.jpeg 1280w, /assets/hero2-m70h_4RR.jpeg 1600w"
};
const img$a = {
  src: "/assets/hero2-m70h_4RR.jpeg",
  w: 1600,
  h: 1067
};
const productsHeroImg2 = {
  sources: sources$a,
  img: img$a
};
const sources$9 = {
  avif: "/assets/hero3-dWhqvgLk.avif 320w, /assets/hero3-DE2HJDMr.avif 640w, /assets/hero3-D559JsYT.avif 960w, /assets/hero3-CfSIF0CC.avif 1280w, /assets/hero3-BbohkM7B.avif 1600w",
  webp: "/assets/hero3-CajBqiWM.webp 320w, /assets/hero3-CsDrfOAo.webp 640w, /assets/hero3-vVvZ8gIB.webp 960w, /assets/hero3-CheZ3TOy.webp 1280w, /assets/hero3-Cft9JTo1.webp 1600w",
  jpeg: "/assets/hero3-DhnIGLnY.jpeg 320w, /assets/hero3-aynopTc_.jpeg 640w, /assets/hero3-BMXzpXAd.jpeg 960w, /assets/hero3-B8eJDJXY.jpeg 1280w, /assets/hero3-Dfz3yzlQ.jpeg 1600w"
};
const img$9 = {
  src: "/assets/hero3-Dfz3yzlQ.jpeg",
  w: 1600,
  h: 1067
};
const productsHeroImg3 = {
  sources: sources$9,
  img: img$9
};
const sources$8 = {
  avif: "/assets/hero4-CW0takMa.avif 320w, /assets/hero4-Be-u8GN9.avif 640w, /assets/hero4-kbAfbcUk.avif 960w, /assets/hero4-CecfGdbR.avif 1280w, /assets/hero4-CeENFP4V.avif 1600w",
  webp: "/assets/hero4-DR95kBf4.webp 320w, /assets/hero4-C_T0wdT8.webp 640w, /assets/hero4-CknKZJ2o.webp 960w, /assets/hero4-DfgW8OD2.webp 1280w, /assets/hero4-DIH0ymMe.webp 1600w",
  jpeg: "/assets/hero4-Dkw9mPBg.jpeg 320w, /assets/hero4-GRb7_PW8.jpeg 640w, /assets/hero4-BUoLtCmX.jpeg 960w, /assets/hero4-huRbcpxJ.jpeg 1280w, /assets/hero4-wA4t1968.jpeg 1600w"
};
const img$8 = {
  src: "/assets/hero4-wA4t1968.jpeg",
  w: 1600,
  h: 1067
};
const productsHeroImg4 = {
  sources: sources$8,
  img: img$8
};
const page$2 = {
  de: {
    slug: "produkte",
    seo: {
      title: "Produkte | Oberhof Lunz",
      description: "Wildfleisch, Gebirgs-Saiblinge, Honig, Pilze, Sirupe und Fichtenbier – sorgfältig erzeugt in kleinen Mengen."
    },
    hero: {
      title: "Produkte",
      subtitle: "Wir erzeugen Lebensmittel mit Charakter, fernab von Massenproduktion und so regional wie möglich."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          {
            src: productsHeroImg,
            alt: "Produkte des Oberhofs in einer rustikalen Präsentation"
          },
          {
            src: productsHeroImg2,
            alt: "Produkte des Oberhofs in einer rustikalen Präsentation"
          },
          {
            src: productsHeroImg3,
            alt: "Produkte des Oberhofs in einer rustikalen Präsentation"
          },
          {
            src: productsHeroImg4,
            alt: "Produkte des Oberhofs in einer rustikalen Präsentation"
          }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        }
      },
      {
        kind: "prose",
        title: "Unsere Philosophie",
        body: "Der Oberhof ist nie auf konventionelle Landwirtschaft umgestiegen. Biologische Bewirtschaftung, respektvolle Tierhaltung und handwerkliche Verarbeitung sind für uns selbstverständlich. Wir achten auf Qualität statt Menge und geben jedem Produkt so viel Zeit, wie es braucht."
      },
      {
        kind: "facts",
        title: "Kuratierte Auswahl",
        items: [
          {
            label: "Sika-Hirsche",
            value: "Standorttreue Tiere, eigene Zucht bis zur stressfreien Schlachtung – begehrt wegen des aromatischen Wildfleisches.",
            image: { src: deer, alt: "Platzhalterbild für Sika-Hirsche" }
          },
          {
            label: "Gebirgs-Saiblinge",
            value: "Langsam wachsende Bach-Saiblinge, Bio-Futter und klares Quellwasser für feines Fleisch, frisch oder geräuchert.",
            image: {
              src: fish,
              alt: "Platzhalterbild für Gebirgs-Saiblinge"
            }
          },
          {
            label: "Honig & Met",
            value: "Bienen auf artenreichen Naturwiesen liefern einen vielschichtigen Jahrgangshonig als Basis für Honigwein.",
            image: { src: honey, alt: "Platzhalterbild für Honig & Met" }
          },
          {
            label: "Säfte & Sirupe",
            value: "Apfel, Birne, Holler, Minze oder Fichtenwipfel landen handverlesen in saisonalen Pressungen und Auszügen.",
            image: {
              src: juice,
              alt: "Platzhalterbild für Säfte & Sirupe"
            }
          }
        ]
      },
      {
        kind: "bullets",
        title: "So erhältst du unsere Spezialitäten",
        items: [
          "Nur limitierte Mengen – bitte frühzeitig Interesse melden.",
          "Wir informieren per Mail, welche Produkte saisonal verfügbar sind.",
          "Abholung nach Vereinbarung direkt am Hof oder bei gemeinsamen Übergaben."
        ]
      }
    ],
    cta: {
      title: "Produkte anfragen",
      body: "Sag uns, wofür du dich interessierst, und wir teilen mit, wann und wie du es bekommst.",
      primaryLabel: "Nachricht senden",
      primaryHref: "/contact"
    }
  },
  en: {
    slug: "products",
    seo: {
      title: "Products | Oberhof Lunz",
      description: "Venison, alpine char, honey, mushrooms, syrups, and spruce-tip beer – carefully crafted in small batches."
    },
    hero: {
      title: "Products",
      subtitle: "We create characterful foods, far from mass production and as regional as possible."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          {
            src: productsHeroImg,
            alt: "Oberhof product display used as a visual opener"
          },
          {
            src: productsHeroImg2,
            alt: "Close-up of Oberhof specialties on a rustic table"
          },
          {
            src: productsHeroImg3,
            alt: "Baskets filled with Oberhof produce ready for tasting"
          },
          {
            src: productsHeroImg4,
            alt: "Selection of Oberhof beverages styled for presentation"
          }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        }
      },
      {
        kind: "prose",
        title: "Our philosophy",
        body: "The Oberhof never converted to conventional agriculture. Organic cultivation, respectful animal husbandry, and artisanal processing are second nature to us. We focus on quality instead of quantity and give every product the time it needs."
      },
      {
        kind: "facts",
        title: "Curated selection",
        items: [
          {
            label: "Sika deer",
            value: "Site-faithful animals, our own breeding through low-stress slaughter – prized for their aromatic venison.",
            image: { src: deer, alt: "Placeholder image for Sika deer" }
          },
          {
            label: "Alpine char",
            value: "Slow-growing brook char, organic feed, and clear spring water for delicate meat, fresh or smoked.",
            image: { src: fish, alt: "Placeholder image for Alpine char" }
          },
          {
            label: "Honey & mead",
            value: "Bees on species-rich meadows deliver a multi-layered vintage honey that becomes the base for mead.",
            image: {
              src: honey,
              alt: "Placeholder image for Honey & mead"
            }
          },
          {
            label: "Juices & syrups",
            value: "Apple, pear, elderflower, mint, or spruce tips are hand-picked for seasonal pressings and extracts.",
            image: {
              src: juice,
              alt: "Placeholder image for Juices & syrups"
            }
          }
        ]
      },
      {
        kind: "bullets",
        title: "How to order",
        items: [
          "Availability is limited – please reach out early.",
          "We share seasonal availability updates via email.",
          "Pickup by appointment on the farm or during coordinated meetups."
        ]
      }
    ],
    cta: {
      title: "Request products",
      body: "Tell us what you are interested in and we will let you know when and how you can receive it.",
      primaryLabel: "Send message",
      primaryHref: "/contact"
    }
  }
};
function ProductsPage() {
  const { language } = useLanguage();
  const content = page$2[language];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoTags,
      {
        route: "products",
        title: content.seo.title,
        description: content.seo.description
      }
    ),
    /* @__PURE__ */ jsx(PageRenderer, { content })
  ] });
}
const sources$7 = {
  avif: "/assets/apart1-DdIYz-6U.avif 320w, /assets/apart1-BswiCDK0.avif 640w, /assets/apart1-H8FCtFCw.avif 960w, /assets/apart1-B_yNeXNo.avif 1280w",
  webp: "/assets/apart1-Cgaq2U3Q.webp 320w, /assets/apart1-BmEdLiMk.webp 640w, /assets/apart1-BADEkdN4.webp 960w, /assets/apart1-rUDkyQng.webp 1280w",
  jpeg: "/assets/apart1-Cgd36tX-.jpeg 320w, /assets/apart1-BR_FQXVa.jpeg 640w, /assets/apart1-BLSOGdwy.jpeg 960w, /assets/apart1-a0xMQtA6.jpeg 1280w"
};
const img$7 = {
  src: "/assets/apart1-a0xMQtA6.jpeg",
  w: 1280,
  h: 960
};
const apart1 = {
  sources: sources$7,
  img: img$7
};
const sources$6 = {
  avif: "/assets/apart3-DqgwET0_.avif 320w, /assets/apart3-DH4q15Ff.avif 640w, /assets/apart3-BJdj-eL2.avif 960w, /assets/apart3-U21s_Nkl.avif 1280w",
  webp: "/assets/apart3-EfBxXqVO.webp 320w, /assets/apart3-C_Dxo9HE.webp 640w, /assets/apart3-hjxAz5jF.webp 960w, /assets/apart3-D3qm04Rx.webp 1280w",
  jpeg: "/assets/apart3-BmT_zI9s.jpeg 320w, /assets/apart3-D_Rre8oC.jpeg 640w, /assets/apart3-Buhe8b4I.jpeg 960w, /assets/apart3-GBXC7ToU.jpeg 1280w"
};
const img$6 = {
  src: "/assets/apart3-GBXC7ToU.jpeg",
  w: 1280,
  h: 960
};
const apart3 = {
  sources: sources$6,
  img: img$6
};
const sources$5 = {
  avif: "/assets/apart4--O3l_-DB.avif 320w, /assets/apart4-vWW83xJy.avif 640w, /assets/apart4-CN-HR0-0.avif 960w, /assets/apart4-Dth4yc45.avif 1280w",
  webp: "/assets/apart4-oxdX7oGI.webp 320w, /assets/apart4-GGlZfxYs.webp 640w, /assets/apart4-CIi4NwCf.webp 960w, /assets/apart4-ywiM9xcS.webp 1280w",
  jpeg: "/assets/apart4-Cw_IZ2Qk.jpeg 320w, /assets/apart4-DyGN579l.jpeg 640w, /assets/apart4-D4tRU5UW.jpeg 960w, /assets/apart4-8xeONS8j.jpeg 1280w"
};
const img$5 = {
  src: "/assets/apart4-8xeONS8j.jpeg",
  w: 1280,
  h: 960
};
const apart4 = {
  sources: sources$5,
  img: img$5
};
const sources$4 = {
  avif: "/assets/apart5-Fz1fSm05.avif 320w, /assets/apart5-z-NVmfDt.avif 640w, /assets/apart5-Ce6JPvsF.avif 960w, /assets/apart5-CBXylQMR.avif 1280w",
  webp: "/assets/apart5-e4VfTdZv.webp 320w, /assets/apart5-TC4cB1_f.webp 640w, /assets/apart5-RHNYTUU3.webp 960w, /assets/apart5-B_qOAfI0.webp 1280w",
  jpeg: "/assets/apart5-CD2kQWjz.jpeg 320w, /assets/apart5-DWiwQnQC.jpeg 640w, /assets/apart5-Bbtk_jVF.jpeg 960w, /assets/apart5-BFsTdAWm.jpeg 1280w"
};
const img$4 = {
  src: "/assets/apart5-BFsTdAWm.jpeg",
  w: 1280,
  h: 960
};
const apart5 = {
  sources: sources$4,
  img: img$4
};
const sources$3 = {
  avif: "/assets/apart6-DmYE-q71.avif 320w, /assets/apart6-hFEZ0wGj.avif 640w, /assets/apart6-B0QQoC9v.avif 960w, /assets/apart6-S5wOciYo.avif 1280w",
  webp: "/assets/apart6-C1Y_LQ_W.webp 320w, /assets/apart6-DNc0E5qF.webp 640w, /assets/apart6-BAkhDcth.webp 960w, /assets/apart6-d7OEO105.webp 1280w",
  jpeg: "/assets/apart6-DzguNWB9.jpeg 320w, /assets/apart6-DB0OgPdw.jpeg 640w, /assets/apart6-C_eX2buU.jpeg 960w, /assets/apart6-m1vz_Hmd.jpeg 1280w"
};
const img$3 = {
  src: "/assets/apart6-m1vz_Hmd.jpeg",
  w: 1280,
  h: 960
};
const apart6 = {
  sources: sources$3,
  img: img$3
};
const sources$2 = {
  avif: "/assets/apart7-DHxV-Byo.avif 320w, /assets/apart7-DHU99Wkf.avif 640w, /assets/apart7-CFqZoJSU.avif 960w, /assets/apart7-BtrCfvnj.avif 1280w",
  webp: "/assets/apart7-BPl8vN9q.webp 320w, /assets/apart7-WhmO3G7o.webp 640w, /assets/apart7-kBBAEVMn.webp 960w, /assets/apart7-D9O6ph1s.webp 1280w",
  jpeg: "/assets/apart7-DJbv79yw.jpeg 320w, /assets/apart7-BmvGojx8.jpeg 640w, /assets/apart7-yi6jkpHu.jpeg 960w, /assets/apart7-DoAe5JE3.jpeg 1280w"
};
const img$2 = {
  src: "/assets/apart7-DoAe5JE3.jpeg",
  w: 1280,
  h: 960
};
const apart7 = {
  sources: sources$2,
  img: img$2
};
const sources$1 = {
  avif: "/assets/apart8-DVuPfcLI.avif 320w, /assets/apart8-ByFKI1Gd.avif 640w, /assets/apart8-CDG4F7C8.avif 960w, /assets/apart8-kqUYTqlz.avif 1280w",
  webp: "/assets/apart8-C6NAKmB7.webp 320w, /assets/apart8-BqEMeoyO.webp 640w, /assets/apart8-DLBroxcb.webp 960w, /assets/apart8-B7bFwM2Q.webp 1280w",
  jpeg: "/assets/apart8-BRHMnzGH.jpeg 320w, /assets/apart8-B0CGHb0Z.jpeg 640w, /assets/apart8-BEzsf2pE.jpeg 960w, /assets/apart8-C7SfVCgf.jpeg 1280w"
};
const img$1 = {
  src: "/assets/apart8-C7SfVCgf.jpeg",
  w: 1280,
  h: 960
};
const apart8 = {
  sources: sources$1,
  img: img$1
};
const page$1 = {
  de: {
    slug: "vermietung",
    seo: {
      title: "Vermietung | Oberhof Lunz",
      description: "Eigenständiges Ferien-Apartment mit 70 m² Wohnfläche, Küche und Blick ins Grüne."
    },
    hero: {
      title: "Vermietung",
      subtitle: "Für Paare, Familien oder Freund*innen, die Ruhe und Natur direkt am Hof erleben möchten."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          {
            src: apart1,
            alt: "Wohnbereich des Ferien-Apartments mit Sofa und Ofen",
            topCropPercent: 40
          },
          {
            src: apart3,
            alt: "Essbereich des Apartments mit Blick ins Grüne",
            topCropPercent: 45
          },
          {
            src: apart4,
            alt: "Schlafzimmer mit Holz und warmen Textilien",
            topCropPercent: 35
          },
          {
            src: apart5,
            alt: "Detailaufnahme der Küche im Ferien-Apartment",
            topCropPercent: 50
          },
          {
            src: apart6,
            alt: "Außenbereich mit Zugang zum Garten",
            topCropPercent: 30
          },
          {
            src: apart7,
            alt: "Leseecke im Apartment mit Bibliothek",
            topCropPercent: 50
          },
          {
            src: apart8,
            alt: "Blick vom Apartment auf die umliegende Landschaft",
            topCropPercent: 35
          }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        },
        maxHeight: 800
      },
      {
        kind: "prose",
        title: "Ferien-Apartment",
        body: "Das Apartment umfasst rund 70 m², einen offenen Wohnbereich mit Holzofen, zwei Schlafräume und eine voll ausgestattete Küche. Naturmaterialien, warme Farben und der Blick über die Wiesen sorgen sofort für Entschleunigung."
      },
      {
        kind: "facts",
        title: "Ausstattung",
        items: [
          {
            label: "Wohnbereich",
            value: "Heller Ess- und Wohnzimmerbereich mit Ausblick über das Wildnisgebiet Dürrenstein, Sofa und Holzofen."
          },
          {
            label: "Infrastruktur",
            value: "Voll ausgestattete Küche, eigenes Bad mit Dusche, separates WC und Wäschepaket."
          },
          {
            label: "Außenplätze",
            value: "Eigene Terrasse, Zugang zum Teich, Feuerstelle sowie stille Plätze rund ums Haus."
          }
        ]
      },
      {
        kind: "bullets",
        title: "Übernachtung & Versorgung",
        items: [
          "Platz für bis zu vier Personen, optional mit Kinderbett.",
          "Selbstversorgerküche mit Grundausstattung aus Hofprodukten.",
          "Bio-Frühstückskorb oder Hofführungen auf Wunsch zubuchbar.",
          "Anreise per Auto, Bahn + Shuttle oder Fahrrad problemlos möglich."
        ]
      }
    ],
    cta: {
      title: "Buche jetzt",
      body: "Wähle deinen Wunschtermin und buche das Ferien-Apartment direkt über Airbnb.",
      primaryLabel: "Jetzt auf Airbnb buchen",
      primaryHref: "https://www.airbnb.com/rooms"
    }
  },
  en: {
    slug: "rentals",
    seo: {
      title: "Rentals | Oberhof Lunz",
      description: "Self-contained holiday apartment with 70 m² of living space, kitchen, and calming views."
    },
    hero: {
      title: "Rentals",
      subtitle: "Perfect for couples, families, or friends seeking a quiet stay on the farm."
    },
    sections: [
      {
        kind: "heroImage",
        images: [
          {
            src: apart1,
            alt: "Living area of the holiday apartment with sofa and stove",
            topCropPercent: 40
          },
          {
            src: apart3,
            alt: "Dining space with views into the greenery",
            topCropPercent: 45
          },
          {
            src: apart4,
            alt: "Bedroom with wooden interior and soft textiles",
            topCropPercent: 35
          },
          {
            src: apart5,
            alt: "Kitchen details inside the holiday apartment",
            topCropPercent: 50
          },
          {
            src: apart6,
            alt: "Outdoor area leading into the garden",
            topCropPercent: 30
          },
          {
            src: apart7,
            alt: "Reading nook and library inside the apartment",
            topCropPercent: 50
          },
          {
            src: apart8,
            alt: "View from the apartment across the surrounding landscape",
            topCropPercent: 35
          }
        ],
        slider: {
          enabled: true,
          autoPlayMs: 3e3
        },
        maxHeight: 800
      },
      {
        kind: "prose",
        title: "Holiday apartment",
        body: "The apartment covers roughly 70 m² with an airy living space, wood-burning stove, two bedrooms, and a fully equipped kitchen. Natural materials, warm tones, and views across the meadows invite you to slow down."
      },
      {
        kind: "facts",
        title: "Amenities",
        items: [
          {
            label: "Living area",
            value: "Bright lounge and dining space with great view over the Wildnisgebiet Dürrenstein, sofa and a wood stove."
          },
          {
            label: "Infrastructure",
            value: "Fully equipped kitchen, private bathroom with shower, separate WC, and fresh linens."
          },
          {
            label: "Outdoor spaces",
            value: "Private terrace, access to the pond, fire pit, and quiet forest clearings around the farm."
          }
        ]
      },
      {
        kind: "bullets",
        title: "Stay & catering",
        items: [
          "Sleeps up to four guests, baby cot available on request.",
          "Self-catering kitchen stocked with farm essentials.",
          "Organic breakfast basket or farm tours available as add-ons.",
          "Easy arrival by car, train plus pickup, or bike."
        ]
      }
    ],
    cta: {
      title: "Book now",
      body: "Pick your preferred dates and book the holiday apartment directly via Airbnb.",
      primaryLabel: "Book on Airbnb",
      primaryHref: "https://www.airbnb.com/rooms"
    }
  }
};
function RentalsPage() {
  const { language } = useLanguage();
  const content = page$1[language];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoTags,
      {
        route: "rentals",
        title: content.seo.title,
        description: content.seo.description
      }
    ),
    /* @__PURE__ */ jsx(PageRenderer, { content })
  ] });
}
const page = {
  de: {
    slug: "kontakt",
    seo: {
      title: "Kontakt | Oberhof Lunz",
      description: "Direkter Draht zu Daniel Kofler, Anreisebeschreibung nach Ertltal 5 in Lunz am See und Bildnachweise."
    },
    hero: {
      title: "Kontakt",
      subtitle: "Ich freue mich über eine ruhige Nachricht und beantworte Anfragen zeitnah."
    },
    sections: [
      {
        kind: "prose",
        title: "Melde dich",
        body: "Ob Produkte oder Ferien-Apartment – schreib kurz, was du vorhast. Gemeinsam finden wir den passenden Rahmen."
      }
    ],
    cta: {
      title: "Nachricht senden",
      body: "Wir melden uns persönlich, meist innerhalb weniger Tage.",
      primaryLabel: "Kontakt aufnehmen",
      primaryHref: "mailto:daniel@oberhof-lunz.at"
    },
    contactInfo: {
      title: "Kontakt",
      items: [
        { label: "Name", value: "Daniel Kofler" },
        { label: "Telefon", value: "+43 680 1117299" },
        { label: "E-Mail", value: "daniel@oberhof-lunz.at" },
        {
          label: "Adresse",
          value: "Ertltal 5, 3293 Lunz am See, Österreich"
        }
      ]
    },
    directionsHeading: "Anfahrt",
    directions: [
      "Von Lunz Richtung Göstling fahren; nach der Brücke liegt rechts ein Fußballplatz.",
      'Etwa 200 Meter später rechts über die kleine Brücke mit dem Schild "Trialhof Enöckl" abbiegen – kommt eine 70er‑Zone, war es zu weit.',
      "Durch das steile Waldstück fahren, nach der Haarnadelkurve weiterhin geradeaus; bei der Gabelung mit Birke und Marterl rechts halten.",
      'Der Straße folgen, auch wenn sie zur Schotterpiste wird; alternativ zuerst "Ahorntal 3" ins Navi eingeben und dann weiter zu "Ertltal 1".'
    ]
  },
  en: {
    slug: "contact",
    seo: {
      title: "Contact | Oberhof Lunz",
      description: "Direct line to Daniel Kofler, driving directions to Ertltal 5 in Lunz am See, plus photo credits."
    },
    hero: {
      title: "Contact",
      subtitle: "I look forward to thoughtful messages and answer inquiries promptly."
    },
    sections: [
      {
        kind: "prose",
        title: "Reach out",
        body: "Whether you are interested in products or the holiday apartment, share a short note about your plans and we will shape the right framework."
      }
    ],
    cta: {
      title: "Send a message",
      body: "We reply personally, usually within a few days.",
      primaryLabel: "Contact us",
      primaryHref: "mailto:daniel@oberhof-lunz.at"
    },
    contactInfo: {
      title: "Contact",
      items: [
        { label: "Name", value: "Daniel Kofler" },
        { label: "Phone", value: "+43 680 1117299" },
        { label: "Email", value: "daniel@oberhof-lunz.at" },
        {
          label: "Address",
          value: "Ertltal 5, 3293 Lunz am See, Austria"
        }
      ]
    },
    directionsHeading: "Directions",
    directions: [
      "Drive from Lunz toward Göstling; after the bridge you will see a soccer field on the right.",
      'Roughly 200 meters later, turn right across the small bridge marked "Trialhof Enöckl" – if you reach the 70 km/h zone you have gone too far.',
      "Continue through the steep forest section, stay straight after the hairpin turn, and keep right at the fork with the birch tree and shrine.",
      'Follow the road even as it turns to gravel; alternatively enter "Ahorntal 3" in your GPS first and continue on to "Ertltal 1".'
    ]
  }
};
const sources = {
  avif: "/assets/daniel-BbuB9tRv.avif 320w, /assets/daniel-BXsbB5HA.avif 640w, /assets/daniel-DVjduKRT.avif 960w, /assets/daniel-Bl-K1dRw.avif 1280w, /assets/daniel-q5qTdBAi.avif 1600w",
  webp: "/assets/daniel-BAb6YYH3.webp 320w, /assets/daniel-DEwQIi5y.webp 640w, /assets/daniel-BSGQcp3s.webp 960w, /assets/daniel-DuyKefNW.webp 1280w, /assets/daniel-C0XVyzYg.webp 1600w",
  jpeg: "/assets/daniel-CJYRe5PZ.jpeg 320w, /assets/daniel-D-phGSim.jpeg 640w, /assets/daniel-CcgtsnZ8.jpeg 960w, /assets/daniel-CcCB2A_v.jpeg 1280w, /assets/daniel-dNnmfai7.jpeg 1600w"
};
const img = {
  src: "/assets/daniel-dNnmfai7.jpeg",
  w: 1600,
  h: 1067
};
const danielImage = {
  sources,
  img
};
const styles$1 = {
  "contact-page": "_contact-page_oho27_1",
  "contact-page__highlight": "_contact-page__highlight_oho27_5",
  "contact-page__highlight-card": "_contact-page__highlight-card_oho27_20",
  "contact-page__highlight-title": "_contact-page__highlight-title_oho27_26",
  "contact-page__highlight-facts": "_contact-page__highlight-facts_oho27_32",
  "contact-page__highlight-fact": "_contact-page__highlight-fact_oho27_32",
  "contact-page__highlight-label": "_contact-page__highlight-label_oho27_44",
  "contact-page__highlight-value": "_contact-page__highlight-value_oho27_51",
  "contact-page__highlight-image": "_contact-page__highlight-image_oho27_56",
  "contact-page__details": "_contact-page__details_oho27_68",
  "contact-page__group": "_contact-page__group_oho27_78",
  "contact-page__heading": "_contact-page__heading_oho27_84",
  "contact-page__list": "_contact-page__list_oho27_90",
  "contact-page__maps-links": "_contact-page__maps-links_oho27_100"
};
const DESTINATION = {
  latitude: 47.83053656105003,
  longitude: 14.975329097871985
};
function ContactPage() {
  const { language } = useLanguage();
  const content = page[language];
  const site = siteContent[language];
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brandName,
    url: SITE_CANONICAL_BASE,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: new URL("/images/favicon.png", SITE_CANONICAL_BASE).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ertltal 5",
      addressLocality: "Lunz am See",
      postalCode: "3293",
      addressRegion: "Niederösterreich",
      addressCountry: "AT"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: DESTINATION.latitude,
      longitude: DESTINATION.longitude
    }
  };
  const contactHighlight = /* @__PURE__ */ jsxs("section", { className: styles$1["contact-page__highlight"], children: [
    /* @__PURE__ */ jsxs("div", { className: styles$1["contact-page__highlight-card"], children: [
      /* @__PURE__ */ jsx("p", { className: styles$1["contact-page__highlight-title"], children: content.contactInfo.title }),
      /* @__PURE__ */ jsx("dl", { className: styles$1["contact-page__highlight-facts"], children: content.contactInfo.items.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$1["contact-page__highlight-fact"],
          children: [
            /* @__PURE__ */ jsx("dt", { className: styles$1["contact-page__highlight-label"], children: item.label }),
            /* @__PURE__ */ jsx("dd", { className: styles$1["contact-page__highlight-value"], children: item.value })
          ]
        },
        item.label
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["contact-page__highlight-image"], children: /* @__PURE__ */ jsx(
      SmartImage,
      {
        src: danielImage,
        alt: language === "de" ? "Porträt von Daniel Kofler" : "Portrait of Daniel Kofler",
        sizes: "(max-width: 768px) 90vw, 420px"
      }
    ) })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: styles$1["contact-page"], children: [
    /* @__PURE__ */ jsx(
      SeoTags,
      {
        route: "contact",
        title: content.seo.title,
        description: content.seo.description,
        children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaData) })
      }
    ),
    /* @__PURE__ */ jsxs(PageRenderer, { content, children: [
      contactHighlight,
      /* @__PURE__ */ jsx("section", { className: styles$1["contact-page__details"], children: /* @__PURE__ */ jsxs("div", { id: "directions", className: styles$1["contact-page__group"], children: [
        /* @__PURE__ */ jsx("h2", { className: styles$1["contact-page__heading"], children: content.directionsHeading }),
        /* @__PURE__ */ jsx("ol", { className: styles$1["contact-page__list"], children: content.directions.map((step, index) => /* @__PURE__ */ jsx("li", { children: step }, `${index}-${step}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$1["contact-page__maps-links"], children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `https://www.google.com/maps/search/?api=1&query=${DESTINATION.latitude},${DESTINATION.longitude}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: language === "de" ? "In Google Maps ansehen" : "View in Google Maps"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `https://www.google.com/maps/dir/?api=1&destination=${DESTINATION.latitude},${DESTINATION.longitude}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: language === "de" ? "Route planen" : "Plan route"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}
const styles = {
  "not-found-page": "_not-found-page_2usn2_1",
  "not-found-page__label": "_not-found-page__label_2usn2_8",
  "not-found-page__title": "_not-found-page__title_2usn2_16",
  "not-found-page__body": "_not-found-page__body_2usn2_22",
  "not-found-page__actions": "_not-found-page__actions_2usn2_26"
};
const notFoundCopy = {
  de: {
    title: "Seite nicht gefunden",
    body: "Vielleicht hilft dir ein Blick zurück zur Startseite.",
    cta: "Zur Startseite"
  },
  en: {
    title: "Page not found",
    body: "Maybe a look back at the homepage will help.",
    cta: "Back to homepage"
  }
};
function NotFoundPage() {
  const { language } = useLanguage();
  const copy = notFoundCopy[language];
  return /* @__PURE__ */ jsxs("div", { className: styles["not-found-page"], children: [
    /* @__PURE__ */ jsx(SeoTags, { route: "not-found" }),
    /* @__PURE__ */ jsx("p", { className: styles["not-found-page__label"], children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: styles["not-found-page__title"], children: copy.title }),
    /* @__PURE__ */ jsx("p", { className: styles["not-found-page__body"], children: copy.body }),
    /* @__PURE__ */ jsx("div", { className: styles["not-found-page__actions"], children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: copy.cta }) }) })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { element: /* @__PURE__ */ jsx(HomeLayout, {}), children: /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }) }),
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "the-farm", element: /* @__PURE__ */ jsx(TheFarmPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "products", element: /* @__PURE__ */ jsx(ProductsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "rentals", element: /* @__PURE__ */ jsx(RentalsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contact", element: /* @__PURE__ */ jsx(ContactPage, {}) })
    ] }),
    /* @__PURE__ */ jsx(Route, { path: "en", element: /* @__PURE__ */ jsx(HomeLayout, {}), children: /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }) }),
    /* @__PURE__ */ jsxs(Route, { path: "en", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "the-farm", element: /* @__PURE__ */ jsx(TheFarmPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "products", element: /* @__PURE__ */ jsx(ProductsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "rentals", element: /* @__PURE__ */ jsx(RentalsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contact", element: /* @__PURE__ */ jsx(ContactPage, {}) })
    ] }),
    /* @__PURE__ */ jsx(Route, { path: "404", element: /* @__PURE__ */ jsx(NotFoundPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
  ] });
}
function AppProviders({ children, initialLanguage }) {
  return /* @__PURE__ */ jsx(EntranceAnimationProvider, { children: /* @__PURE__ */ jsx(LanguageProvider, { initialLanguage, children }) });
}
async function render(url) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
  const helmetContext = {};
  const initialLanguage = url === "/en/" || url.startsWith("/en/") ? "en" : "de";
  const app = /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(AppProviders, { initialLanguage, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, basename: "/", children: /* @__PURE__ */ jsx(App, {}) }) }) });
  const appHtml = renderToString(app);
  const headTags = [
    ((_b2 = (_a2 = helmetContext.helmet) == null ? void 0 : _a2.title) == null ? void 0 : _b2.toString()) ?? "",
    ((_d = (_c = helmetContext.helmet) == null ? void 0 : _c.meta) == null ? void 0 : _d.toString()) ?? "",
    ((_f = (_e = helmetContext.helmet) == null ? void 0 : _e.link) == null ? void 0 : _f.toString()) ?? "",
    ((_h = (_g = helmetContext.helmet) == null ? void 0 : _g.script) == null ? void 0 : _h.toString()) ?? ""
  ].filter(Boolean).join("\n");
  const htmlAttrs = ((_j = (_i = helmetContext.helmet) == null ? void 0 : _i.htmlAttributes) == null ? void 0 : _j.toString()) ?? "";
  return { appHtml, headTags, htmlAttrs };
}
export {
  render
};
