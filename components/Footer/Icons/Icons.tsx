import { FC } from 'react';

import Vk from '@/public/img/svg-icons/vk.svg';
import Facebook from '@/public/img/svg-icons/facebook.svg';
import Instagram from '@/public/img/svg-icons/instagram.svg';

import s from './Icons.module.scss';

const InstagramIcon: FC = () => <Instagram className={s.instagramIcon} />;
export const FacebookIcon: FC = () => <Facebook className={s.facebookIcon} />;
export const VkIcon: FC = () => <Vk className={s.vkIcon} />;

export default InstagramIcon;
