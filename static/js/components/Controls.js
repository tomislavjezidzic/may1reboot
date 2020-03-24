export default class Controls {
    constructor() {

    }

    init(OrbitControls, camera, renderer) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        return controls;
    }
}
