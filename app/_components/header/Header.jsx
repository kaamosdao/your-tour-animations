import Navigation from './Navigation';
import Tagline from './Tagline';

import s from './Header.module.scss';

const Header = () => (
  <header className={s.header}>
    <Navigation />
    <Tagline />
  </header>
);

export default Header;
