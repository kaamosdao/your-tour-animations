import { useEffect, useState } from 'react';

export default function useWiderThanTabletLg() {
  const [widerThanTabletLg, setWiderThanTabletLg] = useState<boolean>(true);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 800 && !widerThanTabletLg) {
        setWiderThanTabletLg(true);
      } else if (window.innerWidth < 800 && widerThanTabletLg) {
        setWiderThanTabletLg(false);
      }
    };

    if (typeof window !== 'undefined') {
      resize();

      window.addEventListener('resize', resize);
    }

    return () => window.removeEventListener('resize', resize);
  }, [widerThanTabletLg]);

  return widerThanTabletLg;
}
