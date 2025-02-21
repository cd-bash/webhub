import * as THREE from "three";

export let renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera;

let graphicCanvas,
    canvasWidth = 185,
    canvasHeight = 185;

//-----------------------------------------------------------------------

export const initScene = () => {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x010102, 1, 10);
    scene.add( new THREE.DirectionalLight( 0x00ff00, 10) );

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0x333333, 1);
}

export const initCamera = () => {
    const fieldOfView = 75;
    const aspectRatio = canvasWidth / canvasHeight;
    const nearPlane = 1;
    const farPlane = 30000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane);
    camera.position.z = 800;
}

export const initCanvas = () => {
    graphicCanvas = document.createElement('canvas');
    graphicCanvas.width = canvasWidth;
    graphicCanvas.height = canvasHeight;
}

//-----------------------------------------------------------------------

