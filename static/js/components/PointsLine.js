export default class PointsLine {
    constructor() {

    }

    init(THREE) {
        let pointsArr = [];
        pointsArr.push(
            new THREE.Vector3(2.53, 1.92, 2.72),
            new THREE.Vector3(1.52, 0.34, 1.34),
            new THREE.Vector3(-0.2, 0.14, 0.34),
            new THREE.Vector3(0.2, 0.34, -1.34),
            new THREE.Vector3(1.2, 0.74, -0.44),
            new THREE.Vector3(1.5, 0.24, 1.2),
            new THREE.Vector3(-0.2, 0.14, 0.64),
            new THREE.Vector3(0.2, 0.24, -1.34),
            new THREE.Vector3(0.82, 0.24, 0.1),
            new THREE.Vector3(0.55, 0.2, 1.24),
            new THREE.Vector3(1.12, 0.34, 1.44),
            new THREE.Vector3(1.25, 0.24, 1),

        );

        return new THREE.CatmullRomCurve3(pointsArr, false, "catmullrom", 0);
    }
}
