import { Geometry, Mesh } from "three";
import { createBody } from "./body";
import { createRoof } from "./roof";

type CreateHouse = () => {
  geo: Geometry;
  mesh: Mesh;
};

export const createHouse: CreateHouse = () => {
  const body = createBody();
  const roof = createRoof(body, 30);

  body.mesh.add(roof[0].mesh);
  body.mesh.add(roof[1].mesh);

  // We return the main entity that needs to be added to the scene.
  return body;
};
