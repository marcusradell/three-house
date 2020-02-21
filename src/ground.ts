import { CircleGeometry, Mesh, MeshPhongMaterial as Material } from "three";

export type Ground = {
  geo: CircleGeometry;
  mesh: Mesh;
};

type CreateGround = (quality: number) => Ground;

export const createGround: CreateGround = quality => {
  const geo = new CircleGeometry(200, 1000 * quality);
  geo.rotateX(-Math.PI / 2);
  const mat = new Material({ color: 0x33bb66 });
  const mesh = new Mesh(geo, mat);
  mesh.receiveShadow = true;
  return { geo, mesh };
};
