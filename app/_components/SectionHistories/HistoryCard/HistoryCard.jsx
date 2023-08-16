'use client';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as THREE from 'three';

import ButtonMore from '../../ButtonMore';
import HoverCursor from '../../CustomCursor/HoverCursor';

import vShader from './_shaders/vertex.glsl';
import fShader from './_shaders/fragment.glsl';

import s from './HistoryCard.module.scss';

const List = ({ items }) => (
  <ul className={s.historyCardList}>
    {items.map((name) => (
      <li className={s.historyCardItem} key={name}>
        {name}
      </li>
    ))}
  </ul>
);

const HistoryCard = ({ title, name, text, list, socials }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

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
      u_resolution: {
        type: 'v2',
        value: new THREE.Vector2(width, height),
      },
      image: {
        type: 't',
        value: new THREE.TextureLoader().load(
          `img/histories/${name}-desktop-lg${ratioString}.jpg`
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

      material.uniforms.u_resolution.value = new THREE.Vector2(
        canvasWidth,
        canvasHeight
      );

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
  }, [name]);

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <div id="item" ref={canvasHolder} className={s.item}>
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
      <h3 className={s.historyCardTitle}>{title}</h3>
      <p className={s.historyCardText}>{text}</p>
      {list && <List items={list} />}
      <footer className={s.historyCardFooter}>
        <div className={cn(s.historyCardButton)}>
          <ButtonMore isHovered={hovered} isClicked={clicked} />
        </div>
      </footer>
      <div className={s.socials}>
        {socials.map((social) => (
          <HoverCursor key={social} cursorType="stuck">
            <a className={s.socialLink} href="/">
              {social}
            </a>
          </HoverCursor>
        ))}
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistoryCard;
