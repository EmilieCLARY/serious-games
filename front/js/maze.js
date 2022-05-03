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

var mapHeight = 10;
var mapWidth = 10;
var maze;

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

    //maze = newMaze(mapHeight, mapWidth);

    for(let j = 0; j < mapHeight; j++){
        for(let k = 0; k < mapWidth; k++){
            
            if(k == 0 % 2 && j == 1 %2){
                map[j][k] = 0;
            }
            else{
                map[j][k] = 1;
            }
        }
    }
    //if (disp[i][j][0] == 0) { $('#'+selector).css('border-top', '2px solid black'); }
    //if (disp[i][j][1] == 0) { $('#'+selector).css('border-right', '2px solid black'); }
    //if (disp[i][j][2] == 0) { $('#'+selector).css('border-bottom', '2px solid black'); }
    //if (disp[i][j][3] == 0) { $('#'+selector).css('border-left', '2px solid black'); }

    // top, right, left, bottom
    // 0 = wall, 1 = rien

    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){

            if(map[i][j] == 1){
                this.add.image(PosX, PosY, "bush").setScale(0.25);
                PosX += 80; 
            }else{
                this.add.image(PosX, PosY, "player").setScale(0.8);
                PosX += 80;
            }

            //if(maze[i][j][0] == 0){
            //    this.add.image(PosX, PosY-80, "vert").setScale(6);
            //    PosX += 80;
            //}
            //else if(maze[i][j][1] == 0){
            //    this.add.image(PosX+80, PosY, "vert").setScale(6);
            //    PosX += 80;
            //}
            //else if(maze[i][j][2] == 0){
            //    this.add.image(PosX-80, PosY, "vert").setScale(6);
            //    PosX += 80;
            //}
            //else if(maze[i][j][3] == 0){
            //    this.add.image(PosX, PosY+80, "vert").setScale(6);
            //    PosX += 80;
            //}
            //else{
            //    this.add.image(PosX, PosY, "player").setScale(8);
            //    PosX += 80; 
            //}

        }
        PosX = 100;
        PosY += 80;
    }

    //for(let i = 0; i < mapHeight; i++){
    //    for(let j = 0; j < mapWidth; j++){
        
    
    while(map[positionX][positionY] != 1){

        let positionX = Phaser.Math.Between(0, 9*80);
        let positionY = Phaser.Math.Between(0, 9*100);        
       
    
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
      
}


function newMaze(x, y) {

    // Establish variables and starting grid
    var totalCells = x*y;
    var cells = new Array();
    var unvis = new Array();
    for (var i = 0; i < y; i++) {
        cells[i] = new Array();
        unvis[i] = new Array();
        for (var j = 0; j < x; j++) {
            cells[i][j] = [0,0,0,0];
            unvis[i][j] = true;
        }
    }
    
    // Set a random position to start from
    var currentCell = [Math.floor(Math.random()*y), Math.floor(Math.random()*x)];
    var path = [currentCell];
    unvis[currentCell[0]][currentCell[1]] = false;
    var visited = 1;
    
    // Loop through all available cell positions
    while (visited < totalCells) {
        // Determine neighboring cells
        var pot = [[currentCell[0]-1, currentCell[1], 0, 2],
                [currentCell[0], currentCell[1]+1, 1, 3],
                [currentCell[0]+1, currentCell[1], 2, 0],
                [currentCell[0], currentCell[1]-1, 3, 1]];
        var neighbors = new Array();
        
        // Determine if each neighboring cell is in game grid, and whether it has already been checked
        for (var l = 0; l < 4; l++) {
            if (pot[l][0] > -1 && pot[l][0] < y && pot[l][1] > -1 && pot[l][1] < x && unvis[pot[l][0]][pot[l][1]]) { neighbors.push(pot[l]); }
        }
        
        // If at least one active neighboring cell has been found
        if (neighbors.length) {
            // Choose one of the neighbors at random
            next = neighbors[Math.floor(Math.random()*neighbors.length)];
            
            // Remove the wall between the current cell and the chosen neighboring cell
            cells[currentCell[0]][currentCell[1]][next[2]] = 1;
            cells[next[0]][next[1]][next[3]] = 1;
            
            // Mark the neighbor as visited, and set it as the current cell
            unvis[next[0]][next[1]] = false;
            visited++;
            currentCell = [next[0], next[1]];
            path.push(currentCell);
        }
        // Otherwise go back up a step and keep going
        else {
            currentCell = path.pop();
        }
    }
    return cells;
}