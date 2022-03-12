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



function preload (){
    this.load.tilemapTiledJSON('map',"../JSON/big_head/map1.json");

    this.load.image("tiles","../img/big_head/tiles1.png");
    this.load.atlas('player', '../img/big_head/player.png', '../JSON/big_head/player.json');

    this.load.image('spike', '../img/big_head/spike.png');
    this.load.spritesheet('coin', '../img/big_head/coin.png', { frameWidth: 32, frameHeight: 32 });

}

function create (){
    
    this.cursors = this.input.keyboard.createCursorKeys();

    /********************************/
    /*                              */
    /* --  Création de la carte --  */
    /*                              */
    /********************************/
    
    const map = this.make.tilemap({ key: "map", tileWidth: 12000, tileHeight: 60});
    const tileset = map.addTilesetImage("tiles1","tiles");


    /************************************/
    /*                                  */
    /* --  Création des plateformes --  */
    /*                                  */
    /************************************/

    const platforms = map.createLayer('plat', tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);

    /*************************************/
    /*                                   */
    /* --  Création des récupérables --  */
    /*                                   */
    /*************************************/

    var coinTiles = map.addTilesetImage('tiles1', 'tiles');
    coinLayer = map.createLayer('items', tileset, 0, 0);


    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.image(600, 50, 'player').setAngle(90).setCollideWorldBounds(true);
    //this.player = this.physics.add.sprite(400, 100, 'player').setAngle(90).setBounds(0.1);
    this.player.setScale(1);
    this.physics.add.collider(this.player, platforms);

    this.physics.add.overlap(this.player, coinLayer, hitCoin);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 12000, 1270);
    this.physics.world.setBounds(0, 0, 12000, 1270);

    this.cameras.main.setZoom(0.7);

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
        frames: this.anims.generateFrameNames('player', { prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2 }),
        frameRate: 10,
        repeat: -1
    });
}

function update (time, delta)
{
    this.player.setVelocityX(0);

    if (this.cursors.left.isDown)
    {
        this.player.setAngle(-90).setVelocityX(-500);
        //this.player.anims.play('walk', true); // play walk animation

    }
    else if (this.cursors.right.isDown)
    {
        this.player.setAngle(90).setVelocityX(500);
        //this.player.anims.play('walk', true); // play walk animation

    }

    if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.player.body.onFloor())
    {
        this.player.setVelocityY(-640);
    }

    if (this.cursors.left.isDown && this.player.x > 0)
    {
        this.player.setAngle(-90);
        this.player.x -= 2.5;
    }
    else if (this.cursors.right.isDown && this.player.x < 3392)
    {
        this.player.setAngle(90);
        this.player.x += 2.5;
    }

    //if (this.cursors.up.isDown && this.player.y > 0)
    //{
    //    this.player.y -= 2.5;
    //}
    //else if (this.cursors.down.isDown && this.player.y < 240)
    //{
    //    this.player.y += 2.5;
    //}
}

function hitCoin (sprite, tile)
{
    coinLayer.removeTileAt(tile.x, tile.y);
    
    coinsCollected += 1;

    updateText();
}

function updateText ()
{
    text.setText(
        '\nCoins collected: ' + coinsCollected
    );
    console.log('oué')
}
