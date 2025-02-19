import "./styles.css";
import {initCamera, initCanvas, initScene, initStage, renderer} from "./scene.ts";
import {initBgMeshes} from "./particules.ts";
import {initPostProcess} from "./post-process.ts";
import {animate} from "./animation-loop.ts";

//-----------------------------------------------------------------------

export function animatedBackground() {
    initStage();
    initScene();
    initCanvas();
    initCamera();
    initBgMeshes();
    initPostProcess();
    animate();

    return renderer.domElement;
}