import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PCFSoftShadowMap as ShadowMap,
  AmbientLight,
  Color
} from "three";
import { createBody } from "./body";
import { createRoof } from "./roof";
import { createSun } from "./sun";
import { createGround } from "./ground";
import { createLightbulb } from "./lightbulb";

const scene = new Scene();
scene.add(new AmbientLight(0x111122, 5));
scene.background = new Color(0xf0f0f0);

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let zoom = true;
zoom = false;

if (zoom) {
  camera.position.set(-100, 80, 200);
  camera.lookAt(
    scene.position.x - 60,
    scene.position.y - 40,
    scene.position.z + 60
  );
} else {
  camera.position.set(0, 300, 300);
  camera.lookAt(scene.position);
}

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = ShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let showSun = true;
showSun = false;

if (showSun) {
  const sun = createSun();
  scene.add(sun);
}

const ground = createGround();
scene.add(ground.mesh);

const lightbulb = createLightbulb();
ground.mesh.add(lightbulb.mesh);

const body = createBody();
ground.mesh.add(body.mesh);

const roof = createRoof(body, 30);

body.mesh.add(roof[0].mesh);
body.mesh.add(roof[1].mesh);

ground.mesh.rotateY(Math.PI / 2);

var animate = function() {
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
