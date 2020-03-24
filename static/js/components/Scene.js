export default class Scene {
    constructor() {

    }

    init(THREE) {
        const scene = new THREE.Scene();
        const fogColor = new THREE.Color(0x888888);

        scene.background = fogColor;
        // TODO
        // scene.fog = new THREE.Fog(fogColor, 0.000001, 4);

        return scene;
    }
}
