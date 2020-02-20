import { PointLight, SphereGeometry, Mesh, MeshBasicMaterial } from "three";

const intensity = 1;

export const createLightbulb = () => {
  const light = new PointLight(0xffffff, intensity);
  light.castShadow = true;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 600;
  // What's this?
  // light.shadow.bias = -0.005;
  light.position.set(-25, 150, 125);
  light.lookAt(0, 0, 0);

  const geo = new SphereGeometry(5, 10, 10);
  geo.translate(-25, 150, 125);
  const mat = new MeshBasicMaterial({ color: 0xffffff });
  mat.color.multiplyScalar(intensity);
  const mesh = new Mesh(geo, mat);
  mesh.add(light);

  return { geo, mesh };
};
