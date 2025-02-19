import * as THREE from "three";
import {scene, windowHeight, windowWidth} from "./scene.ts";


const meshWhiteMaterial = new THREE.MeshStandardMaterial( {
    color: 0xdddddd,
    wireframe: true,
    emissive: 0xdddddd,
    emissiveIntensity: 0.5,
});

const meshBlueMaterial = new THREE.MeshStandardMaterial( {
    color: 0x3BFFC5,
    wireframe: false,
    emissive: 0x3BFFC5,
    emissiveIntensity: 0.5,
});



//-----------------------------------------------------------------------

export const initBgMeshes = () => {
    for (let i = 0; i < 1000; i++) {
        const meshSize = Math.random() * 30 + 5;
        createBgMeshInMargins(
            new THREE.IcosahedronGeometry(meshSize, 0),
            meshWhiteMaterial
        );
    }

    for (let i = 0; i < 100; i++) {
        const meshSize = Math.random() * 30 + 5;
        createBgMeshInMargins(
            new THREE.CylinderGeometry(meshSize, meshSize, 5, 32),
            meshBlueMaterial
        );
    }

    createGiantWireSphere();
    createBackdropPlane();
}

export const updateBgObjects = () => {
    scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.userData.rotationSpeed) {
            child.rotation.x += child.userData.rotationSpeed.x;
            child.rotation.y += child.userData.rotationSpeed.y;
        }
    });
}

//-----------------------------------------------------------------------

const createBgMeshInMargins = (
    spawnMesh: THREE.CylinderGeometry | THREE.IcosahedronGeometry | THREE.TorusGeometry | THREE.BoxGeometry,
    meshMaterial: THREE.MeshStandardMaterial
) => {
    const x = pointInMargins();
    const y = Math.random() * windowHeight * 15 - windowHeight * 7.5;
    const z = Math.random() * -2000 - 200;

    const mesh = new THREE.Mesh( spawnMesh, meshMaterial );

    mesh.userData.rotationSpeed = {
        x: Math.random() * 0.02 - 0.01,
        y: Math.random() * 0.02 - 0.01
    };

    scene.add( mesh );
    mesh.position.set(x, y, z);
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


const createGiantWireSphere = () => {
    const geometry = new THREE.IcosahedronGeometry(3250, 3);
    const material = new THREE.MeshBasicMaterial( {
        color: 0xdddddd,
        wireframe: true,
    } );

    const sphere = new THREE.Mesh( geometry, material );
    scene.add(sphere);
    sphere.position.set(0, 0, 0);
}


const createBackdropPlane = () => {
    const geometry = new THREE.PlaneGeometry(windowWidth * 20, windowHeight * 20, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x555555 });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(windowWidth, 0, -2000);
};


