import { Vector3 } from "@react-three/fiber";
import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { randFloat } from "three/src/math/MathUtils.js";

export function getRandVec3(min = 0, max = 0.9): [x: number, y: number, z: number] {
  return [randFloat(min, max), randFloat(min, max), randFloat(min, max)];
}

export const ScrollContext = createContext<{ el: HTMLDivElement | null, setEl: null | Dispatch<SetStateAction<HTMLDivElement | null>> }>({ el: null, setEl: (null) });