import "./styles.css";
import {changeDepth, initCamera, initScene, initStage, renderer} from "./scene.ts";
import {initBgMeshes} from "./particules.ts";
import {initPostProcess} from "./post-process.ts";
import {animate} from "./animation-loop.ts";

//-----------------------------------------------------------------------

export function animatedBackground() {
    initStage();
    initScene();
    initCamera();
    initBgMeshes();
    initPostProcess();
    animate();

    return renderer.domElement;
}

export function updateBackground(newCameraDepth: number) {
    changeDepth(newCameraDepth);
}