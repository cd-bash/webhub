import {initCamera, initCanvas, initScene, renderer} from "./scene.ts";
import {animate} from "./animation-loop.ts";
import {initRadar, TechUsage} from "./radar.ts";
import {initPostProcess} from "./post-process.ts";

export function threeDataViewer(radarValues: TechUsage[]) {
    initScene();
    initCanvas();
    initCamera();
    initRadar(radarValues);
    initPostProcess();
    animate();

    return renderer.domElement;
}

//-----------------------------------------------------------------------
