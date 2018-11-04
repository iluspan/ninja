import Player from "./Player";
import GameScene from "./GameScene";
/**
 * Created 2018/11/3.
 */

export class GameMgr {
    private static _instance: GameMgr;
    public bgMoveSpeed:number = 0;//背景移动速度
    public player:Player = null;
    public gameScene:GameScene = null;
    public screenW:number = 0;//屏幕宽度
    public screenH:number = 0;//屏幕高度
    public dinstance:number = 0;//跑过的距离
    public playerSpeed:number = 1;

    constructor() {

    }

    public static getInstance(): GameMgr {
        if (!this._instance) {
            this._instance = new GameMgr();
        }
        return this._instance;
    }





}
