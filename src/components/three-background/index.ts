import "./styles.css";
import {changeDepth, initCamera, initScene, initStage, renderer} from "./scene.ts";
import {initBgMeshes} from "./particules.ts";
import {initPostProcess} from "./post-process.ts";
import {animate} from "./animation-loop.ts";
import {initDiscs} from "./discs.ts";

export enum BackgroundChoice {
    Home,
    Project,
}

//-----------------------------------------------------------------------

export function threeBackground(choice: BackgroundChoice) {
    initStage();
    initScene();
    initCamera();

    if (choice === BackgroundChoice.Home) {
        initDiscs();
    }

    if (choice === BackgroundChoice.Project) {
        initBgMeshes();
    }

    initPostProcess();
    animate();

    return renderer.domElement;
}

export function updateBackground(newCameraDepth: number) {
    changeDepth(newCameraDepth);
}