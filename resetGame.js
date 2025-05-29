import * as THREE from 'three';

export function resetGame(sceneElements) {
    alert("Game Over! Restarting..."); // Show game over message

    // Reset player's position
    sceneElements.camera.position.set(0, 2, 5);

    sceneElements.chaser.position.copy(chaserPostion());

}

export function chaserPosition() {
    const spawnPoints = [
    new THREE.Vector3(51, 1.5, -44),
    new THREE.Vector3(-18, 1.5, -45),
    new THREE.Vector3(-37, 1.5, 18),
    new THREE.Vector3(-17, 1.5, 49),
    new THREE.Vector3(39, 1.5, 13)
    ];

    // Get random point to spawn the chaser at      
    const randomIndex = Math.floor(Math.random() * spawnPoints.length);
    console.log(randomIndex);
    const spawnPoint = spawnPoints[randomIndex];

    return spawnPoint;

}