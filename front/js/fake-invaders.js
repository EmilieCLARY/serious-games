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
            //debug : true,
        }
    }/*,
    parent: 'turtleSaver'*/
};

var game = new Phaser.Game(config);

var cursor;
var upKey;
var downKey;
var ZQSD;
var space;

var player;
var enemyyyyyys = [];
var enemyFiring;
var timeEnemy = [];

var sourceTab = [];
var fakeTab = [];

var firingTimer = 0;


function preload ()
{
    // Décor
    this.load.image('background', '../img/fakenews/fond.png');
    this.load.image('player', '../img/fakenews/astronaut.png');
    this.load.image('satellite', '../img/fakenews/satellite.png');

    // Tirs ennemis
    this.load.image('fake', '../img/fakenews/fake.png');
    this.load.image('fakenewspaper', '../img/fakenews/newspaper.png');

    //Tirs alliés
    this.load.image('source0', '../img/fakenews/source1.png');
    this.load.image('source1', '../img/fakenews/source2.png');
    this.load.image('source2', '../img/fakenews/source3.png');
    this.load.image('source3', '../img/fakenews/source4.png');
    this.load.image('source4', '../img/fakenews/source5.png');
    
}


function create ()
{
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    var backgroundImage = this.add.sprite(600,350, 'background');
    
    player = this.physics.add.sprite(250, 350,'player').setScale(0.2);
    player.body.collideWorldBounds = true;

    for(let i = 0; i < 6; i++){
        let enemy = this.add.sprite(1150, i*100 + 80, 'satellite').setScale(0.35);
        enemyyyyyys.push(enemy);
    }

}

function update (time, delta)
{
    player.setVelocityY(0);

    if(cursor.up.isDown || ZQSD.Z.isDown){
        player.setVelocityY(-300);
    }
    else if(cursor.down.isDown || ZQSD.S.isDown){
        player.setVelocityY(300);
    }
    

    //enemyFiring = Phaser.Math.Between(0, 5);
    //console.log(enemyyyyyys[enemyFiring], this.time.now);

    while(this.time.now > firingTimer){
        enemyFiring = Phaser.Math.Between(0, 5);
        let tirEnnemis = this.physics.add.sprite(1150, enemyFiring*100 + 80, 'fake').setScale(0.15).setVelocityX(-200);
        fakeTab.push(tirEnnemis);
        //console.log(enemyFiring);
        firingTimer = this.time.now + 2000;
    }
    
    enemyyyyyys[enemyFiring] = this.time.now+2000;
    
    //let tirEnnemis = this.add.sprite(1150, enemyFiring*100 + 80, 'fake').setScale(0.35).setVelocityX(300);
    

     
    //console.log(this.time.now);
    
    if(Phaser.Input.Keyboard.JustDown(space)){
        let random = Math.floor(Math.random() * 5)
        let SOURCE = this.physics.add.sprite(player.x, player.y, 'source'+random);
        SOURCE.setVelocityX(400);
        SOURCE.setScale(0.4);
        sourceTab.push(SOURCE);
    }

    for(let i = 0; i < fakeTab.length; i++){
        for(let j = 0; j < sourceTab.length; j++){
            this.physics.overlap(fakeTab[i], sourceTab[j], () => {
                fakeTab[i].destroy();
                sourceTab[j].destroy();
            }, null, this);
        }
    }
}