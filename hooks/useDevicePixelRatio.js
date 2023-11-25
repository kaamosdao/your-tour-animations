import { useEffect, useState } from 'react';

export default function useDevicePixelRatio() {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    setDevicePixelRatio(
      typeof window !== 'undefined' ? window.devicePixelRatio : 1
    );
  }, []);

  return devicePixelRatio;
}
