export default class Preload extends Phaser.Scene{
    constructor() {
        super('PreloadScene');
    }

    preload(){
        this.load.tilemapTiledJSON('map', 'src/assets/crystal_world_map.json');
        this.load.image('tileset-1', 'src/assets/main_lev_build_1.png');
        this.load.image('tileset-2', 'src/assets/main_lev_build_2.png');
        this.load.image('player', 'src/assets/player/movements/idle01.png');
    }

    create(){
        this.scene.start('PlayScene');        
    }
}