import {renderWithPostProcess} from "./post-process.ts";

export const animate = () => {
    requestAnimationFrame(animate);
    renderWithPostProcess();
}