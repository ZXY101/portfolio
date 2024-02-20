'use client';

import * as THREE from 'three';
import { createRef, forwardRef, useEffect, useMemo, useRef } from 'react';
import {
  Canvas,
  ReactThreeFiber,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import {
  CameraControls,
  OrbitControls,
  ScrollControls,
  Sky,
  Stars,
  useCamera,
  useGLTF,
  useGizmoContext,
  useScroll,
  Html,
  Scroll,
  Clouds,
  Cloud,
  Environment,
  Shadow,
} from '@react-three/drei';
import { Water } from 'three-stdlib';
import { Leva, buttonGroup, useControls, monitor } from 'leva';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import Tori from './Tori';
import { useGSAP } from '@gsap/react';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: ReactThreeFiber.Object3DNode<Water, typeof Water>;
    }
  }
}

extend({ Water });
/*
{"y":60}
{"rayleigh":5.5}
{"turbidity":4.34}
{"distance":1300}
{"mieCoefficient":0.01}
{"mieDirectionalG":0.98}
*/

function Ocean() {
  const ref = useRef<any>();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);

  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 'rgba(0, 122, 160, 0.31)',
      distortionScale: 3.7,
      fog: false,
    }),
    [waterNormals]
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta * 0.3;
    }
  });
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

const SkyView = forwardRef(function SkyView(props: any, ref) {
  return (
    <>
      <Sky {...props} ref={ref} />
      <CloudCollection />
    </>
  );
});

function Scene() {
  const {
    x,
    y,
    z,
    rayleigh,
    turbidity,
    distance,
    mieCoefficient,
    mieDirectionalG,
  } = useControls({
    x: { value: 0, min: -5000, max: 5000 },
    y: { value: -2.8, min: -100, max: 100, step: 0.1 },
    z: { value: -2000, min: -2000, max: 200 },
    rayleigh: { value: 3.95, min: 0, max: 10, step: 0.01 },
    turbidity: { value: 6.2, min: 0, max: 20, step: 0.01 },
    distance: { value: 1300, min: 0, max: 10000 },
    mieCoefficient: { value: 0.01, min: 0, max: 1, step: 0.01 },
    mieDirectionalG: { value: 0.95, min: 0, max: 1, step: 0.01 },
  });

  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>();
  const sky = useRef<any>();
  const { camera } = useThree();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  console.log(sky.current);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl.current.add('start');
    tl.current.to(
      sky.current.material.uniforms.rayleigh,
      { value: 0 },
      'start'
    );
    tl.current.to(
      sky.current.material.uniforms.sunPosition.value,
      {
        y: 0,
      },
      'start'
    );
    // tl.current.to(camera.rotation, { y: Math.PI, x: 0 });
    // tl.current.to(camera.position, { y: 20, z: 50 });
  });

  return (
    <>
      <Ocean />
      <ambientLight intensity={1} />
      <SkyView
        ref={sky}
        sunPosition={[x, y, z]}
        rayleigh={rayleigh}
        turbidity={turbidity}
        distance={distance}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
      />
      <Tori />
    </>
  );
}

function CloudCollection() {
  const ref = useRef<any>();
  const { cx, cy, cz, ...config } = useControls('Clouds', {
    cx: { value: 6, min: 0, max: 100, step: 1 },
    cy: { value: 1, min: 0, max: 100, step: 1 },
    cz: { value: 1, min: 0, max: 100, step: 1 },
    seed: { value: 1, min: 1, max: 100, step: 1 },
    segments: { value: 20, min: 1, max: 80, step: 1 },
    volume: { value: 6, min: 0, max: 100, step: 0.1 },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
    fade: { value: 10, min: 0, max: 400, step: 1 },
    growth: { value: 4, min: 0, max: 20, step: 1 },
    speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
    color: 'white',
  });

  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
  });
  return (
    <group ref={ref}>
      <Clouds material={THREE.MeshLambertMaterial}>
        <Cloud {...config} bounds={[cx, cy, cz]} />
      </Clouds>
    </group>
  );
}

export default function Home() {
  return (
    <main>
      <Canvas
        camera={{
          position: [0, 1.5, 15],
          rotation: [5 * DEG2RAD, 0, 0],
          fov: 60,
        }}
        dpr={window.devicePixelRatio}
      >
        <ScrollControls pages={2}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </main>
  );
}
