import { Sky, EffectComposer } from 'three-stdlib'
import { FogBase, Group, Points } from 'three';
import { Camera } from '@react-three/fiber';
import { DEG2RAD } from 'three/src/math/MathUtils.js';

export function sunsetAnimation(
  tl: gsap.core.Timeline,
  sky: typeof Sky | null,
  stars: Points | null
) {
  if (!tl || !sky || !stars) return;

  const uniforms = sky.material.uniforms;

  tl.to(uniforms.rayleigh, { value: 10 }, '0');
  tl.to(
    uniforms.turbidity,
    { value: 20 },
    '0'
  );
  tl.to(
    uniforms.mieCoefficient,
    { value: 1, },
    '0'
  );
  tl.to(
    uniforms.mieDirectionalG,
    { value: 1, },
    '0'
  );
  tl.from(
    stars.position,
    {
      duration: 2,
      y: 500,
    }, '0'
  );
}

export function toSkyAnimation(
  tl: gsap.core.Timeline,
  stars: Points | null,
  camera: Camera,
  fog: FogBase | null
) {
  if (!tl || !stars || !camera || !fog) return;

  const { position, rotation } = camera

  tl.to(
    rotation,
    { x: 90 * DEG2RAD, },
    '2'
  );
  tl.to(
    position,
    { y: 20, },
    '2'
  );
  tl.to(
    fog,
    { far: 2.5, },
    '2'
  );
  tl.to(
    stars.position,
    { y: 500, duration: 6 },
    '2.5'
  );
}

export function toVaporWaveAnimation(
  tl: gsap.core.Timeline,
  sky: typeof Sky | null,
  stars: Points | null,
  effects: EffectComposer | null,
  vaporWave: Group | null,
  skills: Group | null,
) {
  if (!tl || !sky || !stars || !effects || !vaporWave || !skills) return;

  const [_, shaderPass, gammaPass] = effects.passes;

  tl.to(
    sky,
    { visible: false, },
    '2.5'
  );
  tl.to(
    shaderPass,
    { enabled: true, },
    '3'
  );
  tl.to(
    gammaPass,
    { enabled: true, },
    '3'
  );
  tl.to(
    vaporWave.position,
    {
      z: 14.9,
      y: 21,
      duration: 2,
    },
    '2'
  );
  tl.to(
    skills.position,
    {
      y: 21,
      duration: 0.1
    },
    '3.9'
  );
  tl.to(
    skills.position,
    {
      y: 20,
      duration: 3
    },
    '4'
  );
}