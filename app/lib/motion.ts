'use client';

import { useReducedMotion, type TargetAndTransition, type Variants } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function useMotionPrefs() {
  const reduceMotion = useReducedMotion();
  const { dir } = useLanguage();
  const slideIn = dir === 'rtl' ? -24 : 24;
  const slideOut = dir === 'rtl' ? 24 : -24;

  return { reduceMotion, dir, slideIn, slideOut };
}

export function useFadeUp(reduceMotion: boolean | null): Variants {
  return {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: easeOut },
    },
  };
}

export function useSlideStep(
  reduceMotion: boolean | null,
  slideIn: number,
  slideOut: number
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
} {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, x: 0 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: 0 },
    };
  }
  return {
    initial: { opacity: 0, x: slideIn },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: slideOut },
  };
}
