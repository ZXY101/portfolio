import { GroupProps } from '@react-three/fiber';
import { Logo } from './Logo';
import { forwardRef } from 'react';

export const Skills = forwardRef(function Skills(props: GroupProps, ref: any) {
  return (
    <group {...props} ref={ref}>
      <Logo
        path={'/models/logos/firebase.gltf'}
        scale={0.2}
        position={[0.1, 1, 0.5]}
      />
      <Logo
        path={'/models/logos/react.gltf'}
        scale={0.3}
        position={[0.7, 0.9, 0.5]}
      />

      <Logo
        path={'/models/logos/svelte.gltf'}
        scale={0.3}
        position={[0.1, 0.8, 0.5]}
      />
      <Logo path={'/models/logos/python.gltf'} position={[0.7, 1, 0.5]} />

      <Logo
        path={'/models/logos/next.gltf'}
        scale={2}
        position={[0.1, 0.6, 0.5]}
      />
      <Logo path={'/models/logos/ts.gltf'} position={[0.7, 0.5, 0.5]} />

      <Logo
        path={'/models/logos/redux.gltf'}
        scale={0.8}
        position={[0.1, 0.4, 0.5]}
      />
      <Logo path={'/models/logos/git.gltf'} position={[0.7, 0.3, 0.5]} />

      <Logo
        path={'/models/logos/three.gltf'}
        scale={0.5}
        position={[0.1, 0.2, 0.5]}
      />
    </group>
  );
});
