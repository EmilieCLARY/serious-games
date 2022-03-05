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


function preload (){
    this.load.tilemapTiledJSON('map',"../JSON/big_head/map.json");

    this.load.image("tiles","../img/big_head/tiles1.png");

}

function create (){
    const map = this.make.tilemap({ key: "map", tileWidth: 64, tileHeight: 64});
    const tileset = map.addTilesetImage("tiles1","tiles");
    const layer = map.createLayer("toplayer", tileset, 0, 0);
    
    this.cameras.main.setBounds(0, 0, 3392, 100);
    this.physics.world.setBounds(0, 0, 3392, 240);

    
    this.cameras.main.setZoom(0.0155);
}

function update (time, delta)
{

}