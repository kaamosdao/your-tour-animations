import { PrismicNextImage } from '@prismicio/next';
import cn from 'classnames';

import { carouselType, sizeType } from '@/utils/types';

import s from './ItemPicture.module.scss';

const ItemPicture = ({ image, devicePixelRatio, deviceSize, type }) => {
  if (devicePixelRatio === 1) {
    if (deviceSize === sizeType.desktopLg) {
      return image.desktop.url ? (
        <li
          className={cn(
            s.item,
            type === carouselType.large ? s.largeItem : s.smallItem
          )}
        >
          <PrismicNextImage field={image.desktop} />
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
          <PrismicNextImage field={image.tablet} />
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
        <PrismicNextImage field={image.mobile} />
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
        <PrismicNextImage field={image.desktop_retina} />
      </li>
    ) : null;
  }

  if (deviceSize === sizeType.tabletMd) {
    return image.table_retina.url ? (
      <li
        className={cn(
          s.item,
          type === carouselType.large ? s.largeItem : s.smallItem
        )}
      >
        <PrismicNextImage field={image.table_retina} />
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
      <PrismicNextImage field={image.mobile_retina} />
    </li>
  ) : null;
};

export default ItemPicture;