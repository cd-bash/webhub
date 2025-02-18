import { camera, renderer, scene, windowHeight, windowWidth } from "./scene.ts";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import {Vector2} from "three";

let composer: EffectComposer;

const postProcessConfigs = {
    size: Vector2,
    threshold: 0.05,
    strength: 0.4,
    radius: 0.35,
    exposure: 0
};


export const initPostProcess = () => {
    const renderScene = new RenderPass( scene, camera );

    const bloomPass = new UnrealBloomPass(
        new Vector2( windowWidth, windowHeight ), // size
        postProcessConfigs.strength, // strength
        postProcessConfigs.radius, // radius
        postProcessConfigs.threshold // threshold
    );

    const outputPass = new OutputPass();

    composer = new EffectComposer( renderer );
    composer.addPass( renderScene );
    composer.addPass( bloomPass );
    composer.addPass( outputPass );
}

export const resizeComposer = () => {
    composer.setSize( windowWidth, windowHeight );
}

export const renderWithPostProcess = () => {
    composer.render();
}
