import {GameMgr} from "./GameMgr";
const {ccclass, property} = cc._decorator;

@ccclass
export default class BgController extends cc.Component {

    @property(cc.Integer)
    private moveSpeed:number = 1;
    @property(cc.Node)
    bg1:cc.Node = null;
    @property(cc.Node)
    bg2:cc.Node = null;
    @property(cc.Integer)
    moveRate = 0.001;

    private _moveList:cc.Node[] = [];

    start () {
        this.bg1.x = 0;
        let bg1BoundingBox = this.bg1.getBoundingBox();
        this.bg2.setPosition(bg1BoundingBox.xMax,bg1BoundingBox.yMin);
        this._moveList.push(this.bg1);
        this._moveList.push(this.bg2);
        GameMgr.getInstance().bgMoveSpeed = this.moveSpeed;
    }

    update (dt) {
        // console.log("dt：" + dt);
        GameMgr.getInstance().dinstance += GameMgr.getInstance().playerSpeed * dt;
        GameMgr.getInstance().gameScene.refreshDistanceLabel(GameMgr.getInstance().dinstance);
        // this.moveSpeed += this.moveRate;
        // console.log("其中速度为:" + this.moveSpeed);
        this.moveHandler(this._moveList);
        this.checkMove(this._moveList);

    }


    private moveHandler(nodeArr:cc.Node[]):void {
        for (var i = 0; i < nodeArr.length; i++) {
            var item:cc.Node = nodeArr[i];
            item.x -= this.moveSpeed;
        }
    }

    private checkMove(moveArr:cc.Node[]):void {
        let first_xMax = this._moveList[0].getBoundingBox().xMax;
        if (first_xMax <= 0) {
            var preFirstBg = this._moveList.shift();
            this._moveList.push(preFirstBg);
            var curFirstBg = this._moveList[0];
            preFirstBg.x = curFirstBg.getBoundingBox().xMax;
        }
    }
}
