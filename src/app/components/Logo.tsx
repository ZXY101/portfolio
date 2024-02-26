import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { getRandVec3 } from '../util';

type LogoProps = GroupProps & {
  path: string;
  spin?: [x: number, y: number, z: number];
};

export function Logo({ path, spin = getRandVec3(), ...rest }: LogoProps) {
  const { scene } = useGLTF(path);
  const ref = useRef<Group>(null);

  useFrame((state) => {
    const { elapsedTime } = state.clock;
    const [x, y, z] = spin;

    if (ref.current) {
      ref.current.rotation.x = x * elapsedTime;
      ref.current.rotation.y = y * elapsedTime;
      ref.current.rotation.z = z * elapsedTime;
    }
  });

  return <primitive object={scene} ref={ref} {...rest} />;
}
