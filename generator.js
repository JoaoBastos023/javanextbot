import * as THREE from 'three';

export function createGlowingObject(position) {
    const geometry = new THREE.SphereGeometry(0.25, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00ffcc,
        emissive: 0x00ffcc,
        emissiveIntensity: 1.5,
        metalness: 0.2,
        roughness: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0); // Local to group

    const light = new THREE.PointLight(0x00ffcc, 1, 5);
    light.position.set(0, 0, 0); // Also local to group

    const group = new THREE.Group();
    group.add(mesh, light);

    group.position.copy(position); // Global position applied here

    group.userData.baseScale = 1;

    return group;
}