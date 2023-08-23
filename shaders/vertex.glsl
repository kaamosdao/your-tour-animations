#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform float waveLength;
uniform vec2 uvRate;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;

  vPosition = position;
  float vWave = sin(time + (position.x + position.y)) * waveLength;
  vUv -= 0.5;
  vUv *= uvRate.xy + vWave;
  vUv += 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
