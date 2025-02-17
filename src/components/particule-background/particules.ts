import * as THREE from "three";
import {scene, windowHeight, windowWidth} from "./scene.ts";

//-----------------------------------------------------------------------

export const initBgObjects = () => {
    for (let i = 0; i < 40; i++) {
        createBgObject();
    }
}

//-----------------------------------------------------------------------

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