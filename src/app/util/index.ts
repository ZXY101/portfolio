import { Vector3 } from "@react-three/fiber";
import { randFloat } from "three/src/math/MathUtils.js";

export function getRandVec3(min = 0, max = 0.9): [x: number, y: number, z: number] {
  return [randFloat(min, max), randFloat(min, max), randFloat(min, max)];
}