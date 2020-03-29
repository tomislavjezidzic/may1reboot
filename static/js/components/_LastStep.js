import gsap from "gsap";

export default class _LastStep {
    constructor() {

    }

    init(scene) {
        console.log(scene);
        scene.children.forEach(child => {
            if (child.type === "PointLight") {
                gsap.to(child, {
                    duration: 1,
                    intensity: 0
                });

                gsap.to(child.children[0].scale, {
                    duration: 0.5,
                    x: 0.001,
                    y: 0.001,
                    z: 0.001
                });
            }
        });
    }
}
