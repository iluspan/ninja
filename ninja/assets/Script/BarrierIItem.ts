
const {ccclass, property} = cc._decorator;

@ccclass
export default class BarrierIItem extends cc.Component {
    @property(cc.Integer)
    type:number = 1;//障碍物的类型

    private moveSpeed:number = 3;
    start () {

    }

    public init(type:number):void {
        this.type = type;
        if (type == 1) {

        }else if (type == 2) {

        }else if (type == 3) {

        }else if (type == 4) {

        }
    }

    update (dt) {
        this.node.x -= this.moveSpeed;
    }
}
