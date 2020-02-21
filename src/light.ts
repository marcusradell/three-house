import {
  PointLight,
  SphereGeometry,
  Mesh,
  MeshBasicMaterial,
  Vector3
} from "three";
import { Entity } from "./types";

const intensity = 2;
const radius = 15;

type CreateLight = (pos: Vector3) => Entity;

export const createLight: CreateLight = pos => {
  const light = new PointLight(0xffff88, intensity);

  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.radius = 8;

  light.shadow.camera.near = 1;
  light.shadow.camera.far = 600;
  // What's this?
  // light.shadow.bias = -0.005;
  light.position.set(pos.x, pos.y, pos.z);
  light.lookAt(0, 0, 0);

  const geo = new SphereGeometry(radius, radius * 2, radius * 2);
  geo.translate(pos.x, pos.y, pos.z);
  const mat = new MeshBasicMaterial({ color: 0xffff00 });
  mat.color.multiplyScalar(intensity);
  const mesh = new Mesh(geo, mat);
  mesh.add(light);

  return { geo, mesh };
};
