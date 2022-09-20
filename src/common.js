import { Scene, BoxGeometry, MeshPhongMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const cm1 = {
    canvas: document.querySelector('#three-canvas'),
    scene: new Scene(),
    gltfLoader: new GLTFLoader(),
    mixer: undefined
};

export const cm2 = {
    backgroundColor: '#f2f2cb',
    lightColor: '#ffe9ac',
    floorColor: '#3c3d36'
};

export const geo = {
    floor: new BoxGeometry(10, 0.5, 10)
};

export const mat = {
    floor: new MeshPhongMaterial({ color: cm2.floorColor})
};