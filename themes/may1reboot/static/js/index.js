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

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// dom loaded
docReady(() => {
    let renderer = new Renderer().init(THREE);
    let scene = new Scene().init(THREE);
    let camera = new Camera().init(THREE);
    // let controls = new Controls().init(OrbitControls, camera, renderer);
    let controls = null;
    let pointsLine = new PointsLine().init(THREE);
    let cameraPathLine = new CameraPathLine().init(THREE, scene, pointsLine);

    new RandomBoxes().init(THREE, scene, pointsLine);
    new StartEndSphere().init(THREE, scene);

    new Animation().init(THREE, controls, renderer, scene, camera, pointsLine);
});
