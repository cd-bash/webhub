import * as THREE from 'three';

export let renderer: THREE.WebGLRenderer;

let scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cameraLookAt = new THREE.Vector3(0, 0, 0),
    cameraTarget = new THREE.Vector3(0, 0 ,800),
    windowWidth: number,
    windowHeight: number,
    windowHalfWidth: number,
    windowHalfHeight: number,
    mouseX = 0,
    mouseY = 0,
    graphicCanvas,
    canvasWidth = 240,
    canvasHeight = 240;

//-----------------------------------------------------------------------

export function animatedBackground() {
    initStage();
    initScene();
    initCanvas();
    initCamera();
    initBgObjects();
    animate();

    renderer.render(scene, camera);
    return renderer.domElement;
}

//-----------------------------------------------------------------------


// region 3D Scene Setups
const initStage = () => {
    setWindowSize();

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
    renderer.setSize(windowWidth, windowHeight);

    scene.background = new THREE.Color(0xFFFFFF);
}

const initCamera = () => {
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

const initCanvas = () => {
    graphicCanvas = document.createElement('canvas');
    graphicCanvas.width = canvasWidth;
    graphicCanvas.height = canvasHeight;
}
//endregion

//region 3D Objects
const initBgObjects = () => {
    for (let i = 0; i < 40; i++) {
        createBgObject();
    }
}

const createBgObject = () => {
    const geometry = new THREE.SphereGeometry( 10, 6, 6 );
    const material = new THREE.MeshBasicMaterial( {color: 0xdddddd} );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    const x = Math.random() * windowWidth * 2 - windowWidth;
    const y = Math.random() * windowHeight * 2 - windowHeight;
    const z = Math.random() * -2000 - 200;
    sphere.position.set(x, y, z);
}
//endregion

//region Interactive Events
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

const setWindowSize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    windowHalfWidth = windowWidth / 2;
    windowHalfHeight = windowHeight / 2;
}

const animate = () => {
    requestAnimationFrame(animate);
    camera.position.lerp(cameraTarget, 0.2);
    camera.lookAt(cameraLookAt);
    render();
}

const render = () => {
    renderer.render(scene, camera);
}
//endregion

