'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import CursorRefContext from '@/context/CursorRefContext';
import CursorFollowerRefContext from '@/context/CursorFollowerRefContext';

import store from '@/store';

const Providers = ({ children }) => {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  return (
    <Provider store={store}>
      <CursorRefContext.Provider value={cursorRef}>
        <CursorFollowerRefContext.Provider value={cursorFollowerRef}>
          {children}
        </CursorFollowerRefContext.Provider>
      </CursorRefContext.Provider>
    </Provider>
  );
};

export default Providers;
