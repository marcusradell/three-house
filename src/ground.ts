import { CircleGeometry, Mesh, MeshLambertMaterial } from "three";

export type Ground = {
  geo: CircleGeometry;
  mesh: Mesh;
};

type CreateGround = () => Ground;

export const createGround: CreateGround = () => {
  const geo = new CircleGeometry(200, 1000);
  geo.rotateX(-Math.PI / 2);
  const mat = new MeshLambertMaterial({ color: 0x33bb66 });
  const mesh = new Mesh(geo, mat);
  mesh.receiveShadow = true;
  return { geo, mesh };
};
