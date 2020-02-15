export default class Animation {
    constructor() {

    }

    init(THREE, controls, renderer, scene, camera, pointsLine) {
        let camPosIndex = 0;
        let posIndex = 0;
        let diff = 0;

        document.querySelector("button").addEventListener("click", ev => {
            ev.preventDefault();
            posIndex += 498;

            diff = posIndex - camPosIndex;
        });

        let camPos = pointsLine.getPoint(camPosIndex / 3000);
        let camRot = pointsLine.getTangent(camPosIndex / 3000);

        camera.position.x = camPos.x;
        camera.position.y = camPos.y;
        camera.position.z = camPos.z;

        camera.rotation.x = camRot.x;
        camera.rotation.y = camRot.y;
        camera.rotation.z = camRot.z;

        camera.lookAt(pointsLine.getPoint((camPosIndex + 1) / 3000));


        function update() {
            // controls.update();
            renderer.render(scene, camera);
            if (camPosIndex < posIndex && camPosIndex < 3000) {
                camPos = pointsLine.getPoint(camPosIndex / 3000);
                camRot = pointsLine.getTangent(camPosIndex / 3000);

                if (camPosIndex + 100 > posIndex) {
                    camPosIndex += 1 - (Math.floor(camPosIndex) + 100 - posIndex) / 100;
                } else if (camPosIndex < posIndex - (diff - 100)) {
                    camPosIndex += -(posIndex - camPosIndex - diff - 30) / 100;
                } else {
                    camPosIndex += 1.5;
                }

                camera.position.x = camPos.x;
                camera.position.y = camPos.y;
                camera.position.z = camPos.z;

                camera.rotation.x = camRot.x;
                camera.rotation.y = camRot.y;
                camera.rotation.z = camRot.z;

                camera.lookAt(pointsLine.getPoint((camPosIndex + 1) / 3000));
            }
            requestAnimationFrame(update);
        }

        update();
    }
}
