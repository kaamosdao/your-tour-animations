#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uvRate;
uniform vec2 uvRateNext;
varying vec2 vUv;
varying vec2 vUvNext;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vUvNext = uv;
  vPosition = position;

  vUv -= 0.5;
  vUv *= uvRate.xy;
  vUv += 0.5;

  vUvNext -= 0.5;
  vUvNext *= uvRateNext.xy;
  vUvNext += 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
