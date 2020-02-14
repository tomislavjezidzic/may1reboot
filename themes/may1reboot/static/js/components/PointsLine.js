export default class PointsLine {
    constructor() {

    }

    init(THREE) {
        let pointsArr = [];
        pointsArr.push(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(10, 0, -10),
            new THREE.Vector3(20, 20, 0),
            new THREE.Vector3(30, 30, 10),
            new THREE.Vector3(30, -20, 20),
            new THREE.Vector3(20, 0, 30),
            new THREE.Vector3(10, -10, 30),
            new THREE.Vector3(0, 0, 30),
            new THREE.Vector3(-10, 10, 30),
            new THREE.Vector3(-10, 20, 30),
            new THREE.Vector3(0, 30, 30),
            new THREE.Vector3(10, 35, 30),
            new THREE.Vector3(40, 30, 25),
            new THREE.Vector3(10, 25, 10),
            new THREE.Vector3(0, 30, 10),
            new THREE.Vector3(-10, 20, 10),
            new THREE.Vector3(-10, 10, 10),
            new THREE.Vector3(0, 0, 10),
            new THREE.Vector3(10, -10, 10),
            new THREE.Vector3(20, -15, 10),
            new THREE.Vector3(30, -15, 10),
            new THREE.Vector3(40, -15, 10),
            new THREE.Vector3(50, -15, 10),
            new THREE.Vector3(60, 0, 10),
            new THREE.Vector3(70, 10, 0),
            new THREE.Vector3(80, 60, 5),
            new THREE.Vector3(90, 5, 0),
            new THREE.Vector3(100, 0, 10),
            new THREE.Vector3(30, 40, 20),
            new THREE.Vector3(20, 0, 30),
            new THREE.Vector3(10, 10, 30),
            new THREE.Vector3(0, -10, 30),
            new THREE.Vector3(-10, 10, 35),
            new THREE.Vector3(-10, 20, 30),
            new THREE.Vector3(30, 30, 10),
            new THREE.Vector3(30, -20, 20),
            new THREE.Vector3(20, 0, 30),
            new THREE.Vector3(10, -10, 30),
            new THREE.Vector3(0, 0, 30),
            new THREE.Vector3(-10, 10, 30),
            new THREE.Vector3(-10, 20, 30),
            new THREE.Vector3(0, 30, 30),
            new THREE.Vector3(10, 35, 30),
            new THREE.Vector3(20, 30, 15)
        );

        return new THREE.CatmullRomCurve3(pointsArr, false);
    }
}
