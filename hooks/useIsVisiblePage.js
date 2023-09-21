import { useContext } from 'react';

import VisiblePageContext from './context/VisiblePageContext.js';

const useIsVisiblePage = () => useContext(VisiblePageContext);

export default useIsVisiblePage;
