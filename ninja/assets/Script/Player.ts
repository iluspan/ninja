
import {GameMgr} from "./GameMgr";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    @property(cc.Integer)
    gravity:number = -1000;
    @property(cc.Integer)
    jumpH:number = 20;
    @property(cc.Integer)
    maxJumpCount:number = 2;

    private _initY:number = 0;
    animation:cc.Animation = null;
    private _isDown:boolean = false;
    private _jumpCount:number = 0;

    onLoad() {
        this.node.x = 0;
        let action = cc.moveBy(1,GameMgr.getInstance().screenW/2,0);
        GameMgr.getInstance().playerSpeed = 10;
        let call = cc.callFunc(function () {
            GameMgr.getInstance().playerSpeed = 1;
        }.bind(this));
        this.node.runAction(cc.sequence(action,call));
        GameMgr.getInstance().player = this.node.getComponent("Player");
        this._initY = this.node.y;
        this.animation = this.node.getComponent(cc.Animation);
    }


    onRunAnimationCompete(string) {
        // console.log("onRunAnimationCompete:" + string);
        if (string == "jump" && this._isDown) {
            this.animation.play("run");
        }
    }


    /**
     *往上跳动
     */
    public jumpUpHandler():void {
        this._jumpCount ++;
        if (this._jumpCount > this.maxJumpCount) return;
        if (this.node.y > this._initY)  {
            //执行两连跳动作
            this.animation.play("twiceJump");
            this.node.y += this.jumpH;
        }else {
            this.animation.play("jump");
            this.node.y += this.jumpH;
            //执行跳起来动作
        }
    }

    /**
     * 往下跳动
     */
    public jumpDownHandler():void {
        this._isDown = true;
        this.animation.play("jump");
    }


    update (dt) {
        if (this.node.y == this._initY) return;
        if (this.node.y < this._initY) {
            this.node.y = this._initY;
            this.animation.play("run");
            this._jumpCount = 0;
            return;
        }
        this.node.y += this.gravity * dt;
    }
}
