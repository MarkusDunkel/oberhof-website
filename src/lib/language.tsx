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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'de';
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === 'en' ? 'en' : 'de';
    } catch {
      return 'de';
    }
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
