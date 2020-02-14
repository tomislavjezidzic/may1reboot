import '../scss/style.scss';
import * as THREE from 'three/build/three.module';

var OrbitControls = require('three-orbit-controls')(THREE);
import Renderer from "./components/Renderer";
import Scene from "./components/Scene";
import Camera from "./components/Camera";
import Controls from "./components/Controls";
import PointsLine from "./components/PointsLine";
import CameraPathLine from "./components/CameraPathLine";
import Animation from "./components/Animation";
import RandomBoxes from "./components/RandomBoxes";
import StartEndSphere from "./components/StartEndSphere";
import MainModelLoad from "./components/MainModelLoad";
import MainLight from "./components/MainLight";
import Floor from "./components/Floor";
import Sparkles from "./components/Sparkles";

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// dom loaded
docReady(() => {
    const renderer = new Renderer().init(THREE);
    const scene = new Scene().init(THREE);
    const camera = new Camera().init(THREE);
    const controls = new Controls().init(OrbitControls, camera, renderer);
    const sparkles = new Sparkles()
    // const controls = null;
    const pointsLine = new PointsLine().init(THREE);
    const cameraPathLine = new CameraPathLine().init(THREE, scene, pointsLine);

    // new RandomBoxes().init(THREE, scene, pointsLine);
    // new StartEndSphere().init(THREE, scene);
    new MainModelLoad().init(THREE, scene);

    new MainLight().init(THREE, scene);
    new Floor().init(THREE, scene);

    new Animation().init(THREE, controls, renderer, scene, camera, pointsLine);


    const globalSparkleContainer = new THREE.Object3D();
    globalSparkleContainer.position.x = 1;
    globalSparkleContainer.position.y = 0.06;
    globalSparkleContainer.position.z = 0;
    sparkles.init(THREE, globalSparkleContainer, 3.5, 3.5, 45);
    scene.add(globalSparkleContainer);
});
