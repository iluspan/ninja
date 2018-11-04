
import {GameMgr} from "./GameMgr";
const {ccclass, property} = cc._decorator;
@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Integer)
    private speed:number = 1;

    @property(cc.Label)
    distanceLabel:cc.Label = null;
    @property(cc.Prefab)
    barrierItemArr:cc.Prefab[] = [];

    onLoad () {
        GameMgr.getInstance().screenH = this.node.height;
        GameMgr.getInstance().screenW = this.node.width;
        console.log("屏幕宽度：" + this.node.width + "屏幕高度:" + this.node.height);
        GameMgr.getInstance().gameScene = this;
    }

    start () {

    }

    update (dt) {}

    public refreshDistanceLabel(num:number):void {
        this.distanceLabel.string = Math.floor(num )+ "米";
    }
}
