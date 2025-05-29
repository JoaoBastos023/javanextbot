import * as THREE from 'three';

export function chaseAction(sceneElements) {
    const player = sceneElements.player;
    const chaser = sceneElements.chaser;

    const chaserBox = new THREE.Box3().setFromObject(chaser);
    const playerPosition = player.object.position;
    const direction = new THREE.Vector3().subVectors(playerPosition, chaser.position).normalize();
    const speed = 0.05;

    // Try to move in the intended direction
    const intendedMove = direction.clone().multiplyScalar(speed);
    const intendedPosition = chaser.position.clone().add(intendedMove);

    if (!willCollide(intendedPosition, chaserBox, sceneElements.walls, chaser)) {
        chaser.position.copy(intendedPosition);
    } else {
        // Try alternate directions if collision would occur
        const tangent = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();
        const alternateDirs = [
            tangent,                     // right
            tangent.clone().negate(),    // left
            direction.clone().negate(),  // backward
        ];

        let moved = false;
        for (let dir of alternateDirs) {
            const offset = dir.clone().multiplyScalar(speed);
            const newPosition = chaser.position.clone().add(offset);

            if (!willCollide(newPosition, chaserBox, sceneElements.walls, chaser)) {
                chaser.position.copy(newPosition);
                moved = true;
                break;
            }
        }

        if (!moved) {
            console.log("Chaser is stuck!");
        }
    }
}


// Check if new position will collide
function willCollide(newPosition, chaserBox, walls, chaser) {
    const testBox = chaserBox.clone().translate(newPosition.clone().sub(chaser.position));
    return walls.some(wall => wall.intersectsBox(testBox));
}


function isColliding(chaser, walls) {
    const chaserBox = new THREE.Box3().setFromObject(chaser);

    let blocked = false;
    for (const wallBox of walls) {
        if (chaserBox.intersectsBox(wallBox)) {
            blocked = true;
            break;
        }
    }

    return blocked;
}