import { GroupProps, Vector3 } from '@react-three/fiber';
import { Logo } from './Logo';
import { randFloat } from 'three/src/math/MathUtils.js';
import { getRandVec3 } from '../util';
import { forwardRef } from 'react';

export const Skills = forwardRef(function Skills(props: GroupProps, ref: any) {
  const spin = getRandVec3(0.1, 0.5);
  return (
    <group {...props} ref={ref}>
      <Logo
        path={'/models/logos/firebase.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/react.gltf'}
        scale={0.4}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/next.gltf'}
        scale={2}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/git.gltf'}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/android.gltf'}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/docker.gltf'}
        scale={0.7}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/js.gltf'}
        scale={0.3}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/html.gltf'}
        scale={0.3}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/css.gltf'}
        scale={0.3}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/svelte.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/python.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/nginx.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/php.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/rust.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/redux.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
      <Logo
        path={'/models/logos/three.gltf'}
        scale={0.5}
        position={getRandVec3()}
        spin={getRandVec3()}
      />
    </group>
  );
});
