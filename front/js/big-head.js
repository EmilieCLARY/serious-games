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
            debug: false,
            gravity: { y: 1000 },
        }
    }
};

var game = new Phaser.Game(config);
var coinLayer;
var coinsCollected = 0;
var cooldown = 0;
var doorLayer;


var platforms;
var platforms2;


function preload (){
    this.load.tilemapTiledJSON('map',"../JSON/big_head/mapDef.json");

    this.load.image("tiles","../img/big_head/tileset.png");

    //this.load.image("coin","../img/big_head/coin.png");
    this.load.atlas('player', '../img/big_head/player.png', '../JSON/big_head/player.json');
    this.load.image("sky","../img/big_head/sky.png");

    //this.load.image('spike', '../img/big_head/spike.png');
    this.load.image('melon', '../img/big_head/melon.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('cadenas', '../img/big_head/door.png', { frameWidth: 32, frameHeight: 32 });

}

function create (){
    
    this.cursors = this.input.keyboard.createCursorKeys();

    /********************************/
    /*                              */
    /* --  Création de la carte --  */
    /*                              */
    /********************************/
    
    const map = this.make.tilemap({ key: "map", tileWidth: 1400, tileHeight: 40});
    const tileset = map.addTilesetImage("tileset","tiles");

    var background = map.addTilesetImage("sky", "sky");
    const backgroundLayer = map.createLayer('sky', background, 0, 0);


    /************************************/
    /*                                  */
    /* --  Création des plateformes --  */
    /*                                  */
    /************************************/

    platforms = map.createLayer('back', tileset, 0, 0);

    //platforms.setCollisionByExclusion(-1, true);

    /*************************************/
    /*                                   */
    /* --  Création des récupérables --  */
    /*                                   */
    /*************************************/

    var coinTiles = map.addTilesetImage('melon');
    coinLayer = map.createLayer('items', coinTiles, 0, 0);


    platforms.setCollisionBetween(2, 250);

    var doorTiles = map.addTilesetImage('cadenas');
    doorLayer = map.createLayer('lock1', doorTiles, 0, 0);


    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.sprite(0, 0, 'player').setCollideWorldBounds(true);
    this.player.setScale(0.35);
    this.physics.add.collider(this.player, platforms);

    coinLayer.setTileIndexCallback(61, hitCoin);
    //doorLayer.setTileIndexCallback(102, hitDoor);

    doorLayer.setCollisionBetween(102, 102);

    this.physics.add.overlap(this.player, coinLayer);
    this.physics.add.collider(this.player, doorLayer, null, hitDoor);


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


    text = this.add.text(250, 150, '', {
        fontSize: '13px',
        fill: '#ffffff'
    });
    text.setScrollFactor(0);
    updateText();

    newText = this.add.text(940, 400, 'Take all \nthe watermelon !', {
        fontSize: '10px',
        fill: '#ff0000'
    });
    newText.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
    //newText.setScrollFactor(0);

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
        this.player.setVelocityX(-100);
        this.player.flipX = true;
        this.player.anims.play('walk', true);

    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(100);
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

    //if(coinsCollected >= 2){
//
    //
    //    //hitDoor()
    //}

    //doorLayer.removeTileAt(968, 431);

    //console.log(parseInt(this.player.x),parseInt(this.player.y));

    updateText()
}

function hitCoin (sprite, tile)
{
    coinLayer.removeTileAt(tile.x, tile.y);
    coinsCollected += 1;

    updateText();

    return true;
}

function hitDoor (sprite, tile)
{
    if(coinsCollected >= 30){
        doorLayer.removeTileAt(tile.x, tile.y);
        //coinsCollected = 0;
        newText.setText('');
    }
    return true;
}

function updateText ()
{
    let tmp = 30 - coinsCollected;
    if(tmp !== 0){
        text.setText(
            'Arrow keys to move. Space to jump' +
            '\nWatermelon remaining: ' +  tmp
        );
    }
    else{
        text.setText(
            'Arrow keys to move. Space to jump' +
            '\nThe door is unlocked ! You can go to the next room !'
        );
    }
}