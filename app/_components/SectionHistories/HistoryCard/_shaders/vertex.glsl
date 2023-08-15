#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;

  vPosition = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
