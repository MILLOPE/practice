/**
 * Created by xiawei on 2017/4/7.
 */
class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        // 调用父类的构造函数 super是父类的实例
        super(geometry, materials);

        this.idMatrix = SkinnedMesh.defaultMatrix();
        this.bones = [];
        this.boneMatrices = [];
        //...
    }
    update(camera) {
        //...
        super.update();
    }
    // 静态方法
    static defaultMatrix() {
        return new THREE.Matrix4();
    }
}
