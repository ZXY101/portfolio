import { Effects, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { forwardRef, useRef, useState } from 'react';
import { Mesh, Object3D } from 'three';
import { DEG2RAD } from 'three/src/math/MathUtils.js';
import { RGBShiftShader, GammaCorrectionShader } from 'three-stdlib';

RGBShiftShader.uniforms = {
  ...RGBShiftShader.uniforms,
  amount: { value: 0.001 },
};

const SPEED = 0.5;

const WavePlane = forwardRef(function WavePlane(props: any, ref: any) {
  const colorMap = useTexture('/textures/grid.png');
  const displacementMap = useTexture('/textures/displacement.png');
  const metalnessMap = useTexture('/textures/metalness.png');

  return (
    <mesh rotation={[-90 * DEG2RAD, 0, 0]} ref={ref} {...props}>
      <planeGeometry args={[1, 2, 24, 24]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        displacementScale={0.4}
        metalness={0.96}
        roughness={0.5}
        metalnessMap={metalnessMap}
      />
    </mesh>
  );
});

export const VaporWave = forwardRef(function VaporWave(_props: any, ref: any) {
  const plane1 = useRef<Mesh>(null);
  const plane2 = useRef<Mesh>(null);
  const [target1] = useState(() => new Object3D());
  const [target2] = useState(() => new Object3D());

  useFrame(({ clock }) => {
    if (plane1.current && plane2.current) {
      const { elapsedTime } = clock;

      plane1.current.position.z = (SPEED * elapsedTime) % 2;
      plane2.current.position.z = ((SPEED * elapsedTime) % 2) - 2;
    }
  });

  return (
    <group
      scale={[1.2, 1, 1]}
      position={[0, -100, -100]}
      rotation={[90 * DEG2RAD, 0, 0]}
      ref={ref}
    >
      <spotLight
        position={[0.5, 0.75, 2.2]}
        angle={Math.PI * 0.1}
        color="rgb(64, 226, 69)"
        intensity={30}
        penumbra={0.25}
        target={target1}
      />
      <spotLight
        position={[-0.5, 0.75, 2.2]}
        angle={Math.PI * 0.1}
        color="rgb(64, 226, 69)"
        intensity={30}
        penumbra={0.25}
        target={target2}
      />
      <pointLight
        intensity={10}
        position={[0, 1, 0]}
        color="rgb(64, 226, 69)"
      />
      <primitive object={target1} position={[-0.25, 0.25, 0.25]} />
      <primitive object={target2} position={[0.25, 0.25, 0.25]} />
      <WavePlane ref={plane1} />
      <WavePlane ref={plane2} />
    </group>
  );
});
