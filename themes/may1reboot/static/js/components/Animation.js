export default class Animation {
    constructor() {

    }

    init(THREE, controls, renderer, scene, camera, pointsLine) {
        let camPosIndex = 0;
        let posIndex = 0;
        let diff = 0;

        let counter = 0;

        document.querySelector("button").addEventListener("click", ev => {
            ev.preventDefault();
            var curve = new THREE.CatmullRomCurve3([
                pointsLine.getPoint(counter), pointsLine.getPoint(counter + 1)
            ]);
            posIndex += curve.getLength();
            curve.tension = 0.5;

            console.log(Math.pow(pointsLine.getPoint(counter).distanceToSquared(pointsLine.getPoint(counter + 1)), 0.5));

            diff = posIndex - camPosIndex;
            counter++;
        });

        let camPos = pointsLine.getPoint(camPosIndex);
        let camRot = pointsLine.getTangent(camPosIndex);


        camPos = pointsLine.getPoint(camPosIndex / 5000);
        camRot = pointsLine.getTangent(camPosIndex / 5000);

        if (camPosIndex + 100 > posIndex) {
            camPosIndex += 1 - (camPosIndex + 100 - posIndex) / 100;
        } else if (camPosIndex < posIndex - (diff - 100)) {
            camPosIndex += -(posIndex - camPosIndex - diff - 10) / 100;
        } else {
            camPosIndex += 1;
        }

        camera.position.x = camPos.x;
        camera.position.y = camPos.y;
        camera.position.z = camPos.z;

        camera.rotation.x = camRot.x;
        camera.rotation.y = camRot.y;
        camera.rotation.z = camRot.z;

        camera.lookAt(pointsLine.getPoint((camPosIndex + 1) / 5000));


        function update() {
            // controls.update();
            renderer.render(scene, camera);
            if (camPosIndex < posIndex && camPosIndex < 5000) {
                camPos = pointsLine.getPoint(camPosIndex / 5000);
                camRot = pointsLine.getTangent(camPosIndex / 5000);

                if (camPosIndex + 100 > posIndex) {
                    camPosIndex += 1 - (camPosIndex + 100 - posIndex) / 100;
                } else if (camPosIndex < posIndex - (diff - 100)) {
                    camPosIndex += -(posIndex - camPosIndex - diff - 10) / 100;
                } else {
                    camPosIndex += 1;
                }

                camera.position.x = camPos.x;
                camera.position.y = camPos.y;
                camera.position.z = camPos.z;

                camera.rotation.x = camRot.x;
                camera.rotation.y = camRot.y;
                camera.rotation.z = camRot.z;

                camera.lookAt(pointsLine.getPoint((camPosIndex + 1) / 5000));
            }
            requestAnimationFrame(update);
        }

        update();
    }
}
