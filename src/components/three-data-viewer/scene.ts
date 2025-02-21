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
    //scene.fog = new THREE.Fog(0x010102, 1, 10);
    createBackdrop();

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0x000000, 1);
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

const createBackdrop = () => {
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geometry, material);

    const light1 = new THREE.PointLight( 0xffffff, 5 );
    light1.position.set( 0, -5, -3 );
    scene.add( light1 );

    mesh.position.z = -16;
    scene.add(mesh);
}

