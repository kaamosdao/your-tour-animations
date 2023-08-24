#ifdef GL_ES
precision mediump float;
#endif

uniform float progress;
uniform sampler2D image;
uniform sampler2D imageNext;
uniform vec2 resolution;

varying vec2 vUv;

mat2 rotate(float a) {
	float s = sin(a);
	float c = cos(a);
	return mat2(c, s, -s, c);
}

void main() {
  vec2 st = gl_FragCoord.xy/resolution.xy;

  vec2 dividedUv = fract(st * vec2(20., 1.));

  vec2 displacedUv = vUv + rotate(-15.) * vec2(progress *vUv.x/4., 0.) * dividedUv;

  vec4 image = texture2D(image, displacedUv);
  vec4 imageNext = texture2D(imageNext, displacedUv);

  vec4 color = mix(image, imageNext, progress);

  gl_FragColor = color;
}
