import { Vector3 } from "three";
import { createScene } from "./scene";
import { createGround } from "./ground";
import { createLight } from "./light";
import { createCamera } from "./camera";
import { createRenderer } from "./renderer";
import { createHouse } from "./house";

const init = () => {
  if (process.env.QUALITY === undefined) {
    throw new Error("Missing process.env.QUALITY.");
  }

  const quality = parseFloat(process.env.QUALITY);

  const renderer = createRenderer(
    window.innerWidth,
    window.innerHeight,
    window.devicePixelRatio
  );

  document.body.appendChild(renderer.domElement);

  const camera = createCamera(new Vector3(0, 300, 300), new Vector3(0, 0, 0));

  const scene = createScene();

  const ground = createGround(quality);
  scene.add(ground.mesh);

  const lightbulb = createLight(new Vector3(-25, 150, 125));
  ground.mesh.add(lightbulb.mesh);

  const house = createHouse();
  ground.mesh.add(house.mesh);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    ground.mesh.rotateY(0.005);
  };

  animate();

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", onWindowResize, false);
};

init();
