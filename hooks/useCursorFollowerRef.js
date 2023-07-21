import { useContext } from 'react';

import CursorFollowerRefContext from '../context/CursorFollowerRefContext.jsx';

const useCursorFollowerRef = () => useContext(CursorFollowerRefContext);

export default useCursorFollowerRef;
