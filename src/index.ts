import { Vector3 } from "three";
import { createScene } from "./scene";
import { createGround } from "./ground";
import { createLight } from "./light";
import { createCamera } from "./camera";
import { createRenderer } from "./renderer";
import { createHouse } from "./house";
import { createControls } from "./controls";

const init = () => {
  if (process.env.QUALITY === undefined) {
    throw new Error("Missing process.env.QUALITY.");
  }

  const quality = parseFloat(process.env.QUALITY);

  if (isNaN(quality)) {
    throw new Error(
      "Got NaN from process.env.QUALITY which must be a real number."
    );
  }

  const container = document.getElementById("three-house");

  if (container === null) {
    throw new Error('Missing element with id "three-house"');
  }

  const renderer = createRenderer(
    container,
    window.innerWidth,
    window.innerHeight,
    window.devicePixelRatio
  );

  const camera = createCamera(new Vector3(0, 300, 300), new Vector3(0, 0, 0));
  createControls(camera, container);
  const scene = createScene();
  const ground = createGround(quality, scene);

  const lightbulb = createLight(new Vector3(-25, 150, 125));
  ground.mesh.add(lightbulb.mesh);

  const house = createHouse();
  ground.mesh.add(house.mesh);

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", onWindowResize, false);

  const update = () => {
    ground.update();
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  const loop = () => {
    requestAnimationFrame(loop);
    update();
    render();
  };

  loop();
};

init();
