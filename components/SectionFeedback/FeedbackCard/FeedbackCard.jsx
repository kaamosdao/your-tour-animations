/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';

import CustomImage from '@/components/CustomImage';

import s from './FeedbackCard.module.scss';

const FeedbackCard = ({
  name,
  image,
  imageRetina,
  tour,
  feedback,
  isModal,
}) => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio);
  }, []);

  return (
    <li className={isModal ? s.cardModal : s.card}>
      <div className={isModal ? s.textContainerModal : s.textContainer}>
        {feedback.map(({ paragraph }, i) => (
          <PrismicRichText
            key={i}
            field={paragraph}
            components={{
              paragraph: ({ children }) => <p className={s.text}>{children}</p>,
            }}
          />
        ))}
      </div>
      <div className={s.user}>
        <PrismicRichText
          field={name}
          components={{
            paragraph: ({ children }) => <p className={s.name}>{children}</p>,
          }}
        />
        <PrismicRichText
          field={tour}
          components={{
            paragraph: ({ children }) => <p className={s.tour}>{children}</p>,
          }}
        />
        <div className={s.avatarContainer}>
          <div className={s.avatarPicture}>
            <CustomImage
              devicePixelRatio={devicePixelRatio}
              image={image}
              imageRetina={imageRetina}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeedbackCard;
