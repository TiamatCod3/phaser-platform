export default class Play extends Phaser.Scene{
    constructor() {
        super('PlayScene');
    }

    create(){
        const map = this.createMap();
        const layers = this.createLayers(map);

        const player = this.createPlayer();

        this.physics.add.collider(player, layers.platformsColliders);
    }
    createPlayer() {
       const player = this.physics.add.sprite(100,250, 'player');
       player.body.setGravityY(500);
       player.setCollideWorldBounds(true);
       return player;
    }

    //Pesquisar sobre layers dinamicas e estáticas
    createMap():Phaser.Tilemaps.Tilemap{
        const map = this.make.tilemap({key: 'map'});
        map.addTilesetImage('main_lev_build_1', 'tileset-1'); 
        return map;
    }

    createLayers(map:Phaser.Tilemaps.Tilemap){
        const tileset = map.getTileset('main_lev_build_1')
        const platformsColliders:Phaser.Tilemaps.TilemapLayer = map.createLayer('platforms_colliders', tileset); 
        const environment:Phaser.Tilemaps.TilemapLayer = map.createLayer('environment', tileset);
        const platforms:Phaser.Tilemaps.TilemapLayer = map.createLayer('platforms', tileset); 

        
        // platformsColliders.setCollisionByExclusion([-1],true);
        platformsColliders.setCollisionByProperty({collides: true});

        return {environment, platforms, platformsColliders}         
    }
}