import {initCamera, initCanvas, initScene, renderer} from "./scene.ts";
import {animate} from "./animation-loop.ts";
import {initRadar, TechUsage} from "./radar.ts";

export function threeDataViewer(radarValues: TechUsage[]) {
    initScene();
    initCanvas();
    initCamera();
    initRadar(radarValues);
    animate();


    return renderer.domElement;
}

//-----------------------------------------------------------------------
