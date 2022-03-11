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
var coinsCollected;

function preload (){
    this.load.tilemapTiledJSON('map',"../JSON/big_head/map1.json");

    this.load.image("tiles","../img/big_head/tiles1.png");
    this.load.image("player","../img/big_head/player.png");
    this.load.image('spike', '../img/big_head/spike.png');

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

    const items = map.createLayer('items', tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);

    //items.setTileIndexCallback(0, hitCoin, this);
    //items.setCollisionByExclusion(-1, hitCoin, true);


    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.image(600, 50, 'player').setAngle(90).setCollideWorldBounds(true);
    //this.player = this.physics.add.sprite(400, 100, 'player').setAngle(90).setBounds(0.1);
    this.player.setScale(0.15);
    this.physics.add.collider(this.player, platforms);

    this.physics.add.collider(this.player, items, hitCoin);

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
    /* --  Création des spikes  --  */
    /*                              */
    /********************************/

    this.spikes = this.physics.add.group({
        allowGravity: false,
        immovable: true
      });

      //createFromObjects(spike, {
        //name: 'Spikes'
      //});


    spike = map.getObjectLayer("Spikes")

    //Erreur là, à commenter pour que ça marche
    //spike.objects.forEach(spike => {
    //    const spikeSprite = this.spikes.create(spike.x, spike.y + 200 - spike.height, 'spike').setOrigin(0);
    //    spikeSprite.body.setSize(spike.width, spike.height - 20).setOffset(0, 20);
    //});

    this.physics.add.collider(this.player, this.spikes, playerHit, null, this);

}

function update (time, delta)
{
    this.player.setVelocityX(0);

    if (this.cursors.left.isDown)
    {
        this.player.setAngle(-90).setVelocityX(-500);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setAngle(90).setVelocityX(500);
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
    console.log("salut")
    items.removeTileAt(tile.x, tile.y);
    coinsCollected += 1;

    // Return true to exit processing collision of this tile vs the sprite - in this case, it
    // doesn't matter since the coin tiles are not set to collide.
    return false;
}

function playerHit(player, spike) {
    // Set velocity back to 0
    player.setVelocity(0, 0);
    // Put the player back in its original position
    player.setX(50);
    player.setY(300);
    // Set the visibility to 0 i.e. hide the player
    player.setAlpha(0);
    // Add a tween that 'blinks' until the player is gradually visible
    let tw = this.tweens.add({
      targets: player,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5,
    });
}
