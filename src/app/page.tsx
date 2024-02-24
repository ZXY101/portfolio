'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, ScrollControls } from '@react-three/drei';

import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { Scene } from './components/Scene';

export default function Home() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 1.5, 15],
          rotation: [5 * DEG2RAD, 0, 0],
          fov: 60,
        }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={8}>
            <fog attach="fog" color="#000000" near={1} far={200} />
            <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
