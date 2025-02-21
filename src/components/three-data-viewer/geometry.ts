import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {camera, renderer, scene} from "./scene.ts";
import {label} from "./label.ts";

const width = 1.5;

const pointA = new THREE.Vector2( -width, -width );
const pointB = new THREE.Vector2( 0, width );
const pointC = new THREE.Vector2( width, -width );

const shape = new THREE.Shape();
shape.moveTo( pointA.x, pointA.y );
shape.lineTo( pointB.x, pointB.y );
shape.lineTo( pointC.x, pointC.y );
shape.lineTo( pointA.x, pointA.y );

const extrudeSettings = {
    steps: 1,
    depth: -1,
    bevelEnabled: false,
};

const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});



//-----------------------------------------------------------------------

export const initGeometry = () => {
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(mesh);

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

const backdrop = () => {
    const geometry = new THREE.SphereGeometry(10);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -15;
    scene.add(mesh);
}