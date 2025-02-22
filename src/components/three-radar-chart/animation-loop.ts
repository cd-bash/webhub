import {camera, scene, renderer} from ".//scene.ts";

export const animate = () => {
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}