import Tori from './Tori';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Ocean } from './Ocean';
import { Sky } from './Sky';
import { Stars } from './Stars';

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
    tl.current = gsap.timeline();
    tl.current.add('start');
    tl.current.to(
      sky.current.material.uniforms.rayleigh,
      { value: 10 },
      'start'
    );
    tl.current.to(
      sky.current.material.uniforms.turbidity,
      {
        value: 20,
      },
      'start'
    );
    tl.current.to(
      sky.current.material.uniforms.mieCoefficient.value,
      {
        y: -100,
      },
      'start'
    );
    tl.current.to(
      sky.current.material.uniforms.mieCoefficient,
      {
        value: 1,
      },
      'start'
    );
    tl.current.to(
      sky.current.material.uniforms.mieDirectionalG,
      {
        value: 1,
      },
      'start'
    );
    tl.current.from(
      stars.current.position,
      {
        y: 500,
      },
      'start'
    );
  });
  return (
    <>
      <Ocean />
      <Stars ref={stars} />
      <ambientLight intensity={1} />
      <Sky ref={sky} />
      <Tori />
    </>
  );
}
