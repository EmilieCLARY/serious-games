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
    }
};

var game = new Phaser.Game(config);

var cursor;
var upKey;
var downKey;
var ZQSD;
var CPA;

var gridSize = 80;
var map = new Array(mapWidth);

var mapHeight = 11;
var mapWidth = 11;

var bush;

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
    this.load.image('bush', '../img/maze/bush.png');

    this.load.image('bush', '../img/maze/bush.png');
    this.load.image('cross', '../img/maze/cross.png');
    this.load.image('horizontal', '../img/maze/horizontal.png');
    this.load.image('T0', '../img/maze/T0.png');
    this.load.image('T90', '../img/maze/T90.png');
    this.load.image('T180', '../img/maze/T180.png');
    this.load.image('T270', '../img/maze/T270.png');
    this.load.image('turnBL', '../img/maze/turnBL.png');
    this.load.image('turnTL', '../img/maze/turnTL.png');
    this.load.image('turnTR', '../img/maze/turnTR.png');
    this.load.image('turnBR', '../img/maze/turnBR.png');
    this.load.image('vertical', '../img/maze/vertical.png');


    this.load.image('player', '../img/big_head/champR.png');
    this.load.image('barrel', '../img/maze/barrel.png');

}



function create ()
{
    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    CPA = this.input.keyboard.addKeys("C,P,A");
    
    let PosX = 100;
    let PosY = 50;

    generateMazeTemp(map);

    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){


            if(map[i][j] == 1){
                bush = this.add.sprite(PosX, PosY, "bush").setScale(0.25);
                PosX += 80; 
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i][j+1] == 0 && map[i+1][j] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "turnTR").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i][j-1] == 0 && map[i][j+1] == 0 && map[i-1][j] == 1 && map[i+1][j] == 1 ){
                this.add.sprite(PosX, PosY, "horizontal").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i][j-1] == 0 && map[i][j+1] == 0 && map[i-1][j] == 1 && map[i+1][j] == 0 ){
                this.add.sprite(PosX, PosY, "T0").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "vertical").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 1 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "turnBL").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 1 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "turnTL").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 1 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "turnBR").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "T90").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 1 && map[i][j+1] == 0 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "T180").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "T270").setScale(2.3);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= 10 && j+1 <= 10  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "cross").setScale(2.3);
                PosX += 80;
            }
            else if(map[i][j] == 0){
                this.add.sprite(PosX, PosY, "player").setScale(0.25);
                PosX += 80; 
            }
            
    
            // J horizontal, I vertical
     

        }
        PosX = 100;
        PosY += 80;
    }
 

    for(let i = 0; i < 3; i++){

        
        let positionX = Phaser.Math.Between(1, 9);
        let positionY = Phaser.Math.Between(1, 9); 

        while(map[positionY][positionX] == 1 && map[positionY+1][positionX] != 3 && map[positionY][positionX+1] != 3 && map[positionY+1][positionX+1] != 3 && map[positionY-1][positionX] != 3 && map[positionY][positionX-1] != 3 && map[positionY-1][positionX-1] != 3){
        
            positionX = Phaser.Math.Between(1, 9);
            positionY = Phaser.Math.Between(1, 9); 
            
        }

        map[positionX][positionY] = 3;

        positionX = positionX*80 + 100;
        positionY = positionY*80 + 50;

        this.add.sprite(positionX, positionY, "barrel").setScale(0.2);

        delete positionX;
        delete positionY;
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


    this.physics.add.collider(this.player, bush, function (player, bush) {
        console.log("test")
    });


      

      
}

function generateMazeTemp(maze) {

    //1 1 1 1 1 1 1 1 1 1 1
    //0 0 1 0 0 0 0 0 0 0 1
    //1 0 1 0 1 0 1 1 1 1 1
    //1 0 0 0 1 0 1 0 0 0 1
    //1 0 1 1 1 0 1 0 1 0 1
    //1 0 0 0 1 0 0 0 1 0 1
    //1 1 1 1 1 0 1 1 1 0 1
    //1 0 0 0 1 0 1 0 0 0 1
    //1 1 1 0 1 1 1 0 1 0 1
    //1 0 0 0 0 0 0 0 1 0 0
    //1 1 1 1 1 1 1 1 1 1 1

    maze[0][0] = 1;
    maze[0][1] = 0;
    maze[0][2] = 1;
    maze[0][3] = 1;
    maze[0][4] = 1;
    maze[0][5] = 1;
    maze[0][6] = 1;
    maze[0][7] = 1;
    maze[0][8] = 1;
    maze[0][9] = 1;
    maze[0][10] = 1;

    maze[1][0] = 1;
    maze[1][1] = 0;
    maze[1][2] = 0;
    maze[1][3] = 0;
    maze[1][4] = 0;
    maze[1][5] = 0;
    maze[1][6] = 1;
    maze[1][7] = 0;
    maze[1][8] = 1;
    maze[1][9] = 0;
    maze[1][10] = 1;

    maze[2][0] = 1;
    maze[2][1] = 1;
    maze[2][2] = 1;
    maze[2][3] = 0;
    maze[2][4] = 1;
    maze[2][5] = 0;
    maze[2][6] = 1;
    maze[2][7] = 0;
    maze[2][8] = 1;
    maze[2][9] = 0;
    maze[2][10] = 1;

    maze[3][0] = 1;
    maze[3][1] = 0;
    maze[3][2] = 0;
    maze[3][3] = 0;
    maze[3][4] = 1;
    maze[3][5] = 0;
    maze[3][6] = 1;
    maze[3][7] = 0;
    maze[3][8] = 0;
    maze[3][9] = 0;
    maze[3][10] = 1;

    maze[4][0] = 1;
    maze[4][1] = 0;
    maze[4][2] = 1;
    maze[4][3] = 1;
    maze[4][4] = 1;
    maze[4][5] = 1;
    maze[4][6] = 1;
    maze[4][7] = 1;
    maze[4][8] = 1;
    maze[4][9] = 0;
    maze[4][10] = 1;

    maze[5][0] = 1;
    maze[5][1] = 0;
    maze[5][2] = 0;
    maze[5][3] = 0;
    maze[5][4] = 0;
    maze[5][5] = 0;
    maze[5][6] = 0;
    maze[5][7] = 0;
    maze[5][8] = 1;
    maze[5][9] = 0;
    maze[5][10] = 1;

    maze[6][0] = 1;
    maze[6][1] = 0;
    maze[6][2] = 1;
    maze[6][3] = 1;
    maze[6][4] = 1;
    maze[6][5] = 0;
    maze[6][6] = 1;
    maze[6][7] = 1;
    maze[6][8] = 1;
    maze[6][9] = 0;
    maze[6][10] = 1;

    maze[7][0] = 1;
    maze[7][1] = 0;
    maze[7][2] = 1;
    maze[7][3] = 0;
    maze[7][4] = 0;
    maze[7][5] = 0;
    maze[7][6] = 1;
    maze[7][7] = 0;
    maze[7][8] = 0;
    maze[7][9] = 0;
    maze[7][10] = 1;

    maze[8][0] = 1;
    maze[8][1] = 0;
    maze[8][2] = 1;
    maze[8][3] = 0;
    maze[8][4] = 1;
    maze[8][5] = 1;
    maze[8][6] = 1;
    maze[8][7] = 0;
    maze[8][8] = 1;
    maze[8][9] = 1;
    maze[8][10] = 1;

    maze[9][0] = 1;
    maze[9][1] = 0;
    maze[9][2] = 1;
    maze[9][3] = 0;
    maze[9][4] = 0;
    maze[9][5] = 0;
    maze[9][6] = 0;
    maze[9][7] = 0;
    maze[9][8] = 0;
    maze[9][9] = 0;
    maze[9][10] = 1; 

    maze[10][0] = 1;
    maze[10][1] = 1;
    maze[10][2] = 1;
    maze[10][3] = 1;
    maze[10][4] = 1;
    maze[10][5] = 1;
    maze[10][6] = 1;
    maze[10][7] = 1;
    maze[10][8] = 1;
    maze[10][9] = 0;
    maze[10][10] = 1;

    return maze;
}