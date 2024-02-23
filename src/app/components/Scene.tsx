import Tori from './Tori';
import City from './City';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { Environment, OrbitControls, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { Stars } from './Stars';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { TextOverlay } from './TextOverlay';

export function Scene() {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>();

  const sky = useRef<any>();
  const stars = useRef<any>();

  const { camera } = useThree();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  useGSAP(() => {
    if (!sky.current || !stars.current) return;
    tl.current = gsap.timeline();

    // Sun setting animation
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

    // Camera turnaround animation
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
        y: 10,
      },
      '2'
    );
  });

  const [flag, setFlag] = useState(false);
  return (
    <>
      <TextOverlay onClick={() => setFlag(true)} />
      <Ocean />
      <Stars ref={stars} />
      <ambientLight intensity={1} />
      <Sky ref={sky} />
      <Tori />
    </>
  );
}
