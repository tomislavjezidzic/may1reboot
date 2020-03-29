import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {SavePass} from "three/examples/jsm/postprocessing/SavePass";
import {CopyShader} from "three/examples/jsm/shaders/CopyShader";
import {BlendShader} from "three/examples/jsm/shaders/BlendShader";
import PresentModelLoad from "./PresentModelLoad";
import _FirstStep from "@/components/_FirstStep";
import _ThirdStep from "@/components/_ThirdStep";
import _FourthStep from "@/components/_FourthStep";
import _LastStep from "@/components/_LastStep";

import gsap from "gsap";

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
        // composer.addPass(blendPass);
        // composer.addPass(savePass);
        // composer.addPass(outputPass);

        return composer;
    }

    init(THREE, controls, renderer, scene, camera, pointsLine, manager) {
        let camPosIndex = 0;
        let posIndex = 0;
        let diff = 0;
        let counter = 0;
        const progress = [470, 670, 350, 650, 840];
        const present = new PresentModelLoad(manager);
        const firstStep = new _FirstStep();
        const thirdStep = new _ThirdStep();
        const fourthStep = new _FourthStep();
        const lastStep = new _LastStep();

        document.querySelector("button").addEventListener("click", ev => {
                ev.preventDefault();
                posIndex += progress[counter];
                counter++;

                switch (counter) {
                    case 1:
                        setTimeout(() => {
                            console.log("1 step");
                            firstStep.init();
                        }, 9000);
                        break;
                    case 2:
                        console.log("2 step");
                        present.init(THREE, scene);
                        break;
                    case 3:
                        setTimeout(() => {
                            console.log("3 step");
                            thirdStep.init();
                        }, 9000);
                        break;
                    case 4:
                        setTimeout(() => {
                            console.log("4 step");
                            fourthStep.init();
                        }, 12000);
                        break;
                    default:
                        setTimeout(() => {
                            console.log("last step");
                            lastStep.init(scene);
                        }, 12000);
                }

                diff = posIndex - camPosIndex;
            }
        );

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
