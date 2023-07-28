import React from 'react';
import { gsap } from 'gsap';

class CursorAnimation {
  constructor(cursorRef, followerRef) {
    this.cursor = cursorRef.current;
    this.follower = followerRef.current;
    this.cursorCircle = this.follower.querySelector('#circle');
    this.cursorText = this.follower.querySelector('#text');
    this.pulseAnimation = React.createRef(null).current;
    this.dotAnimation = React.createRef(null).current;
  }

  pulse(toScale = 1.2, duration = 0.5, ease = 'power1.in') {
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

  stuck(stuckData, duration = 0.5) {
    const { width, height, borderRadius, padding } = stuckData;
    gsap.to(this.cursorCircle, {
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
  ) {
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
  ) {
    gsap
      .timeline()
      .to(this.follower, {
        mixBlendMode: 'normal',
        duration: 0.0,
      })
      .to(this.cursorText, {
        color,
        text,
        opacity: 1,
        duration,
        ease,
      })
      .to(
        this.cursorCircle,
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
  ) {
    if (this.pulseAnimation) {
      this.pulseAnimation.kill();
    }

    if (this.dotAnimation) {
      this.dotAnimation.kill();
    }

    gsap
      .timeline()
      .to(
        [this.cursorCircle, this.follower, this.cursor],
        {
          scale: 1,
          duration: scales.scaleDuration,
          ease: eases.scaleEase,
        },
        0
      )
      .to(
        this.cursorCircle,
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
      )
      .to(
        this.cursorText,
        {
          text: '',
          opacity: 0,
          duration: scales.textDuration,
          ease: eases.textEase,
        },
        0
      );
  }
}

export default CursorAnimation;
