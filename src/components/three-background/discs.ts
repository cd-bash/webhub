import * as THREE from "three";
import {scene} from "./scene.ts";

let gridSpheres: THREE.Mesh[] = [];

export const initDiscs = () => {
    createWavyGridFloor();
    animateWaves();
}

const createDisc = () => {
    const geometry = new THREE.CylinderGeometry(800, 800, 5, 8);
    const material = new THREE.MeshBasicMaterial({
        color: 0xdddddd,
        wireframe: true,
    });

    const disc = new THREE.Mesh(geometry, material);
    scene.add(disc);
    disc.position.set(-500, 0, 0);
    disc.rotation.x = -50;
}

const createWavyGridFloor = () => {
    const size = 2000;
    const divisions = 40;
    const step = size / divisions;
    const halfSize = size / 2;

    const sphereGeometry = new THREE.SphereGeometry(12, 8, 8);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x3BFFC5 });

    gridSpheres = [];

    for (let i = 0; i <= divisions; i++) {
        for (let j = 0; j <= divisions; j++) {
            const x = -halfSize + i * step;
            const z = -halfSize + j * step;
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(x, 0, z);
            scene.add(sphere);
            gridSpheres.push(sphere);
        }
    }
}

const animateWaves = () => {
    const time = performance.now() * 0.001;
    for (const sphere of gridSpheres) {
        const { x, z } = sphere.position;
        sphere.position.y = (Math.sin(0.01 * (x + z) + time) * 20) - 100;
    }
    requestAnimationFrame(animateWaves);
}