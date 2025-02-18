import {animatedBackground} from "../../components/three-background";


export function createBackground() {
    const viewBox = document.getElementById('view-box')!;
    const backgrounds = document.createElement('div');
    const layerA = document.createElement('div');
    const layerB = document.createElement('div');
    const layerC = document.createElement('div');


    backgrounds.className = 'backgrounds';
    layerA.className = 'layer-a';
    layerB.className = 'layer-b';
    layerC.className = 'layer-c';

    backgrounds.appendChild(layerA);
    layerB.appendChild(animatedBackground());
    backgrounds.appendChild(layerB);
    backgrounds.appendChild(layerC);

    viewBox.appendChild(backgrounds);
}