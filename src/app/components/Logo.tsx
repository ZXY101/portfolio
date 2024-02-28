import { Billboard, Center, Text3D, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { getRandVec3 } from '../util';

type LogoProps = GroupProps & {
  path: string;
  displayName: string;
};

export function Logo({ path, displayName, ...rest }: LogoProps) {
  const { scene } = useGLTF(path);
  const ref = useRef<Group>(null);
  const [x, y, z] = rest.position as any;

  const rotation = getRandVec3(-1, 1);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.1 * delta;
      ref.current.rotation.z += 0.3 * delta;
    }
  });

  return (
    <group>
      <primitive object={scene} ref={ref} rotation={rotation} {...rest} />
      <Billboard position={[x, y + 0.05, z + 0.1]}>
        <Center>
          <Text3D scale={0.015} font={'/fonts/Amatic SC_Bold.json'}>
            {displayName}
          </Text3D>
        </Center>
      </Billboard>
    </group>
  );
}
