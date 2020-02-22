import { BoxGeometry, Mesh, MeshPhongMaterial as Material } from "three";
import { Body } from "./body";

export type RoofSide = {
  geo: BoxGeometry;
  mesh: Mesh;
};

const thickness = 1;

type CreateRoofSide = (
  body: Body,
  topHeight: number,
  mirrorFactor: number
) => RoofSide;

const createRoofSide: CreateRoofSide = (body, topHeight, mirrorFactor) => {
  const width = body.geo.parameters.width;

  const depthCosine = body.geo.parameters.depth / 2;
  const depth = Math.sqrt(topHeight ** 2 + depthCosine ** 2);

  const geo = new BoxGeometry(
    width,
    thickness,
    depth,
    width * 2,
    thickness * 2,
    depth * 2
  );

  const mat = new Material({ color: 0xb84221 });
  const mesh = new Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  geo.translate(0, 0, (geo.parameters.depth / 2) * mirrorFactor);
  geo.rotateX(
    -Math.acos(body.geo.parameters.depth / 2 / geo.parameters.depth) *
      mirrorFactor
  );
  geo.translate(0, 0, (body.geo.parameters.depth / 2) * -mirrorFactor);
  geo.translate(0, body.geo.parameters.height + thickness / 2, 0);

  return { geo, mesh };
};

type CreateRoof = (body: Body, topHeight: number) => [RoofSide, RoofSide];

export const createRoof: CreateRoof = (body, topHeight) => {
  const roofSide1 = createRoofSide(body, topHeight, -1);
  const roofSide2 = createRoofSide(body, topHeight, 1);
  return [roofSide1, roofSide2];
};
