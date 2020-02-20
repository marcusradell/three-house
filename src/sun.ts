import { DirectionalLight } from "three";

type CreateSun = () => DirectionalLight;

export const createSun: CreateSun = () => {
  const light = new DirectionalLight(0xffff00, 1.5);
  light.castShadow = true;
  light.position.set(75, 200, 175);
  light.lookAt(0, 0, 0);
  light.shadow.bias = -0.005;
  return light;
};
