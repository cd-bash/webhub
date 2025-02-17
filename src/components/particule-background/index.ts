import * as THREE from 'three';
import {camera, cameraTarget, initCamera, initCanvas, initScene, initStage, renderer, scene} from "./scene.ts";
import {initBgObjects} from "./particules.ts";


let
    cameraLookAt = new THREE.Vector3(0, 0, 0);



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

//-----------------------------------------------------------------------


const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(cameraTarget, 0.2);
    camera.lookAt(cameraLookAt);
    render();
}

const render = () => {
    renderer.render(scene, camera);
}
//endregion

