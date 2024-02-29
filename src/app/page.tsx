'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, ScrollControls } from '@react-three/drei';

import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { Scene } from './components/Scene';
import { NavBar } from './components/NavBar';
import { ScrollContext } from './util';

export default function Home() {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <ScrollContext.Provider value={{ el, setEl }}>
        <NavBar />
        <Canvas
          camera={{
            position: [0, 1.5, 15],
            rotation: [5 * DEG2RAD, 0, 0],
            fov: 60,
            near: 0.01,
          }}
          dpr={devicePixelRatio}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={10} damping={0.2}>
              <fog attach="fog" color="#000000" near={1} far={200} />
              <Scene />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </ScrollContext.Provider>
      <Loader />
    </>
  );
}
