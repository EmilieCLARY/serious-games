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
            debug : true,
        }
    }
};

var game = new Phaser.Game(config);

var cursor;
var ship;

function preload ()
{
    this.load.image('background', '../img/turtle_saver/background.png');
    this.load.image('sky', '../img/turtle_saver/sky.png');
    this.load.image('ship', '../img/turtle_saver/fishing-ship.png');
}


function create ()
{
    cursor = this.input.keyboard.createCursorKeys();

    this.add.sprite(600, -100, 'sky');
    var backgroundImage = this.add.sprite(600,500, 'background');
    backgroundImage.setScale(0.7);
    ship = this.physics.add.sprite(600, 90, 'ship');
    ship.setScale(0.15);
    ship.body.collideWorldBounds = true;
}

function update ()
{
    if(cursor.left.isDown){
        ship.setVelocityX(-200);
        ship.setFlip(false, false);
    }
    if(cursor.right.isDown){
        ship.setVelocityX(200);
        ship.setFlip(true, false);
    }
    if(cursor.left.isUp && cursor.right.isUp){
        ship.setVelocityX(0);
    }
}