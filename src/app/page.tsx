'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { Scene } from './components/Scene';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{
          position: [0, 1.5, 15],
          rotation: [5 * DEG2RAD, 0, 0],
          fov: 60,
        }}
      >
        <ScrollControls pages={3} damping={0.2}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
}
