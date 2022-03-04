var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 700,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics : {
        default : "arcade",
        arcade : {
            //gravity: { y: 500 },
        }
    }
};

var game = new Phaser.Game(config);


function preload ()
{   //this.load.image('tiles1', '../img/big_head/scifi_platformTiles_32x32.png');
    this.load.tilemapTiledJSON('map',"../JSON/big_head/oui.json");
    this.load.image("tiles","../JSON/big_head/tiles1.png");
}

var map;
var tileset;
var layer;

function create ()
{
    map = this.make.tilemap({ key: "map", tileWidth: 32, tileHeight: 64});
    tileset = map.addTilesetImage("tiles1","tiles");
    layer = map.createLayer("Tile Layer 1", tileset, 0, 0);

}

function update (time, delta)
{

      
}