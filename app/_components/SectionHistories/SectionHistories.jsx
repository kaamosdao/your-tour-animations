'use client';

import { useState } from 'react';

import HistoryCard from './HistoryCard/index';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import { histories } from '@/data';

import s from './SectionHistories.module.scss';
import HoverCursor from '../CustomCursor/HoverCursor';

const SectionHistories = () => {
  const [historyNum, setHistoryNum] = useState(0);

  const onRightClick = () => {
    setHistoryNum((prev) => {
      if (prev + 1 > histories.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const onLeftClick = () => {
    setHistoryNum((prev) => {
      if (prev - 1 < 0) {
        setHistoryNum(histories.length - 1);
        return histories.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <section className={s.histories}>
      <h2 className={s.title}>Истории путешествий</h2>
      <p className={s.description}>
        Идейные соображения высшего порядка, а&nbsp;
        <br />
        также рамки и место обучения кадров
      </p>
      <div className={s.list}>
        <HistoryCard
          title={histories[historyNum].title}
          name={histories[historyNum].name}
          text={histories[historyNum].text}
          list={histories[historyNum].list}
          socials={histories[historyNum].socials}
          key={histories[historyNum].name}
        />
        <div className={s.controls}>
          <HoverCursor cursorType="pulse">
            <button onClick={onLeftClick} type="button" className={s.button}>
              <Left type="button" className={s.arrow} />
            </button>
          </HoverCursor>
          <HoverCursor cursorType="pulse">
            <button onClick={onRightClick} type="button" className={s.button}>
              <Right type="button" className={s.arrow} />
            </button>
          </HoverCursor>
        </div>
      </div>
    </section>
  );
};

export default SectionHistories;
