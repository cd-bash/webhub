import {camera, scene, renderer} from "../three-data-viewer/scene.ts";

export const animate = () => {
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}