import { Renderer, WebGLRenderer, PCFSoftShadowMap as ShadowMap } from "three";

type CreateRenderer = (
  width: number,
  height: number,
  pixelRatio: number
) => Renderer;

export const createRenderer: CreateRenderer = (width, height, pixelRatio) => {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(pixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = ShadowMap;
  renderer.setSize(width, height);

  return renderer;
};
