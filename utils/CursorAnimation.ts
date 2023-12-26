import React, { MutableRefObject } from 'react';
import { gsap } from 'gsap';

import { StuckData } from '@/types';

class CursorAnimation {
  private cursor: HTMLElement | null;

  private follower: HTMLElement | null;

  private pulseAnimation: GSAPTimeline | null;

  private dotAnimation: GSAPTimeline | null;

  constructor(
    cursorRef: MutableRefObject<HTMLElement | null>,
    followerRef: MutableRefObject<HTMLElement | null>
  ) {
    this.cursor = cursorRef.current;
    this.follower = followerRef.current;
    this.pulseAnimation = React.createRef<GSAPTimeline>().current;
    this.dotAnimation = React.createRef<GSAPTimeline>().current;
  }

  pulse(toScale = 1.2, duration = 0.5, ease = 'power1.in'): void {
    this.pulseAnimation = gsap.timeline().fromTo(
      [this.follower, this.cursor],
      {
        scale: 1.0,
      },
      {
        scale: toScale,
        repeat: -1,
        yoyo: true,
        duration,
        ease,
      }
    );
  }

  stuck(stuckData: StuckData, duration = 0.5): void {
    const { width, height, borderRadius, padding } = stuckData;
    gsap.to(this.follower!.querySelector('#circle'), {
      width,
      height,
      borderRadius,
      padding,
      duration,
    });
  }

  growDot(
    scales = { scaleStart: 2.0, scaleMid: 1.8, scaleEnd: 3.0 },
    durations = { durationStart: 0.3, durationMid: 0.2, durationEnd: 0.3 },
    ease = 'power1.in'
  ): void {
    this.dotAnimation = gsap
      .timeline()
      .to([this.follower], {
        scale: 0,
        duration: 0.3,
        ease,
      })
      .fromTo(
        [this.cursor],
        {
          scale: 1.0,
        },
        {
          scale: scales.scaleStart,
          duration: durations.durationStart,
          opacity: 0.6,
          ease,
        },
        '<'
      )
      .to([this.cursor], {
        scale: scales.scaleMid,
        duration: durations.durationMid,
        ease,
      })
      .to([this.cursor], {
        scale: scales.scaleEnd,
        duration: durations.durationEnd,
        delay: 0.1,
        ease,
      });
  }

  text(
    text = 'Подробнее',
    color = 'var(--third-text-color)',
    duration = 0.5,
    ease = 'sine.in'
  ): void {
    gsap
      .timeline()
      .to(this.follower, {
        mixBlendMode: 'normal',
        duration: 0.0,
      })
      .to(this.follower!.querySelector('#text'), {
        color,
        text,
        opacity: 1,
        duration,
        ease,
      })
      .to(
        this.follower!.querySelector('#circle'),
        {
          scale: 0,
          duration: 0.3,
        },
        0
      );
  }

  reset(
    scales = { scaleDuration: 0.3, cssDuration: 0.5, textDuration: 0.5 },
    eases = { scaleEase: 'power1.in', textEase: 'sine.in' }
  ): void {
    if (this.pulseAnimation) {
      this.pulseAnimation.kill();
    }

    if (this.dotAnimation) {
      this.dotAnimation.kill();
    }

    if (this.follower!.querySelector('#text')) {
      gsap.to(this.follower!.querySelector('#text'), {
        text: '',
        opacity: 0,
        duration: scales.textDuration,
        ease: eases.textEase,
      });
    }

    gsap
      .timeline()
      .to(
        [this.follower!.querySelector('#circle'), this.follower, this.cursor],
        {
          scale: 1,
          duration: scales.scaleDuration,
          ease: eases.scaleEase,
        },
        0
      )
      .fromTo(
        this.follower!.querySelector('#circle'),
        {
          width: '0px',
          height: '0px',
          borderRadius: '50%',
          padding: '0',
          duration: scales.cssDuration,
        },
        {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          padding: '0',
          duration: scales.cssDuration,
        },
        0
      )
      .to(
        this.follower,
        {
          mixBlendMode: 'difference',
          duration: 0.0,
        },
        0
      );
  }
}

export default CursorAnimation;
