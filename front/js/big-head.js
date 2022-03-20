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
            debug: true,
            gravity: { y: 1000 },
        }
    }
};

var game = new Phaser.Game(config);
var coinLayer;
var coinsCollected = 0;
var cooldown = 0;


function preload (){
    this.load.tilemapTiledJSON('map',"../JSON/big_head/mapDef.json");

    this.load.image("tiles","../img/big_head/morning.png");
    //this.load.image("coin","../img/big_head/coin.png");
    this.load.atlas('player', '../img/big_head/player.png', '../JSON/big_head/player.json');

    //this.load.image('spike', '../img/big_head/spike.png');
    this.load.spritesheet('coin', '../img/big_head/coin.png', { frameWidth: 32, frameHeight: 32 });

}

function create (){
    
    this.cursors = this.input.keyboard.createCursorKeys();

    /********************************/
    /*                              */
    /* --  Création de la carte --  */
    /*                              */
    /********************************/
    
    const map = this.make.tilemap({ key: "map", tileWidth: 1400, tileHeight: 40});
    const tileset = map.addTilesetImage("morning_adventures_tileset_16x16","tiles");


    /************************************/
    /*                                  */
    /* --  Création des plateformes --  */
    /*                                  */
    /************************************/

    const platforms = map.createLayer('back', tileset, 0, 0);
    //platforms.setCollisionByExclusion(-1, true);

    /*************************************/
    /*                                   */
    /* --  Création des récupérables --  */
    /*                                   */
    /*************************************/

    var coinTiles = map.addTilesetImage('coin');
    coinLayer = map.createLayer('items', coinTiles, 0, 0);


    platforms.setCollisionBetween(1, 60);
    coinLayer.setTileIndexCallback(61, hitCoin, this);

    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.sprite(0, 0, 'player').setCollideWorldBounds(true);
    this.player.setScale(0.35);
    this.physics.add.collider(this.player, platforms);

    // PB TILEMAP
    this.physics.add.collider(this.player, coinLayer, hitCoin);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 15400, 480);
    this.physics.world.setBounds(0, 0, 15400, 480);

    this.cameras.main.setZoom(1.6);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    /********************************/
    /*                              */
    /*   --  Création du texte  --  */
    /*                              */
    /********************************/


    text = this.add.text(1, 1, '', {
        fontSize: '20px',
        fill: '#ffffff'
    });
    text.setScrollFactor(0);
    updateText();
   
    /********************************/
    /*                              */
    /*   --  Player animations  --  */
    /*                              */
    /********************************/


    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('player', { prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2}),
        frameRate: 10,
    });
}

function update (time, delta)
{
    this.player.setVelocityX(0);

    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-200);
        this.player.flipX = true;
        this.player.anims.play('walk', true);

    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(200);
        this.player.flipX = false;
        this.player.anims.play('walk', true);
    }

    if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.player.body.onFloor() || (this.player.body.onWall() && (this.cursors.up.isDown || this.cursors.space.isDown)))
    {    
        if(cooldown == 0 || time - cooldown >= 600){
            this.player.setVelocityY(-340);
                cooldown = time;
        }
    }

    if (this.cursors.left.isDown && this.player.x > 0)
    {
        //this.player.setAngle(-90);
        this.player.x -= 2.5;
    }
    else if (this.cursors.right.isDown && this.player.x < 3392)
    {
        //this.player.setAngle(90);
        this.player.x += 2.5;
    }
}

function hitCoin (sprite, tile)
{
    coinLayer.removeTileAt(tile.x, tile.y);
    coinsCollected += 1;

    updateText();

    console.log("coucou")

    return true;
}

function updateText ()
{
    text.setText(
        '\nCoins collected: ' + coinsCollected
    );
}
