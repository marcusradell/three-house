import { Renderer, WebGLRenderer, PCFSoftShadowMap as ShadowMap } from "three";

type CreateRenderer = (
  container: HTMLElement,
  width: number,
  height: number,
  pixelRatio: number
) => Renderer;

export const createRenderer: CreateRenderer = (
  container,
  width,
  height,
  pixelRatio
) => {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(pixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = ShadowMap;
  renderer.setSize(width, height);

  container.appendChild(renderer.domElement);

  return renderer;
};
