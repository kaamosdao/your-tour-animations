'use client';

import StoreProvider from './StoreProvider';
import LenisProvider from './LenisProvider';

const Providers = ({ children }) => (
  <StoreProvider>
    <LenisProvider>{children}</LenisProvider>
  </StoreProvider>
);

export default Providers;
