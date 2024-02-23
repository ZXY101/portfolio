import * as THREE from 'three';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Water } from 'three-stdlib';

extend({ Water });

export function Ocean() {
  const ref = useRef<any>();
  const waterNormals = useLoader(
    THREE.TextureLoader,
    '/textures/waternormals.jpeg'
  );
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

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta * 0.3;
    }
  });
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}
