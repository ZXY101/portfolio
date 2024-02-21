/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: yankobe (https://sketchfab.com/yankobe.do)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/torii-eae805e8cce94250b8e36b5e459f988d
Title: Torii
*/
import * as React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Tori(props) {
  const { nodes, materials } = useGLTF('/models/tori/scene.gltf');
  return (
    <group {...props} dispose={null} position={[0, -0.2, 0]}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.ToriiShape_Torii_base_0.geometry}
          material={materials.Torii_base}
        />
        <mesh
          geometry={nodes.ToriiShape_Torii_0.geometry}
          material={materials.Torii}
        />
        <mesh
          geometry={nodes.ToriiShape_Mat_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.ToriiShape_Frame_0.geometry}
          material={materials.Frame}
        />
        <mesh
          geometry={nodes.ToriiShape_Support_0.geometry}
          material={materials.Support}
        />
        <mesh
          geometry={nodes.ToriiShape_Shide_0.geometry}
          material={materials.Shide}
        />
        <mesh
          geometry={nodes.ToriiShape_Shimenawa_0.geometry}
          material={materials.Shimenawa}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');