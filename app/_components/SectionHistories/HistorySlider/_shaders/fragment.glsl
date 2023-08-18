#ifdef GL_ES
precision mediump float;
#endif

uniform float progress;
uniform sampler2D image;
uniform sampler2D imageNext;
varying vec2 vUv;

void main() {
  vec4 image = texture2D(image, vUv);
  vec4 imageNext = texture2D(imageNext, vUv);

  vec4 color = mix(image, imageNext, progress);

  gl_FragColor = color;
}
