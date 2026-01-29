import React, { createContext, useContext, useState, useCallback } from 'react';

type EntranceCtx = {
  homeAnimated: boolean;
  markHomeAnimated: () => void;
};

const Ctx = createContext<EntranceCtx | null>(null);

export function EntranceAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [homeAnimated, setHomeAnimated] = useState(false);

  const markHomeAnimated = useCallback(() => setHomeAnimated(true), []);

  return (
    <Ctx.Provider value={{ homeAnimated, markHomeAnimated }}>
      {children}
    </Ctx.Provider>
  );
}

export function useEntranceAnimation() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error(
      'useEntranceAnimation must be used within EntranceAnimationProvider',
    );
  }
  return ctx;
}
