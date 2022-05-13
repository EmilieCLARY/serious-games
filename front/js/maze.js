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
    parent: 'leavethemaze'
};

var game = new Phaser.Game(config);

var background;

var cursor;
var upKey;
var downKey;
var ZQSD;
var CPA;
var text;
var textTime;

var gridSize = 80;

var mapHeight = 17;
var mapWidth = 17;

var bush1;
var bush = [];

var barrel1;
var barrel = [];
var nbrBarrelCollected = 0;
var nbrBarrelTotal;

var entreeX, entreeY = 0;
var sortieX, sortieY = 0;

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
    this.load.image('cdsL', '../img/maze/cdsL.png');
    this.load.image('cdsR', '../img/maze/cdsR.png');
    this.load.image('cdsT', '../img/maze/cdsT.png');
    this.load.image('cdsB', '../img/maze/cdsB.png');


    this.load.image('player', '../img/big_head/champR.png');
    this.load.image('barrel', '../img/maze/barrel.png');

    this.load.image('background', '../img/maze/back.png')




    /*affichage des modaux*/
    document.getElementById("modalmazewin").style.display = "none";
    document.getElementById("modalmazeloose").style.display = "none";
    document.getElementById("modalmazeinfo").style.display = "none";
}



function create ()
{
    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    CPA = this.input.keyboard.addKeys("C,P,A");

    background = this.add.tileSprite(0, 0, 8200, 5000, "background");
    
    let PosX = 100;
    let PosY = 50;

    //console.log(map)

    delete map;

    var map = new Array(mapWidth);

    for(let i = 0; i < mapHeight; i++){
        map[i] = new Array(mapWidth);
    }

    for(let j = 0; j < mapHeight; j++){
        for(let k = 0; k < mapWidth; k++){
            map[j][k] = 0;
        }
    }
    //console.log(map);

    map = generateMazeTemp();

    let k = 0;

    //console.log(map);

    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){


            if(map[i][j] == 1){

                bush1 = this.physics.add.sprite(PosX, PosY, "bush").setScale(0.3);
                bush1.body.immovable = true;
                bush[k] = bush1;
                PosX += 80; 
                k++;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i][j+1] == 0 && map[i+1][j] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "turnTR").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i][j-1] == 0 && map[i][j+1] == 0 && map[i-1][j] == 1 && map[i+1][j] == 1 ){
                this.add.sprite(PosX, PosY, "horizontal").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i][j-1] == 0 && map[i][j+1] == 0 && map[i-1][j] == 1 && map[i+1][j] == 0 ){
                this.add.sprite(PosX, PosY, "T0").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "vertical").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 1 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "turnBL").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 1 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "turnTL").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 1 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "turnBR").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "T90").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 1 && map[i][j+1] == 0 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "T180").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "T270").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 0 && map[i][j+1] == 0 && map[i][j-1] == 0 ){
                this.add.sprite(PosX, PosY, "cross").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 1 && map[i+1][j] == 0 && map[i][j+1] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "cdsT").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 0 && map[i+1][j] == 1 && map[i][j+1] == 1 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "cdsB").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 1 && map[i+1][j] == 1 && map[i][j+1] == 0 && map[i][j-1] == 1 ){
                this.add.sprite(PosX, PosY, "cdsL").setScale(0.9);
                PosX += 80;
            }
            else if(i-1 >= 0 && j-1 >= 0 && i+1 <= mapHeight-1 && j+1 <= mapWidth-1  && map[i-1][j] == 1 && map[i+1][j] == 1 && map[i][j+1] == 1 && map[i][j-1] == 0){
                this.add.sprite(PosX, PosY, "cdsR").setScale(0.9);
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
 
    //console.log(map);
    for(let i = 0; i < Math.round(mapWidth*0.4); i++){

        
        let positionX = Phaser.Math.Between(1, mapWidth-2);
        let positionY = Phaser.Math.Between(1, mapHeight-2); 
        //console.log(positionY, positionX);
        //console.log(map);

        while(map[positionY][positionX] == 1 && map[positionY+1][positionX] != 3 && map[positionY][positionX+1] != 3 && map[positionY+1][positionX+1] != 3 && map[positionY-1][positionX] != 3 && map[positionY][positionX-1] != 3 && map[positionY-1][positionX-1] != 3 || map[positionY][positionX] == 3){
        

            positionX = Phaser.Math.Between(1, mapWidth-2);
            positionY = Phaser.Math.Between(1, mapHeight-2); 
            
        }

        map[positionY][positionX] = 2;

        positionX = positionX*80 + 100;
        positionY = positionY*80 + 50;

        barrel1 = this.physics.add.sprite(positionX, positionY, "barrel").setScale(0.15);
        
        barrel[i] = barrel1;
        
        delete positionX;
        delete positionY;
    }

    for(let j = 0; j < mapWidth; j++){
        
        if(map[0][j] == 0){
            entreeX = j;
            entreeY = 0;
        }

        if(map[mapWidth-1][j] == 0){
            sortieX = j;
            sortieY = mapWidth;
        }
    }

    this.add.sprite(entreeX*80 + 100, entreeY*80 + 50, "vertical").setScale(0.9);
    bushSortie = this.physics.add.sprite(sortieX*80 + 100, (sortieY-1)*80 + 50, "bush").setScale(0.3);
    bushSortie.body.immovable = true;


    this.player = this.physics.add.sprite(entreeX * 80 + 100, entreeY * 80 + 50, 'player').setCollideWorldBounds(true);
    this.player.setScale(4);

    this.physics.add.collider(this.player, bushSortie);

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

    for(let i = 0; i < bush.length; i++){
        this.physics.add.collider(this.player, bush[i]);
    }

    nbrBarrelTotal = barrel.length;
   
    text = this.add.text(10, 10, 'Collect all the oil barrel and escape the maze\nBarrels remaining : ' + nbrBarrelTotal, {
        fontSize: '20px',
        fill: '#000000'
    });
    text.setScrollFactor(0);

    textTime = this.add.text(700, 10, 'Time :', {
        fontSize: '20px',
        fill: '#000000'
    });
    textTime.setScrollFactor(0);

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

    for(let i = 0; i < barrel.length; i++){
        //console.log(barrel[i]);
        this.physics.add.overlap(this.player, barrel[i], function () {
            //console.log("test")
            barrel[i].destroy();
            nbrBarrelCollected++;
            let tmp = nbrBarrelTotal - nbrBarrelCollected;
            text.setText("Collect all the oil barrel and escape the maze\nBarrels remaining : " + tmp);
            // Pop une modal box ? avec le nombre restants
        });
    }

    let currentTime = parseInt(time/1000)
    //console.log(sortieX, sortieY)
    //console.log(this.player.x/80, this.player.y/80)
    if(nbrBarrelCollected == nbrBarrelTotal){
        bushSortie.destroy();
        this.add.sprite(sortieX*80 + 100, (sortieY-1)*80 + 50, "vertical").setScale(0.9);
    }
    
    if(sortieX < (this.player.x + 100)/80 && sortieY < (this.player.y + 50)/80 && nbrBarrelCollected == nbrBarrelTotal){

        console.log("fini")
        /*this.add.text(this.player.x - 200, this.player.y + 50, 'You escaped the maze', {
            fontSize: '40px',
            fill: '#000000'
        });*/
        if(currentTime <= 40){
            socket.emit("numberOfMalusCards", 1);
        }
        else if(currentTime <= 80){
            socket.emit("numberOfMalusCards", 2);
        }
        else if(currentTime <= 120){
            socket.emit("numberOfMalusCards", 3);
        }
        else if(currentTime > 120){
            socket.emit("numberOfMalusCards", 4);
        }
        document.getElementById("modalmazewin").style.display = "block";

        //pour le point info
        document.getElementById("btnmodaltortue").addEventListener("click", event => {
            document.getElementById("modalmazewin").style.display = "none";
            document.getElementById("modalmazeinfo").style.display = "block";
        });

        this.scene.pause();
    }


    
    if(currentTime < 60){  
        if(currentTime < 10){
            textTime.setText("Time: 0:0" + currentTime);
        } 
        else{
            textTime.setText("Time: 0:" + currentTime);
        }
    }
    else{
        let min = Math.floor(currentTime/60);
        let sec = currentTime - 60*min;
        if(sec < 10){
            textTime.setText("Time: "+ min + ":0" + sec);
        } 
        else{
            textTime.setText("Time: "+ min + ":" + sec);
        }
        
    }
     
}

function generateMazeTemp() {

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

    let newMaze = new MazeBuilder((mapHeight - 1)/2, (mapWidth-1)/2);

    //console.log(newMaze.getMaze());

    let maze = newMaze.getMaze();

    /*maze[0][0] = 0
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
    maze[10][10] = 1;*/

    //console.log(maze);
    return maze;
}

class MazeBuilder {

    constructor(width, height) {

        this.width = width;
        this.height = height;

        this.cols = 2 * this.width + 1;
        this.rows = 2 * this.height + 1;

        this.maze = this.initArray(0);

        // place initial walls
        this.maze.forEach((row, r) => {
            row.forEach((cell, c) => {
                switch (r) {
                    case 0:
                    case this.rows - 1:
                        this.maze[r][c] = 1;
                        break;

                    default:
                        if ((r % 2) == 1) {
                            if ((c == 0) || (c == this.cols - 1)) {
                                this.maze[r][c] = 1;
                            }
                        } 
                        else if (c % 2 == 0) {
                            this.maze[r][c] = 1;
                        }

                }
            });

            if (r == 0) {
                // place exit in top row
                let doorPos = this.posToSpace(this.rand(1, this.width));
                this.maze[r][doorPos] = 0;
            }

            if (r == this.rows - 1) {
                // place entrance in bottom row
                let doorPos = this.posToSpace(this.rand(1, this.width));
                this.maze[r][doorPos] = 0;
            }

        });

        // start partitioning
        this.partition(1, this.height - 1, 1, this.width - 1);

    }

    initArray(value) {
        return new Array(this.rows).fill().map(() => new Array(this.cols).fill(value));
    }

    rand(min, max) {
        return min + Math.floor(Math.random() * (1 + max - min));
    }

    posToSpace(x) {
        return 2 * (x - 1) + 1;
    }

    posToWall(x) {
        return 2 * x;
    }

    inBounds(r, c) {
        if ((typeof this.maze[r] == "undefined") || (typeof this.maze[r][c] == "undefined")) {
            return false; // out of bounds
        }
        return true;
    }

    shuffle(array) {
        // sauce: https://stackoverflow.com/a/12646864
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    partition(r1, r2, c1, c2) {
        // create partition walls
        // ref: https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method

        let horiz, vert, x, y, start, end;

        if ((r2 < r1) || (c2 < c1)) {
            return false;
        }

        if (r1 == r2) {
            horiz = r1;
        } else {
            x = r1 + 1;
            y = r2 - 1;
            start = Math.round(x + (y - x) / 4);
            end = Math.round(x + 3 * (y - x) / 4);
            horiz = this.rand(start, end);
        }

        if (c1 == c2) {
            vert = c1;
        } else {
            x = c1 + 1;
            y = c2 - 1;
            start = Math.round(x + (y - x) / 3);
            end = Math.round(x + 2 * (y - x) / 3);
            vert = this.rand(start, end);
        }

        for (let i = this.posToWall(r1) - 1; i <= this.posToWall(r2) + 1; i++) {
            for (let j = this.posToWall(c1) - 1; j <= this.posToWall(c2) + 1; j++) {
                if ((i == this.posToWall(horiz)) || (j == this.posToWall(vert))) {
                    this.maze[i][j] = 1;
                }
            }
        }

        let gaps = this.shuffle([true, true, true, false]);

        // create gaps in partition walls

        if (gaps[0]) {
            let gapPosition = this.rand(c1, vert);
            this.maze[this.posToWall(horiz)][this.posToSpace(gapPosition)] = 0;
        }

        if (gaps[1]) {
            let gapPosition = this.rand(vert + 1, c2 + 1);
            this.maze[this.posToWall(horiz)][this.posToSpace(gapPosition)] = 0;
        }

        if (gaps[2]) {
            let gapPosition = this.rand(r1, horiz);
            this.maze[this.posToSpace(gapPosition)][this.posToWall(vert)] = 0;
        }

        if (gaps[3]) {
            let gapPosition = this.rand(horiz + 1, r2 + 1);
            this.maze[this.posToSpace(gapPosition)][this.posToWall(vert)] = 0;
        }

        // recursively partition newly created chambers

        this.partition(r1, horiz - 1, c1, vert - 1);
        this.partition(horiz + 1, r2, c1, vert - 1);
        this.partition(r1, horiz - 1, vert + 1, c2);
        this.partition(horiz + 1, r2, vert + 1, c2);

    }

    getMaze(){
        return this.maze;
    }
}