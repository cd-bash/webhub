import * as THREE from "three";
import {scene} from "./scene.ts";
import {Vector2} from "three";

const offset = 1.5

//-----------------------------------------------------------------------

export const label = (label: string, spawnPoint: Vector2) => {
    const texture = createLabelTexture(label);
    const labelMesh = createLabelPlane(texture);

    labelMesh.position.set(spawnPoint.x, spawnPoint.y * offset, 0);
    scene.add(labelMesh);
}

//-----------------------------------------------------------------------

const createLabelPlane = (texture: THREE.CanvasTexture) => {
    const geometry = new THREE.PlaneGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    return plane;
}

const createLabelTexture = (label: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = 256;
    const height = 128;
    canvas.width = width;
    canvas.height = height;

    context!.fillStyle = 'white';
    context!.font = '48px Arial';
    context!.textAlign = 'center';
    context!.textBaseline = 'middle';
    context!.fillText(label, width / 2, height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

