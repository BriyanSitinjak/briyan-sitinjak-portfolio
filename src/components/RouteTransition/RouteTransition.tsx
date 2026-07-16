'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

interface RouteTransitionProps {
  children: ReactNode;
}

const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

type CurtainMode = 'intro' | 'transition';

let lastPathname: string | null = null;

const isMobileViewport = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;
};

const scrollToTopInstant = () => {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousBehavior;
};

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [curtainKey, setCurtainKey] = useState(0);
  const [mode, setMode] = useState<CurtainMode | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');
    const syncMobile = () => setIsMobile(mediaQuery.matches);

    syncMobile();
    mediaQuery.addEventListener('change', syncMobile);
    return () => mediaQuery.removeEventListener('change', syncMobile);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setMode(null);
      lastPathname = pathname;
      return;
    }

    const mobile = isMobileViewport();
    setIsMobile(mobile);

    const introMs = mobile ? 650 : 850;
    const transitionMs = mobile ? 850 : 1050;

    let timer: number | undefined;

    const start = (nextMode: CurtainMode, durationMs: number) => {
      scrollToTopInstant();
      setMode(nextMode);
      setCurtainKey((key) => key + 1);
      timer = window.setTimeout(() => setMode(null), durationMs);
    };

    if (lastPathname === null) {
      lastPathname = pathname;
      start('intro', introMs);
    } else if (lastPathname !== pathname) {
      lastPathname = pathname;
      start('transition', transitionMs);
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
      // Prevent a stuck overlay after Strict Mode remount / fast navigation
      setMode(null);
    };
  }, [pathname, shouldReduceMotion]);

  const introDuration = isMobile ? 0.55 : 0.75;
  const transitionDuration = isMobile ? 0.8 : 1;
  const contentDelay = shouldReduceMotion
    ? 0
    : mode === 'transition'
      ? isMobile
        ? 0.4
        : 0.55
      : mode === 'intro'
        ? isMobile
          ? 0.25
          : 0.35
        : 0;

  return (
    <>
      <motion.div
        key={pathname}
        className="min-w-0 w-full flex-1"
        initial={shouldReduceMotion ? false : { opacity: 0, y: isMobile ? 10 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 0.35 : 0.45,
          delay: contentDelay,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        {children}
      </motion.div>

      {mode && !shouldReduceMotion ? (
        <div
          key={curtainKey}
          className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
          style={{ height: '100dvh', width: '100%' }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 bg-accent"
            initial={mode === 'intro' ? { y: '0%' } : { y: '100%' }}
            animate={
              mode === 'intro'
                ? { y: '-105%' }
                : { y: ['100%', '0%', '0%', '-105%'] }
            }
            transition={
              mode === 'intro'
                ? { duration: introDuration, ease: CURTAIN_EASE, delay: 0.04 }
                : {
                    duration: transitionDuration,
                    times: [0, 0.38, 0.55, 1],
                    ease: CURTAIN_EASE,
                  }
            }
          />
          <motion.div
            className="absolute inset-0 bg-primary"
            initial={mode === 'intro' ? { y: '0%' } : { y: '100%' }}
            animate={
              mode === 'intro'
                ? { y: '-105%' }
                : { y: ['100%', '0%', '0%', '-105%'] }
            }
            transition={
              mode === 'intro'
                ? { duration: introDuration, ease: CURTAIN_EASE, delay: 0.12 }
                : {
                    duration: transitionDuration,
                    delay: 0.08,
                    times: [0, 0.38, 0.55, 1],
                    ease: CURTAIN_EASE,
                  }
            }
          />
        </div>
      ) : null}
    </>
  );
};

export default RouteTransition;
