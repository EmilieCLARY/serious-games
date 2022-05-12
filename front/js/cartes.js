var bonusCards = [];
var malusCards = [];

class Card {
    constructor(text_, type_, bonus_, malus_){ /*TYPE : "F" pour followers, "T" pour tree et "B" pour big head*/
        this.text = text_;
        this.type = type_;
        this.bonus = bonus_;
        this.malus = malus_;
    }
}

bonusCards.push(new Card("The local newspaper talks about you and your talents in its latest issue, you gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("One of your sponsors donates 30 trees", "T", 30, 0));
bonusCards.push(new Card("A wealthy anonymous person greatly appreciates your action and has decided to make a donation for you to plant trees. You win 30 trees", "T", 30, 0));
bonusCards.push(new Card("Your investment in an association helping the homeless is bearing fruit. You gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("You are hospitalised and cannot post anything for a few days, but your community supports you and allows you to continue planting trees from a distance. You win 20 trees", "T", 20, 0));
bonusCards.push(new Card("You have won a week's holiday all expenses paid and you post a lot of photos in your story: you gain 5000 subscribers per day or 40000 subscribers", "F", 40000, 0));
bonusCards.push(new Card("You gain 1000 followers", "F", 1000, 0));
bonusCards.push(new Card("You gain 10000 followers", "F", 10000, 0));
bonusCards.push(new Card("Your city makes you an offer and gives you a location: you gain 10000 followers with your best content", "F", 10000, 0));
bonusCards.push(new Card("You gain material for your company and you gain 2000 followers", "F", 2000, 0));
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

malusCards.push(new Card("Fire on the plot, it must be destroyed: you lose 20 trees", "T", 0, 20));
malusCards.push(new Card("Your account has been hacked, during this period you lose 1000 followers", "F", 0, 1000));
malusCards.push(new Card("You are the victim of a burglary and cannot post anything for 2 weeks. You lose 5000 followers", "", 0, 5000));
malusCards.push(new Card("You take the big head: you gain 30% of gauge", "B", 0, 30));
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


let test = document.getElementById("card");

test.addEventListener("click", function( event ) {

  //event.target.style.color = "orange";
  //event.target.style.transform = "rotateY(180deg)"; 
  document.getElementById("card").style.transition = "all 0.6s ease";
  document.getElementById("card").style.transform = "preserve-3d";


  document.getElementById("card-container").style.transform = "rotateY(180deg)";
  document.getElementById("card").style.transform = "rotateY(180deg)";
  document.getElementById("card-back").style.transform = "rotateY(-180deg)";




  // on réinitialise 
  setTimeout(function() {
    event.target.style.color = "";
    event.target.style.transform = "";
    document.getElementById("card-container").style.transform = "";
    document.getElementById("card").style.transform = "";
  }, 2000 );
}, false);