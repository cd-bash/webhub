import {renderWithPostProcess} from "./post-process.ts";
import {sceneAnimation} from "./scene.ts";


export const animate = () => {
    requestAnimationFrame(animate);
    sceneAnimation();
    renderWithPostProcess();
}