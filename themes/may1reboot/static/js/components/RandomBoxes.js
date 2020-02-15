export default class RandomBoxes {
    constructor() {

    }

    init(THREE, scene, pointsLine) {
        for (let i = 0; i < pointsLine.points.length; i++) {
            let b = new THREE.Mesh(
                new THREE.BoxGeometry(0.01, 0.01, 0.01),
                new THREE.MeshBasicMaterial({color: "#EEEDDD"})
            );

            b.position.x = pointsLine.points[i].x;
            b.position.y = pointsLine.points[i].y;
            b.position.z = pointsLine.points[i].z;

            scene.add(b);
        }
    }
}
