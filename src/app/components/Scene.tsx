import Tori from './Tori';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { Effects, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {
  RGBShiftShader,
  GammaCorrectionShader,
  Sky as SkyImpl,
  EffectComposer,
} from 'three-stdlib';

import { useRef } from 'react';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { Stars } from './Stars';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { TextOverlay } from './TextOverlay';
import { Group, Points } from 'three';
import { VaporWave } from './VaporWave';
import { Skills } from './Skills';
import {
  sunsetAnimation,
  toSkyAnimation,
  toVaporWaveAnimation,
} from '../util/animations';

RGBShiftShader.uniforms = {
  ...RGBShiftShader.uniforms,
  amount: { value: 0.001 },
};

export function Scene() {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>();

  const skyRef = useRef<typeof SkyImpl>(null);
  const starsRef = useRef<Points>(null);
  const effectsRef = useRef<EffectComposer>(null);
  const vaporWaveRef = useRef<Group>(null);
  const skillsRef = useRef<Group>(null);

  const { camera, scene } = useThree();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  useGSAP(() => {
    tl.current = gsap.timeline();
    const timeline = tl.current;
    const sky = skyRef.current;
    const stars = starsRef.current;
    const effects = effectsRef.current;
    const vaporWave = vaporWaveRef.current;
    const skills = skillsRef.current;

    sunsetAnimation(timeline, skyRef.current, stars);
    toSkyAnimation(timeline, stars, camera, scene.fog);
    toVaporWaveAnimation(timeline, sky, stars, effects, vaporWave, skills);

    tl.current.to({}, {}, '5');
    tl.current.to({}, {}, '6');
    tl.current.to({}, {}, '7');
    tl.current.to({}, {}, '8');
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Skills
        position={[-0.05, 20.15, 15.05]}
        rotation={[180 * DEG2RAD, 0, 0]}
        scale={0.1}
        ref={skillsRef}
      />
      <VaporWave ref={vaporWaveRef} />
      <Effects ref={effectsRef} disableGamma={true}>
        <shaderPass args={[RGBShiftShader]} enabled={false} />
        <shaderPass args={[GammaCorrectionShader]} enabled={false} />
      </Effects>
      <TextOverlay />
      <Ocean />
      <Stars ref={starsRef} />
      <ambientLight intensity={1} />
      <Sky ref={skyRef} />
      <Tori />
    </>
  );
}
