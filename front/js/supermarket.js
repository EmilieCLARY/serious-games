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

var background;
var shelf = [];
var articles = [];

var cursor;
var upKey;
var downKey;
var ZQSD;
var space;

var text;
var button;

var currentPrice = 0;
var numberOfArticles = 0;
var listOfArticles = [];
var showList = false;

var listWTFLUL = "";
var blanclist;
var titreTextList;
var textList;

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
    this.load.image('zone', '../img/supermarket/map/zone.png');
    this.load.image('list', '../img/supermarket/list.png');
    this.load.image('blanc', '../img/supermarket/blanc.png');

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
    this.load.image('asperges', '../img/supermarket/conserve/asperges.png');
    this.load.image('cornichons', '../img/supermarket/conserve/cornichons.png');
    this.load.image('haricot', '../img/supermarket/conserve/haricot.png');
    this.load.image('ravioli', '../img/supermarket/conserve/ravioli.png');
    this.load.image('saucetomate', '../img/supermarket/conserve/saucetomate.png');

    // Boulangerie
    this.load.image('baguette', '../img/supermarket/boulangerie/baguette.png');
    this.load.image('chocolatine', '../img/supermarket/boulangerie/chocolatine.png');
    this.load.image('painchocolat', '../img/supermarket/boulangerie/chocolatine.png');
    this.load.image('painmie', '../img/supermarket/boulangerie/painmie.png');
    this.load.image('sandwich', '../img/supermarket/boulangerie/sandwich.png');

    // Boissons
    this.load.image('beer', '../img/supermarket/boissons/beer.png');
    this.load.image('coca', '../img/supermarket/boissons/coca.png');
    this.load.image('icetea', '../img/supermarket/boissons/icetea.png');
    this.load.image('monsterenergy', '../img/supermarket/boissons/monsterenergy.png');
    this.load.image('rhum', '../img/supermarket/boissons/rhum.png');
    this.load.image('waterbottle', '../img/supermarket/boissons/waterbottle.png');
    this.load.image('whisky', '../img/supermarket/boissons/whisky.png');
    this.load.image('wine', '../img/supermarket/boissons/wine.png');

    // Laitiers

    this.load.image('butter', '../img/supermarket/laitiers/butter.png');
    this.load.image('cheese', '../img/supermarket/laitiers/cheese.png');
    this.load.image('milk', '../img/supermarket/laitiers/milk.png');
    this.load.image('yahourt', '../img/supermarket/laitiers/yahourt.png');

}



function create ()
{
    this.cursors = this.input.keyboard.createCursorKeys();
    cursor = this.input.keyboard.createCursorKeys();
    ZQSD = this.input.keyboard.addKeys("Z,Q,S,D");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    background = this.add.tileSprite(0, 0, 5000, 7000, "floor");

    this.player = this.physics.add.sprite(205, 1085, 'player').setCollideWorldBounds(true).setDepth(10);

    /********************************/
    /*                              */
    /* --  Gestion de la caméra --  */
    /*                              */
    /********************************/

    this.cameras.main.setBounds(0, 0, 2400, 3400);
    this.physics.world.setBounds(0, 0, 2400, 3400);

    //this.cameras.main.setZoom(1.6);

    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    /********************************/
    /*                              */
    /* --  Gestion de l'étagère --  */
    /*                              */
    /********************************/

    for(let i = 600; i < 1800; i+=256){
        for(var j = 195; j < 3000; j += 352){
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

    this.add.text(1048, 40, "FROZEN FOOD",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 392, "FRUITS",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 744, "VEGETABLES",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 1096, "FISH & MEAT",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 1448, "STARCH & PRESERVES",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 1800, "SWEET & SAVOURY BISCUITS",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 2152, "DRINKS",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });

    this.add.text(1048, 2504, "BAKERY & DAIRY PRODUCTS",{
        fontFamily: "Concert One",
        font: "22px",
        fill : "#000000",
        align : "center"
    });



    /********************************/
    /*                              */
    /* --  Gestion des articles --  */
    /*                              */
    /********************************/
    
    // Surgelés
    articles.push(new Article('Cordon bleu', 3, 2, 'cordon-bleu', 0.2, 530, 195));
    articles.push(new Article('Croustibat', 2.5, 3, 'croustibat', 0.04, 786, 195));
    articles.push(new Article('Fries', 3, 2, 'fries', 0.1, 1042, 195));
    articles.push(new Article('Ice Cream', 4, 2, 'glace', 0.15, 1298, 195));
    articles.push(new Article('Pizza', 4, 2, 'pizza', 0.1, 1554, 195));

    // Fruits
    articles.push(new Article('Apple', 0.5, 6, 'apple', 0.2, 530, 259));
    articles.push(new Article('Apricot', 0.5, 6, 'apricot', 0.3, 786, 259));
    articles.push(new Article('Banana', 0.5, 6, 'banana', 0.3, 1042, 259));
    articles.push(new Article('Cherry', 0.5, 6, 'cherry', 0.2, 1298, 259));
    articles.push(new Article('Lemon', 0.5, 6, 'citron', 0.3, 1554, 259));
    articles.push(new Article('Orange', 0.5, 6, 'orange', 0.1, 530, 547));
    articles.push(new Article('Pear', 0.5, 6, 'pear', 0.2, 786, 547));
    articles.push(new Article('Pineapple', 0.5, 6, 'pineapple', 0.18, 1042, 547));
    articles.push(new Article('Strawberry', 0.5, 6, 'strawberry', 0.15, 1298, 547));
    articles.push(new Article('Watermelon', 0.5, 6, 'watermelon', 0.15, 1554, 547));
    
    // Legumes
    articles.push(new Article('Carrot', 0.5, 6, 'carrot', 0.2, 530, 611));
    articles.push(new Article('Cauliflower', 0.5, 6, 'cauliflower', 0.3, 786, 611));
    articles.push(new Article('Cucumber', 0.5, 6, 'cucumber', 0.08, 1042, 611));
    articles.push(new Article('Leek', 0.5, 6, 'leek', 0.4, 1298, 611));
    articles.push(new Article('Lettuce', 0.5, 6, 'lettuce', 0.1, 1554, 611));
    articles.push(new Article('Onion', 0.5, 6, 'oignon', 0.5, 530, 899));
    articles.push(new Article('Pepper', 0.5, 6, 'pepper', 0.2, 786, 899));
    articles.push(new Article('Pumpkin', 0.5, 6, 'pumkin', 0.15, 1042, 899));
    articles.push(new Article('Radish', 0.5, 6, 'radish', 0.15, 1298, 899));
    articles.push(new Article('Tomato', 0.5, 6, 'tomato', 0.2, 1554, 899));

    // Fish and Meat
    articles.push(new Article('Lamb', 7, 3, 'agneau', 0.1, 530, 963));
    articles.push(new Article('Beef', 8, 3, 'boeuf', 0.1, 786, 963));
    articles.push(new Article('Pork', 5, 3, 'porc', 0.15, 1042, 963));
    articles.push(new Article('Chicken', 4, 3, 'poulet', 0.2, 1298, 963));
    articles.push(new Article('Sausages', 6, 3, 'saucisse', 0.1, 1554, 963));
    articles.push(new Article('Salmon', 8, 3, 'salmon', 0.2, 530, 1251));
    articles.push(new Article('Cod', 10, 3, 'cabillaud', 0.2, 786, 1251));
    articles.push(new Article('Crab', 12, 3, 'crab', 0.15, 1042, 1251));
    articles.push(new Article('Shrimps', 6, 3, 'crevette', 0.1, 1298, 1251));
    articles.push(new Article('Mussels', 6, 3, 'moules', 0.1, 1554, 1251));

    // Féculents

    articles.push(new Article('Corn', 2, 5, 'mais', 0.13, 530, 1315));
    articles.push(new Article('Pasta', 2, 5, 'pasta', 0.2, 786, 1315));
    articles.push(new Article('Potato', 1.5, 5, 'potato', 0.07, 1042, 1315));
    articles.push(new Article('Rice', 2, 5, 'rice', 0.2, 1298, 1315));
    articles.push(new Article('Wheat', 2, 5, 'wheat', 0.25, 1554, 1315));

    // Conserves
    articles.push(new Article('Asparagus', 3, 6, 'asperges', 0.04, 530, 1603));
    articles.push(new Article('Pickles', 2, 6, 'cornichons', 0.1, 786, 1603));
    articles.push(new Article('Beans', 1.5, 6, 'haricot', 0.12, 1042, 1603));
    articles.push(new Article('Ravioli', 2, 3, 'ravioli', 0.2, 1298, 1603));
    articles.push(new Article('Tomato sauce', 2, 6, 'saucetomate', 0.1, 1554, 1603));

    // Biscuits Sucrés
    articles.push(new Article('Kinder Bueno', 4, 1, 'bueno', 0.12, 530, 1667));
    articles.push(new Article('Petits Écoliers', 3, 1, 'ecoliers', 0.14, 786, 1667));
    articles.push(new Article('Oreo', 3.5, 1, 'oreo', 0.1, 1042, 1667));
    articles.push(new Article('Pitch', 3, 1, 'pitch', 0.1, 1298, 1667));
    articles.push(new Article('Prince', 2, 1, 'prince', 0.08, 1554, 1667));

    // Biscuits Salés
    articles.push(new Article('3D Bacon', 3, 1, '3D', 0.08, 530, 1955));
    articles.push(new Article('Monaco Belin', 1.5, 1, 'belin', 0.08, 786, 1955));
    articles.push(new Article('Chips', 1.5, 1, 'chips', 0.2, 1042, 1955));
    articles.push(new Article('Curly', 2, 1, 'curly', 0.075, 1298, 1955));
    articles.push(new Article('Pringles', 3, 1, 'pringles', 0.08, 1554, 1955));

    // Boissons
    articles.push(new Article('Beer', 5, 1, 'beer', 0.13, 530, 2019));
    articles.push(new Article('Rhum', 20, 1, 'rhum', 0.13, 786, 2019));
    articles.push(new Article('Whisky', 15, 1, 'whisky', 0.14, 1042, 2019));
    articles.push(new Article('Wine', 10, 1, 'wine', 0.19, 1298, 2019));

    articles.push(new Article('Coca', 3, 1, 'coca', 0.12, 530, 2307));
    articles.push(new Article('Ice Tea', 3, 1, 'icetea', 0.09, 786, 2307));
    articles.push(new Article('Monster Energy', 6, 1, 'monsterenergy', 0.11, 1042, 2307));
    articles.push(new Article('Water Bottle', 0.5, 7, 'waterbottle', 0.13, 1298, 2307));

    // Boulangerie
    articles.push(new Article('Baguette', 1, 5, 'baguette', 0.1, 530, 2371));
    articles.push(new Article('Loaf of bread', 2.5, 5, 'painmie', 0.2, 786, 2371));
    articles.push(new Article('Sandwich', 3.5, 5, 'sandwich', 0.1, 1042, 2371));
    articles.push(new Article('Pain au chocolat', 1.5, 5, 'painchocolat', 0.5, 1298, 2371));
    articles.push(new Article('Chocolatine', 2.5, 5, 'chocolatine', 0.5, 1554, 2371));

    // Produits laitiers
    articles.push(new Article('Butter', 4, 3, 'butter', 0.12, 530, 2659));
    articles.push(new Article('Cheese', 5, 4, 'cheese', 0.09, 786, 2659));
    articles.push(new Article('Milk', 2, 4, 'milk', 0.11, 1042, 2659));
    articles.push(new Article('Yogourt', 0.5, 4, 'yahourt', 0.13, 1298, 2659));


    for(let i = 0; i < articles.length; i++){
        this.add.sprite(articles[i].x, articles[i].y, articles[i].picture).setScale(articles[i].scale);
        this.add.sprite(articles[i].x+25, articles[i].y, articles[i].picture).setScale(articles[i].scale);

        this.add.text(articles[i].x + 64, articles[i].y - 18, articles[i].name + '\n' + articles[i].price + "€",{
            font: "14px",
            fill : "#000000",
            align : "center"
        });

        if(articles[i].y == 195 || articles[i].y == 547 || articles[i].y == 899 || articles[i].y == 1251 || articles[i].y == 1603 || articles[i].y == 1955 || articles[i].y == 2307 || articles[i].y == 2659){
            this.add.sprite(articles[i].x + 25 + 64 + 16 - 2, articles[i].y - 64 - 16, 'zone');
            this.add.sprite(articles[i].x + 25 + 16 + 2, articles[i].y - 64 - 16, 'zone').setFlip(true, true);
            this.add.text(articles[i].x + 32 - 4, articles[i].y - 64 - 32, "Press space \nto take" ,{
                font: "14px",
                fill : "#000000",
                align : "center"
            });
        }
        else if(articles[i].y == 259 || articles[i].y == 611 || articles[i].y == 963 || articles[i].y == 1315 || articles[i].y == 1667 || articles[i].y == 2019 || articles[i].y == 2371){
            this.add.sprite(articles[i].x - 25 + 64 + 2, articles[i].y + 64 + 16, 'zone').setFlip(true, true);
            this.add.sprite(articles[i].x - 25 + 64 + 64 - 2, articles[i].y + 64 + 16, 'zone');
            this.add.text(articles[i].x + 32 - 4, articles[i].y + 64, "Press space \nto take" ,{
                font: "14px",
                fill : "#000000",
                align : "center"
            });
        }            
    }
    text = this.add.text(10, 10, "Take the most nutritional cart for a donation to an association \nTwo articles of each maximum\nMoney remaining : 100 €",{
        font: "18px",
        fill : "#000000",
    }).setScrollFactor(0);

    button = this.add.sprite(1150, 30, 'list')
	    .setInteractive()
        .setScale(0.1)
        .setScrollFactor(0)
	    .on('pointerdown', () => {button.setScale(0.09)
            clickButton();    
        })
	    .on('pointerup', () => button.setScale( 0.1 ));

    blanclist = this.physics.add.sprite(600, 350, 'blanc').setDepth(100).setScrollFactor(0);
    titreTextList = this.add.text(450, 80, "Your list of articles",{
        font: "18px",
        fill : "#000000",
        align : 'center'
    }).setScrollFactor(0).setDepth(101);
    textList = this.add.text(120, 100, "",{
        font: "18px",
        fill : "#000000"
    }).setScrollFactor(0).setDepth(101);
}

function update (time, delta)
{
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);

    if (this.cursors.left.isDown){
        this.player.setVelocityX(-300);
        this.player.setAngle(-90);
        this.player.body.setSize(128, 64);
    }
    else if (this.cursors.right.isDown){
        this.player.setVelocityX(300);
        this.player.setAngle(90);
        this.player.body.setSize(128, 64);
    }
    else if (this.cursors.up.isDown){
        this.player.setVelocityY(-300);
        this.player.setAngle(0);
        this.player.body.setSize(64, 128);
    }
    else if (this.cursors.down.isDown){
        this.player.setVelocityY(300);
        this.player.setAngle(-180);
        this.player.body.setSize(64, 128);
    }
    //console.log(this.player.x, this.player.y);
    if(Phaser.Input.Keyboard.JustDown(space)){
        let whatArticleIsIt;
        for(let i = 0; i < articles.length; i++){
            var numberTmp = 0;
            listOfArticles.forEach(element => {if(element == i){
                numberTmp++;
            }
            });
            if(/*!listOfArticles.some(element => element == i)*/numberTmp < 2){
                if(articles[i].y == 195 || articles[i].y == 547 || articles[i].y == 899 || articles[i].y == 1251 || articles[i].y == 1603 || articles[i].y == 1955 || articles[i].y == 2307 || articles[i].y == 2659){
                    if(this.player.x > articles[i].x + 10 && this.player.x < articles[i].x + 130 && this.player.y > articles[i].y - 116 && this.player.y < articles[i].y + 32){
                        let tmp = 100 - currentPrice - articles[i].price;
                        if(tmp >= 0){
                            whatArticleIsIt = i;
                            currentPrice += articles[i].price;
                            listOfArticles.push(i);
                            console.log(articles[i].name, " price now : ", currentPrice);
                            text.setText("Take the most nutritional cart for a donation to an association \nTwo articles of each maximum \nMoney remaining : " + tmp + " €");
                            listWTFLUL += "\n- " + articles[i].name;
                            textList.setText(listWTFLUL);
                            numberOfArticles++;
                            if(tmp == 0){
                                console.log("Panier terminé");
                                let score = 0;
                                let vnAdd = 0;
                                let vnMed = 0;
                                for(let it = 0; it < articles.length; it++){
                                    vnAdd += articles[it].nv;
                                }
                                nvMed = vnAdd / listOfArticles.length;
                                score = (100 / nvMed) * 100;
                                this.add.text(this.player.x - 200, this.player.y + 50, 'Your cart is finished \nScore : ' + Math.round(score), {
                                    fontSize: '40px',
                                    fill: '#000000'
                                });
                                //this.scene.pause();
                            }
                        }
                    }
                }
                else if(articles[i].y == 259 || articles[i].y == 611 || articles[i].y == 963 || articles[i].y == 1315 || articles[i].y == 1667 || articles[i].y == 2019 || articles[i].y == 2371){
                    if(this.player.x > articles[i].x + 10 && this.player.x < articles[i].x + 130 && this.player.y > articles[i].y + 32 && this.player.y < articles[i].y + 126){
                        let tmp = 100 - currentPrice - articles[i].price;
                        if(tmp >= 0){
                            whatArticleIsIt = i;
                            currentPrice += articles[i].price;
                            listOfArticles.push(i);
                            console.log(articles[i].name, " price now : ", currentPrice);
                            text.setText("Take the most nutritional cart for a donation to an association \nTwo articles of each maximum \nMoney remaining : " + tmp + " €");
                            listWTFLUL += "\n- " + articles[i].name;
                            textList.setText(listWTFLUL);
                            numberOfArticles++;
                            if(tmp == 0){
                                console.log("Panier terminé");
                                let score = 0;
                                let vnAdd = 0;
                                let vnMed = 0;
                                for(let it = 0; it < articles.length; it++){
                                    vnAdd += articles[it].nv;
                                }
                                nvMed = vnAdd / articles.length;
                                score = (100 / nvMed) * 100;
                                this.add.text(this.player.x - 200, this.player.y + 50, 'Your cart is finished \nScore : ' + Math.round(score), {
                                    fontSize: '40px',
                                    fill: '#000000'
                                });
                                //this.scene.pause();
                            }
                        }
                    }
                }
            }
        }
    }
    if(showList){
        blanclist.visible = true;
        titreTextList.visible = true;
        textList.visible = true;
    }
    else{
        blanclist.visible = false;
        titreTextList.visible = false;
        textList.visible = false;
    }

}

function clickButton(){
    showList =! showList;
}