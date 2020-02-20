import { PointLight, SphereGeometry, MeshLambertMaterial, Mesh } from "three";

const intensity = 1.5;

export const createLightbulb = () => {
  const light = new PointLight(0xffffff, intensity);
  light.castShadow = true;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 600;
  light.shadow.bias = -0.005;
  light.position.set(75, 100, 75);
  light.lookAt(0, 0, 0);

  const geo = new SphereGeometry(5, 10, 10);
  geo.translate(75, 100, 75);
  const mat = new MeshLambertMaterial({ color: 0xffffff });
  mat.color.multiplyScalar(intensity);
  const mesh = new Mesh(geo, mat);
  mesh.add(light);

  return { geo, mesh };
};
