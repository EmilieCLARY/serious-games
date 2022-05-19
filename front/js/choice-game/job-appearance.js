document.getElementById("blackGuy").style.display = "none";
document.getElementById("whiteGuy").style.display = "none";
document.getElementById("yellowGuy").style.display = "none";
document.getElementById("blackWomen").style.display = "none";
document.getElementById("whiteWomen").style.display = "none";
document.getElementById("yellowWomen").style.display = "none";
document.getElementById("titleAppearance").style.display = "none";
document.getElementById("c16cases").style.display = "none";
document.getElementById("c26cases").style.display = "none";
document.getElementById("c36cases").style.display = "none";
document.getElementById("c46cases").style.display = "none";
document.getElementById("c56cases").style.display = "none";
document.getElementById("c66cases").style.display = "none";

var job;

/********************************/
/*                              */
/*Assignement des boutons de job*/
/*                              */
/********************************/

document.getElementById("athlete").addEventListener("click", event => {
    job = 0;
    document.getElementById("blackGuy").style.display = "block";
    document.getElementById("whiteGuy").style.display = "block";
    document.getElementById("yellowGuy").style.display = "block";
    document.getElementById("blackWomen").style.display = "block";
    document.getElementById("whiteWomen").style.display = "block";
    document.getElementById("yellowWomen").style.display = "block";
    document.getElementById("titleAppearance").style.display = "block";


    document.getElementById("athlete").style.display = "none";
    document.getElementById("comedian").style.display = "none";
    document.getElementById("chief").style.display = "none";
    document.getElementById("gamer").style.display = "none";
    document.getElementById("titleJob").style.display = "none";
    document.getElementById("choix3gris").style.display = "none";
    document.getElementById("choix4gris").style.display = "none";
    document.getElementById("choix3comingsoon").style.display = "none";
    document.getElementById("choix4comingsoon").style.display = "none";

    document.getElementById("c16cases").style.display = "block";
    document.getElementById("c26cases").style.display = "block";
    document.getElementById("c36cases").style.display = "block";
    document.getElementById("c46cases").style.display = "block";
    document.getElementById("c56cases").style.display = "block";
    document.getElementById("c66cases").style.display = "block";


    document.getElementById("c14cases").style.display = "none";
    document.getElementById("c24cases").style.display = "none";
    document.getElementById("c34cases").style.display = "none";
    document.getElementById("c44cases").style.display = "none";


    

    socket.emit("userJob", job);

    showAppearance();
});

/*document.getElementById("comedian").addEventListener("click", event => {
    job = 1;
    document.getElementById("blackGuy").style.display = "block";
    document.getElementById("whiteGuy").style.display = "block";
    document.getElementById("yellowGuy").style.display = "block";
    document.getElementById("blackWomen").style.display = "block";
    document.getElementById("whiteWomen").style.display = "block";
    document.getElementById("yellowWomen").style.display = "block";
    document.getElementById("titleAppearance").style.display = "block";

    document.getElementById("athlete").style.display = "none";
    document.getElementById("comedian").style.display = "none";
    document.getElementById("chief").style.display = "none";
    document.getElementById("gamer").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    document.getElementById("c16cases").style.display = "block";
    document.getElementById("c26cases").style.display = "block";
    document.getElementById("c36cases").style.display = "block";
    document.getElementById("c46cases").style.display = "block";
    document.getElementById("c56cases").style.display = "block";
    document.getElementById("c66cases").style.display = "block";


    document.getElementById("c14cases").style.display = "none";
    document.getElementById("c24cases").style.display = "none";
    document.getElementById("c34cases").style.display = "none";
    document.getElementById("c44cases").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});*/

document.getElementById("chief").addEventListener("click", event => {
    job = 2;
    document.getElementById("blackGuy").style.display = "block";
    document.getElementById("whiteGuy").style.display = "block";
    document.getElementById("yellowGuy").style.display = "block";
    document.getElementById("blackWomen").style.display = "block";
    document.getElementById("whiteWomen").style.display = "block";
    document.getElementById("yellowWomen").style.display = "block";
    document.getElementById("titleAppearance").style.display = "block";

    document.getElementById("athlete").style.display = "none";
    document.getElementById("comedian").style.display = "none";
    document.getElementById("chief").style.display = "none";
    document.getElementById("gamer").style.display = "none";
    document.getElementById("titleJob").style.display = "none";
    document.getElementById("choix3gris").style.display = "none";
    document.getElementById("choix4gris").style.display = "none";
    document.getElementById("choix3comingsoon").style.display = "none";
    document.getElementById("choix4comingsoon").style.display = "none";

    document.getElementById("c16cases").style.display = "block";
    document.getElementById("c26cases").style.display = "block";
    document.getElementById("c36cases").style.display = "block";
    document.getElementById("c46cases").style.display = "block";
    document.getElementById("c56cases").style.display = "block";
    document.getElementById("c66cases").style.display = "block";


    document.getElementById("c14cases").style.display = "none";
    document.getElementById("c24cases").style.display = "none";
    document.getElementById("c34cases").style.display = "none";
    document.getElementById("c44cases").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});

/*document.getElementById("gamer").addEventListener("click", event => {
    job = 3;
    document.getElementById("blackGuy").style.display = "block";
    document.getElementById("whiteGuy").style.display = "block";
    document.getElementById("yellowGuy").style.display = "block";
    document.getElementById("blackWomen").style.display = "block";
    document.getElementById("whiteWomen").style.display = "block";
    document.getElementById("yellowWomen").style.display = "block";
    document.getElementById("titleAppearance").style.display = "block";

    document.getElementById("athlete").style.display = "none";
    document.getElementById("comedian").style.display = "none";
    document.getElementById("chief").style.display = "none";
    document.getElementById("gamer").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    document.getElementById("c16cases").style.display = "block";
    document.getElementById("c26cases").style.display = "block";
    document.getElementById("c36cases").style.display = "block";
    document.getElementById("c46cases").style.display = "block";
    document.getElementById("c56cases").style.display = "block";
    document.getElementById("c66cases").style.display = "block";


    document.getElementById("c14cases").style.display = "none";
    document.getElementById("c24cases").style.display = "none";
    document.getElementById("c34cases").style.display = "none";
    document.getElementById("c44cases").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});*/

/********************************/
/*                              */
/* Assignement bouton apparence */
/*                              */
/********************************/

document.getElementById("blackGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 1);
    window.location.href = "../../html/choice-game/form.html";

});
document.getElementById("whiteGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 0);
    window.location.href = "../../html/choice-game/form.html";

});
document.getElementById("yellowGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 2);
    window.location.href = "../../html/choice-game/form.html";
});
document.getElementById("blackWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 4);
    window.location.href = "../../html/choice-game/form.html";
});
document.getElementById("whiteWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 3);
    window.location.href = "../../html/choice-game/form.html";
});
document.getElementById("yellowWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 5);
    window.location.href = "../../html/choice-game/form.html";
});

function showAppearance(){
    switch (job) {
        case 0:
            //Mettre photos : Prendre chaque buttons et mettre les images correspondants au métier      
        
            var whiteGuyDiv = document.getElementById("whiteGuy");
            whiteGuyDiv.classList.add("whiteGuyAthlete");
            
            var blackGuyDiv = document.getElementById("blackGuy");
            blackGuyDiv.classList.add("blackGuyAthlete");
            
            var yellowGuyDiv = document.getElementById("yellowGuy");
            yellowGuyDiv.classList.add("yellowGuyAthlete");
            
            var whiteGirlDiv = document.getElementById("whiteWomen");
            whiteGirlDiv.classList.add("whiteWomenAthlete");

            var blackGirlDiv = document.getElementById("blackWomen");
            blackGirlDiv.classList.add("blackWomenAthlete");

            var yellowGirlDiv = document.getElementById("yellowWomen");
            yellowGirlDiv.classList.add("yellowWomenAthlete");

            break;
        
        case 1:

            var whiteGuyDiv = document.getElementById("whiteGuy");
            whiteGuyDiv.classList.add("whiteGuyComedian");
            
            var blackGuyDiv = document.getElementById("blackGuy");
            blackGuyDiv.classList.add("blackGuyComedian");
            
            var yellowGuyDiv = document.getElementById("yellowGuy");
            yellowGuyDiv.classList.add("yellowGuyComedian");
            
            var whiteGirlDiv = document.getElementById("whiteWomen");
            whiteGirlDiv.classList.add("whiteWomenComedian");

            var blackGirlDiv = document.getElementById("blackWomen");
            blackGirlDiv.classList.add("blackWomenComedian");

            var yellowGirlDiv = document.getElementById("yellowWomen");
            yellowGirlDiv.classList.add("yellowWomenComedian");
            break;

        case 2:
            
            var whiteGuyDiv = document.getElementById("whiteGuy");
            whiteGuyDiv.classList.add("whiteGuyChief");
            
            var blackGuyDiv = document.getElementById("blackGuy");
            blackGuyDiv.classList.add("blackGuyChief");
            
            var yellowGuyDiv = document.getElementById("yellowGuy");
            yellowGuyDiv.classList.add("yellowGuyChief");
            
            var whiteGirlDiv = document.getElementById("whiteWomen");
            whiteGirlDiv.classList.add("whiteWomenChief");

            var blackGirlDiv = document.getElementById("blackWomen");
            blackGirlDiv.classList.add("blackWomenChief");

            var yellowGirlDiv = document.getElementById("yellowWomen");
            yellowGirlDiv.classList.add("yellowWomenChief");
            break;    
        case 3:
            var whiteGuyDiv = document.getElementById("whiteGuy");
            whiteGuyDiv.classList.add("whiteGuyTech");
            
            var blackGuyDiv = document.getElementById("blackGuy");
            blackGuyDiv.classList.add("blackGuyTech");
            
            var yellowGuyDiv = document.getElementById("yellowGuy");
            yellowGuyDiv.classList.add("yellowGuyTech");
            
            var whiteGirlDiv = document.getElementById("whiteWomen");
            whiteGirlDiv.classList.add("whiteWomenTech");

            var blackGirlDiv = document.getElementById("blackWomen");
            blackGirlDiv.classList.add("blackWomenTech");

            var yellowGirlDiv = document.getElementById("yellowWomen");
            yellowGirlDiv.classList.add("yellowWomenTech");
            break;

        default:
            break;
    }
}