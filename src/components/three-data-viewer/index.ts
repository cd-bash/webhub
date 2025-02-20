import {initCamera, initCanvas, initScene, renderer} from "./scene.ts";
import {animate} from "./animation-loop.ts";
import {initGeometry} from "./geometry.ts";

export function threeDataViewer() {
    initScene();
    initCanvas();
    initCamera();
    initGeometry();
    animate();


    return renderer.domElement;
}

//-----------------------------------------------------------------------
