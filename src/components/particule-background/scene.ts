import * as THREE from 'three';

export let renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cameraTarget = new THREE.Vector3(0, 0 ,800),
    windowWidth: number,
    windowHeight: number,
    windowHalfWidth: number,
    windowHalfHeight: number;

let graphicCanvas,
    canvasWidth = 240,
    canvasHeight = 240,
    mouseX = 0,
    mouseY = 0;

//-----------------------------------------------------------------------

export const initStage = () => {
    setWindowSize();

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
}

export const initScene = () => {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowWidth, windowHeight);

    scene.background = new THREE.Color(0xFFFFFF);
}

export const initCamera = () => {
    const fieldOfView = 75;
    const aspectRatio = windowWidth / windowHeight;
    const nearPlane = 1;
    const farPlane = 3000;
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

export const setWindowSize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    windowHalfWidth = windowWidth / 2;
    windowHalfHeight = windowHeight / 2;
}

//-----------------------------------------------------------------------

const onMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX - windowHalfWidth);
    mouseY = (event.clientY - windowHalfHeight);
    cameraTarget.x = (mouseX * -1) / 2;
    cameraTarget.y = mouseY / 2;
}

const onWindowResize = () => {
    setWindowSize();

    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
}