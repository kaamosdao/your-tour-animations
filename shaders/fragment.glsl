#ifdef GL_ES
precision mediump float;
#endif

uniform float progress;
uniform sampler2D image;
uniform sampler2D imageNext;
uniform float time;

varying vec2 vUv;
varying vec3 vPosition;

vec2 mirrored(vec2 v) {
  vec2 m = mod(v, 2.);
  return mix(m, 2. - m, step(1., m));
}

float tri(float p) {
  return mix(p, 1. - p, step(0.5, p)) * 2.;
}

void main() {
  float delayedValue = progress * 9. - vUv.y * 5. + vUv.x * 4. - 3.5;
  delayedValue = clamp(delayedValue, 0., 1.);

  vec2 translate = progress + delayedValue*vec2(0.5, 2.);
  vec2 translate1 = translate*vec2(-0.5, 1.);
  vec2 translate2 = (translate - 1. - vec2(0.5, 2.))*vec2(-0.5, 1.);

  vec2 wave = sin(sin(time) * vec2(0, 0.3) + vUv.yx * vec2(0, 4.)) * vec2(0, 0.5);
  vec2 triangleWave = wave * (tri(progress) * 0.5 + tri(delayedValue) * 0.5);

  vec2 distortedUv1 = vUv + translate1 + triangleWave;
  vec2 distortedUv2 = vUv + translate2 + triangleWave;

  vec4 image = texture2D(image, mirrored(distortedUv1));
  vec4 imageNext = texture2D(imageNext, mirrored(distortedUv2));

  vec4 color = mix(image, imageNext, delayedValue);

  gl_FragColor = color;
}
