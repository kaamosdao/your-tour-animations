import { useRef, RefObject } from 'react';

export default function useArrayRef(): [
  RefObject<HTMLElement[]>,
  (el: HTMLElement | null) => void,
] {
  const refs = useRef<HTMLElement[]>([]);

  return [
    refs,
    (el: HTMLElement | null): void => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    },
  ];
}
