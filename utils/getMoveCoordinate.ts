import { gsap } from 'gsap';

export const getMoveX = (
  cursor: HTMLElement,
  duration: number,
  ease = 'power3'
) => gsap.quickTo(cursor, 'x', { duration, ease });

export const getMoveY = (
  cursor: HTMLElement,
  duration: number,
  ease = 'power3'
) => gsap.quickTo(cursor, 'y', { duration, ease });
