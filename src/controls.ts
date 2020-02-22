import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Camera } from "three";

type CreateControls = (camera: Camera, container: HTMLElement) => OrbitControls;

export const createControls: CreateControls = (camera, container) => {
  return new OrbitControls(camera, container);
};
