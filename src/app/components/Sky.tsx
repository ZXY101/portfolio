import { Sky as SkyImpl } from '@react-three/drei';

import { forwardRef } from 'react';
import { Mist } from './Mist';
import { useControls } from 'leva';

const x = 0;
const y = 0;
const z = -2000;
const rayleigh = 3.95;
const turbidity = 1;
const distance = 1300;
const mieCoefficient = 0.21;
const mieDirectionalG = 0.77;

export const Sky = forwardRef(function SkyView(props: any, ref) {
  // const {
  //   x,
  //   y,
  //   z,
  //   rayleigh,
  //   turbidity,
  //   distance,
  //   mieCoefficient,
  //   mieDirectionalG,
  // } = useControls('Sky', {
  //   x: { value: 0, min: -5000, max: 5000 },
  //   y: { value: 0, min: -100, max: 100, step: 0.1 },
  //   z: { value: -2000, min: -2000, max: 200 },
  //   rayleigh: { value: 3.95, min: 0, max: 10, step: 0.01 },
  //   turbidity: { value: 1, min: 0, max: 20, step: 0.01 },
  //   distance: { value: 1300, min: 0, max: 10000 },
  //   mieCoefficient: { value: 0.21, min: 0, max: 1, step: 0.01 },
  //   mieDirectionalG: { value: 0.77, min: 0, max: 1, step: 0.01 },
  // });
  return (
    <>
      <SkyImpl
        {...props}
        ref={ref}
        sunPosition={[x, y, z]}
        rayleigh={rayleigh}
        turbidity={turbidity}
        distance={distance}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
      />
      <Mist />
    </>
  );
});
