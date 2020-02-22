import {
  CylinderGeometry,
  Mesh,
  MeshPhongMaterial as Material,
  Scene
} from "three";

export type Ground = {
  geo: CylinderGeometry;
  mesh: Mesh;
  update: () => void;
};

type CreateGround = (quality: number, scene: Scene) => Ground;

export const createGround: CreateGround = (quality, scene) => {
  const height = 10;
  const geo = new CylinderGeometry(190, 200, height, 1000 * quality);
  geo.translate(0, -height / 2, 0);
  const mat = new Material({ color: 0x33bb66 });
  const mesh = new Mesh(geo, mat);
  mesh.receiveShadow = true;

  scene.add(mesh);

  const update = () => null;

  return { geo, mesh, update };
};
