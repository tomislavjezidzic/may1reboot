export default class Camera {
    constructor() {

    }

    init(THREE) {
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
        camera.position.set(0, 0, 0);

        return camera;
    }
}
