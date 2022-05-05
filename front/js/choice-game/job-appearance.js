document.getElementById("blackGuy").style.display = "none";
document.getElementById("whiteGuy").style.display = "none";
document.getElementById("yellowGuy").style.display = "none";
document.getElementById("blackWomen").style.display = "none";
document.getElementById("whiteWomen").style.display = "none";
document.getElementById("yellowWomen").style.display = "none";
document.getElementById("titleAppearance").style.display = "none";

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
    document.getElementById("sciences").style.display = "none";
    document.getElementById("gaming").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});

document.getElementById("comedian").addEventListener("click", event => {
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
    document.getElementById("sciences").style.display = "none";
    document.getElementById("gaming").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});

document.getElementById("sciences").addEventListener("click", event => {
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
    document.getElementById("sciences").style.display = "none";
    document.getElementById("gaming").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});

document.getElementById("gaming").addEventListener("click", event => {
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
    document.getElementById("sciences").style.display = "none";
    document.getElementById("gaming").style.display = "none";
    document.getElementById("titleJob").style.display = "none";

    socket.emit("userJob", job);

    showAppearance();
});

/********************************/
/*                              */
/* Assignement bouton apparence */
/*                              */
/********************************/

document.getElementById("blackGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 0);
});
document.getElementById("whiteGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 1);
});
document.getElementById("yellowGuy").addEventListener("click", event => {
    socket.emit("userAppearance", 2);
});
document.getElementById("blackWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 3);
});
document.getElementById("whiteWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 4);
});
document.getElementById("yellowWomen").addEventListener("click", event => {
    socket.emit("userAppearance", 5);
});

function showAppearance(){
    switch (job) {
        case 0:
            //Mettre photos : Prendre chaque buttons et mettre les images correspondants au métier      
        
            var whiteGuyDiv = document.getElementById("whiteGuy");
            whiteGuyDiv.innerHTML = '<img src="../../img/characters/sportifW.png"/>';
            
            var blackGuyDiv = document.getElementById("blackGuy");
            blackGuyDiv.innerHTML = '<img src="../../img/characters/sportifB.png"/>';
            
            var yellowGuyDiv = document.getElementById("yellowGuy");
            yellowGuyDiv.innerHTML = '<img src="../../img/characters/sportifY.png"/>';
            
            var whiteGirlDiv = document.getElementById("whiteWomen");
            whiteGirlDiv.innerHTML = '<img src="../../img/characters/sportiveW.png"/>';

            var blackGirlDiv = document.getElementById("blackWomen");
            blackGirlDiv.innerHTML = '<img src="../../img/characters/sportiveB.png"/>';

            var yellowGirlDiv = document.getElementById("yellowWomen");
            yellowGirlDiv.innerHTML = '<img src="../../img/characters/sportiveY.png"/>';

            break;
        
        case 1:
            
            break;

        case 2:
            
            break;
    
        case 3:
            
            break;

        default:
            break;
    }
}