import * as THREE from 'three';
import {Vector3} from "three";

export let renderer;

let scene,
    camera: THREE.PerspectiveCamera,
    cameraTarget: Vector3,
    canvasWidth: number,
    canvasHeight: number,
    canvasHalfWidth: number,
    canvasHalfHeight: number,
    mouseX = 0,
    mouseY = 0;


const initBackground = () => {
    setWindowSize()

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
}

const initScene = () => {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);

    scene.background = new THREE.Color(0x000000);
}

const initCamera = () => {
    const fieldOfView = 75;
    const aspectRatio = canvasWidth / canvasHeight;
    const nearPlane = 1;
    const farPlane = 3000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane);
    camera.position.z = 800;
}


const onWindowResize = () => {
    setWindowSize();

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight);
}

const onMouseMove = (event) => {
    mouseX = (event.clientX - canvasHalfWidth);
    mouseY = (event.clientY - canvasHalfHeight);
    cameraTarget.x = (mouseX * -1) / 2;
    cameraTarget.y = mouseY / 2;
}

const setWindowSize = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvasHalfWidth = canvasWidth / 2;
    canvasHalfHeight = canvasHeight / 2;
}


const initBgObjects = () => {
    for (let i = 0; i < 40; i++) {
        createBgObject(i);
    }
}

const createBgObject = (i) => {
    const geometry = new THREE.BoxGeometry( 10, 6, 6 );
    const material = new THREE.MeshBasicMaterial( {color: 0xdddddd} );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    const x = Math.random() * canvasWidth * 2 - canvasWidth;
    const y = Math.random() * canvasHalfHeight * 2 - canvasHalfHeight;
    const z = Math.random() * -2000 - 200;
    sphere.position.set(x, y, z);
}


//-----------------------------------------------------------------------

export function animatedBackground() {
    initBackground();
    initScene();
    initCamera();
    initBgObjects();

    renderer.render(scene, camera);

    return renderer.domElement;
}
