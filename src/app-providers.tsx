import type React from 'react';
import type { Language } from '@/lib/language';
import { LanguageProvider } from '@/lib/language';
import { EntranceAnimationProvider } from './lib/entrance-animation';

type Props = {
  children: React.ReactNode;
  initialLanguage?: Language;
};

export function AppProviders({ children, initialLanguage }: Props) {
  return (
    <EntranceAnimationProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        {children}
      </LanguageProvider>
    </EntranceAnimationProvider>
  );
}
