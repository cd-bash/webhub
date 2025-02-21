import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {camera, renderer, scene} from "./scene.ts";
import {label} from "./label.ts";

const width = 1.5;

const pointAvalue = 85;
const pointBvalue = 25;
const pointCvalue = 50;

const pointA = new THREE.Vector2( -width, -width );
const pointB = new THREE.Vector2( 0, width );
const pointC = new THREE.Vector2( width, -width );

const shape = new THREE.Shape();
shape.moveTo( pointA.x, pointA.y );
shape.lineTo( pointB.x, pointB.y );
shape.lineTo( pointC.x, pointC.y );
shape.lineTo( pointA.x, pointA.y );

const valueShape = new THREE.Shape();
valueShape.moveTo( pointA.x + pointAvalue/100, pointA.y + pointAvalue/100 );
valueShape.lineTo( pointB.x, pointB.y );
valueShape.lineTo( pointC.x, pointC.y );

const extrudeSettings = {
    steps: 1,
    depth: 0,
    bevelEnabled: false,
};


//-----------------------------------------------------------------------

export const initGeometry = () => {
    drawMainShape(shape);

    for (let i = 0; i < 4; i++) {
        drawDepthShape(shape, i);
    }

    drawValueShape(valueShape);

    const controls = new OrbitControls(camera, renderer.domElement);

    label("Unity 3D", pointA);
    label("Blender", pointB);
    label("Adobe XD", pointC);

    camera.position.z = 3.75;
    controls.panSpeed = 0;
    controls.rotateSpeed = 0.5;
    controls.update();

    backdrop();
}

//-----------------------------------------------------------------------


const drawMainShape = (mainShape: THREE.Shape) => {
    const geometry = new THREE.ExtrudeGeometry(mainShape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}


const drawDepthShape = (depthShape: THREE.Shape, iteration: number) => {
    const geometry = new THREE.ExtrudeGeometry(depthShape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
        color: 0x333333,
        wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    const size = iteration * 0.25;
    const offset = 2.5;

    mesh.scale.set(size, size, size);
    mesh.position.z = iteration * 0.6 - offset;
    scene.add(mesh);
}

const drawValueShape = (valueShape: THREE.Shape) => {
    const geometry = new THREE.ExtrudeGeometry(valueShape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
        color: 0x3BFFC5,
        wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

const backdrop = () => {
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