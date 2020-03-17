import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from "gsap";

export default class PresentModelLoad {
    constructor(manager) {
        this.loader = new GLTFLoader(manager);
    }

    init(THREE, scene) {
        let material = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa,
            side: THREE.DoubleSide,
        });
        this.loader.load(
            `${window.presentPath}`,
            (gltf) => {
                const model = gltf.scene;
                model.traverse((obj) => {
                    if (obj instanceof THREE.Mesh) {
                        obj.material = material;
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                    }
                });
                model.scale.set(0.001, 0.001, 0.001);
                model.position.set(1.4, 0.59, 0.4);
                scene.add(model);

                this.animatePresent(model);
            },
            (xhr) => {
                // console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
            },
            (error) => {
                // console.error('An error happened', error);
            },
        );
    }

    animatePresent(model) {
        if (!model) {
            return;
        }

        gsap.to(model.scale, {
            duration: 0.7,
            delay: 9.5,
            x: 0.05,
            y: 0.05,
            z: 0.05,
            ease: "elastic.out(1, 0.3)"
        });

        function rotate() {
            model.rotation.y = model.rotation.y + 0.01;
            requestAnimationFrame(rotate);
        }

        rotate();
    }
}
