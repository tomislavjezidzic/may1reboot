import gsap from "gsap";

export default class Renderer {
    constructor() {

    }

    init(THREE) {
        const renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.autoUpdate = false;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.classList.add('c-canvas');
        document.body.appendChild(renderer.domElement);

        setTimeout(() => {
            renderer.shadowMap.needsUpdate = true;
        }, 300);
        return renderer;
    }
}
