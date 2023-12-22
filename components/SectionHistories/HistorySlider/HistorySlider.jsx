'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useSwipeable } from 'react-swipeable';
import { clamp } from 'three/src/math/MathUtils';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

import Scene from '@/utils/Scene';
import getLoopedNumber from '@/utils/getLoopedNumber';
import { sliderEvent } from '@/utils/types';

import { CursorType } from '@/types';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import CardList from './CardList';
import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import s from './HistorySlider.module.scss';

const components = {
  heading3: ({ children }) => (
    <h3 className={s.historyCardTitle}>{children}</h3>
  ),
  paragraph: ({ children }) => <p className={s.historyCardText}>{children}</p>,
};

const HistorySlider = ({ histories, addRef }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [slide, setSlide] = useState({
    number: 0,
    directionSign: 1,
    event: sliderEvent.click,
    velocity: 0,
  });

  const canvas = useRef(null);
  const canvasHolder = useRef(null);
  const scene = useRef(null);

  const handlers = useSwipeable({
    onSwipeStart: ({ dir }) => {
      const directionSign = dir === 'Right' ? -1 : 1;

      scene.current.onSwipeStart(directionSign, slide.number);
    },

    onSwiping: ({ absX }) => {
      scene.current.onSwiping(absX);
    },

    onSwiped: ({ dir, absX, velocity }) => {
      const normalizedCoeff = 2.35 / scene.current.width;
      const distance = clamp(absX * normalizedCoeff, 0, 1);
      const directionSign = dir === 'Right' ? -1 : 1;

      if (distance > 0.5) {
        setSlide({
          number: getLoopedNumber(
            slide.number + directionSign,
            histories.length
          ),
          directionSign,
          event: sliderEvent.swipe,
          velocity,
        });
      } else {
        scene.current.onSwiped();
      }
    },
    trackMouse: !playing,
  });

  useEffect(() => {
    const { number, directionSign, event, velocity } = slide;

    if (event === sliderEvent.click) {
      scene.current?.moveSlide(number, directionSign);
    } else {
      scene.current.swipeSlide(slide.number, velocity);
    }
  }, [slide]);

  useEffect(() => {
    scene.current?.scale(hovered ? 1.2 : 1.0);
  }, [hovered]);

  useEffect(() => {
    const deviceRatio = window.devicePixelRatio;

    const images = histories.map(({ data }) => {
      if (deviceRatio === 1) {
        return data.image;
      }
      return data.image_retina;
    });

    scene.current = new Scene(
      canvas.current,
      canvasHolder.current,
      setPlaying,
      images
    );

    window.addEventListener('resize', scene.current.resize);

    return () => {
      window.removeEventListener('resize', scene.current.resize);
      scene.current.dismiss();
    };
  }, [histories]);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onRightClick = () => {
    setSlide({
      number: getLoopedNumber(slide.number + 1, histories.length),
      directionSign: 1,
      event: sliderEvent.click,
    });
  };

  const onLeftClick = () => {
    setSlide({
      number: getLoopedNumber(slide.number - 1, histories.length),
      directionSign: -1,
      event: sliderEvent.click,
    });
  };

  return (
    <>
      <div
        ref={(el) => {
          canvasHolder.current = el;
          addRef(el);
        }}
        className={s.item}
      >
        <HoverCursor
          type={CursorType.Text}
          data="Swipe"
          fnsOnEnter={[() => setHovered(true)]}
          fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
        >
          <div {...handlers}>
            <canvas
              ref={canvas}
              className={s.canvas}
              href="/"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
        </HoverCursor>
        <PrismicRichText
          field={histories[slide.number].data.title}
          components={components}
        />
        <PrismicRichText
          field={histories[slide.number].data.description}
          components={components}
        />
        {histories[slide.number].data.advantages[0].text && (
          <CardList items={histories[slide.number].data.advantages} />
        )}
        <footer className={s.historyCardFooter}>
          <div className={cn(s.historyCardButton)}>
            <ButtonMore isHovered={hovered} isClicked={clicked} />
          </div>
        </footer>
        <div className={s.socials}>
          {histories[slide.number].data.socials.map(({ text, link }) => (
            <HoverCursor key={text} type={CursorType.Stuck}>
              <PrismicNextLink field={link} className={s.socialLink}>
                {text}
              </PrismicNextLink>
            </HoverCursor>
          ))}
        </div>
      </div>
      <div ref={addRef} className={s.controls}>
        <HoverCursor type={CursorType.Pulse}>
          <button
            onClick={onLeftClick}
            type="button"
            className={s.button}
            disabled={playing}
          >
            <Left type="button" className={s.arrow} />
          </button>
        </HoverCursor>
        <HoverCursor type={CursorType.Pulse}>
          <button
            onClick={onRightClick}
            type="button"
            className={s.button}
            disabled={playing}
          >
            <Right type="button" className={s.arrow} />
          </button>
        </HoverCursor>
      </div>
    </>
  );
};

export default HistorySlider;
