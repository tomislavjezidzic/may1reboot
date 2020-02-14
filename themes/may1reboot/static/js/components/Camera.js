export default class Camera {
    constructor() {

    }

    init(THREE) {
        // TODO: far vrati na 10
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-1.7, 2.1, 1.1);

        return camera;
    }
}
