import { cm1 } from './common';
import { Mesh } from 'three';
import { Stuff } from './Stuff';

export class Sofa extends Stuff {
    constructor(info) {
        super(info);

        cm1.gltfLoader.load(
            '/models/sofa.glb',
            glb => {
                this.modelMesh = glb.scene.children[0];
                this.modelMesh.position.set(this.x, this.y, this.z);
                cm1.scene.add(this.modelMesh);
                this.modelMesh.scale.set(2, 2, 2)
            }
        );

        // this.mesh = new Mesh(this.geometry, this.material);
        // this.mesh.position.set(this.x, this.y, this.z);
        // this.mesh.castShadow = true;
        // this.mesh.receiveShadow = true;
        // cm1.scene.add(this.mesh);
    }
}