import { useRef } from 'react';

export default function useArrayRef() {
  const refs = useRef([]);

  return [
    refs,
    (el) => el && !refs.current.includes(el) && refs.current.push(el),
  ];
}
