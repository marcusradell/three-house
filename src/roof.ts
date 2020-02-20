import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";
import { Body } from "./body";

export type RoofSide = {
  geo: BoxGeometry;
  mesh: Mesh;
};

const thickness = 1;
const extraWidth = 10;

type CreateRoofSide = (
  body: Body,
  topHeight: number,
  mirrorFactor: number
) => RoofSide;

const createRoofSide: CreateRoofSide = (body, topHeight, mirrorFactor) => {
  const width = body.geo.parameters.width + extraWidth;

  const depthCosine = body.geo.parameters.depth / 2;
  const depth = Math.sqrt(topHeight ** 2 + depthCosine ** 2);

  const geo = new BoxGeometry(width, thickness, depth);

  const mat = new MeshLambertMaterial({ color: 0xfd59d7 });
  const mesh = new Mesh(geo, mat);

  geo.translate(0, 0, (geo.parameters.depth / 2) * mirrorFactor);
  geo.rotateX(
    (0.75 + mirrorFactor * 0.75) * Math.PI +
      Math.acos(body.geo.parameters.depth / 2 / geo.parameters.depth)
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
