export default class MainLight {
    constructor() {

    }

    init(THREE, scene) {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(-1, 2, 2);
        directionalLight.castShadow = true;
        directionalLight.addHelper = true;
        directionalLight.shadow.camera.near = 0.01;
        directionalLight.shadow.camera.far = 10;
        scene.add(directionalLight);
    }
}
