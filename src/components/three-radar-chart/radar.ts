import * as THREE from "three";
import {scene} from "./scene.ts";
import {label} from "./label.ts";

const graphicSize = 1.5;

export type TechUsage = {
    technology: string,
    percentage: number
}

const triangle = [
    {x: -graphicSize, y: -graphicSize},
    {x: 0, y: graphicSize},
    {x: graphicSize, y: -graphicSize}
]

const extrudeSettings = {
    steps: 1,
    depth: 0,
    bevelEnabled: false,
};


//-----------------------------------------------------------------------

export const initRadar = (techs: TechUsage[]) => {
    const radarSize = determineRadarSize(techs.length);
    if (radarSize == undefined) { return; }

    const shape = drawShape(radarSize);
    const mainMesh = buildMesh(shape, 0xffffff);
    scene.add(mainMesh);

    for (let i = 0; i < 4; i++) {
        createDepthMesh(shape, i);
    }

    for (let i = 0; i < techs.length; i++) {
        label(techs[i].technology, radarSize[i]);
    }

    const valueShape = determineValueShape(techs.map(tech => tech.percentage));
    const valueMesh = buildMesh(valueShape, 0x3BFFC5);
    scene.add(valueMesh);
}

//-----------------------------------------------------------------------

const buildMesh = (shape: THREE.Shape, shapeColor: THREE.ColorRepresentation) => {
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
        color: shapeColor,
        wireframe: true
    });

    return new THREE.Mesh(geometry, material);
}

const createDepthMesh = (depthShape: THREE.Shape, iteration: number) => {
    const mesh = buildMesh(depthShape, 0x333333);
    const size = iteration * 0.25;
    const offset = 2.5;

    mesh.scale.set(size, size, size);
    mesh.position.z = iteration * 0.6 - offset;
    scene.add(mesh);
}

const drawShape = (points: {x: number, y: number}[]) => {
    const shape = new THREE.Shape();

    if (points.length > 0) {
        shape.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            shape.lineTo(points[i].x, points[i].y);
        }
        shape.lineTo(points[0].x, points[0].y);
    }

    return shape;
}

const determineValueShape = (values: number[]) => {
    let valueShape: {x: number, y: number}[] = [];
    const score = values.map(value => ((100 - value) / 100) * graphicSize);

    valueShape = [
        {x: triangle[0].x + score[0], y: triangle[0].y + score[0]},
        {x: triangle[1].x, y: triangle[1].y - score[1]},
        {x: triangle[2].x - score[2], y: triangle[2].y + score[2]}
    ];

    return drawShape(valueShape);
}

const determineRadarSize = (size: number) => {
    if (size == 3) {
        return triangle;
    }
    else {
        console.log("Invalid number of technology. Create a new radar size or modify the number of technologies.");
        return;
    }
}




