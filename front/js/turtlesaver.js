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
var turtle;


function preload ()
{
    this.load.image('background', '../img/turtle_saver/background.png');
    this.load.image('sky', '../img/turtle_saver/sky.png');
    this.load.image('ship', '../img/turtle_saver/fishing-ship.png');
    this.load.image('turtle', '../img/turtle_saver/turtle.png');
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

    //class turtle extends Phaser.Physics.Arcade.Sprite {
    //    constructor(x, y) {
    //        this.x = x;
    //        this.y = y;
    //
    //        this.turtle = this.scene.physics.add.sprite(x, y);
    //}


    for(let i = 0; i < 8; i++){
        
        let positionY = Phaser.Math.Between(150, this.game.config.height-50)

        turtle = this.physics.add.sprite(0, positionY, 'turtle');
        // turtle = this.physics.add.existing(new turtle(0), positionY)));
        turtle.setScale(0.035);
        turtle.setFlip(true, false);
        turtle.body.collideWorldBounds = true;
    }

    // Il faut pouvoir différencier chaque instance de tortue pour pouvoir les contrôler séparémment (il n'y en a qu'une seule qui bouge pour l'instant)
    // Je pense qu'il faut faire un constructeur (comme au dessus mais j'ai une erreur) à la manière des avions différenciables pour le projet



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
    
    if(turtle.x >= 1159){
        turtle.setVelocityX(-100);
        turtle.setFlip(false, false);
    }
    else if(turtle.x <= 42){
        turtle.setVelocityX(100);
        turtle.setFlip(true, false);
    }
}