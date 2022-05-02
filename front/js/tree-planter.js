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
var ZQSD;
var CPA;

var mapHeight = 60;
var mapWidth = 100;
var gridSize = 80;
var map = new Array(mapWidth);

var arbre;

for(let i = 0; i < mapHeight; i++){
    map[i] = new Array(mapWidth);
}

for(let j = 0; j < mapHeight; j++){
    for(let k = 0; k < mapWidth; k++){
        map[j][k] = 0;
    }
}


function preload ()
{
    this.load.image('vert', '../img/tree_planter/vert.png');
    this.load.image('trigger', '../img/tree_planter/trigger.png');
    this.load.image('creusé', '../img/tree_planter/trigger.png');
    this.load.image('planté', '../img/tree_planter/planté.png');
    this.load.image('arrosé', '../img/tree_planter/arrosé.png');
    this.load.image('fini', '../img/tree_planter/trigger.png');
    this.load.image('medium', '../img/tree_planter/trigger.png');
    this.load.image('grand', '../img/tree_planter/fini.png');

    this.load.image('player', '../img/big_head/champR.png');
}


function create ()
{
    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    CPA = this.input.keyboard.addKeys("C,P,A");
    
    let PosX = 100;
    let PosY = 50;

    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){
            if(map[i][j] == 0){
                this.add.image(PosX, PosY, "vert").setScale(8);
                PosX += 80;
            }
        }
        PosX = 100;
        PosY += 80;
    }

    this.player = this.physics.add.sprite(600, 350, 'player').setCollideWorldBounds(true);
    this.player.setScale(4);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 8200, 5000);
    this.physics.world.setBounds(0, 0, 8200, 5000);

    //this.cameras.main.setZoom(1.6);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    //this.add.grid(100, 50, mapWidth * gridSize, mapHeight * gridSize, gridSize, 0x999999, 1, 0x666666).setOrigin(0);
   
    let positionX = Phaser.Math.Between(200, 300);
    let positionY = Phaser.Math.Between(150, 250);


    this.add.image(100, 50, "trigger").setScale(0.05);
    map[0][0] = 1;

}

function update (time, delta)
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);

    if (this.cursors.left.isDown){
        this.player.setVelocityX(-400);
    }
    else if (this.cursors.right.isDown){
        this.player.setVelocityX(400);
    }
    if (this.cursors.up.isDown){
        this.player.setVelocityY(-400);
    }
    else if (this.cursors.down.isDown){
        this.player.setVelocityY(400);
    }
    //console.log(Math.round(this.player.x) + 40, Math.round(this.player.y) + 40);

    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){
            
            let PosX = i * 80 + 100;
            let PosY = j * 80 + 50;
            
            if(PosX <= Math.round(this.player.x) + 40 && Math.round(this.player.x) + 40 <= PosX + 80 && PosY <= Math.round(this.player.y) + 40 && Math.round(this.player.y) + 40 <= PosY + 80){
                if(map[i][j] == 1 && CPA.C.isDown){     // Etat trigger à creusé
                    arbre = this.add.image(PosX, PosY, "creusé").setScale(0.05);
                    console.log("creusé");
                    map[i][j] = 2;
                }
                else if(map[i][j] == 2 && CPA.P.isDown){     // Etat creusé à planté
                    arbre.destroy();
                    arbre = this.add.image(PosX, PosY, "planté").setScale(0.25);
                    map[i][j] == 3;
                }
                else if(map[i][j] == 3 && CPA.A.isDown){      // Etat planté à arrosé
                    arbre.destroy();
                    arbre = this.add.image(PosX, PosY, "arrosé").setScale(0.25);
                    map[i][j] == 4;
                }
            }
            else if(map[i][j] == 4){      // Etat arrosé à fini
                this.add.image(PosX, PosY, "fini").setScale(8);
            }
            else if(map[i][j] == 5){      // Etat fini à medium
                this.add.image(PosX, PosY, "medium").setScale(8);
                
            }else if(map[i][j] == 6){      // Etat medium à grand
                this.add.image(PosX, PosY, "grand").setScale(8);
            }
        }
    }


}
    

function printMap(){

    
}