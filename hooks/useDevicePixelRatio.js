import { useEffect, useState } from 'react';

export default function useDevicePixelRatio() {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio);
  }, []);

  return devicePixelRatio;
}
