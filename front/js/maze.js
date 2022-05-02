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
var maze;

function preload ()
{


}


function create ()
{

    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    CPA = this.input.keyboard.addKeys("C,P,A");

    maze = this.maze.generate(32, 8);

}

function update (time, delta)
{


    for(let i = 0; i < matHeight; i++){
        for(let j = 0; j < matWidth; j++){
        
            console.log(maze[j][i]);
        }
    }
      
}