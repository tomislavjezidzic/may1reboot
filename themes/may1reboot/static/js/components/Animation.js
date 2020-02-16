import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {SavePass} from "three/examples/jsm/postprocessing/SavePass";
import {CopyShader} from "three/examples/jsm/shaders/CopyShader";
import {BlendShader} from "three/examples/jsm/shaders/BlendShader";

export default class Animation {
    constructor() {

    }

    blurInit(THREE, scene, camera, renderer) {
        // Post-processing inits
        const composer = new EffectComposer(renderer);

        // render pass
        const renderPass = new RenderPass(scene, camera);

        const renderTargetParameters = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: false
        };

        // save pass
        const savePass = new SavePass(
            new THREE.WebGLRenderTarget(
                window.innerWidth,
                window.innerHeight,
                renderTargetParameters
            )
        );

        // blend pass
        const blendPass = new ShaderPass(BlendShader, "tDiffuse1");
        blendPass.uniforms["tDiffuse2"].value = savePass.renderTarget.texture;
        blendPass.uniforms["mixRatio"].value = 0.8;

        // output pass
        const outputPass = new ShaderPass(CopyShader);
        outputPass.renderToScreen = true;

        // adding passes to composer
        composer.addPass(renderPass);
        composer.addPass(blendPass);
        composer.addPass(savePass);
        composer.addPass(outputPass);

        return composer;
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


        let composer = this.blurInit(THREE, scene, camera, renderer);

        function update() {
            // controls.update();
            composer.render();
            // renderer.render(scene, camera);
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
