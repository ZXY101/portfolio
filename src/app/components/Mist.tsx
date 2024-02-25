import { Cloud, Clouds } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';

const cx = 22;
const cy = 18;
const cz = 4;

const config = {
  x: 22,
  y: 18,
  z: 4,
  seed: 1,
  segments: 35,
  volume: 37.0,
  opacity: 0.32,
  fade: 152,
  growth: 15,
  speed: 0.1,
  color: '#a0a0a0',
};

export function Mist() {
  const ref = useRef<any>();
  // const { cx, cy, cz, ...config } = useControls('Clouds', {
  //   cx: { value: 22, min: 0, max: 100, step: 1 },
  //   cy: { value: 18, min: 0, max: 100, step: 1 },
  //   cz: { value: 4, min: 0, max: 100, step: 1 },
  //   seed: { value: 1, min: 1, max: 100, step: 1 },
  //   segments: { value: 35, min: 1, max: 80, step: 1 },
  //   volume: { value: 37.0, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.32, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 152, min: 0, max: 400, step: 1 },
  //   growth: { value: 15, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   color: '#a0a0a0',
  // });

  useFrame((state) => {
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
