import * as THREE from "three";
import {scene} from "./scene.ts";


export const initDiscs = () => {
    createDisc();

}


const createDisc = () => {
    const geometry = new THREE.CylinderGeometry(800, 800, 5, 8);
    const material = new THREE.MeshBasicMaterial( {
        color: 0xdddddd,
        wireframe: true,
    } );

    const disc = new THREE.Mesh( geometry, material );
    scene.add(disc);
    disc.position.set(-500, 0, 0);
    disc.rotation.x = -50;
}