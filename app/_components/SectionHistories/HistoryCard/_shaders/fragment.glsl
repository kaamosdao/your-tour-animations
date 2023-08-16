#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D image;
varying vec2 vUv;

void main() {
  vec4 image = texture2D(image, vUv);

  gl_FragColor = image;
}
