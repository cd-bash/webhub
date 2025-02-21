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


const extrudeSettings = {
    steps: 1,
    depth: 0,
    bevelEnabled: false,
};


//-----------------------------------------------------------------------

export const initGeometry = () => {
    const shape = drawShape();
    const mainMesh = buildMesh(shape, 0xffffff);
    scene.add(mainMesh);

    for (let i = 0; i < 4; i++) {
        createDepthMesh(shape, i);
    }

    const valueShape = drawShape(
        {x: pointAvalue/100, y: pointAvalue/100},
        {x: pointBvalue/100, y: pointBvalue/100},
        {x: pointCvalue/100, y: pointCvalue/100}
    );
    const valueMesh = buildMesh(valueShape, 0x3BFFC5);
    scene.add(valueMesh);

    const controls = new OrbitControls(camera, renderer.domElement);

    label("Unity 3D", pointA);
    label("Blender", pointB);
    label("Adobe XD", pointC);

    camera.position.z = 3.75;
    controls.panSpeed = 0;
    controls.rotateSpeed = 0.5;
    controls.update();
}

//-----------------------------------------------------------------------

const buildMesh = (shape: THREE.Shape, shapeColor: THREE.ColorRepresentation) => {
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
        color: shapeColor,
        wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

const createDepthMesh = (depthShape: THREE.Shape, iteration: number) => {
    const mesh = buildMesh(depthShape, 0x333333);
    const size = iteration * 0.25;
    const offset = 2.5;

    mesh.scale.set(size, size, size);
    mesh.position.z = iteration * 0.6 - offset;
    scene.add(mesh);
}

const drawShape = (
    translationA: {x: number, y: number} = {x: 0, y: 0},
    translationB: {x: number, y: number} = {x: 0, y: 0},
    translationC: {x: number, y: number} = {x: 0, y: 0}
) => {
    const shape = new THREE.Shape();

    shape.moveTo(pointA.x + translationA.x, pointA.y + translationA.y);
    shape.lineTo(pointB.x, pointB.y - translationB.y);
    shape.lineTo(pointC.x - translationC.x, pointC.y + translationC.y);
    shape.lineTo(pointA.x + translationA.x, pointA.y + translationA.y);

    return shape;
}


