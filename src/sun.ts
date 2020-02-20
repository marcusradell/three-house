import { SpotLight } from "three";

type CreateSun = () => SpotLight;

export const createSun = () => {
  const sun = new SpotLight(0xffff00, 0.5);
  sun.castShadow = true;
  sun.position.set(-75, 500, -75);
  sun.lookAt(0, 0, 0);
  return sun;
};
