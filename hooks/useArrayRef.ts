import { useRef, RefObject } from 'react';

export default function useArrayRef(): [
  RefObject<HTMLElement[]>,
  (el: HTMLElement) => number | false,
] {
  const refs = useRef<HTMLElement[]>([]);

  return [
    refs,
    (el: HTMLElement) =>
      el && !refs.current.includes(el) && refs.current.push(el),
  ];
}
