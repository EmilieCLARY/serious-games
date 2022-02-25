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
var upKey;
var downKey;
var ship;
var turtle;
var bouteille;
var masque;
var sacPlastique;

var rope;
var handle;
var handle2;
var graphics;
var tabTurtle = [];
var tabDechet = [];

function preload ()
{
    this.load.image('background', '../img/turtle_saver/background.png');
    this.load.image('sky', '../img/turtle_saver/sky.png');
    this.load.image('ship', '../img/turtle_saver/fishing-ship.png');
    this.load.image('turtle', '../img/turtle_saver/turtle.png');
    this.load.image('grappin', '../img/turtle_saver/grappin.png');
    this.load.image('sac-plastique', '../img/turtle_saver/pla-bag.png')
    this.load.image('bouteille', '../img/turtle_saver/bottle.png')
    this.load.image('masque', '../img/turtle_saver/face-mask.png')
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

    /********************************/
    /*                              */
    /* --  Création des tortues --  */
    /*                              */
    /********************************/
    
    let compteur = 0;
    let positionY = 200;

    for(let i = 0; i < 8; i++){
        
        let positionX = Phaser.Math.Between(1, this.game.config.width-50);

        if(compteur % 2 == 1){
            positionY = positionY + 120;
        }

        compteur += 1;
        
        turtle = this.physics.add.sprite(positionX, positionY, 'turtle');
        turtle.setScale(0.025);
        turtle.setFlip(true, false);
        turtle.body.collideWorldBounds = true;
        
        let random = Math.floor(Math.random() * 2);
        if(random == 0){
            turtle.setVelocityX(-100);
            turtle.setFlip(false, false);
        }
        else {
            turtle.setVelocityX(100);
            turtle.setFlip(true, false);
        }
    
        tabTurtle[i] = turtle;
    }


    /********************************/
    /*                              */
    /* --  Création des déchets --  */
    /*                              */
    /********************************/

    let positionYDechets = 260;
    let typeDechets = 0;

    for(let i = 0; i < 8; i++){
        
        let positionXDechets = Phaser.Math.Between(1, this.game.config.width-50);

        if(typeDechets % 2 == 1){
            positionYDechets = positionYDechets + 120;
        }
        
        if(typeDechets % 3 == 2){
            masque = this.physics.add.sprite(positionXDechets, positionYDechets, 'masque');
            masque.setScale(0.040);
            let vitesse = Phaser.Math.Between(20, 75);

            masque.setVelocityX(vitesse);

            let vitesseSpin = Phaser.Math.Between(20, 75);
            let sensRotation = Phaser.Math.Between(0, 1);
            if(sensRotation == 1){
                masque.setAngularVelocity(vitesseSpin);
            }
            else{
                masque.setAngularVelocity(-vitesseSpin);
            }

            masque.body.collideWorldBounds = true;

            tabDechet[i] = masque;

        }
        else if(typeDechets % 3 == 1){
            bouteille = this.physics.add.sprite(positionXDechets, positionYDechets, 'bouteille');
            bouteille.setScale(0.125);

            let vitesse = Phaser.Math.Between(20, 75);
            bouteille.setVelocityX(vitesse);

            let vitesseSpin = Phaser.Math.Between(20, 75);
            let sensRotation = Phaser.Math.Between(0, 1);
            if(sensRotation == 1){
                bouteille.setAngularVelocity(vitesseSpin);
            }
            else{
                bouteille.setAngularVelocity(-vitesseSpin);
            }

            tabDechet[i] = bouteille;

            bouteille.body.collideWorldBounds = true;
        }
        else{
            sacPlastique = this.physics.add.sprite(positionXDechets, positionYDechets, 'sac-plastique');
            sacPlastique.setScale(0.035);

            let vitesse = Phaser.Math.Between(20, 75);
            sacPlastique.setVelocityX(vitesse);

            let sensRotation = Phaser.Math.Between(0, 1);
            let vitesseSpin = Phaser.Math.Between(20, 75);
            if(sensRotation == 1){
                sacPlastique.setAngularVelocity(vitesseSpin);
            }
            else{
                sacPlastique.setAngularVelocity(-vitesseSpin);
            }

            tabDechet[i] = sacPlastique;

            sacPlastique.body.collideWorldBounds = true;
        }

        typeDechets += 1;
    
    }    

    /********************************/
    /*                              */
    /* --  Création du grappin --  */
    /*                              */
    /********************************/

    handle = this.physics.add.sprite(ship.x, ship.y + 60, 'grappin');
    handle2 = this.physics.add.sprite(ship.x, ship.y + 20);
    handle.setScale(0.08);
    handle.body.collideWorldBounds = true;
    rope = new Phaser.Geom.Line(handle2.x - 2, handle2.y, handle.x - 2, handle.y - 12);
    graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x000000 } });
    graphics.strokeLineShape(rope);
    
}

function update ()
{

    /**************************************/
    /*                                    */
    /* --  Contrôles Bateau + Grappin --  */
    /*                                    */
    /**************************************/


    if(cursor.left.isDown){
        ship.setVelocityX(-200);
        handle.setX(ship.x);
        handle2.setX(ship.x);
        rope.setTo(handle2.x - 2, handle2.y, handle.x - 2, handle.y - 12);
        graphics.clear();
        graphics.strokeLineShape(rope);
        ship.setFlip(false, false);
    }
    if(cursor.right.isDown){
        ship.setVelocityX(200);
        handle.setX(ship.x);
        handle2.setX(ship.x);
        rope.setTo(handle2.x - 2, handle2.y, handle.x - 2, handle.y - 12);
        graphics.clear();
        graphics.strokeLineShape(rope);
        ship.setFlip(true, false);
    }
    if(cursor.left.isUp && cursor.right.isUp){
        ship.setVelocityX(0);
    }

    if(cursor.up.isDown){
        if(handle.y >= ship.y + 60){
            handle.setY(handle.y - 3);
        }
        rope.setTo(handle2.x - 2, handle2.y, handle.x - 2, handle.y - 12);
        graphics.clear();
        graphics.strokeLineShape(rope);
    }
    if(cursor.down.isDown){
        handle.setY(handle.y + 3);
        rope.setTo(handle2.x - 2, handle2.y, handle.x - 2, handle.y - 12);
        graphics.clear();
        graphics.strokeLineShape(rope);
    }

    /********************************/
    /*                              */
    /* --  Contrôle des déchets --  */
    /*                              */
    /********************************/


    for(let i = 0; i < tabDechet.length; i++){
        if(tabDechet[i].x > this.game.config.width-50){
            //console.log(tabTurtle[i].x);
            tabDechet[i].setFlip(false, false);
            let vitesse = Phaser.Math.Between(20, 75);
            tabDechet[i].setVelocityX(-vitesse)

        }
        else if(tabDechet[i].x < 42){
            tabDechet[i].setFlip(true, false);
            let vitesse = Phaser.Math.Between(20, 75);
            tabDechet[i].setVelocityX(vitesse)
        }
    }


    /********************************/
    /*                              */
    /* --  Contrôle des tortues --  */
    /*                              */
    /********************************/


    
    for(let i = 0; i < tabTurtle.length; i++){
        //console.log(tabTurtle[i].body.velocity);
        
        if(tabTurtle[i].x > this.game.config.width-50){
            //console.log(tabTurtle[i].x);
            tabTurtle[i].setVelocityX(-100);
            tabTurtle[i].setFlip(false, false);
        }
        else if(tabTurtle[i].x < 42){
            tabTurtle[i].setVelocityX(100);
            tabTurtle[i].setFlip(true, false);
        }
    }
}

