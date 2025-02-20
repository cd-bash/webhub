import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {camera, renderer, scene} from "./scene.ts";

const width = 1.5;

const shape = new THREE.Shape();
shape.moveTo( -width, -width );
shape.lineTo( 0, width );
shape.lineTo( width, -width );
shape.lineTo( -width, -width );

const extrudeSettings = {
    steps: 0,
    depth: 1,
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

    camera.position.z = 3;
    controls.panSpeed = 0;
    controls.rotateSpeed = 0.5;
    controls.update();
}