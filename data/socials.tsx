import { FacebookIcon, InstagramIcon, VkIcon } from '@/components/Footer/Icons';

type Social = {
  name: 'instagram' | 'facebook' | 'vkontakte';
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    name: 'instagram',
    icon: <InstagramIcon />,
  },
  {
    name: 'facebook',
    icon: <FacebookIcon />,
  },
  {
    name: 'vkontakte',
    icon: <VkIcon />,
  },
];

export default socials;
