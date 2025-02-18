import {updateBgObjects} from "./particules.ts";
import {renderWithPostProcess} from "./post-process.ts";
import {camera, cameraTarget} from "./scene.ts";
import * as THREE from "three";

let cameraLookAt = new THREE.Vector3(0, 0, 0);

export const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(cameraTarget, 0.2);
    camera.lookAt(cameraLookAt);

    updateBgObjects();
    renderWithPostProcess();
}
