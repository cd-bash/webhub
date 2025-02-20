import * as THREE from 'three';

// TO REVIEW
// @ts-ignore
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

export const renderer = new THREE.WebGLRenderer();

renderer.setSize( 185, 185 );
renderer.setAnimationLoop( animate );

const width = 1;

const shape = new THREE.Shape();
shape.moveTo( -width, -width );
shape.lineTo( 0, width );
shape.lineTo( width, -width );
shape.lineTo( -width, -width );

const extrudeSettings = {
    steps: 2,
    depth: 1,
    bevelEnabled: false,
};


const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

const controls = new OrbitControls( camera, renderer.domElement );
scene.add( mesh );

camera.position.z = 3;
controls.panSpeed = 0;
controls.rotateSpeed = 0.5;
controls.update();

//-----------------------------------------------------------------------

function animate() {
    renderer.render( scene, camera );
}