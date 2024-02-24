import Tori from './Tori';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { Effects, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { Stars } from './Stars';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { TextOverlay } from './TextOverlay';
import { AmbientLight, Group } from 'three';
import { VaporWave } from './VaporWave';
import { RGBShiftShader, GammaCorrectionShader } from 'three-stdlib';

RGBShiftShader.uniforms = {
  ...RGBShiftShader.uniforms,
  amount: { value: 0.001 },
};

export function Scene() {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>();

  const sky = useRef<any>(null);
  const stars = useRef<any>(null);
  const effects = useRef<any>(null);
  const vaporWave = useRef<Group>(null);
  const ambientLight = useRef<AmbientLight>(null);

  const { camera, scene } = useThree();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  useGSAP(() => {
    if (
      !sky.current ||
      !stars.current ||
      !scene.fog ||
      !vaporWave.current ||
      !effects.current
    )
      return;
    tl.current = gsap.timeline();

    // Sun setting
    tl.current.to(sky.current.material.uniforms.rayleigh, { value: 10 }, '0');
    tl.current.to(
      sky.current.material.uniforms.turbidity,
      {
        value: 20,
      },
      '0'
    );
    tl.current.to(
      sky.current.material.uniforms.mieCoefficient.value,
      {
        y: -100,
      },
      '0'
    );
    tl.current.to(
      sky.current.material.uniforms.mieCoefficient,
      {
        value: 1,
      },
      '0'
    );
    tl.current.to(
      sky.current.material.uniforms.mieDirectionalG,
      {
        value: 1,
      },
      '0'
    );
    tl.current.from(
      stars.current.position,
      {
        duration: 2,
        y: 500,
      },
      '0'
    );

    // Camera pan up
    tl.current.to(
      camera.rotation,
      {
        x: 90 * DEG2RAD,
      },
      '2'
    );
    tl.current.to(
      camera.position,
      {
        y: 20,
      },
      '2'
    );
    tl.current.to(
      scene.fog,
      {
        far: 2.5,
      },
      '2'
    );
    tl.current.to(
      stars.current.position,
      {
        y: 500,
      },
      '2.5'
    );

    // To vaporwave
    tl.current.to(
      sky.current,
      {
        visible: false,
      },
      '2.5'
    );

    tl.current.to(
      effects.current.passes[1],
      {
        enabled: true,
      },
      '3'
    );
    tl.current.to(
      effects.current.passes[2],
      {
        enabled: true,
      },
      '3'
    );
    tl.current.to(
      vaporWave.current.position,
      {
        z: 14.9,
        y: 21,
        duration: 1.5,
      },
      '2.5'
    );

    tl.current.to({}, {}, '4');
    tl.current.to({}, {}, '5');
    tl.current.to({}, {}, '6');
    tl.current.to({}, {}, '7');
    tl.current.to({}, {}, '8');
    tl.current.to({}, {}, '9');
  });

  return (
    <>
      <VaporWave ref={vaporWave} />
      <Effects ref={effects} disableGamma={true}>
        <shaderPass args={[RGBShiftShader]} enabled={false} />
        <shaderPass args={[GammaCorrectionShader]} enabled={false} />
      </Effects>
      <TextOverlay />
      <Ocean />
      <Stars ref={stars} />
      <ambientLight intensity={1} />
      <Sky ref={sky} />
      <Tori />
    </>
  );
}
