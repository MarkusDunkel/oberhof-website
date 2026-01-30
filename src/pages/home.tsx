import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { homeContent } from '@/content/pages/home';
import styles from './home.module.scss';
import { useLanguage } from '@/lib/language';
import logoMark from '@/assets/images/logo-trans.png';
import { SmartImage } from '@/components/smart-image';
import { cn } from '@/lib/utils';
import { useEntranceAnimation } from '@/lib/entrance-animation';
import { SeoTags } from '@/components/seo-tags';

type Phase = 'prepare' | 'idle' | 'run';

// Avoid SSR warning: layoutEffect on client, effect on server
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  const { homeAnimated, markHomeAnimated } = useEntranceAnimation();

  // Start hidden to prevent first-paint flash
  const [phase, setPhase] = useState<Phase>('prepare');

  // Keep a stable reference to the callback (so we can use [] deps)
  const markRef = useRef(markHomeAnimated);
  useEffect(() => {
    markRef.current = markHomeAnimated;
  }, [markHomeAnimated]);

  useIsomorphicLayoutEffect(() => {
    // Decide only once on mount
    if (homeAnimated) {
      setPhase('idle'); // already animated this app run
      return;
    }

    // first time: ensure hidden before paint
    setPhase('prepare');

    const raf = requestAnimationFrame(() => {
      setPhase('run'); // start animation
      markRef.current(); // now mark as done (_attach AFTER starting_)
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={styles['home-page']}>
      <SeoTags
        route="home"
        title={content.seo.title}
        description={content.seo.description}
      />

      <div
        className={cn(
          styles['home-page__content'],
          phase === 'prepare' && styles['home-page__content--blend-prepare'],
          phase === 'run' && styles['home-page__content--blend-in'],
        )}
      >
        <h1 className={styles['home-page__title']}>{content.heroTitle}</h1>
        <h3 className={styles['home-page__subtitle']}>
          {content.heroSubtitle}
        </h3>

        <SmartImage
          src={logoMark}
          alt="Oberhof Logo"
          className={styles['home-page__logo']}
          loading="eager"
          sizes="(max-width: 768px) 60vw, 240px"
        />

        <p className={styles['home-page__sub-subtitle']}>
          {content.heroSubSubtitle}
        </p>
      </div>
    </section>
  );
}
