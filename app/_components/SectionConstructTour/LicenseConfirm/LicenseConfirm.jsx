import { useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

import useCursorRef from '@/hooks/useCursorRef';
import useCursorFollowerRef from '@/hooks/useCursorFollowerRef';

import s from './LicenseConfirm.module.scss';

const LicenseConfirm = () => {
  const cursor = useCursorRef();
  const cursorFollower = useCursorFollowerRef();

  const dotAnimation = useRef();

  const onMouseEnter = () => {
    dotAnimation.current = gsap
      .timeline()
      .to([cursorFollower.current], {
        scale: 0,
        duration: 0.3,
        ease: 'power1.in',
      })
      .fromTo(
        [cursor.current],
        {
          scale: 1.0,
        },
        {
          scale: 2.0,
          duration: 0.3,
          opacity: 0.6,
          ease: 'power1.in',
        },
        '<'
      )
      .to([cursor.current], {
        scale: 1.8,
        duration: 0.2,
        ease: 'power1.in',
      })
      .to([cursor.current], {
        scale: 3.0,
        duration: 0.3,
        delay: 0.1,
        ease: 'power1.in',
      });
  };

  const onMouseLeave = () => {
    dotAnimation.current.kill();

    gsap.to([cursorFollower.current, cursor.current], {
      scale: 1,
      duration: 0.3,
      opacity: 1,
      ease: 'power1.in',
    });
  };

  return (
    <fieldset className={s.licenseConfirm}>
      <legend className="visually-hidden">
        Принятие условий Лицензионного договора.
      </legend>
      <label
        className={s.checkbox}
        htmlFor="yep"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <input
          className={cn('visually-hidden', s.checkboxInput)}
          type="checkbox"
          id="yep"
          name="yep"
          required
        />
        <span className={s.checkboxMark} />
        <span className={s.checkboxLabel}>
          Нажимая кнопку, я принимаю условия&nbsp;
          <a className={s.checkboxLink} href="/license">
            Лицензионного договора
          </a>
        </span>
      </label>
    </fieldset>
  );
};

export default LicenseConfirm;
