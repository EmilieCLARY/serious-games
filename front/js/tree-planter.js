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

// TIME IN SECONDS
var timeToPlay = 12000;

var cursor;
var upKey;
var downKey;
var ZQSD;
var CPA;
var arrow;

var mapHeight = 36;
var mapWidth = 70;
var gridSize = 40;
var map = new Array(mapWidth);

var arbre;
var tabTree = [];
var treePlanted = 0;
var treeFull = 0;
var newTreeeeeee = true;

var nextXpx;
var nextYpx;

var background;

var text;
var text2;
var textTime;

var pointJoueur;


for(let i = 0; i < mapHeight; i++){
    map[i] = new Array(mapWidth);
}

for(let j = 0; j < mapHeight; j++){
    for(let k = 0; k < mapWidth; k++){
        map[j][k] = 0;
    }
}

chemins();



function preload ()
{
    this.load.image('vert', '../img/tree_planter/vert.png');

    this.load.image('background', '../img/tree_planter/treeplanter.png');

    this.load.image('trigger', '../img/tree_planter/trigger.png');
    this.load.image('creusé', '../img/tree_planter/creusé.png');
    this.load.image('planté', '../img/tree_planter/planté.png');
    this.load.image('arrosé', '../img/tree_planter/arrosé.png');
    this.load.image('fini', '../img/tree_planter/trigger.png');
    this.load.image('medium', '../img/tree_planter/medium.png');
    this.load.image('grand', '../img/tree_planter/fini.png');

    this.load.image('player', '../img/big_head/champR.png');

    this.load.image('arrow', '../img/tree_planter/arrow.png');
}


function create ()
{

    //background = this.add.tileSprite(4100, 2500, 8200, 5000, "background");
    background = this.add.sprite(1520, 920, "background");

    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    CPA = this.input.keyboard.addKeys("C,P,A");
    
    //let PosX = 120;
    //let PosY = 220;
//
    let tmpCounter = 0;
    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){
            if(map[i][j] == 0){
                //this.add.image(PosX, PosY, "vert").setScale(4);
                tmpCounter++;
            }
            //this.add.text(PosX, PosY, j, {
            //    fontSize: '13px',
            //    fill: '#000000'
            //});
            //PosX += 40
        }
    //    PosX = 120;
    //    PosY += 40;
    }
    console.log(tmpCounter / 2)

    this.player = this.physics.add.sprite(300, 200, 'player').setCollideWorldBounds(true);
    this.player.setScale(2);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 3047, 1845);
    this.physics.world.setBounds(0, 0, 3047, 1845);

    this.cameras.main.setZoom(1.6);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    /********************************/
    /*                              */
    /* --  Gestion de la minimap -- */
    /*                              */
    /********************************/

    this.minimap = this.cameras.add(870, 500, 330, 220).setZoom(0.1).setName('mini');
    this.minimap.setBackgroundColor(0x002244);
    this.minimap.scrollX = 1365;
    this.minimap.scrollY = 922;

    //this.add.grid(100, 50, mapWidth * gridSize, mapHeight * gridSize, gridSize, 0x999999, 1, 0x666666).setOrigin(0);
   
    arbre = this.add.sprite(120, 220, "trigger").setScale(0.07);
    let array = [arbre, 0, 0];
    tabTree.push(array);
    map[0][0] = 1;
    newTreeeeeee = false;

    nextXpx = 120 + 40;
    nextYpx = 220 + 40;

    /********************************/
    /*                              */
    /* --        Flèche         --  */
    /*                              */
    /********************************/

    arrow = this.add.sprite(0 , 0, 'arrow').setScale(0.1);

    /********************************/
    /*                              */
    /* --   Gestion des textes  --  */
    /*                              */
    /********************************/


    text = this.add.text(240, 140, '', {
        fontSize: '13px',
        fill: '#000000'
    });
    text.setScrollFactor(0);

    text2 = this.add.text(800, 140, '', {
        fontSize: '13px',
        fill: '#000000'
    });
    text2.setScrollFactor(0);

    textTime = this.add.text(600, 140,"Time : ",{
        font: "13px",
        fill : "#000000",
        align : "center"
    });
    textTime.setScrollFactor(0);
}

function update (time, delta)
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);

    if (this.cursors.left.isDown){
        this.player.setVelocityX(-200);
    }
    else if (this.cursors.right.isDown){
        this.player.setVelocityX(200);
    }
    if (this.cursors.up.isDown){
        this.player.setVelocityY(-200);
    }
    else if (this.cursors.down.isDown){
        this.player.setVelocityY(200);
    }
    //console.log(Math.round(this.player.x), Math.round(this.player.y));

    
    /********************************/
    /*                              */
    /* - Détection des changements - */
    /*                              */
    /********************************/
    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){
            let PosX = j * 40 + 120;
            let PosY = i * 40 + 220;
            //console.log(PosX, PosY);

            if(PosX - 20 <= Math.round(this.player.x) && Math.round(this.player.x) <= PosX + 20 && PosY - 20 <= Math.round(this.player.y) && Math.round(this.player.y) <= PosY + 20){
                if(map[i][j] == 1 && CPA.C.isDown ){     // Etat trigger à creusé
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            //console.log(tabTree[k][1], tabTree[k][2], i, j, k)
                            tabTree[k][0].setTexture("creusé").setScale(0.85);
                            //arbre.destroy();
                            //tabTree[k] = this.add.sprite(PosX, PosY, "creusé").setScale(0.05);
                            console.log("creusé");
                            map[i][j] = 2;
                        } 
                    }
                }
                else if(map[i][j] == 2 && CPA.P.isDown){     // Etat creusé à planté
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            tabTree[k][0].setTexture("planté").setScale(0.065);
                            //arbre.destroy();
                            //tabTree[k] = this.add.sprite(PosX, PosY, "planté").setScale(0.25);
                            console.log("planté");
                            map[i][j] = 3;
                        }
                    }
                }
                else if(map[i][j] == 3 && CPA.A.isDown){      // Etat planté à arrosé
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            tabTree[k][0].setTexture("arrosé").setScale(0.75);
                            //arbre.destroy();
                            //tabTree[k] = this.add.sprite(PosX, PosY, "arrosé").setScale(2.2);
                            console.log("arrosé"); 
                            //setTimeout(function() {map[i][j] = 4 }, 3000);   // Attend 7 secondes avant exécution ;
                            map[i][j] = 4;
                            //treePlanted++;
                            newTreeeeeee = true;
                        }                                
                    }
                }
            }
            if(map[i][j] == 4){      // Etat arrosé à fini
                //arbre.destroy();
                //arbre = this.add.sprite(PosX, PosY, "fini").setScale(0.05);
                setTimeout(function() {
                    //arbre.setTexture("fini").setScale(0.05);
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            tabTree[k][0].setTexture("medium").setScale(1);
                            map[i][j] = 5
                        }                            
                    }
                }, 3000);
                //setTimeout(function() { map[i][j] = 5 }, 3000);   // Attend 7 secondes avant exécutio
                //console.log("fini"); 
            }
            if(map[i][j] == 5){      // Etat fini à medium
                setTimeout(() => {
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            tabTree[k][0].setTexture("medium").setScale(1);
                            map[i][j] = 6;
                            //arbre.destroy();
                            //tabTree[k] = this.add.sprite(PosX, PosY, "medium").setScale(0.05);
                            //setTimeout(function() {map[i][j] = 6}, 3000);   // Attend 7 secondes avant exécution 
                            //console.log("medium");
                        }   
                    }
                }, 3000);
            }
            if(map[i][j] == 6){      // Etat medium à grand
                setTimeout(() => {
                    for(let k = 0; k < tabTree.length; k++){
                        if(tabTree[k][1] == i && tabTree[k][2] == j){
                            tabTree[k][0].setTexture("grand").setScale(0.14);
                            //arbre.destroy();
                            //tabTree[k] = this.add.sprite(PosX, PosY, "grand").setScale(0.28); // Attend 7 secondes avant exécution
                            //console.log("grand"); 
                            map[i][j] = 7;
                        }
                    }
                }, 3000);
            }
        }
    }

    treeFull = countTrees()[0];
    treePlanted = countTrees()[1];

    //console.log(map[35][69]);
    /********************************/
    /*                              */
    /*Génération d'un nouvel endroit*/
    /*                              */
    /********************************/

    if(newTreeeeeee === true){

        let posPlayerY = Math.round((this.player.x-120) / 40);
        let posPlayerX = Math.round((this.player.y-220) / 40);

        let maxX = posPlayerX + 10;
        if(maxX >= 36) maxX = 35;
        let minX = posPlayerX - 10;
        if(minX < 0) minX = 0;
        let maxY = posPlayerY + 10;
        if(maxY >= 70) maxY = 69;
        let minY = posPlayerY - 10;
        if(minY < 0) minY = 0;

        //console.log(minX, maxX, minY, maxY);

        let positionX = Phaser.Math.Between(minX, maxX);
        let positionY = Phaser.Math.Between(minY, maxY);

        console.log(positionX, positionY);

        while(map[positionX][positionY] != 0 || (positionX - 1 >= 0 && map[positionX-1][positionY] > 0) || (positionX+1 < 36 && map[positionX+1][positionY] > 0) || (positionY - 1 >= 0 && map[positionX][positionY-1] > 0) || (positionY + 1 < 70 && map[positionX][positionY+1] > 0)){

            positionX = Phaser.Math.Between(minX, maxX);
            positionY = Phaser.Math.Between(minY, maxY);
            console.log("Reroll : ", positionX, positionY);
        }   
        
        let tree = this.add.sprite(positionY * 40 + 120, positionX * 40 + 220, "trigger").setScale(0.07);
        let array = [tree, positionX, positionY];
        tabTree.push(array);
        map[positionX][positionY] = 1;

        nextXpx = positionY * 40 + 120 + 40;
        nextYpx = positionX * 40 + 220 + 40;

        newTreeeeeee = false;
        
    }

    /********************************/
    /*                              */
    /* --  Gestion de la flèche --  */
    /*                              */
    /********************************/

    let angleDeg = Math.atan2(nextYpx - 40 - this.player.y, nextXpx - 40 - this.player.x) * 180 / Math.PI;
    //console.log(angleDeg);
    arrow.angle = angleDeg;
    arrow.x = this.player.x + (75 * Math.cos(angleDeg * Math.PI/180));
    arrow.y = this.player.y + (75 * Math.sin(angleDeg * Math.PI/180));

    //console.log(Phaser.Math.Distance.BetweenPoints(arrow, {x : nextXpx, y : nextYpx}));
    if(Phaser.Math.Distance.BetweenPoints(this.player, {x : nextXpx, y : nextYpx}) < 100){
        arrow.visible = false;
    }
    else{
        arrow.visible = true;
    }

    /********************************/
    /*                              */
    /* --   Gestion des textes  --  */
    /*                              */
    /********************************/

    text.setText(
        'Plant as many trees as you can' +
        '\n  Press C to dig' +
        '\n  Press P to plant' + 
        '\n  Press A to water'
    );
    text2.setText(
        'Growing Trees : ' + treePlanted +
        '\nTrees planted : ' + treeFull
    );

     /********************************/
    /*                              */
    /* --   Gestion du temps    --  */
    /*                              */
    /********************************/

    let currentTime = timeToPlay - parseInt(time/1000);

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

    if(currentTime == 0){
        this.add.text(this.player.x - 400, this.player.y + 100, 'Time end, you have ' + countTrees()[0] + ' trees planted', {
            fontSize: '20px',
            fill: '#000000'
        });
        text.setScrollFactor(0);
        this.scene.pause();
        socket.emit('treesPlanted', countTrees()[0]);
    }

    this.minimap.ignore(text);
    this.minimap.ignore(text2);
    this.minimap.ignore(textTime);
    this.minimap.ignore(arrow);
}

function countTrees(){
    let tmp = 0;
    let tmp2 = 0;
    for(let i = 0; i < mapHeight; i++){
        for(let j = 0; j < mapWidth; j++){
            if(map[i][j] == 7){
                tmp++;
            }
            else if(map[i][j] > 3 && map[i][j] != 7){
                tmp2++;
            }
        }
    }
    return [tmp, tmp2];
};

function chemins(){

    map[0][63] = -1;
    map[0][62] = -1;
    map[0][61] = -1;
    map[0][60] = -1;
    map[0][59] = -1;
    map[0][58] = -1;
    map[0][57] = -1;
    map[0][56] = -1;
    map[0][55] = -1;
    map[0][54] = -1;
    map[0][50] = -1;
    map[0][49] = -1;
    map[0][48] = -1;
    map[0][47] = -1;
    map[0][46] = -1;

    map[1][55] = -1;
    map[1][54] = -1;
    map[1][53] = -1;
    map[1][52] = -1;
    map[1][51] = -1;
    map[1][50] = -1;
    map[1][49] = -1;
    map[1][47] = -1;
    map[1][46] = -1;
    map[1][45] = -1;

    map[2][55] = -1;
    map[2][54] = -1;
    map[2][53] = -1;
    map[2][52] = -1;
    map[2][51] = -1;
    map[2][50] = -1;
    map[2][49] = -1;
    map[2][47] = -1;
    map[2][46] = -1;
    map[2][45] = -1;

    map[3][45] = -1;
    map[3][44] = -1;
    map[3][43] = -1;

    map[4][44] = -1;
    map[4][43] = -1;
    map[4][37] = -1;
    map[4][36] = -1;
    map[4][35] = -1;
    map[4][34] = -1;
    map[4][33] = -1;
    map[4][32] = -1;
    map[4][31] = -1;
    map[4][30] = -1;
    map[4][29] = -1;

    map[5][44] = -1;
    map[5][43] = -1;
    map[5][38] = -1;
    map[5][37] = -1;
    map[5][36] = -1;
    map[5][35] = -1;
    map[5][34] = -1;
    map[5][33] = -1;
    map[5][32] = -1;
    map[5][31] = -1;
    map[5][30] = -1;
    map[5][29] = -1;

    map[6][44] = -1;
    map[6][43] = -1;
    map[6][39] = -1;
    map[6][38] = -1;
    map[6][37] = -1;
    map[6][29] = -1;
    map[6][28] = -1;
    map[6][27] = -1;
    map[6][26] = -1;

    map[7][43] = -1;
    map[7][44] = -1;
    map[7][39] = -1;
    map[7][38] = -1;
    map[7][26] = -1;

    map[8][49] = -1;
    map[8][48] = -1;
    map[8][47] = -1;
    map[8][46] = -1;
    map[8][45] = -1;
    map[8][44] = -1;
    map[8][43] = -1;
    map[8][42] = -1;
    map[8][41] = -1;
    map[8][40] = -1;
    map[8][39] = -1;
    map[8][38] = -1;
    map[8][26] = -1;
    map[8][9] = -1;
    map[8][8] = -1;
    map[8][7] = -1;
    map[8][6] = -1;
    map[8][5] = -1;
    map[8][4] = -1;
    map[8][3] = -1;

    map[9][50] = -1;
    map[9][49] = -1;
    map[9][48] = -1;
    map[9][26] = -1;
    map[9][25] = -1;
    map[9][24] = -1;
    map[9][10] = -1;
    map[9][9] = -1;
    map[9][8] = -1;
    map[9][4] = -1;
    map[9][3] = -1;
    map[9][2] = -1;

    map[10][50] = -1;
    map[10][49] = -1;
    map[10][48] = -1;
    map[10][26] = -1;
    map[10][25] = -1;
    map[10][24] = -1;
    map[10][10] = -1;
    map[10][9] = -1;
    map[10][8] = -1;
    map[10][4] = -1;
    map[10][3] = -1;
    map[10][2] = -1;

    map[11][50] = -1;
    map[11][51] = -1;
    map[11][52] = -1;
    map[11][53] = -1;
    map[11][25] = -1;
    map[11][24] = -1;
    map[11][15] = -1;
    map[11][14] = -1;
    map[11][13] = -1;
    map[11][12] = -1;
    map[11][11] = -1;
    map[11][10] = -1;
    map[11][2] = -1;
    map[11][1] = -1;
    map[11][0] = -1;

    map[12][56] = -1;
    map[12][55] = -1;
    map[12][54] = -1;
    map[12][53] = -1;
    map[12][25] = -1;
    map[12][24] = -1;
    map[12][15] = -1;
    map[12][14] = -1;

    map[13][14] = -1;
    map[13][15] = -1;
    map[13][16] = -1;
    map[13][17] = -1;
    map[13][18] = -1;
    map[13][22] = -1;
    map[13][23] = -1;
    map[13][24] = -1;
    map[13][25] = -1;
    map[13][53] = -1;
    map[13][54] = -1;
    map[13][55] = -1;
    map[13][56] = -1;
    map[13][57] = -1;


    map[14][56] = -1;
    map[14][57] = -1;
    map[14][22] = -1;
    map[14][23] = -1;
    map[14][18] = -1;
    map[14][19] = -1;
    map[14][20] = -1;

    map[15][19] = -1;
    map[15][20] = -1;
    map[15][22] = -1;
    map[15][23] = -1;
    map[15][56] = -1;
    map[15][57] = -1;

    map[16][54] = -1;
    map[16][55] = -1;
    map[16][56] = -1;
    map[16][57] = -1;
    map[16][23] = -1;
    map[16][22] = -1;
    map[16][21] = -1;
    map[16][20] = -1;
    map[16][19] = -1;

    map[17][22] = -1;
    map[17][23] = -1;
    map[17][53] = -1;
    map[17][54] = -1;
    map[17][55] = -1;

    map[18][53] = -1;
    map[18][54] = -1;
    map[18][55] = -1;
    map[18][22] = -1;
    map[18][23] = -1;

    map[19][53] = -1;
    map[19][54] = -1;
    map[19][25] = -1;
    map[19][24] = -1;
    map[19][23] = -1;
    map[19][22] = -1;

    map[20][24] = -1;
    map[20][25] = -1;
    map[20][50] = -1;
    map[20][51] = -1;
    map[20][52] = -1;
    map[20][53] = -1;
    map[20][54] = -1;
    map[20][55] = -1;

    map[21][24] = -1;
    map[21][25] = -1;
    map[21][50] = -1;
    map[21][51] = -1;
    map[21][52] = -1;
    map[21][53] = -1;
    map[21][54] = -1;
    map[21][55] = -1;

    map[22][24] = -1;
    map[22][25] = -1;
    map[22][26] = -1;
    map[22][46] = -1;
    map[22][47] = -1;
    map[22][48] = -1;
    map[22][49] = -1;
    map[22][50] = -1;
    map[22][54] = -1;
    map[22][55] = -1;
    map[22][56] = -1;
    map[22][57] = -1;
    map[22][58] = -1;

    map[23][24] = -1;
    map[23][25] = -1;
    map[23][26] = -1;
    map[23][46] = -1;
    map[23][47] = -1;
    map[23][48] = -1;
    map[23][49] = -1;
    map[23][50] = -1;
    map[23][54] = -1;
    map[23][55] = -1;
    map[23][56] = -1;
    map[23][57] = -1;
    map[23][58] = -1;

    map[24][26] = -1;
    map[24][45] = -1;
    map[24][46] = -1;
    map[24][47] = -1;
    map[24][58] = -1;

    map[25][60] = -1;
    map[25][59] = -1;
    map[25][58] = -1;
    map[25][46] = -1;
    map[25][45] = -1;
    map[25][44] = -1;
    map[25][43] = -1;
    map[25][42] = -1;
    map[25][28] = -1;
    map[25][27] = -1;
    map[25][26] = -1;

    map[26][60] = -1;
    map[26][59] = -1;
    map[26][58] = -1;
    map[26][45] = -1;
    map[26][44] = -1;
    map[26][43] = -1;
    map[26][42] = -1;
    map[26][28] = -1;
    map[26][27] = -1;

    map[27][60] = -1;
    map[27][59] = -1;
    map[27][42] = -1;
    map[27][41] = -1;
    map[27][40] = -1;
    map[27][38] = -1;
    map[27][37] = -1;
    map[27][36] = -1;
    map[27][35] = -1;
    map[27][34] = -1;
    map[27][30] = -1;
    map[27][29] = -1;
    map[27][28] = -1;
    map[27][27] = -1;
    
    map[28][29] = -1;
    map[28][30] = -1;
    map[28][31] = -1;
    map[28][32] = -1;
    map[28][33] = -1;
    map[28][34] = -1;
    map[28][35] = -1;
    map[28][36] = -1;
    map[28][37] = -1;
    map[28][38] = -1;
    map[28][39] = -1;
    map[28][40] = -1;
    map[28][41] = -1;
    map[28][42] = -1;
    map[28][59] = -1;
    map[28][60] = -1;
    map[28][61] = -1;
    map[28][62] = -1;
    map[28][63] = -1;

    map[29][29] = -1;
    map[29][30] = -1;
    map[29][31] = -1;
    map[29][32] = -1;
    map[29][33] = -1;
    map[29][34] = -1;
    map[29][37] = -1;
    map[29][38] = -1;
    map[29][39] = -1;
    map[29][40] = -1;
    map[29][41] = -1;
    map[29][59] = -1;
    map[29][60] = -1;
    map[29][61] = -1;
    map[29][62] = -1;
    map[29][63] = -1;

    map[30][63] = -1;
    map[30][62] = -1;

    map[31][63] = -1;
    map[31][62] = -1;

    map[32][63] = -1;
    map[32][62] = -1;
    map[32][64] = -1;
    map[32][65] = -1;

    map[33][66] = -1;
    map[33][65] = -1;
    map[33][64] = -1;

    map[34][66] = -1;
    map[34][65] = -1;
    map[34][64] = -1;

    map[35][68] = -1;
    map[35][67] = -1;
    map[35][66] = -1;
    map[35][65] = -1;
}