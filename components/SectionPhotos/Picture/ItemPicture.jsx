import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { PrismicNextImage } from '@prismicio/next';
import cn from 'classnames';

import { carouselType, sizeType } from '@/utils/types';

import s from './ItemPicture.module.scss';
import { useDevicePixelRatio } from '@/hooks';

const ItemPicture = ({ image, deviceSize, type }) => {
  const devicePixelRatio = useDevicePixelRatio();

  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
  };

  if (devicePixelRatio === 1) {
    if (deviceSize === sizeType.desktopLg) {
      return image.desktop.url ? (
        <li
          className={cn(
            s.item,
            type === carouselType.large ? s.largeItem : s.smallItem
          )}
        >
          <PrismicNextImage
            onLoad={refreshScrollTrigger}
            field={image.desktop}
          />
        </li>
      ) : null;
    }

    if (deviceSize === sizeType.tabletMd) {
      return image.tablet.url ? (
        <li
          className={cn(
            s.item,
            type === carouselType.large ? s.largeItem : s.smallItem
          )}
        >
          <PrismicNextImage
            onLoad={refreshScrollTrigger}
            field={image.tablet}
          />
        </li>
      ) : null;
    }

    return image.mobile.url ? (
      <li
        className={cn(
          s.item,
          type === carouselType.large ? s.largeItem : s.smallItem
        )}
      >
        <PrismicNextImage onLoad={refreshScrollTrigger} field={image.mobile} />
      </li>
    ) : null;
  }

  if (deviceSize === sizeType.desktopLg) {
    return image.desktop_retina.url ? (
      <li
        className={cn(
          s.item,
          type === carouselType.large ? s.largeItem : s.smallItem
        )}
      >
        <PrismicNextImage
          onLoad={refreshScrollTrigger}
          field={image.desktop_retina}
        />
      </li>
    ) : null;
  }

  if (deviceSize === sizeType.tabletMd) {
    return image.tablet_retina.url ? (
      <li
        className={cn(
          s.item,
          type === carouselType.large ? s.largeItem : s.smallItem
        )}
      >
        <PrismicNextImage
          onLoad={refreshScrollTrigger}
          field={image.tablet_retina}
        />
      </li>
    ) : null;
  }

  return image.mobile_retina.url ? (
    <li
      className={cn(
        s.item,
        type === carouselType.large ? s.largeItem : s.smallItem
      )}
    >
      <PrismicNextImage
        onLoad={refreshScrollTrigger}
        field={image.mobile_retina}
      />
    </li>
  ) : null;
};

export default ItemPicture;
