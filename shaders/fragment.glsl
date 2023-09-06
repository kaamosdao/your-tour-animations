#ifdef GL_ES
precision mediump float;
#endif

uniform float progress;
uniform sampler2D image;
uniform sampler2D imageNext;
uniform vec2 resolution;
uniform float directionSign;

varying vec2 vUv;
varying vec2 vUvNext;

mat2 rotate(float a) {
	float s = sin(a);
	float c = cos(a);
	return mat2(c, s, -s, c);
}

void main() {
  vec2 st = gl_FragCoord.xy/resolution.xy;

  vec2 dividedUv = directionSign * fract(st * vec2(directionSign *20., directionSign *1.));

  vec2 displacedUv = vUv + rotate(-15.) * vec2(progress * mix(1. - vUv.x, vUv.x, clamp(0., 1., directionSign))/ 4., 0.) * dividedUv;

  vec2 displacedUvNext = vUvNext + rotate(-195.) * vec2(progress * mix(1. - vUvNext.x, vUvNext.x, clamp(0., 1., directionSign)) /4., 0.) * dividedUv;

  vec4 image = texture2D(image, displacedUv);
  vec4 imageNext = texture2D(imageNext, displacedUvNext);

  vec4 color = mix(image, imageNext, progress);

  gl_FragColor = color;
}
