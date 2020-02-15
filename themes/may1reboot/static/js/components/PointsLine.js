export default class PointsLine {
    constructor() {

    }

    init(THREE) {
        let pointsArr = [];
        pointsArr.push(
            new THREE.Vector3(2.53, 1.92, 2.72),
            new THREE.Vector3(1.52, 0.17, 1.34),
            new THREE.Vector3(0.64, 0.23, 1.8),
            new THREE.Vector3(0.1, 0.13, 0.06),
            new THREE.Vector3(0.75, 0.15, -1),
            new THREE.Vector3(1.4, 0.15, -1),
            new THREE.Vector3(2, 0.4, -0.4),
            new THREE.Vector3(1.18, 0.46, 1.03),
            new THREE.Vector3(-0.2, 0.26, 0.84),
            new THREE.Vector3(0.62, 0.17, 0),
            new THREE.Vector3(0.77, 0.19, -1.45),
            new THREE.Vector3(0.2, 0.19, -1.2),
            new THREE.Vector3(0.6, 0.15, -0.65)
        );

        return new THREE.CatmullRomCurve3(pointsArr, false);
    }
}
