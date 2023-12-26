import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IClientOnlyPortal {
  children: ReactNode;
  selector: string;
}

const ClientOnlyPortal = ({ children, selector }: IClientOnlyPortal) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
};

export default ClientOnlyPortal;
