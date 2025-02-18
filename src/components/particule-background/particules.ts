import * as THREE from "three";
import {scene, windowHeight, windowWidth} from "./scene.ts";


//-----------------------------------------------------------------------

export const initBgObjects = () => {
    for (let i = 0; i < 1000; i++) {
        createBgObject();
    }

    createCurvedPlane();
}


//-----------------------------------------------------------------------

const createBgObject = () => {
    const size = Math.random() * 30 + 5;
    const geometry = new THREE.IcosahedronGeometry(size, 1);
    const material = new THREE.MeshBasicMaterial( {
        color: 0xdddddd,
        wireframe: true
    } );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    const x = pointInMargins();
    const y = Math.random() * windowHeight * 15 - windowHeight * 7.5;
    const z = Math.random() * -2000 - 200;

    sphere.userData.rotationSpeed = {
        x: Math.random() * 0.02 - 0.01,
        y: Math.random() * 0.02 - 0.01
    };

    sphere.position.set(x, y, z);
}


const pointInMargins = () => {
    const wrapper = 720;
    let point: number;

    if (Math.random() < 0.5) {
        point = Math.random() * (windowWidth / 2 - wrapper * 2) - windowWidth / 2;
    } else {
        point = Math.random() * (windowWidth / 2 - wrapper * 2) + windowWidth / 2 + wrapper;
    }

    return point;
}


const createCurvedPlane = () => {
    const geometry = new THREE.PlaneGeometry(windowWidth * 20, windowHeight * 20, 32, 32);

    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(windowWidth, 0, -2000); // Position the plane in the far distance
};


