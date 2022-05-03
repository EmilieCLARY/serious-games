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
var newTreeeeeee = true;


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
   
    arbre = this.add.sprite(100, 50, "trigger").setScale(0.05);
    map[0][0] = 1;
    newTreeeeeee = false;
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
                    arbre.destroy();
                    arbre = this.add.sprite(PosX, PosY, "creusé").setScale(0.05);
                    console.log("creusé");
                    map[i][j] = 2;
                }
                else if(map[i][j] == 2 && CPA.P.isDown){     // Etat creusé à planté
                    arbre.destroy();
                    arbre = this.add.sprite(PosX, PosY, "planté").setScale(0.25);
                    console.log("planté");
                    map[i][j] = 3;
                }
                else if(map[i][j] == 3 && CPA.A.isDown){      // Etat planté à arrosé
                    arbre.destroy();
                    arbre = this.add.sprite(PosX, PosY, "arrosé").setScale(2.2);
                    console.log("arrosé");                    
                    //setTimeout(function() {map[i][j] = 4 }, 3000);   // Attend 7 secondes avant exécution ;
                    map[i][j] = 4;
                    newTreeeeeee = true;
                }
            }
            if(map[i][j] == 4){      // Etat arrosé à fini
                //arbre.destroy();
                //arbre = this.add.sprite(PosX, PosY, "fini").setScale(0.05);
                setTimeout(function() {
                    arbre.setTexture("fini").setScale(0.05);
                }, 3000);
                setTimeout(function() {map[i][j] = 5 }, 3000);   // Attend 7 secondes avant exécutio
                //console.log("fini"); 
            }
            if(map[i][j] == 5){      // Etat fini à medium
                arbre.destroy();
                arbre = this.add.sprite(PosX, PosY, "medium").setScale(0.05);
                setTimeout(function() {map[i][j] = 6 }, 3000);   // Attend 7 secondes avant exécution 
                //console.log("medium");
            }
            if(map[i][j] == 6){      // Etat medium à grand
                arbre.destroy();
                arbre = this.add.sprite(PosX, PosY, "grand").setScale(0.28); // Attend 7 secondes avant exécution
                //console.log("grand"); 
                map[i][j] = 7;
            }
        }
    }

    if(newTreeeeeee === true){

        let posPlayerX = Math.round((this.player.x-100) / 80);
        let posPlayerY = Math.round((this.player.y-50) / 80);

        let maxX = posPlayerX + 10;
        if(maxX >= 100) maxX = 99;
        let minX = posPlayerX - 10;
        if(minX < 0) minX = 0;
        let maxY = posPlayerX + 10;
        if(maxY >= 60) maxY = 59;
        let minY = posPlayerX - 10;
        if(minY < 0) minY = 0;

        //console.log(minX, maxX, minY, maxY);

        let positionX = Phaser.Math.Between(minX, maxX);
        let positionY = Phaser.Math.Between(minY, maxY);

        console.log(positionX, positionY);

        if(map[positionX][positionY] != 0 || (positionX - 1 >= 0 && map[positionX-1][positionY] != 0) || (positionX + 1 < 100 && map[positionX+1][positionY] != 0) || (positionY - 1 >= 0 && map[positionX][positionY-1] != 0) || (positionX + 1 < 60 && map[positionX][positionY+1] != 0)){

            positionX = Phaser.Math.Between(minX, maxX);
            positionY = Phaser.Math.Between(minY, maxY);
            console.log("Reroll : ", positionX, positionY);
        }   
        
        //arbre = this.add.sprite(positionX * 80 + 100, positionY * 80 + 50, "trigger").setScale(0.05);
        map[positionX][positionY] = 1;
        newTreeeeeee = false;
        
    }
}