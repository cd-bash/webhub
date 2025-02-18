import "./styles.css";
import {initCamera, initCanvas, initScene, initStage, renderer} from "./scene.ts";
import {initBgObjects} from "./particules.ts";
import {initPostProcess} from "./post-process.ts";
import {animate} from "./animation-loop.ts";

//-----------------------------------------------------------------------

export function animatedBackground() {
    initStage();
    initScene();
    initCanvas();
    initCamera();
    initBgObjects();
    initPostProcess();
    animate();

    return renderer.domElement;
}