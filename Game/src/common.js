import {
	Scene,
	BoxGeometry,
	SphereGeometry,
	MeshPhongMaterial
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
	World,
	Material
} from 'cannon-es';

export const cm1 = {
	gltfLoader: new GLTFLoader(),
	scene: new Scene(),
	mixer: undefined,

	// cannon
	world: new World(),
	defaultMaterial: new Material('default'),
	glassMaterial: new Material('glass'),
	playerMaterial: new Material('player'),
	pillarMaterial: new Material('pilar')
};

export const cm2 = {
	step: 0,
	backgroundColor: '#e0d2ae',
	lightColor: '#ffe9ac',
	lightOffColor: '#222',
	floorColor: '#192236',
	pillarColor: '#16213E',
	barColor: '#b14330',
	glassColor: '#9fdfff'
};

export const geo = {
	floor: new BoxGeometry(130, 1, 130),
	pillar: new BoxGeometry(5, 10, 5),
	bar: new BoxGeometry(0.1, 0.3, 1.2 * 21),
	sideLight: new SphereGeometry(0.1, 6, 6),
	glass: new BoxGeometry(1.2, 0.05, 1.2)
};

export const mat = {
	floor: new MeshPhongMaterial({ color: cm2.floorColor }),
	pillar: new MeshPhongMaterial({ color: cm2.pillarColor }),
	bar: new MeshPhongMaterial({ color: cm2.barColor }),
	sideLight: new MeshPhongMaterial({ color: cm2.lightColor }),

	glass1: new MeshPhongMaterial({
		color: cm2.glassColor,
		transparent: true,
		opacity: 0.1
	}),
	glass2: new MeshPhongMaterial({
		color: cm2.glassColor,
		transparent: true,
		opacity: 0.1
	})
};

const normalSound = new Audio();
normalSound.src = '/sounds/Crash.mp3';
const strongSound = new Audio();
strongSound.src = '/sounds/Wood Hit Metal Crash.mp3';
export const sounds = {
	normal: normalSound,
	strong: strongSound,
};