import { useContext } from 'react';

import CursorRefContext from '../context/CursorRefContext.jsx';

const useCursorRef = () => useContext(CursorRefContext);

export default useCursorRef;
