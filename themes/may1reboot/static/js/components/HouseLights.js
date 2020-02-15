export default class HouseLights {
    constructor() {
    }

    init(THREE, scene) {
        this.sphere = new THREE.SphereBufferGeometry(0.007, 5, 5);
        const light_1 = this.lightInit([1.4, 0.43, 0], THREE);
        const light_2 = this.smallLightInit([1.05, 0.24, -0.50], THREE);
        const light_3 = this.smallLightInit([1.05, 0.24, 0.45], THREE);
        const light_4 = this.smallLightInit([1.55, 0.24, 0.45], THREE);
        scene.add(light_1);
        scene.add(light_2);
        scene.add(light_3);
        scene.add(light_4);
    }

    lightInit(position, THREE) {
        const light = new THREE.PointLight(0xffff00, 0.4, 1);
        light.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({color: 0xffff00})));
        light.position.set(position[0], position[1], position[2]);

        return light;
    }

    smallLightInit(position, THREE) {
        const light = new THREE.PointLight(0xffff00, 0.3, 0.3);
        light.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({color: 0xffff00})));
        light.position.set(position[0], position[1], position[2]);

        return light;
    }
}
