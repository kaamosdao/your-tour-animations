import * as THREE from 'three';
import { gsap } from 'gsap';

import { histories } from '@/data';

import vShader from '@/shaders/vertex.glsl';
import fShader from '@/shaders/fragment.glsl';

class Scene {
  constructor(canvas, canvasHolder) {
    this.canvasHolder = canvasHolder;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      -0.5,
      0.5,
      0.5,
      -0.5,
      -1000,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.width = this.canvasHolder.getBoundingClientRect().width;
    this.height = this.canvasHolder.getBoundingClientRect().height;
    this.renderer.setSize(this.width, this.height);

    this.addObjects();
    this.resize();
    this.addResize();
    this.render();
  }

  addResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  removeResize() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  resize() {
    const { width, height } = this.canvasHolder.getBoundingClientRect();
    this.width = width;
    this.height = height;

    const imgWidth = 1170;
    const imgHeight = 567;

    const viewportAspect = width / height;
    const imgAspect = imgWidth / imgHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

    if (imgAspect > viewportAspect) {
      this.material.uniforms.uvRate.value = [viewportAspect / imgAspect, 1];
    } else {
      this.material.uniforms.uvRate.value = [1, imgAspect / viewportAspect];
    }
  }

  addObjects() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.deviceRatio = window.devicePixelRatio;

    const ratioString = this.deviceRatio === 1 ? '' : '@2x';

    this.textures = histories.map(({ name }) =>
      new THREE.TextureLoader().load(
        `img/histories/${name}-desktop-lg${ratioString}.jpg`
      )
    );

    this.material = new THREE.ShaderMaterial({
      vertexShader: vShader,
      fragmentShader: fShader,
      uniforms: {
        progress: { type: 'f', value: 0 },
        image: {
          type: 't',
          value: this.textures[0],
        },
        imageNext: {
          type: 't',
          value: this.textures[1],
        },
        uvRate: {
          type: 'v2',
          value: new THREE.Vector2(1, 1),
        },
      },
    });

    this.plane = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.plane);
  }

  moveSlide(slideNumber) {
    this.material.uniforms.imageNext.value = this.textures[slideNumber];

    gsap.to(this.material.uniforms.progress, {
      value: 1,
      duration: 1,
      onComplete: () => {
        this.material.uniforms.image.value = this.textures[slideNumber];
        this.material.uniforms.progress.value = 0;
      },
    });
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    gsap.ticker.add(this.animate.bind(this));
  }
}

export default Scene;
