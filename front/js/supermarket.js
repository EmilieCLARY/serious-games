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

var background;
var shelf = [];
var articles = [];

var cursor;
var upKey;
var downKey;
var ZQSD;
var CPA;

class Article{
    constructor(name_, price_, nv_, picture_, scale_, x_, y_){
        this.name = name_;
        this.price = price_;
        this.nv = nv_;
        this.picture = picture_;
        this.scale = scale_;
        this.x = x_;
        this.y = y_;
    }
}

function preload ()
{
    this.load.image('floor', '../img/supermarket/map/floor2.png');
    this.load.image('player', '../img/supermarket/player/cartstraight.png');
    this.load.image('shelf', '../img/supermarket/map/shelf4.png');

    // Fruits
    this.load.image('apple', '../img/supermarket/fruits/apple.png');
    this.load.image('apricot', '../img/supermarket/fruits/apricot.png');
    this.load.image('banana', '../img/supermarket/fruits/banana.png');
    this.load.image('cherry', '../img/supermarket/fruits/cherry.png');
    this.load.image('citron', '../img/supermarket/fruits/citron.png');
    this.load.image('orange', '../img/supermarket/fruits/orange.png');
    this.load.image('pear', '../img/supermarket/fruits/pear.png');
    this.load.image('pineapple', '../img/supermarket/fruits/pineapple.png');
    this.load.image('strawberry', '../img/supermarket/fruits/strawberry.png');
    this.load.image('watermelon', '../img/supermarket/fruits/watermelon.png');

    // Legumes
    this.load.image('carrot', '../img/supermarket/legumes/carrot.png');
    this.load.image('cauliflower', '../img/supermarket/legumes/cauliflower.png');
    this.load.image('cucumber', '../img/supermarket/legumes/cucumber.png');
    this.load.image('leek', '../img/supermarket/legumes/leek.png');
    this.load.image('lettuce', '../img/supermarket/legumes/lettuce.png');
    this.load.image('oignon', '../img/supermarket/legumes/oignon.png');
    this.load.image('pepper', '../img/supermarket/legumes/pepper.png');
    this.load.image('pumkin', '../img/supermarket/legumes/pumkin.png');
    this.load.image('radish', '../img/supermarket/legumes/radish.png');
    this.load.image('tomato', '../img/supermarket/legumes/tomato.png');

    // Poisson / Viande
    this.load.image('cabillaud', '../img/supermarket/fishMeat/cabillaud.png');
    this.load.image('crab', '../img/supermarket/fishMeat/crab.png');
    this.load.image('crevette', '../img/supermarket/fishMeat/crevette.png');
    this.load.image('moules', '../img/supermarket/fishMeat/moules.png');
    this.load.image('salmon', '../img/supermarket/fishMeat/salmon.png');
    this.load.image('agneau', '../img/supermarket/fishMeat/agneau.png');
    this.load.image('boeuf', '../img/supermarket/fishMeat/boeuf.png');
    this.load.image('porc', '../img/supermarket/fishMeat/porc.png');
    this.load.image('poulet', '../img/supermarket/fishMeat/poulet.png');
    this.load.image('saucisse', '../img/supermarket/fishMeat/saucisse.png');

    // Féculents
    this.load.image('mais', '../img/supermarket/feculents/mais.png');
    this.load.image('pasta', '../img/supermarket/feculents/pasta.png');
    this.load.image('potato', '../img/supermarket/feculents/potato.png');
    this.load.image('rice', '../img/supermarket/feculents/rice.png');
    this.load.image('wheat', '../img/supermarket/feculents/wheat.png');

    // Biscuits Salé / Sucré
    this.load.image('3D', '../img/supermarket/biscuitsSucSal/3D.png');
    this.load.image('belin', '../img/supermarket/biscuitsSucSal/belin.png');
    this.load.image('bueno', '../img/supermarket/biscuitsSucSal/bueno.png');
    this.load.image('chips', '../img/supermarket/biscuitsSucSal/chips.png');
    this.load.image('curly', '../img/supermarket/biscuitsSucSal/curly.png');
    this.load.image('ecoliers', '../img/supermarket/biscuitsSucSal/ecoliers.png');
    this.load.image('oreo', '../img/supermarket/biscuitsSucSal/oreo.png');
    this.load.image('pitch', '../img/supermarket/biscuitsSucSal/pitch.png');
    this.load.image('prince', '../img/supermarket/biscuitsSucSal/prince.png');
    this.load.image('pringles', '../img/supermarket/biscuitsSucSal/pringles.png');

    // Surgelé
    this.load.image('cordon-bleu', '../img/supermarket/surgelé/cordon-bleu.png');
    this.load.image('fries', '../img/supermarket/surgelé/fries.png');
    this.load.image('glace', '../img/supermarket/surgelé/glace.png');
    this.load.image('pizza', '../img/supermarket/surgelé/pizza.png');
    this.load.image('croustibat', '../img/supermarket/surgelé/croustibat.png');

    // Conserves
    //this.load.image('cordon-bleu', '../img/supermarket/conserves/cordon-bleu.png');
}



function create ()
{
    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");

    background = this.add.tileSprite(0, 0, 5000, 3000, "floor");

    this.player = this.physics.add.sprite(600, 350, 'player').setCollideWorldBounds(true);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 2470, 5000);
    this.physics.world.setBounds(0, 0, 2470, 5000);

    //this.cameras.main.setZoom(1.6);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    /********************************/
    /*                              */
    /* --  Gestion de l'étagère --  */
    /*                              */
    /********************************/

    for(let i = 600; i < 1800; i+=256){
        for(var j = 195; j < 15000; j += 352){
            let newShelf = this.physics.add.sprite(i, j, 'shelf').setAngle(90);
            newShelf.body.immovable = true;
            newShelf.body.setSize(256, 64)
            shelf.push(newShelf);
            newShelf = this.physics.add.sprite(i, j+64 , 'shelf').setAngle(90);
            newShelf.body.immovable = true;
            newShelf.body.setSize(256, 64)
            shelf.push(newShelf);
        }
    }

    for(let i = 0; i < shelf.length; i++){
        this.physics.add.collider(this.player, shelf[i]);
    }

    /********************************/
    /*                              */
    /* --  Gestion des articles --  */
    /*                              */
    /********************************/

    articles.push(new Article('Apple', 0.5, 6, 'apple', 0.2, 530, 259));
    this.add.sprite(530, 259, 'apricot').setScale(0.35);
     
}

function update (time, delta)
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);

    if (this.cursors.left.isDown){
        this.player.setVelocityX(-400);
        this.player.setAngle(-90);
        this.player.body.setSize(128, 64);
    }
    else if (this.cursors.right.isDown){
        this.player.setVelocityX(400);
        this.player.setAngle(90);
        this.player.body.setSize(128, 64);
    }
    else if (this.cursors.up.isDown){
        this.player.setVelocityY(-400);
        this.player.setAngle(0);
        this.player.body.setSize(64, 128);
    }
    else if (this.cursors.down.isDown){
        this.player.setVelocityY(400);
        this.player.setAngle(-180);
        this.player.body.setSize(64, 128);
    }

}