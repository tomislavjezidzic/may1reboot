import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

export default class MainModelLoad {
    constructor(manager) {
        this.loader = new GLTFLoader(manager);
    }

    init(THREE, scene) {
        let material = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa,
            side: THREE.DoubleSide,
        });
        this.loader.load(
            `${window.modelPath}`,
            (gltf) => {
                const model = gltf.scene;
                model.traverse((obj) => {
                    if (obj instanceof THREE.Mesh) {
                        obj.material = material;
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                    }
                });
                scene.add(model);
            },
            (xhr) => {
                // console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
            },
            (error) => {
                // console.error('An error happened', error);
            },
        );
    }
}
