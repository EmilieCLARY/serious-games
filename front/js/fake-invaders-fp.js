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
    },
    parent: 'fakeinvaders'
};

var game = new Phaser.Game(config);

var cursor;
var upKey;
var downKey;
var ZQSD;
var space;

var player;
var hitbox;
var enemyyyyyys = [];
var enemyFiring;
var timeEnemy = [];
var life;
var player_health = 3;
var numberOfEnnemies = 30;
var text;
var ennemyDestroyed = 0;

var sourceTab = [];
var fakeTab = [];

var shootAstronaut;
var shootSat;
var explosion;
var soundLife;

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
    
    this.load.image('full-life', '../img/turtle_saver/full-life.png')
    this.load.image('two-life', '../img/turtle_saver/two-heart.png')
    this.load.image('one-life', '../img/turtle_saver/one-heart.png')
    this.load.image('zero-life', '../img/turtle_saver/zero-heart.png')

    this.load.audio('shootAstronaut', [ '../sounds/fake-invaders/shootAstronaut.ogg', '../sounds/fake-invaders/shootAstronaut.mp3' ]);
    this.load.audio('shootSat', [ '../sounds/fake-invaders/shootSat.ogg', '../sounds/fake-invaders/shootSat.mp3' ]);
    this.load.audio('explosion', [ '../sounds/fake-invaders/explosion.ogg', '../sounds/fake-invaders/explosion.mp3' ]);
    this.load.audio('life', [ '../sounds/fake-invaders/lifeLost.ogg', '../sounds/fake-invaders/lifeLost.mp3' ]);


    //pour le non affichage des modaux
    document.getElementById("modalfakewin").style.display = "none";
    document.getElementById("modalfakeloose").style.display = "none";
    document.getElementById("modalfakeinfo").style.display = "none";

}


function create ()
{
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    var backgroundImage = this.add.sprite(600,350, 'background');
    
    player = this.physics.add.sprite(250, 350,'player').setScale(0.2);
    player.body.collideWorldBounds = true;

    hitbox = this.physics.add.sprite(50, 350, 'player').setScale(0.2).setVisible(false).setBodySize(0, 3000);

    for(let i = 0; i < 6; i++){
        let enemy = this.add.sprite(1150, i*100 + 80, 'satellite').setScale(0.35);
        enemyyyyyys.push(enemy);
    }

    life = this.physics.add.sprite(200, 35, 'full-life');
    life.setScale(0.075);
    life.setBodySize(2000, 1500);

    text = this.add.text(800, 10, "Fake news remaining : " + numberOfEnnemies, {
        font: "20px Arial",
        fill : "#FFFFFF",
        align : "center"
    });


    shootAstronaut = this.sound.add('shootAstronaut');
    shootSat = this.sound.add('shootSat');
    explosion = this.sound.add('explosion');
    soundLife = this.sound.add('life');

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

    while(this.time.now > firingTimer && numberOfEnnemies != 0){
        enemyFiring = Phaser.Math.Between(0, 5);
        let rnd = Math.floor(Math.random() * 2);
        //console.log(rnd);
        if(rnd == 0){
            let tirEnnemis = this.physics.add.sprite(1150, enemyFiring*100 + 80, 'fake').setScale(0.15).setVelocityX(-200);
            shootSat.play();            
            fakeTab.push(tirEnnemis);
        }
        else{
            let tirEnnemis = this.physics.add.sprite(1150, enemyFiring*100 + 80, 'fakenewspaper').setScale(0.15).setVelocityX(-200);
            shootSat.play();            
            fakeTab.push(tirEnnemis);
        }
        numberOfEnnemies--;
        text.setText("Fake news remaining : " + numberOfEnnemies);
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
        shootAstronaut.play();
        sourceTab.push(SOURCE);
    }
    
    for(let i = 0; i < fakeTab.length; i++){
        for(let j = 0; j < sourceTab.length; j++){
            this.physics.overlap(fakeTab[i], sourceTab[j], () => {
                fakeTab[i].destroy();
                sourceTab[j].destroy();
                explosion.play();
                ennemyDestroyed++;
            }, null, this);
        }
        this.physics.overlap(fakeTab[i], hitbox, () => {
            fakeTab[i].destroy();
            soundLife.play();
            lifeLess();
            ennemyDestroyed++;
        }, null, this);
    }

    if(player_health == 2){
        life.destroy()
        life = this.physics.add.sprite(200, 35, 'two-life');
        life.setScale(0.075);
    }
    if(player_health == 1){
        life.destroy()
        life = this.physics.add.sprite(200, 35, 'one-life');
        life.setScale(0.075);
    }
    
    if(player_health == 0){
        life.destroy()
        life = this.physics.add.sprite(200, 35, 'zero-life');
        life.setScale(0.075);
        //gameover = this.physics.add.sprite(this.game.config.width/2, this.game.config.height/2, 'gameover');
        //gameover.setScale(0.5);
    }

    // Victoire
    if(ennemyDestroyed == 30){

        document.getElementById("modalfakewin").style.display = "block";

        //if(player_health == 3){
        //    socket.emit("numberOfMalusCards", 1);
        //}
        //else if(player_health == 2){
        //    socket.emit("numberOfMalusCards", 2);
        //}
        //else if(player_health == 1){
        //    socket.emit("numberOfMalusCards", 3);
        //}
        this.scene.pause();

        document.getElementById("modalfakewin").addEventListener("click", event => {
            document.getElementById("modalfakewin").style.display = "none";
            document.getElementById("modalfakeinfo").style.display = "block";
        });
    }
    // Défaite
    if(player_health == 0){
        //socket.emit("numberOfMalusCards", 4);
        this.scene.pause();
        document.getElementById("modalfakeloose").style.display = "block";
    }
}

function lifeLess(){
    player_health--;
}