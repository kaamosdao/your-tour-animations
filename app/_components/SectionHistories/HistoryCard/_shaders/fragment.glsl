#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D image;
varying vec2 vUv;
varying vec2 vUv1;

void main() {
  vec4 image = texture2D(image, vUv1);
  gl_FragColor = image;
}
