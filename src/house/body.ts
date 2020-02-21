import { BoxGeometry, Mesh, MeshPhongMaterial as Material } from "three";

export type Body = {
  geo: BoxGeometry;
  mesh: Mesh;
};

type CreateBody = () => Body;

export const createBody: CreateBody = () => {
  const geo = new BoxGeometry(150, 50, 100);
  geo.translate(0, geo.parameters.height / 2, 0);
  const mat = new Material({ color: 0xffffff });
  const mesh = new Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return { geo, mesh };
};
