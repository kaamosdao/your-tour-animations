'use client';

/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */

import { createRef, useEffect, useMemo, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';

import HorizontalLoop from '@/utils/HorizontalLoop';
import getDeviceSize from '@/utils/getDeviceSize';
import { carouselType, directionType } from '@/utils/types';
import getPictureShift from '@/utils/getPictureShift';

import ItemPicture from './Picture';

import s from './SectionPhotos.module.scss';

const components = {
  heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
  paragraph: ({ children }) => <p className={s.description}>{children}</p>,
};

const SectionPhotos = ({ slice }) => {
  const carouselUIDs = useMemo(
    () => slice.items.map(({ photos }) => photos.uid),
    [slice]
  );

  const [deviceSize, setDeviceSize] = useState(null);
  const [carousels, setCarousels] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, []);

  useEffect(() => {
    const client = createClient();
    const getData = async () => {
      const carouselsData = await client.getAllByUIDs(
        'photos_carousel',
        carouselUIDs
      );

      const dataWithRefs = carouselsData.map(({ data }) => ({
        ...data,
        loopRef: createRef(null),
        carouselRef: createRef(null),
      }));

      setCarousels(dataWithRefs);
    };

    getData();
  }, [carouselUIDs]);

  useEffect(() => {
    setDeviceSize(getDeviceSize(window.innerWidth));
  }, []);

  useEffect(() => {
    const resize = () => {
      const newSize = getDeviceSize(window.innerWidth);
      if (newSize !== deviceSize) {
        setDeviceSize(newSize);
      }
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [deviceSize]);

  useEffect(() => {
    carousels?.forEach(
      ({ carouselRef, loopRef, move_direction: direction }) => {
        const selector = gsap.utils.selector(carouselRef);
        const pictures = gsap.utils.toArray(selector('li'));

        const shift = getPictureShift(deviceSize);

        gsap.set(pictures, {
          x: (i) => i * pictures[0].clientWidth + (i + 1) * shift,
        });

        if (deviceSize) {
          loopRef.current = new HorizontalLoop(pictures, {
            paused: false,
            reversed: direction === directionType.right,
            repeat: -1,
            speed: 0.7,
          });
        }
      }
    );

    return () => {
      carousels?.forEach(({ loopRef }) => {
        loopRef.current?.reset();
      });
    };
  }, [carousels, deviceSize]);

  return (
    <section
      className={s.photos}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={components} />
      <PrismicRichText
        field={slice.primary.description}
        components={components}
      />
      <div className={s.list}>
        {carousels?.map(({ picture_type: type, photos, carouselRef }, i) => (
          <ul
            key={i}
            ref={carouselRef}
            className={
              type === carouselType.large ? s.largeCarousel : s.smallCarousel
            }
          >
            {photos.map((data, index) => (
              <ItemPicture
                key={index}
                image={data}
                deviceSize={deviceSize}
                type={type}
              />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default SectionPhotos;
