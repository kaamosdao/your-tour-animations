'use client';

/* eslint-disable react/no-array-index-key */

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

import s from './PageTemplate.module.scss';

const PageTemplate = ({ h1, h2, p }) => {
  const tagline = useRef(null);
  const q = gsap.utils.selector(tagline);

  useEffect(() => {
    const title = q('h2[class*="title"]');
    const description = q('p[class*="description"]');

    gsap.timeline().fromTo(
      [title, description],
      {
        x: -1000,
      },
      {
        x: 0,
        ease: 'back.out(1.0)',
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
      }
    );
  }, [q]);

  return (
    <main>
      <h1 className="visually-hidden">{h1}</h1>
      <section className={s.sectionDescription}>
        <div ref={tagline} className={s.tagline}>
          <h2 className={s.title}>{h2}</h2>
          {p.map((description, i) => (
            <p key={i} className={s.description}>
              {description}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

PageTemplate.propTypes = {
  h1: PropTypes.element.isRequired,
  h2: PropTypes.string.isRequired,
  p: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PageTemplate;
