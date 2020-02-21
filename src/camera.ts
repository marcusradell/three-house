import { Vector3, PerspectiveCamera } from "three";

type CreateCamera = (pos: Vector3, lookAt: Vector3) => PerspectiveCamera;

export const createCamera: CreateCamera = (pos, lookAt) => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(pos.x, pos.y, pos.z);
  camera.lookAt(lookAt);

  return camera;
};
