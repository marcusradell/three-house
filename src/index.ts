import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PCFSoftShadowMap,
  AmbientLight
} from "three";
import { createBody } from "./body";
import { createRoof } from "./roof";
import { createSun } from "./sun";
import { createGround } from "./ground";
import { createLightbulb } from "./lightbulb";

const scene = new Scene();
scene.add(new AmbientLight(0x111122));
const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 300;
camera.position.y = 100;
camera.lookAt(0, 0, 0);

const renderer = new WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sun = createSun();
scene.add(sun);

const ground = createGround();
scene.add(ground.mesh);

const lightbulb = createLightbulb();
ground.mesh.add(lightbulb.mesh);

const body = createBody();
ground.mesh.add(body.mesh);

const roof = createRoof(body, 50);

body.mesh.add(roof[0].mesh);
body.mesh.add(roof[1].mesh);

ground.mesh.rotateY(Math.PI / 2);

var animate = function() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  ground.mesh.rotateY(0.01);
};

animate();
