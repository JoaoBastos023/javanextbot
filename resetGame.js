import * as THREE from 'three';

export function resetGame(sceneElements, keyW, keyS, keyD, keyA) {
    alert("Game Over! Restarting..."); // Show game over message
    keyW = false;
    keyD = false;
    keyA = false;
    keyS = false;

    // Reset player's position
    sceneElements.camera.position.set(0, 2, 5);

    const spawnPoints = [
    new THREE.Vector3(51, 1.5, -44),
    new THREE.Vector3(-18, 1.5, -45),
    new THREE.Vector3(-27, 1.5, 12),
    new THREE.Vector3(-17, 1.5, 49),
    new THREE.Vector3(39, 1.5, 13)
    ];

    // Get random point to spawn the chaser at      
    const randomIndex = Math.floor(Math.random() * spawnPoints.length);
    const spawnPoint = spawnPoints[randomIndex];

    sceneElements.chaser.position.set(spawnPoint);

}