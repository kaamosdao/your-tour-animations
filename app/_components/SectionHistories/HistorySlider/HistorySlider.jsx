'use client';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as THREE from 'three';

import { gsap } from 'gsap';

import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import Left from '@/public/img/svg-icons/arrow-left.svg';
import Right from '@/public/img/svg-icons/arrow-right.svg';

import { histories } from '@/data';

import vShader from './_shaders/vertex.glsl';
import fShader from './_shaders/fragment.glsl';

import s from './HistorySlider.module.scss';

const List = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map((name) => (
      <li className={s.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

const HistorySlider = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [historyNum, setHistoryNum] = useState({ current: 0, prev: 1 });
  const [moveSlide, setMoveSlide] = useState(false);

  const canvas = useRef(null);
  const canvasHolder = useRef(null);

  useEffect(() => {
    const { width, height } = canvasHolder.current.getBoundingClientRect();
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -0.5,
      0.5,
      0.5,
      -0.5,
      -1000,
      1000
    );

    const plane = new THREE.PlaneGeometry(1, 1, 1, 1);
    const ratioString = window.devicePixelRatio === 1 ? '' : '@2x';

    const uniforms = {
      progress: { type: 'f', value: moveSlide ? 0 : 1 },
      image: {
        type: 't',
        value: new THREE.TextureLoader().load(
          `img/histories/${
            histories[moveSlide ? historyNum.prev : historyNum.current].name
          }-desktop-lg${ratioString}.jpg`
        ),
      },
      imageNext: {
        type: 't',
        value: new THREE.TextureLoader().load(
          `img/histories/${
            histories[moveSlide ? historyNum.current : historyNum.prev].name
          }-desktop-lg${ratioString}.jpg`
        ),
      },
      uvRate: {
        type: 'v2',
        value: new THREE.Vector2(1, 1),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: vShader,
      fragmentShader: fShader,
      uniforms,
    });

    if (moveSlide) {
      gsap.to(material.uniforms.progress, {
        value: 1,
        duration: 2,
      });
    } else {
      gsap.to(material.uniforms.progress, {
        value: 0,
        duration: 2,
      });
    }

    const mesh = new THREE.Mesh(plane, material);

    const light = new THREE.AmbientLight(0xffffff, 100);

    scene.add(mesh, light, camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });
    renderer.setSize(width, height);

    function animate() {
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    const resize = () => {
      const { width: canvasWidth, height: canvasHeight } =
        canvasHolder.current.getBoundingClientRect();
      const viewportAspect = canvasWidth / canvasHeight;
      const imgAspect = 1170 / 567;

      camera.updateProjectionMatrix();

      renderer.setSize(canvasWidth, canvasHeight);

      if (imgAspect > viewportAspect) {
        material.uniforms.uvRate.value = [viewportAspect / imgAspect, 1];
      } else {
        material.uniforms.uvRate.value = [1, imgAspect / viewportAspect];
      }
    };

    resize();

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [historyNum, moveSlide]);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onRightClick = () => {
    setHistoryNum((prev) => {
      if (prev.current + 1 > histories.length - 1) {
        return { current: 0, prev: prev.current };
      }
      return { current: prev.current + 1, prev: prev.current };
    });
    setMoveSlide(!moveSlide);
  };

  const onLeftClick = () => {
    setHistoryNum((prev) => {
      if (prev.current - 1 < 0) {
        return { current: histories.length - 1, prev: prev.current };
      }
      return { current: prev.current - 1, prev: prev.current };
    });
    setMoveSlide(!moveSlide);
  };

  return (
    <>
      <div ref={canvasHolder} className={s.item}>
        <HoverCursor
          cursorType="text"
          data="Подробнее"
          fnsOnEnter={[() => setHovered(true)]}
          fnsOnLeave={[() => setHovered(false), () => setClicked(false)]}
        >
          <canvas
            ref={canvas}
            className={s.canvas}
            href="/"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          />
        </HoverCursor>
        <h3 className={s.historyCardTitle}>
          {histories[historyNum.current].title}
        </h3>
        <p className={s.historyCardText}>
          {histories[historyNum.current].text}
        </p>
        {histories[historyNum.current].list && (
          <List items={histories[historyNum.current].list} />
        )}
        <footer className={s.historyCardFooter}>
          <div className={cn(s.historyCardButton)}>
            <ButtonMore isHovered={hovered} isClicked={clicked} />
          </div>
        </footer>
        <div className={s.socials}>
          {histories[historyNum.current].socials.map((social) => (
            <HoverCursor key={social} cursorType="stuck">
              <a className={s.socialLink} href="/">
                {social}
              </a>
            </HoverCursor>
          ))}
        </div>
      </div>
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
    </>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlider;
