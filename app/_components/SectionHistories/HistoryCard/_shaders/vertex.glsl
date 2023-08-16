#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 uvRate;
varying vec2 vUv;
varying vec2 vUv1;
varying vec3 vPosition;

void main() {
  vUv = uv;

  vPosition = position;

  vec2 _uv = uv - 0.5;
  vUv1 = _uv;
  vUv1 *= uvRate.xy;
  vUv1 += 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
