export default class Scene {
    constructor() {

    }

    init(THREE) {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xaaaaaa);

        return scene;
    }
}
