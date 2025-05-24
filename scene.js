// FUCNTIONS FOR BUILDING THE SCENE

const scene = {

    // Create and insert in the scene graph the models of the 3D scene

    load3DObjects: function (sceneGraph) {

        // ************************** //
        // Create a ground plane
        // ************************** //
        const planeGeometry = new THREE.PlaneGeometry(60, 60);
        const planeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(200, 200, 200)', side: THREE.DoubleSide });
        const planeObject = new THREE.Mesh(planeGeometry, planeMaterial);
        sceneGraph.add(planeObject);

        // Change orientation of the plane using rotation
        planeObject.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        // Set shadow property
        planeObject.receiveShadow = true;

        // ************************** //
        // Create a Cube (PLAYER)
        // ************************** //
        // Cube center is at (0,0,0)
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(255,0,0)' });
        const cubeObject = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sceneGraph.add(cubeObject);

        // Set position of the cube
        // The base of the cube will be on the plane 
        cubeObject.translateY(0.5);

        // Set shadow property
        cubeObject.castShadow = true;
        cubeObject.receiveShadow = true;

        // Name
        cubeObject.name = "cube";

        // ************
        // Add a chaser
        // ************
        const chaserGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const chaserMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        const chaser = new THREE.Mesh(chaserGeometry, chaserMaterial);
        sceneGraph.add(chaser);

        chaser.name = "chaser";

        chaser.translateY(0.5);
        chaser.translateX(-10);

        //
        //
        //ADD WALLS
        //
        //

        function createCorridorSegment(width, height, depth) {
            const geometry = new THREE.BoxGeometry(width, height, depth);
            const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
            return new THREE.Mesh(geometry, material);
        }

    }
};