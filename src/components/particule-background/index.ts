import "./styles.css";
import {animate, initCamera, initCanvas, initScene, initStage, renderer} from "./scene.ts";
import {initBgObjects} from "./particules.ts";

//-----------------------------------------------------------------------

export function animatedBackground() {
    initStage();
    initScene();
    initCanvas();
    initCamera();
    initBgObjects();
    animate();

    return renderer.domElement;
}