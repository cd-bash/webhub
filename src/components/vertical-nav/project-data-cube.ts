import * as THREE from 'three';

// TO REVIEW
// @ts-ignore
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

export const renderer = new THREE.WebGLRenderer();
renderer.setSize( 230, 230 );
renderer.setAnimationLoop( animate );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

const controls = new OrbitControls( camera, renderer.domElement );
scene.add( cube );

camera.position.z = 2;
controls.panSpeed = 0;
controls.rotateSpeed = 0.5;
controls.update();

//-----------------------------------------------------------------------

function animate() {
    renderer.render( scene, camera );
}