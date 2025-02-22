import * as THREE from "three";

export let renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cameraTarget = new THREE.Vector3(0, 0 ,3.75),
    canvasWidth = 185,
    canvasHeight = 185;

let isDragging = false,
    previousMousePosition = { x: 0, y: 0 },
    cameraLookAt = new THREE.Vector3(0, 0, 0);

const initialCameraPosition = new THREE.Vector3(),
    initialCameraRotation = new THREE.Euler(),
    initialCameraTarget = new THREE.Vector3(0, 0, 3.75),
    cameraTiltLimit = 2;

//-----------------------------------------------------------------------
export const initStage = () => {
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('mouseup', onMouseUp, false);
}

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

    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
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
    camera.position.z = 3.75;

    initialCameraPosition.copy(camera.position);
    initialCameraRotation.copy(camera.rotation);
}

export const sceneAnimation = () => {
    if (!isDragging) {
        cameraTarget.lerp(initialCameraTarget, 0.1);
    }

    camera.position.lerp(cameraTarget, 0.2);
    camera.lookAt(cameraLookAt);
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

const onMouseDown = (event: MouseEvent) => {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

const onMouseMove = (event: MouseEvent) => {
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        const moveSpeed = 0.01;
        const offsetX = deltaMove.x * moveSpeed;
        const offsetY = deltaMove.y * moveSpeed;

        cameraTarget.x += offsetX;
        cameraTarget.y -= offsetY;

        cameraTarget.clamp(
            new THREE.Vector3(-cameraTiltLimit, -cameraTiltLimit, cameraTarget.z),
            new THREE.Vector3(cameraTiltLimit, cameraTiltLimit, cameraTarget.z)
        );

        camera.lookAt(cameraTarget);

        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }
}

const onMouseUp = () => {
    isDragging = false;
}


