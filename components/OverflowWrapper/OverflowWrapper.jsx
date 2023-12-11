import s from './OverflowWrapper.module.scss';

const OverflowWrapper = ({ children }) => (
  <div className={s.overflow}>{children}</div>
);

export default OverflowWrapper;
