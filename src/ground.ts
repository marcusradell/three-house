import { CylinderGeometry, Mesh, MeshPhongMaterial as Material } from "three";

export type Ground = {
  geo: CylinderGeometry;
  mesh: Mesh;
};

type CreateGround = (quality: number) => Ground;

export const createGround: CreateGround = quality => {
  const height = 10;
  const geo = new CylinderGeometry(190, 200, height, 1000 * quality);
  geo.translate(0, -height / 2, 0);
  const mat = new Material({ color: 0x33bb66 });
  const mesh = new Mesh(geo, mat);
  mesh.receiveShadow = true;
  return { geo, mesh };
};
