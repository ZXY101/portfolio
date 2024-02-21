import { Stars as StarImpl } from '@react-three/drei';
import { forwardRef } from 'react';

export const Stars = forwardRef(function Stars(props: any, ref: any) {
  return (
    <StarImpl
      {...props}
      ref={ref}
      radius={250}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
});
