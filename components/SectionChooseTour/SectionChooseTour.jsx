'use client';

import { useEffect, useState } from 'react';
import { isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';

import TourNavigation from './TourNavigation/index';
import TourLinks from './TourLinks/index';
import { ReactSwitchTransition } from '../TransitionGroup';

import s from './SectionChooseTour.module.scss';

const SectionChooseTour = ({ slice }) => {
  const [activeNav, setActiveNav] = useState(null);
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const client = createClient();
    const getTours = async () => {
      const siteTours = await Promise.all(
        slice.items.map((item) => {
          if (isFilled.contentRelationship(item.tours) && item.tours.uid) {
            return client.getByUID('tours', item.tours.uid);
          }
          return null;
        })
      );
      setTours(siteTours);

      const { uid } = siteTours.filter(({ data }) => data.iscurrent)[0];
      setActiveNav(uid);
    };

    getTours();
  }, [slice.items]);

  return (
    <section
      className={s.chooseTour}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => <h2 className={s.title}>{children}</h2>,
        }}
      />
      <TourNavigation
        tours={tours}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <ReactSwitchTransition
        transitionKey={activeNav}
        timeout={{ exit: 800 }}
        mode="out-in"
      >
        <TourLinks
          cards={
            tours && tours.filter(({ uid }) => uid === activeNav)[0].data.cards
          }
        />
      </ReactSwitchTransition>
    </section>
  );
};

export default SectionChooseTour;
