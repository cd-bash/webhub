import * as THREE from "three";
import {scene} from "./scene.ts";

let gridSpheres: { mesh: THREE.Mesh, dist: number }[] = [];
let backgroundGridSpheres: { mesh: THREE.Mesh, baseY: number }[] = [];
let backgroundGridSpheres2D: { mesh: THREE.Mesh, baseY: number }[][] = [];

export const initHomePage = () => {
    createWavyGridFloor();
    createBackgroundGrid();
    animateWaves();
}

const createWavyGridFloor = () => {
    const size = 1000;
    const divisions = 40;
    const step = size / divisions;
    const halfSize = size / 2;

    const sphereGeometry = new THREE.SphereGeometry(4, 8, 8);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x3BFFC5, wireframe: true });

    gridSpheres = [];

    for (let i = 0; i <= divisions; i++) {
        for (let j = 0; j <= divisions; j++) {
            const x = -halfSize + i * step;
            const z = -halfSize + j * step;
            const dist = Math.sqrt(x * x + z * z) / halfSize; // normalized [0,1]
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(x, 0, z);
            scene.add(sphere);
            gridSpheres.push({ mesh: sphere, dist });
        }
    }
}

const createBackgroundGrid = () => {
    const size = 10000;
    const divisions = 50;
    const step = size / divisions;
    const halfSize = size / 2;

    const sphereGeometry = new THREE.SphereGeometry(3, 8, 8);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    backgroundGridSpheres = [];
    backgroundGridSpheres2D = [];

    // Create spheres and store in 2D array
    for (let i = 0; i <= divisions; i++) {
        backgroundGridSpheres2D[i] = [];
        for (let j = 0; j <= divisions; j++) {
            const x = -halfSize + i * step;
            const z = -halfSize + j * step - 500;
            const dist = Math.sqrt(x * x + z * z) / halfSize;
            const amplitude = -2500;
            const baseY = -2500 - dist * amplitude;
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(x, baseY, z);
            scene.add(sphere);
            const sphereObj = { mesh: sphere, baseY };
            backgroundGridSpheres.push(sphereObj);
            backgroundGridSpheres2D[i][j] = sphereObj;
        }
    }

    // Link neighbors with lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true });
    for (let i = 0; i <= divisions; i++) {
        for (let j = 0; j <= divisions; j++) {
            const current = backgroundGridSpheres2D[i][j].mesh.position;
            // Link to right neighbor
            if (i < divisions) {
                const right = backgroundGridSpheres2D[i + 1][j].mesh.position;
                const geometry = new THREE.BufferGeometry().setFromPoints([current, right]);
                const line = new THREE.Line(geometry, lineMaterial);
                scene.add(line);
            }
            // Link to bottom neighbor
            if (j < divisions) {
                const bottom = backgroundGridSpheres2D[i][j + 1].mesh.position;
                const geometry = new THREE.BufferGeometry().setFromPoints([current, bottom]);
                const line = new THREE.Line(geometry, lineMaterial);
                scene.add(line);
            }
        }
    }
}

const animateWaves = () => {
    const time = performance.now() * 0.001;
    for (const { mesh, dist } of gridSpheres) {
        const { x, z } = mesh.position;
        const amplitude = 20 + dist * 60;
        mesh.position.y = Math.sin(0.01 * (x + z) + time) * amplitude - 500;
    }

    requestAnimationFrame(animateWaves);
}