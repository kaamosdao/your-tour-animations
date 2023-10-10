'use client';

import { useState } from 'react';
import ReactTransitionGroup from '@/utils/ReactTransitionGroup';

import { tours } from '@/utils/types';

import TourNavigation from './TourNavigation/index';
import TourLinks from './TourLinks/index';

import s from './SectionChooseTour.module.scss';

const SectionChooseTour = () => {
  const [activeNav, setActiveNav] = useState(tours.popular);

  return (
    <section className={s.chooseTour}>
      <h2 className={s.title}>Выбери свой тур</h2>
      <TourNavigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <ReactTransitionGroup
        transitionKey={activeNav}
        timeout={0}
        // onEnter={(node) => console.log('onEnter', node)}
        // onExit={(node) => console.log('onExit', node)}
        // onEntered={(node) => console.log('onEntered', node)}
        // onExited={(node) => console.log('onExited', node)}
      >
        <TourLinks type={activeNav} />
      </ReactTransitionGroup>
    </section>
  );
};

export default SectionChooseTour;
