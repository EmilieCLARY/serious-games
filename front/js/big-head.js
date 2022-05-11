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
    },
    parent : 'big-head'
};

var game = new Phaser.Game(config);
var coinLayer;
var coinsCollected = 0;
var cooldown = 0;
var doorLayer;
var blueChampLayer;
var currentRoom = 1;

var etatChampRouge = 0;
var etatChampGreen = 0;
var etatChampBlue = 0;

var platforms;
var platforms2;

var R;


function preload (){

    this.load.tilemapTiledJSON('map',"../JSON/big_head/mapDef.json");

    this.load.image("tiles","../img/big_head/tileset.png");
    //this.load.image('champs', '../img/big_head/champs.png', { frameWidth: 32, frameHeight: 32 });
    
    this.load.image('champB', '../img/big_head/champB.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('champG', '../img/big_head/champG.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('champR', '../img/big_head/champR.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('chest', '../img/big_head/chest.png', { frameWidth: 32, frameHeight: 32 });

    this.load.atlas('player', '../img/big_head/player.png', '../JSON/big_head/player.json');
    this.load.image("skyBack","../img/big_head/backSky.png" );
    this.load.image("room","../img/big_head/sky.png" );

    this.load.image('melon', '../img/big_head/melon.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('cadenas', '../img/big_head/door.png', { frameWidth: 32, frameHeight: 32 });

    document.getElementById("modalbhwin").style.display = "none";
    document.getElementById("modalbhinfo").style.display = "none";

}

function create (){
    
    this.cursors = this.input.keyboard.createCursorKeys();
    R = this.input.keyboard.addKeys("R");

    /********************************/
    /*                              */
    /* --  Création de la carte --  */
    /*                              */
    /********************************/

    var backgroundImage = this.add.sprite(0, 0, 'skyBack');

    backgroundImage.setScale(2.20);


    const map = this.make.tilemap({ key: "map", tileWidth: 1400, tileHeight: 40});
    const tileset = map.addTilesetImage("tileset","tiles");


    var background = map.addTilesetImage("sky", "room", 16, 16);
    const backgroundLayer = map.createLayer('room', background, 0, 0);

    var chest = map.addTilesetImage("chest", "chest", 16, 16);
    const chestLayer = map.createLayer('chest', chest, 0, 0);

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

    platforms.setCollisionBetween(1, 250);

    var doorTiles = map.addTilesetImage('cadenas');
    doorLayer = map.createLayer('lock1', doorTiles, 0, 0);

    var blueChampTiles = map.addTilesetImage('champB');
    blueChampLayer = map.createLayer('BlueChamp', blueChampTiles, 0, 0);

    var greenChampTiles = map.addTilesetImage('champG');
    greenChampLayer = map.createLayer('GreenChamp', greenChampTiles, 0, 0);

    var redChampTiles = map.addTilesetImage('champR');
    redChampLayer = map.createLayer('RedChamp', redChampTiles, 0, 0);

    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.sprite(0, 0, 'player').setCollideWorldBounds(true);
    this.player.setScale(0.32);
    this.physics.add.collider(this.player, platforms);

    coinLayer.setTileIndexCallback(1, hitCoin);

    doorLayer.setCollisionBetween(42, 42);

    greenChampLayer.setTileIndexCallback(223, hitGreenChamp);
    blueChampLayer.setTileIndexCallback(224, hitBlueChamp);
    redChampLayer.setTileIndexCallback(225, hitRedChamp);
    chestLayer.setTileIndexCallback(226, hitChest);


    this.physics.add.overlap(this.player, coinLayer);
    this.physics.add.collider(this.player, doorLayer, null, hitDoor);
    this.physics.add.overlap(this.player, redChampLayer);
    this.physics.add.overlap(this.player, greenChampLayer);
    this.physics.add.overlap(this.player, blueChampLayer);
    this.physics.add.overlap(this.player, chestLayer);

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
        if(etatChampRouge == 0){
            this.player.setVelocityX(-200);
        }
        else{
            this.player.setVelocityX(-400);
        }

        this.player.flipX = true;
        this.player.anims.play('walk', true);

    }
    else if (this.cursors.right.isDown)
    {
        if(etatChampRouge == 0){
            this.player.setVelocityX(200);
        }
        else{
            this.player.setVelocityX(400);
        }

        this.player.flipX = false;
        this.player.anims.play('walk', true);
    }

    if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.player.body.onFloor() || (this.player.body.onWall() && (this.cursors.up.isDown || this.cursors.space.isDown)))
    {    
        if(cooldown == 0 || time - cooldown >= 600){
            if(etatChampGreen == 1){
                this.player.setVelocityY(-500);
            }
            else{
                this.player.setVelocityY(-340);
            }
            cooldown = time;
        }
    }

    if(etatChampBlue == 1){
        this.player.setScale(0.15);
    }
    if(etatChampBlue == 0){
        this.player.setScale(0.32);
    }

    if(currentRoom == 1 && this.player.x >= 1595){
        coinsCollected = 0;
        currentRoom = 2;
    }
    if(currentRoom == 2 && this.player.x >= 3048){
        coinsCollected = 0;
        currentRoom = 3;
    }
    if(R.R.isDown){
        if(currentRoom == 1){
            this.player.x = 21;
            this.player.y = 128;
        }
        else if(currentRoom == 2){
            this.player.x = 1600;
            this.player.y = 432;
        }
        else if(currentRoom == 3){
            this.player.x = 3195;
            this.player.y = 48;
        }
        console.log("Position Reset");
    }

    updateText()
}

function hitBlueChamp (sprite, tile)
{
    blueChampLayer.removeTileAt(tile.x, tile.y);

    console.log("champi bleu")

    etatChampBlue = 1;
    
    setTimeout(function() { etatChampBlue = 0 }, 7000);   // Attend 7 secondes avant exécution   

    return true;
}

function hitRedChamp (sprite, tile)
{
    redChampLayer.removeTileAt(tile.x, tile.y);

    console.log("champi rouge")

    etatChampRouge = 1;
    
    setTimeout(function() { etatChampRouge = 0; }, 3000);   // Attend 7 secondes avant exécution   

    return true;
}

function hitGreenChamp (sprite, tile)
{
    greenChampLayer.removeTileAt(tile.x, tile.y);

    console.log("champi vert")

    etatChampGreen = 1;

    var x = setTimeout(function() { etatChampGreen = 0; }, 7000);   // Attend 7 secondes avant exécution   

    return true;
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
    if(coinsCollected >= 0){
        doorLayer.removeTileAt(tile.x, tile.y);     
        //coinsCollected = 0;
        newText.setText('');
    }
    return true;
}

function hitChest (sprite, tile)
{
    document.getElementById("modalbhwin").style.display = "block";
    console.log("JEUX FINI");

    document.getElementById("btnmodalbh").addEventListener("click", event => {
        document.getElementById("modalbhwin").style.display = "none";
        document.getElementById("modalbhinfo").style.display = "block";
    });

    socket.emit('newBigHeadGauge', 45);

    
    return true;
}

function updateText ()
{
    let tmp;
    if(currentRoom == 1){
        tmp = 21 - coinsCollected;
    }
    if(currentRoom == 2){
        tmp = 24 - coinsCollected;
    }
    if(currentRoom == 3){
        tmp = 18 - coinsCollected;
    }
    
    if(tmp !== 0){
        text.setText(
            'Arrow keys to move. Space to jump' +
            '\nWatermelon remaining: ' +  tmp +
            '\nPress R to reset position'
        );
    }
    else{
        text.setText(
            'Arrow keys to move. Space to jump' +
            '\nThe door is unlocked ! You can go to the next room !' +
            '\nPress R to reset position'
        );
    }
}