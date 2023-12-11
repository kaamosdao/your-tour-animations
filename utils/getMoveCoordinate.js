import { gsap } from 'gsap';

export const getMoveX = (cursor, duration, ease = 'power3') =>
  gsap.quickTo(cursor, 'x', { duration, ease });

export const getMoveY = (cursor, duration, ease = 'power3') =>
  gsap.quickTo(cursor, 'y', { duration, ease });
