import * as THREE from 'three';

export let renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cameraTarget = new THREE.Vector3(0, 0 ,800),
    windowWidth: number,
    windowHeight: number;

let graphicCanvas,
    canvasWidth = 240,
    canvasHeight = 240,
    mouseX = 0,
    mouseY = 0,
    windowHalfWidth: number,
    windowHalfHeight: number,
    cameraLookAt = new THREE.Vector3(0, 0, 0);

//-----------------------------------------------------------------------

export const initStage = () => {
    setWindowSize();

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
}

export const initScene = () => {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 3000);


    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowWidth, windowHeight);
    renderer.setClearColor(0x000000, 0);
}

export const initCamera = () => {
    const fieldOfView = 75;
    const aspectRatio = windowWidth / windowHeight;
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

export const setWindowSize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    windowHalfWidth = windowWidth / 2;
    windowHalfHeight = windowHeight / 2;
}

export const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(cameraTarget, 0.2);
    camera.lookAt(cameraLookAt);
    render();
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

const render = () => {
    renderer.render(scene, camera);
}