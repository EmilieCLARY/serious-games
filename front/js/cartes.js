var bonusCards = [];
var malusCards = [];
var numberOfMalus;
var malusCombinaison = [];

socket.emit("getNumberOfMalusCards");

socket.on("numberOfMalus", (number) => {
  numberOfMalus = number;
  for (let i = 0; i < 5; i++) {
    malusCombinaison.push(0);
  }
  let rnd
  switch (number) {
    case 1:
      rnd = Math.floor(Math.random() * 5);
      malusCombinaison[rnd] = 1;
      break;
    case 2:
      rnd = Math.floor(Math.random() * 5);
      malusCombinaison[rnd] = 1;
      rnd = Math.floor(Math.random() * 5);
      while (malusCombinaison[rnd] == 1) {
        rnd = Math.floor(Math.random() * 5);
      }
      malusCombinaison[rnd] = 1;
      break;
    case 3:
      rnd = Math.floor(Math.random() * 5);
      malusCombinaison[rnd] = 1;
      rnd = Math.floor(Math.random() * 5);
      while (malusCombinaison[rnd] == 1) {
        rnd = Math.floor(Math.random() * 5);
      }
      malusCombinaison[rnd] = 1;
      rnd = Math.floor(Math.random() * 5);
      while (malusCombinaison[rnd] == 1) {
        rnd = Math.floor(Math.random() * 5);
      }
      malusCombinaison[rnd] = 1;
      break;

    case 4:
      for (let i = 0; i < 5; i++) {
        malusCombinaison[i] = 1;
      }
      rnd = Math.floor(Math.random() * 5);
      malusCombinaison[rnd] = 0;
      break;

    case 5:
      for (let i = 0; i < 5; i++) {
        malusCombinaison[i] = 1;
      }
      break;

    default:
      break;
  }
  console.log(malusCombinaison);
});

class Card {
  constructor(text_, type_, bonus_, malus_) { /*TYPE : "F" pour followers, "T" pour tree et "B" pour big head*/
    this.text = text_;
    this.type = type_;
    this.bonus = bonus_;
    this.malus = malus_;
  }
}

bonusCards.push(new Card("The local newspaper talks about you and your talents in its latest issue. \nYou gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("One of your sponsors donates 30 trees. \nYou gain 30 trees", "T", 30, 0));
bonusCards.push(new Card("A wealthy anonymous person greatly appreciates your action and has decided to make a donation for you to plant trees. \nYou gain 30 trees", "T", 30, 0));
bonusCards.push(new Card("Your investment in an association helping the homeless is bearing fruit. \nYou gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("You are hospitalised and cannot post anything for a few days, but your community supports you and allows you to continue planting trees from a distance. \nYou gain 20 trees", "T", 20, 0));
bonusCards.push(new Card("You have won a week's holiday all expenses paid and you post a lot of photos in your story. \nYou gain 5000 subscribers per day : 40000 subscribers", "F", 40000, 0));
bonusCards.push(new Card("You gain 1000 followers", "F", 1000, 0));
bonusCards.push(new Card("You gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("Your city makes you an offer and gives you a location: you gain 10000 followers with your best content.\nYou gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("You gain material for your company. \nYou gain 2000 followers", "F", 2000, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));
//bonusCards.push(new Card("", "", 0, 0));

malusCards.push(new Card("Fire on the plot, it must be destroyed. \nYou lose 20 trees", "T", 0, 20));
malusCards.push(new Card("Your account has been hacked. \nDuring this period you lose 1000 followers", "F", 0, 1000));
malusCards.push(new Card("You are the victim of a burglary and cannot post anything for 2 weeks. \nYou lose 5000 followers", "", 0, 5000));
malusCards.push(new Card("You take the big head \nYou gain 30% of gauge", "B", 0, 30));
malusCards.push(new Card("You lose 1000 followers", "F", 0, 1000));
malusCards.push(new Card("You lose 10000 followers", "F", 0, 10000));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));
//malusCards.push(new Card("", "", 0, 0));



//document.getElementById("card-back").style.display = "none";
/*function myFun() {
    var ob = document.getElementById("card-container");
    ob.classList.add("card-container2");
    ob.classList.add("card2");
    var obb = document.getElementById("card");
    obb.classList.add("rotation");
}

document.getElementById("card-container").addEventListener("click", event => {
    myFun();
});
*/

var dejaRetournee = 0;
var carteChoisis = 0;

//premiere carte
document.getElementById("card1").addEventListener("click", function (event) {
  if (dejaRetournee === 0) {
    dejaRetournee = 1;
    carteChoisis = 1;
    //event.target.style.color = "orange";
    //event.target.style.transform = "rotateY(180deg)"; 
    document.getElementById("card1").style.transition = "all 0.6s ease";
    document.getElementById("card1").style.transform = "preserve-3d";

    document.getElementById("card1-container").style.transform = "rotateY(180deg)";
    document.getElementById("card1").style.transform = "rotateY(180deg)";
    document.getElementById("card1-back").style.transform = "rotateY(-180deg)";

    //on réinitialise 
    /*setTimeout(function() {
      event.target.style.color = "";
      event.target.style.transform = "";
      document.getElementById("card1-container").style.transform = "";
      document.getElementById("card1").style.transform = "";
    }, 2000 );*/
    let card;
    let bonusOrNot;
    if (malusCombinaison[0] == 0) {
      card = getRandomBonusCard();
      bonusOrNot = true;
    }
    else {
      card = getRandomMalusCard();
      bonusOrNot = false;
    }


    document.getElementById("textCard1").textContent = card.text;
    if (bonusOrNot) {
      if (card.type == "F") {
        socket.emit("moreFollowers", card.bonus);
      }
      else if (card.type == "T") {
        socket.emit("moreTreesToPlant", card.bonus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", -card.bonus);
      }
    }
    else {
      if (card.type == "F") {
        socket.emit("moreFollowers", -card.malus);
      }
      else if (card.type == "T") {
        socket.emit("lessTreesPlanted", -card.malus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", card.malus);
      }
    }

  }
}, false);



//2eme carte
document.getElementById("card2").addEventListener("click", function (event) {
  if (dejaRetournee === 0) {
    dejaRetournee = 1;
    carteChoisis = 2;
    //event.target.style.color = "orange";
    //event.target.style.transform = "rotateY(180deg)"; 
    document.getElementById("card2").style.transition = "all 0.6s ease";
    document.getElementById("card2").style.transform = "preserve-3d";

    document.getElementById("card2-container").style.transform = "rotateY(180deg)";
    document.getElementById("card2").style.transform = "rotateY(180deg)";
    document.getElementById("card2-back").style.transform = "rotateY(-180deg)"

    // on réinitialise 
    /*setTimeout(function() {
      event.target.style.color = "";
      event.target.style.transform = "";
      document.getElementById("card2-container").style.transform = "";
      document.getElementById("card2").style.transform = "";
    }, 2000 );*/
  }
  let card;
  let bonusOrNot;
  if (malusCombinaison[1] == 0) {
    card = getRandomBonusCard();
    bonusOrNot = true;
  }
  else {
    card = getRandomMalusCard();
    bonusOrNot = false;
  }


  document.getElementById("textCard2").textContent = card.text;
  if (bonusOrNot) {
    if (card.type == "F") {
      socket.emit("moreFollowers", card.bonus);
      //console.log("Gain de", card.bonus, "followers");
    }
    else if (card.type == "T") {
      socket.emit("moreTreesToPlant", card.bonus);
    }
    else if (card.type == "B") {
      socket.emit("moreBigHeadGauge", -card.bonus);
    }
  }
  else {
    if (card.type == "F") {
      socket.emit("moreFollowers", -card.malus);
    }
    else if (card.type == "T") {
      socket.emit("lessTreesPlanted", -card.malus);
    }
    else if (card.type == "B") {
      socket.emit("moreBigHeadGauge", card.malus);
    }
  }

}, false);



//3eme carte
document.getElementById("card3").addEventListener("click", function (event) {
  if (dejaRetournee === 0) {
    dejaRetournee = 1;
    carteChoisis = 3;
    //event.target.style.color = "orange";
    //event.target.style.transform = "rotateY(180deg)"; 
    document.getElementById("card3").style.transition = "all 0.6s ease";
    document.getElementById("card3").style.transform = "preserve-3d";

    document.getElementById("card3-container").style.transform = "rotateY(180deg)";
    document.getElementById("card3").style.transform = "rotateY(180deg)";
    document.getElementById("card3-back").style.transform = "rotateY(-180deg)";

    // on réinitialise 
    /*setTimeout(function() {
      event.target.style.color = "";
      event.target.style.transform = "";
      document.getElementById("card3-container").style.transform = "";
      document.getElementById("card3").style.transform = "";
    }, 2000 );*/
    let card;
    let bonusOrNot;
    if (malusCombinaison[2] == 0) {
      card = getRandomBonusCard();
      bonusOrNot = true;
    }
    else {
      card = getRandomMalusCard();
      bonusOrNot = false;
    }


    document.getElementById("textCard3").textContent = card.text;
    if (bonusOrNot) {
      if (card.type == "F") {
        socket.emit("moreFollowers", card.bonus);
      }
      else if (card.type == "T") {
        socket.emit("moreTreesToPlant", card.bonus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", -card.bonus);
      }
    }
    else {
      if (card.type == "F") {
        socket.emit("moreFollowers", -card.malus);
      }
      else if (card.type == "T") {
        socket.emit("lessTreesPlanted", -card.malus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", card.malus);
      }
    }
  }
}, false);




//card 4
document.getElementById("card4").addEventListener("click", function (event) {
  if (dejaRetournee === 0) {
    dejaRetournee = 1;
    carteChoisis = 4;
    //event.target.style.color = "orange";
    //event.target.style.transform = "rotateY(180deg)"; 
    document.getElementById("card4").style.transition = "all 0.6s ease";
    document.getElementById("card4").style.transform = "preserve-3d";

    document.getElementById("card4-container").style.transform = "rotateY(180deg)";
    document.getElementById("card4").style.transform = "rotateY(180deg)";
    document.getElementById("card4-back").style.transform = "rotateY(-180deg)";

    // on réinitialise 
    /*setTimeout(function() {
      event.target.style.color = "";
      event.target.style.transform = "";
      document.getElementById("card4-container").style.transform = "";
      document.getElementById("card4").style.transform = "";
    }, 2000 );*/
    let card;
    let bonusOrNot;
    if (malusCombinaison[3] == 0) {
      card = getRandomBonusCard();
      bonusOrNot = true;
    }
    else {
      card = getRandomMalusCard();
      bonusOrNot = false;
    }


    document.getElementById("textCard4").textContent = card.text;
    if (bonusOrNot) {
      if (card.type == "F") {
        socket.emit("moreFollowers", card.bonus);
      }
      else if (card.type == "T") {
        socket.emit("moreTreesToPlant", card.bonus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", -card.bonus);
      }
    }
    else {
      if (card.type == "F") {
        socket.emit("moreFollowers", -card.malus);
      }
      else if (card.type == "T") {
        socket.emit("lessTreesPlanted", -card.malus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", card.malus);
      }
    }
  }
}, false);




//carte 5
document.getElementById("card5").addEventListener("click", function (event) {
  if (dejaRetournee === 0) {
    dejaRetournee = 1;
    carteChoisis = 5;
    //event.target.style.color = "orange";
    //event.target.style.transform = "rotateY(180deg)"; 
    document.getElementById("card5").style.transition = "all 0.6s ease";
    document.getElementById("card5").style.transform = "preserve-3d";

    document.getElementById("card5-container").style.transform = "rotateY(180deg)";
    document.getElementById("card5").style.transform = "rotateY(180deg)";
    document.getElementById("card5-back").style.transform = "rotateY(-180deg)";

    // on réinitialise 
    /*setTimeout(function() {
      event.target.style.color = "";
      event.target.style.transform = "";
      document.getElementById("card5-container").style.transform = "";
      document.getElementById("card5").style.transform = "";
    }, 2000 );*/
    let card;
    let bonusOrNot;
    if (malusCombinaison[4] == 0) {
      card = getRandomBonusCard();
      bonusOrNot = true;
    }
    else {
      card = getRandomMalusCard();
      bonusOrNot = false;
    }


    document.getElementById("textCard5").textContent = card.text;
    if (bonusOrNot) {
      if (card.type == "F") {
        socket.emit("moreFollowers", card.bonus);
      }
      else if (card.type == "T") {
        socket.emit("moreTreesToPlant", card.bonus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", -card.bonus);
      }
    }
    else {
      if (card.type == "F") {
        socket.emit("moreFollowers", -card.malus);
      }
      else if (card.type == "T") {
        socket.emit("lessTreesPlanted", -card.malus);
      }
      else if (card.type == "B") {
        socket.emit("moreBigHeadGauge", card.malus);
      }
    }
  }
}, false);







document.getElementById("btnvaliderChance").addEventListener("click", function (event) {
  //alert(carteChoisis);
  window.location.href = "../html/home.html";
}, false);

function getRandomBonusCard() {
  return bonusCards[Math.floor(Math.random() * bonusCards.length)];
}

function getRandomMalusCard() {
  return malusCards[Math.floor(Math.random() * malusCards.length)];
}