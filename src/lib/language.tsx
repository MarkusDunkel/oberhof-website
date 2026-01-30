import React from 'react';

export type Language = 'de' | 'en';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = 'oberhof-language';

type LanguageProviderProps = {
  children: React.ReactNode;
  /**
   * Initial language for SSR / first render.
   * If not provided, defaults to 'de'.
   */
  initialLanguage?: Language;
};

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    // --- SSR ---
    if (typeof window === 'undefined') {
      return initialLanguage ?? 'de';
    }

    // --- Client ---
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') {
        return stored;
      }
    } catch {
      // ignore read failures
    }

    return initialLanguage ?? 'de';
  });

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      } catch {
        // ignore write failures
      }
    }
  }, []);

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
