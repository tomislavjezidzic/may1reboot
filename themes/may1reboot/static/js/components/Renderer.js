export default class Renderer {
    constructor() {

    }

    init(THREE) {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.classList.add('c-canvas');
        document.body.appendChild(renderer.domElement);

        return renderer;
    }
}
