import * as THREE from 'three';
import {resizeComposer} from "./post-process.ts";

export let renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cameraTarget = new THREE.Vector3(0, 0 ,800),
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

let mouseX = 0,
    mouseY = 0,
    windowHalfWidth: number,
    windowHalfHeight: number;

const mouseSensitivity = 0.1;
const cameraTilt = 35;

//-----------------------------------------------------------------------

export const initStage = () => {
    setWindowSize();

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
}

export const initScene = () => {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x010102, 1, 3000);
    scene.add( new THREE.AmbientLight( 0x000000 ) );


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



//-----------------------------------------------------------------------

const setWindowSize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    windowHalfWidth = windowWidth / 2;
    windowHalfHeight = windowHeight / 2;
}

const onMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX - windowHalfWidth);
    mouseY = (event.clientY - windowHalfHeight);
    cameraTarget.x = (mouseX * -1) * mouseSensitivity;
    cameraTarget.y = mouseY * mouseSensitivity;

    cameraTarget.clamp(
        new THREE.Vector3(-cameraTilt, -cameraTilt, 800),
        new THREE.Vector3(cameraTilt, cameraTilt, 800)
    );
}

const onWindowResize = () => {
    setWindowSize();
    resizeComposer();

    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
}

