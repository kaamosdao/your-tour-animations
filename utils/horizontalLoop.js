/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

const horizontalLoop = (items, config = {}) => {
  items = gsap.utils.toArray(items);

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: 'none' },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  });
  const { length } = items;
  const startX = items[0].offsetLeft;
  const times = [];
  const widths = [];
  const xPercents = [];
  let curIndex = 0;
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap =
    config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1); // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
  const populateWidths = () =>
    items.forEach((el, i) => {
      widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
          gsap.getProperty(el, 'xPercent')
      );
    });
  const getTotalWidth = () =>
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], 'scaleX') +
    (parseFloat(config.paddingRight) || 0);
  let totalWidth;
  let curX;
  let distanceToStart;
  let distanceToLoop;
  let item;
  let i;
  populateWidths();
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (value) => xPercents[value],
  });
  gsap.set(items, { x: 0 });
  totalWidth = getTotalWidth();
  for (i = 0; i < length; i += 1) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add(`label${i}`, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars = {}) {
    // Math.abs(index - curIndex) > length / 2 &&
    //   (index += index > curIndex ? -length : length); // always go in the shortest direction
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.updateIndex = () => {
    curIndex = Math.round(tl.progress() * (items.length - 1));
  };
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  if (config.draggable && typeof Draggable === 'function') {
    const proxy = document.createElement('div');
    const wrap = gsap.utils.wrap(0, 1);
    let ratio;
    let startProgress;
    let draggable;
    let dragSnap;
    let roundFactor;
    const align = () =>
      tl.progress(
        wrap(startProgress + (draggable.startX - draggable.x) * ratio)
      );
    const syncIndex = () => tl.updateIndex();

    draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode,
      type: 'x',
      onPress() {
        startProgress = tl.progress();
        tl.progress(0);
        populateWidths();
        totalWidth = getTotalWidth();
        ratio = 1 / totalWidth;
        dragSnap = totalWidth / items.length;
        roundFactor = 10 ** (`${dragSnap}`.split('.')[1] || '').length;
        tl.progress(startProgress);
      },
      onDrag: align,
      onThrowUpdate: align,
      inertia: false,
      snap: (value) => {
        const n =
          Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
        return (n - (n % 1)) / roundFactor;
      },
      onRelease: syncIndex,
      onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex(),
    })[0];
  }

  return tl;
};

export default horizontalLoop;
