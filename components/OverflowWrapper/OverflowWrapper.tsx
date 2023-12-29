import { FC, PropsWithChildren } from 'react';

import s from './OverflowWrapper.module.scss';

const OverflowWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={s.overflow}>{children}</div>
);

export default OverflowWrapper;
