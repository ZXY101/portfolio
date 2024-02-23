'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { VaporWave } from '../components/VaporWave';
import { OrbitControls } from '@react-three/drei';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{
          position: [0, 0.06, 1.1],
          rotation: [5 * DEG2RAD, 0, 0],
          fov: 75,
        }}
      >
        <OrbitControls />
        <fog attach="fog" color="#000000" near={1} far={2.5} />
        <VaporWave />
      </Canvas>
    </Suspense>
  );
}
