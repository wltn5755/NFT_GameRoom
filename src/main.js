import { cm1, cm2 } from './common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Floor } from './Floor';
import { Player } from './Player';
import { Sofa } from './Sofa';

// ----- 주제: MyRoom 게임 만들기

// Renderer
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
	canvas: cm1.canvas,
	antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Scene은 common.js에서 생성
cm1.scene.background = new THREE.Color(cm2.backgroundColor);

// Camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.y = 1.5;
camera.position.z = 4;
cm1.scene.add(camera);

// Light
const ambientLight = new THREE.AmbientLight(cm2.lightColor, 0.8);
cm1.scene.add(ambientLight);

const spotLightDistance = 50;
const spotLight1 = new THREE.SpotLight(cm2.lightColor, 1);
spotLight1.castShadow = true;
spotLight1.shadow.mapSize.width = 2048;
spotLight1.shadow.mapSize.height = 2048;
const spotLight2 = spotLight1.clone();
const spotLight3 = spotLight1.clone();
const spotLight4 = spotLight1.clone();
spotLight1.position.set(-spotLightDistance, spotLightDistance, spotLightDistance);
spotLight2.position.set(spotLightDistance, spotLightDistance, spotLightDistance);
spotLight3.position.set(-spotLightDistance, spotLightDistance, -spotLightDistance);
spotLight4.position.set(spotLightDistance, spotLightDistance, -spotLightDistance);
cm1.scene.add(spotLight1, spotLight2, spotLight3, spotLight4);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 바닥
const floor = new Floor({
	name: 'floor'
});

// 플레이어
const player = new Player({
	name: 'player',
	x: 0,
	y: 0.66,
	z: 0
});

// sofa
const sofa = new Sofa({
	name: 'sofa',
	x: 0,
	y: 0.66,
	z: -3.2
});



// 그리기
const clock = new THREE.Clock();

function draw() {
	const delta = clock.getDelta();

	if (cm1.mixer) cm1.mixer.update(delta);

	controls.update();

	renderer.render(cm1.scene, camera);
	renderer.setAnimationLoop(draw);
}

function setSize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(cm1.scene, camera);
}

// 이벤트
window.addEventListener('resize', setSize);
// window.addEventListener("keydown", keyDownHandler, false);

draw();

// player 움직임
// player.onkeydown = function(e) {
//     if(e.keyCode == 37) {
//         player.position.x -= 1;
//     } else if(e.keyCode == 39) {
//         player.position.x += 1;
//     } else if(e.keyCode == 38) {
//         player.position.z -= 1;
//     } else if(e.keyCode == 39) {
//         player.position.z += 1;
//     }
// };

