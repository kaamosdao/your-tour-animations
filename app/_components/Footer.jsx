import cn from 'classnames';

import s from './Footer.module.scss';

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <p className={s.text}>Наши социальные сети</p>
      <ul className={s.socials}>
        <li className={cn(s.socialsItem, s.socialsInstagram)}>
          <a className={s.socialsLink} href="https://instagram.com/">
            instagram
          </a>
        </li>
        <li className={cn(s.socialsItem, s.socialsFacebook)}>
          <a className={s.socialsLink} href="https://facebook.com/">
            facebook
          </a>
        </li>
        <li className={cn(s.socialsItem, s.socialsVkontakte)}>
          <a className={s.socialsLink} href="https://vk.com/">
            vkontakte
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
