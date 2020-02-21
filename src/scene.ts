import { Scene, AmbientLight, Color } from "three";

export const createScene = () => {
  const scene = new Scene();
  scene.add(new AmbientLight(0xffffff, 0.5));
  scene.background = new Color(0x3377ff);
  return scene;
};
