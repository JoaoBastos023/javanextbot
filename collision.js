// COLLISION
import * as THREE from 'three';

import {createWalls} from './walls.js';

// Collision detection function
// Collision detection function
export function isColliding(obj, obstacle) {
    // Ensure world transforms are updated
    obj.updateMatrixWorld(); 
    obstacle.updateMatrixWorld();

    const cameraPos = obj.position;

    const playerSize = new THREE.Vector3(1, 1.7, 1); // width, height, depth

    const objBox = new THREE.Box3().setFromCenterAndSize(cameraPos, playerSize);
    const obstacleBox = new THREE.Box3().setFromObject(obstacle);
    
    return objBox.intersectsBox(obstacleBox);
}

const cameraBox = new THREE.Box3(); // Will be updated every frame


export function isCameraColliding(cameraObject, boxes, size = new THREE.Vector3(1, 1.7, 1)) {
    const camPos = cameraObject.position;
    const cameraBox = new THREE.Box3().setFromCenterAndSize(camPos, size);

    for (const box of boxes) {
        if (cameraBox.intersectsBox(box)) {
            return true;
        }
    }

    return false;
}

export function addCollisions() {
    const walls = createWalls();
    return walls;
}

export function checkEndZoneCollision(sceneElements) {
    const playerBox = new THREE.Box3().setFromCenterAndSize(
        sceneElements.control.object.position,
        new THREE.Vector3(1, 1.7, 1) // player size
    );

    if (playerBox.intersectsBox(sceneElements.endZone)) {
        return 1;
    } else return 0;
}