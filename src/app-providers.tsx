import React from 'react';
import { LanguageProvider } from './lib/language';
import { EntranceAnimationProvider } from './lib/entrance-animation';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <EntranceAnimationProvider>{children}</EntranceAnimationProvider>
    </LanguageProvider>
  );
}
