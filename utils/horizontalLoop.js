/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

const horizontalLoop = (items, config = {}) => {
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
  const pixelsPerSecond = (config.speed || 1) * 100;

  const snap =
    config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);

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
    xPercent: (value) => xPercents[value],
  });

  // const refresh = () => { 
  //   tl.progress(0, true);

  //   populateWidths();
  // };


  // window.addEventListener('resize', () => refresh()); ///

  gsap.set(items, { x: 0 });

  totalWidth = getTotalWidth();

  for (i = 0; i < length; i += 1) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;

    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

    times[i] = distanceToStart / pixelsPerSecond;

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
  }

  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  const proxy = document.createElement('div');

  const wrap = gsap.utils.wrap(0, 1);

  let ratio;
  let startProgress;

  Draggable.create(proxy, {
    trigger: items[0].parentNode,
    type: 'x',
    onPress() {
      startProgress = tl.progress();
      tl.progress(0);

      populateWidths();
      totalWidth = getTotalWidth();
      ratio = 1 / totalWidth;

      tl.progress(startProgress);
    },
    onDrag() {
      tl.progress(wrap(startProgress + (this.startX - this.x) * ratio));
    },
    inertia: false,
    onThrowComplete: () => gsap.set(proxy, { x: 0 }),
  });

  return tl;
};


// const horizontalLoop = (items, config = {}) => {
//   const { repeat, paused, speed, reversed, paddingRight } = config;

//   const tl = gsap.timeline({
//     repeat,
//     paused,
//     defaults: { ease: 'none' },
//     onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
//   });

//   const { length } = items;

//   const startX = items[0].offsetLeft;
//   const times = [];
//   const widths = [];
//   const spaceBefore = [];
//   const xPercents = [];

//   const pixelsPerSecond = (speed || 1) * 100;

//   const container = items[0].parentNode;
//   console.log(container)
//   let totalWidth;

//   const getTotalWidth = () =>
//     items[length - 1].offsetLeft +
//     (xPercents[length - 1] / 100) * widths[length - 1] -
//     startX +
//     spaceBefore[0] +
//     items[length - 1].offsetWidth *
//       gsap.getProperty(items[length - 1], 'scaleX') +
//     (parseFloat(paddingRight) || 0);

//   const populateWidths = () => {
//     let b1 = container.getBoundingClientRect();
//     let b2;

//     items.forEach((el, i) => {
//       widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
//       xPercents[i] =
//         (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
//         gsap.getProperty(el, 'xPercent');
//       b2 = el.getBoundingClientRect();
//       spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
//       b1 = b2;
//     });

//     gsap.set(items, {
//       xPercent: (i) => xPercents[i],
//     });

//     totalWidth = getTotalWidth();
//   };

//   // const populateWidths = () => {
//   //   items.forEach((el, i) => {
//   //     widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
//   //     xPercents[i] =
//   //       (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
//   //       gsap.getProperty(el, 'xPercent');
//   //   });
//   // };

//   // gsap.set(items, {
//   //   xPercent: (i) => xPercents[i],
//   // });

//   // totalWidth = getTotalWidth();

//   const populateTimeline = () => {
//     let i;
//     let item;
//     let curX;
//     let distanceToStart;
//     let distanceToLoop;
//     tl.clear();

//     for (i = 0; i < length; i += 1) {
//       item = items[i];
//       curX = (xPercents[i] / 100) * widths[i];

//       distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];

//       distanceToLoop =
//         distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

//       times[i] = distanceToStart / pixelsPerSecond;

//       tl.to(
//         item,
//         {
//           xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
//           duration: distanceToLoop / pixelsPerSecond,
//         },
//         0
//       )
//         .fromTo(
//           item,
//           {
//             xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
//           },
//           {
//             xPercent: xPercents[i],
//             duration:
//               (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
//             immediateRender: false,
//           },
//           distanceToLoop / pixelsPerSecond
//         )
//         .add(`label${i}`, distanceToStart / pixelsPerSecond);
//     }
//   };

//   const refresh = (deep) => {
//     // const progress = tl.progress();

//     tl.progress(0, true);

//     populateWidths();

//     if (deep) {
//       populateTimeline();
//     }


//     // if (deep && tl.draggable) {
//     //   tl.time(times[curIndex], true);
//     // } else {
//     //   tl.progress(progress, true);
//     // }
//   };

//   gsap.set(items, { x: 0 });

//   populateWidths();
//   populateTimeline();

//   window.addEventListener('resize', () => refresh(true));

//   tl.times = times;

//   tl.progress(1, true).progress(0, true);

//   if (reversed) {
//     tl.vars.onReverseComplete();
//     tl.reverse();
//   }

//   const proxy = document.createElement('div');

//   const wrap = gsap.utils.wrap(0, 1);
//   let ratio;
//   let startProgress;

//   Draggable.create(proxy, {
//     trigger: items[0].parentNode,
//     type: 'x',
//     onPress() {
//       startProgress = tl.progress();
//       tl.progress(0);

//       populateWidths();
//       totalWidth = getTotalWidth();
//       ratio = 1 / totalWidth;

//       tl.progress(startProgress);
//     },
//     // onPressInit() {
//     //   gsap.killTweensOf(tl);

//     //   startProgress = tl.progress();

//     //   refresh();

//     //   ratio = 1 / totalWidth;

//     //   gsap.set(proxy, { x: startProgress / -ratio });
//     // },
//     onDrag() {
//       tl.progress(wrap(startProgress + (this.startX - this.x) * ratio));
//     },
//     overshootTolerance: 0,
//     inertia: false,
//   });

//   // tl.draggable = draggable;

//   return tl;
// };

export default horizontalLoop;
