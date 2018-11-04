
const {ccclass, property} = cc._decorator;

@ccclass
export default class BorderView extends cc.Component {


    start () {
        //开启碰撞系统
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    }

    onCollisionEnter(other,self) {
        console.log("collider with border enter...");
    }

    onCollisionStay(other,self) {
        console.log("collider with border stay...");
    }

    onCollisionExit(other,self) {
        let node:cc.Node = other.node;
        if (node) {
            node.removeFromParent(true);
        }
        console.log("collier with border exit...");
    }


    // update (dt) {}
}
