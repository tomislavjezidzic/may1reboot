export default class Floor {
    constructor() {

    }

    init(THREE, scene){
        const geometry = new THREE.PlaneGeometry(4, 5, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x555555,
        });
        const floor = new THREE.Mesh(geometry, material);
        floor.rotateX(-Math.PI / 2);
        floor.position.set(1, 0.05, 0);
        floor.receiveShadow = true;
        floor.castShadow = false;
        scene.add(floor);
    }

}
