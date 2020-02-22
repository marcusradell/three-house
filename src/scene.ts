// Light settings taken from https://stackoverflow.com/a/15531002

import {
  Scene,
  Color,
  AmbientLight,
  HemisphereLight,
  DirectionalLight
} from "three";

export const createScene = () => {
  const scene = new Scene();
  scene.background = new Color(0x8fbcd4);
  scene.add(new AmbientLight(0xffffff, 1));

  // var hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
  // hemiLight.color.setHSL(0.6, 0.75, 0.5);
  // hemiLight.groundColor.setHSL(0.095, 0.5, 0.5);
  // hemiLight.position.set(0, 500, 0);
  // scene.add(hemiLight);

  var dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(-1, 0.75, 1);
  dirLight.position.multiplyScalar(50);
  dirLight.name = "dirlight";
  scene.add(dirLight);

  dirLight.castShadow = true;
  dirLight.shadow.mapSize.height = 1024 * 2;
  dirLight.shadow.mapSize.width = 1024 * 2;

  var d = 300;

  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;

  dirLight.shadow.camera.far = 3500;
  dirLight.shadow.bias = -0.0001;

  return scene;
};
