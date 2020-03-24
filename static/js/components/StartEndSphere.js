export default class StartEndSphere {
    constructor() {

    }

    init(THREE, scene) {
        let sphereGeom = new THREE.SphereGeometry(1, 10, 10);
        let sphereMat = new THREE.MeshBasicMaterial({
            color: "#EE0000"
        });
        let sphere = new THREE.Mesh(sphereGeom, sphereMat);
        let sphere2 = new THREE.Mesh(sphereGeom, sphereMat);
        sphere.position.set(0, 0, 0);
        sphere2.position.set(20, 30, 15);
        scene.add(sphere);
        scene.add(sphere2);
    }
}
