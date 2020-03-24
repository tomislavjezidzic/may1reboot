export default class Camera {
    constructor() {

    }

    init(THREE, scene, pointsLine) {
        const material = new THREE.MeshLambertMaterial({color: 0xffffff});
        const points = pointsLine.getPoints(5000);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const line = new THREE.Line(geometry, material);

        scene.add(line);
    }
}
