/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

class HorizontalLoop {
  constructor(items, config = {}) {
    this.items = items;
    this.config = config;

    this.tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () =>
        this.tl.totalTime(this.tl.rawTime() + this.tl.duration() * 100),
    });

    this.startX = items[0].offsetLeft;
    this.widths = [];
    this.xPercents = [];
    this.pixelsPerSecond = (config.speed || 1) * 100;

    this.init();
  }

  populateWidths() {
    this.items.forEach((el, i) => {
      this.widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
      this.xPercents[i] =
        (parseFloat(gsap.getProperty(el, 'x', 'px')) / this.widths[i]) * 100 +
        gsap.getProperty(el, 'xPercent');
    });

    this.totalWidth = this.getTotalWidth();
  }

  getTotalWidth() {
    const { length } = this.items;

    return (
      this.items[length - 1].offsetLeft +
      (this.xPercents[length - 1] / 100) * this.widths[length - 1] -
      this.startX +
      this.items[length - 1].offsetWidth *
        gsap.getProperty(this.items[length - 1], 'scaleX') +
      (parseFloat(this.config.paddingRight) || 0)
    );
  }

  init() {
    this.populateWidths();

    gsap.set(this.items, {
      xPercent: (value) => this.xPercents[value],
      x: 0,
    });

    this.populateTimeline();

    this.tl.progress(1, true).progress(0, true);

    if (this.config.reversed) {
      this.tl.vars.onReverseComplete();
      this.tl.reverse();
    }

    this.addDraggable();
  }

  populateTimeline() {
    let curX;
    let distanceToStart;
    let distanceToLoop;
    let item;
    let i;

    const { length } = this.items;

    for (i = 0; i < length; i += 1) {
      item = this.items[i];
      curX = (this.xPercents[i] / 100) * this.widths[i];
      distanceToStart = item.offsetLeft + curX - this.startX;

      distanceToLoop =
        distanceToStart + this.widths[i] * gsap.getProperty(item, 'scaleX');

      this.tl
        .to(
          item,
          {
            xPercent: ((curX - distanceToLoop) / this.widths[i]) * 100,
            duration: distanceToLoop / this.pixelsPerSecond,
          },
          0
        )
        .fromTo(
          item,
          {
            xPercent:
              ((curX - distanceToLoop + this.totalWidth) / this.widths[i]) *
              100,
          },
          {
            xPercent: this.xPercents[i],
            duration:
              (curX - distanceToLoop + this.totalWidth - curX) /
              this.pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / this.pixelsPerSecond
        );
    }
  }

  addDraggable() {
    const proxy = document.createElement('div');

    const timeline = this.tl;
    const wrap = gsap.utils.wrap(0, 1);

    let ratio;
    let startProgress;

    this.draggable = Draggable.create(proxy, {
      trigger: this.items[0].parentNode,
      type: 'x',
      onPress: () => {
        startProgress = timeline.progress();
        timeline.progress(0);

        this.populateWidths();
        this.totalWidth = this.getTotalWidth();
        ratio = 1 / this.totalWidth;

        timeline.progress(startProgress);
      },
      onDrag() {
        timeline.progress(wrap(startProgress + (this.startX - this.x) * ratio));
      },
      inertia: false,
      onThrowComplete: () => gsap.set(proxy, { x: 0 }),
    });
  }

  reset() {
    this.tl.kill();
    this.draggable[0].kill();
  }
}

export default HorizontalLoop;
