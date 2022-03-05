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
            gravity: { y: 14000 },
        }
    }
};

var game = new Phaser.Game(config);


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
    
    const map = this.make.tilemap({ key: "map", tileWidth: 64, tileHeight: 64});
    const tileset = map.addTilesetImage("tiles1","tiles");


    /************************************/
    /*                                  */
    /* --  Création des plateformes --  */
    /*                                  */
    /************************************/
    
    const platforms = map.createLayer('plat', tileset, 0, 0);
    platforms.setCollisionByExclusion(-1, true);


    /********************************/
    /*                              */
    /*  --  Création du perso   --  */
    /*                              */
    /********************************/ 

    this.player = this.physics.add.image(400, 100, 'player').setAngle(90).setCollideWorldBounds(true);
    this.player.setScale(0.15);
    this.physics.add.collider(this.player, platforms);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 3392,870);
    this.physics.world.setBounds(0, 0, 3392, 870);

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
    spike.objects.forEach(spike => {
        const spikeSprite = this.spikes.create(spike.x, spike.y + 200 - spike.height, 'spike').setOrigin(0);
        spikeSprite.body.setSize(spike.width, spike.height - 20).setOffset(0, 20);
    });

    this.physics.add.collider(this.player, this.spikes, playerHit, null, this);

}

function update (time, delta)
{
    this.player.setVelocity(0);

    if (this.cursors.left.isDown)
    {
        this.player.setAngle(-90).setVelocityX(-200);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setAngle(90).setVelocityX(200);
    }

    if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-200);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(200);
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

    if (this.cursors.up.isDown && this.player.y > 0)
    {
        this.player.y -= 2.5;
    }
    else if (this.cursors.down.isDown && this.player.y < 240)
    {
        this.player.y += 2.5;
    }
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