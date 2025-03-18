import {animatedBackground} from "../../components/three-background";


export function createThreeBackground() {
    const viewBox = document.getElementById('view-box')!;
    const threeBackground = document.createElement('div');

    if (!document.querySelector('.three-background')) {
        threeBackground.className = 'three-background';
        threeBackground.appendChild(animatedBackground());

        viewBox.appendChild(threeBackground);
    }
}