import * as THREE from 'three';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { clamp } from 'three/src/math/MathUtils';

import getLoopedNumber from './getLoopedNumber';

import vShader from '@/shaders/vertex.glsl';
import fShader from '@/shaders/fragment.glsl';

class Scene {
  constructor(canvas, canvasHolder, setPlaying, images) {
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

    this.setPlaying = setPlaying;
    this.images = images;

    ({ width: this.width, height: this.height } =
      this.canvasHolder.getBoundingClientRect());

    this.renderer.setSize(this.width, this.height);

    this.initScene();

    this.render();
  }

  resize = () => {
    ({ width: this.width, height: this.height } =
      this.canvasHolder.getBoundingClientRect());

    this.material.uniforms.resolution.value = new THREE.Vector2(
      this.width,
      this.height
    );

    this.resizeImg();

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);

    ScrollTrigger.refresh();
  };

  resizeImg() {
    const imgWidth = this.textures[this.currentSlideNumber].sizes.width;
    const imgHeight = this.textures[this.currentSlideNumber].sizes.height;

    const imgNextWidth = this.textures[this.nextSlideNumber].sizes.width;
    const imgNextHeight = this.textures[this.nextSlideNumber].sizes.height;

    const viewportAspect = this.width / this.height;
    const imgAspect = imgWidth / imgHeight;
    const imgNextAspect = imgNextWidth / imgNextHeight;

    this.camera.updateProjectionMatrix();

    this.changeUvRate(imgAspect, viewportAspect, 'uvRate');
    this.changeUvRate(imgNextAspect, viewportAspect, 'uvRateNext');
  }

  changeUvRate(imgAspect, viewportAspect, uvRateName) {
    if (imgAspect > viewportAspect) {
      this.material.uniforms[uvRateName].value = new THREE.Vector2(
        viewportAspect / imgAspect,
        1
      );
    } else {
      this.material.uniforms[uvRateName].value = new THREE.Vector2(
        1,
        imgAspect / viewportAspect
      );
    }
  }

  scale(scale) {
    gsap.to(this.plane.scale, {
      x: scale,
      y: scale,
    });
  }

  initScene() {
    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    this.textures = this.images.reduce((acc, { dimensions, url }) => {
      const sizes = { width: dimensions.width, height: dimensions.height };

      const texture = loader.load(url);

      acc.push({ texture, sizes });

      return acc;
    }, []);

    loadManager.onLoad = () => {
      this.material = new THREE.ShaderMaterial({
        vertexShader: vShader,
        fragmentShader: fShader,
        uniforms: {
          progress: { type: 'f', value: 0 },
          image: {
            type: 't',
            value: this.textures[0].texture,
          },
          imageNext: {
            type: 't',
            value: this.textures[1].texture,
          },
          uvRate: {
            type: 'v2',
            value: new THREE.Vector2(1, 1),
          },
          uvRateNext: {
            type: 'v2',
            value: new THREE.Vector2(1, 1),
          },
          resolution: {
            type: 'v2',
            value: new THREE.Vector2(this.width, this.height),
          },
          directionSign: { type: 'f', value: 1 },
        },
      });

      this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);

      this.currentSlideNumber = 0;
      this.nextSlideNumber = 1;

      ScrollTrigger.refresh();

      this.resize();
    };
  }

  moveSlide(nextSlideNumber, directionSign) {
    this.setPlaying(true);

    this.nextSlideNumber = nextSlideNumber;
    this.currentSlideNumber = getLoopedNumber(
      this.nextSlideNumber - directionSign,
      this.images.length
    );

    this.material.uniforms.imageNext.value =
      this.textures[nextSlideNumber].texture;

    this.material.uniforms.directionSign.value = directionSign;

    this.resizeImg();

    const durationStart = 0.5;
    const durationEnd = 0.5;

    this.animateText(durationStart + durationEnd);

    gsap
      .timeline({
        onComplete: () => this.setPlaying(false),
      })
      .to(this.material.uniforms.progress, {
        value: 1,
        duration: durationStart,
        ease: 'power1.out',
        onComplete: () => {
          this.currentSlideNumber = nextSlideNumber;
          this.material.uniforms.image.value =
            this.textures[nextSlideNumber].texture;

          this.resizeImg();
        },
      })
      .to(this.material.uniforms.progress, {
        value: 0,
        duration: durationEnd,
        ease: 'power1.in',
      });
  }

  onSwipeStart = (directionSign, currentSlideNumber) => {
    this.setPlaying(true);

    this.currentSlideNumber = currentSlideNumber;
    this.nextSlideNumber = getLoopedNumber(
      currentSlideNumber + directionSign,
      this.images.length
    );

    this.material.uniforms.imageNext.value =
      this.textures[this.nextSlideNumber].texture;

    this.material.uniforms.directionSign.value = directionSign;

    this.resizeImg();
  };

  onSwiping = (distance) => {
    const normalizedCoeff = 2.35 / this.width;

    this.material.uniforms.progress.value = clamp(
      distance * normalizedCoeff,
      0,
      1
    );
  };

  onSwiped = () => {
    const { value } = this.material.uniforms.progress;

    gsap.to(this.material.uniforms.progress, {
      value: 0,
      duration: 1.0 - value,
      ease: 'power1.out',
      onComplete: () => this.setPlaying(false),
    });
  };

  swipeSlide = (nextSlideNumber, velocity) => {
    const { value } = this.material.uniforms.progress;

    const durationStart = clamp((1 - value) / velocity, 0, 0.5);
    const durationEnd = 0.5;

    this.animateText(durationStart + durationEnd);

    gsap
      .timeline({
        onComplete: () => this.setPlaying(false),
      })
      .to(this.material.uniforms.progress, {
        value: 1,
        duration: durationStart,
        ease: 'power1.out',
        onComplete: () => {
          this.currentSlideNumber = nextSlideNumber;

          this.material.uniforms.image.value =
            this.textures[nextSlideNumber].texture;

          this.resizeImg();
        },
      })
      .to(this.material.uniforms.progress, {
        value: 0,
        duration: durationEnd,
        ease: 'power1.in',
      });
  };

  animateText(duration) {
    const q = gsap.utils.selector(this.canvasHolder);

    const title = q('h3[class*="historyCardTitle"]');
    const text = q('p[class*="historyCardText"]');
    const list = q('ul[class*="historyCardList"]');
    const socials = q('a[class*="socialLink"]');

    gsap
      .timeline()
      .fromTo(
        [title, text, list],
        {
          x: 1000,
        },
        {
          x: 0,
          ease: 'back.out(1.0)',
          duration,
          stagger: 0.1,
        }
      )
      .fromTo(
        socials,
        { y: -1000 },
        { y: 0, ease: 'elastic.out(1.0, 1.0)', stagger: 0.1, duration },
        '<'
      );
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    gsap.ticker.add(this.animate);
  }

  dismiss() {
    gsap.ticker.remove(this.animate);
  }
}

export default Scene;
