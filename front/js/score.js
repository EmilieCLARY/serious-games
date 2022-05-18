document.getElementById("boutonretouraccueil").addEventListener("click", event => {
    window.location.href = "accueil.html";
});

var trees;
var followers;
var score;

//Recuperer le nombre d'arbres
socket.emit('getTreesPlanted');
socket.on('newNumberOfTreesPlanted', (nb) => {
    trees = nb;
    document.getElementById("scoretree").textContent = trees;
});

//Recuperer le nombre de followers
socket.emit('getFollowers');
socket.on('newFollowers', (nb) => {
    followers = nb;
    document.getElementById("nombredefollowersfinal").textContent = followers;
});

//Recuperer le score
socket.emit('getBigHeadGauge');
socket.on('newBigHeadGauge', (bigHeadGauge) => {
    console.log('Big Head Gauge :', bigHeadGauge); 
    if(bigHeadGauge <= 10){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge1.png")';
    }
    else if(bigHeadGauge <= 20){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge2.png")';
    }
    else if(bigHeadGauge <= 30){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge3.png")';
    }
    else if(bigHeadGauge <= 40){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge4.png")';
    }
    else if(bigHeadGauge <= 50){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge5.png")';
    }
    else if(bigHeadGauge <= 60){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge6.png")';
    }
    else if(bigHeadGauge <= 70){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge7.png")';
    }
    else if(bigHeadGauge <= 80){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge8.png")';
    }
    else if(bigHeadGauge <= 90){
        document.getElementById("scorebh").style.backgroundImage = 'url("../img/mainPage/gauge/gauge9.png")';
    }
});

//Recuperer le score
socket.emit('getScore');
socket.on("theFinalScore", (nb, mjPlayed) => {
    if(mjPlayed == 4){
        if(nb == 43){
            //score S++ WTP
            document.getElementById("scorefinalscore").textContent = "S++";
        }
        else if(nb >= 40){
            //score S
            document.getElementById("scorefinalscore").textContent = "S";
        }
        else if(nb >= 35){
            //score A+
            document.getElementById("scorefinalscore").textContent = "A+";
        }
        else if(nb >= 30){
            //score A
            document.getElementById("scorefinalscore").textContent = "A";
        }
        else if(nb >= 25){
            //score B+
            document.getElementById("scorefinalscore").textContent = "B+";
        }
        else if(nb >= 20){
            //score B
            document.getElementById("scorefinalscore").textContent = "B";
        }
        else if(nb >= 15){
            //score C+
            document.getElementById("scorefinalscore").textContent = "C+";
        }
        else if(nb >= 10){
            //score C
            document.getElementById("scorefinalscore").textContent = "C";
        }
        else if(nb >= 5){
            //score D+
            document.getElementById("scorefinalscore").textContent = "D+";
        }
        else if(nb >= 0){
            //score D
            document.getElementById("scorefinalscore").textContent = "D";
        }
    }
    else if(mjPlayed == 3){
        if(nb == (43 - 4)){
            //score S++ WTP
            document.getElementById("scorefinalscore").textContent = "S++";
        }
        else if(nb >= (40 - 4)){
            //score S
            document.getElementById("scorefinalscore").textContent = "S";
        }
        else if(nb >= (35 - 4)){
            //score A+
            document.getElementById("scorefinalscore").textContent = "A+";
        }
        else if(nb >= (30 - 4)){
            //score A
            document.getElementById("scorefinalscore").textContent = "A";
        }
        else if(nb >= (25 - 4)){
            //score B+
            document.getElementById("scorefinalscore").textContent = "B+";
        }
        else if(nb >= (20 - 4)){
            //score B
            document.getElementById("scorefinalscore").textContent = "B";
        }
        else if(nb >= (15 - 4)){
            //score C+
            document.getElementById("scorefinalscore").textContent = "C+";
        }
        else if(nb >= (10 - 4)){
            //score C
            document.getElementById("scorefinalscore").textContent = "C";
        }
        else if(nb >= (5 - 4)){
            //score D+
            document.getElementById("scorefinalscore").textContent = "D+";
        }
        else if(nb >= 0){
            //score D
            document.getElementById("scorefinalscore").textContent = "D";
        }
    }
    else if(mjPlayed == 2){
        if(nb == (43 - 8)){
            //score S++ WTP
            document.getElementById("scorefinalscore").textContent = "S++";
        }
        else if(nb >= (32)){
            //score S
            document.getElementById("scorefinalscore").textContent = "S";
        }
        else if(nb >= (28)){
            //score A+
            document.getElementById("scorefinalscore").textContent = "A+";
        }
        else if(nb >= (24)){
            //score A
            document.getElementById("scorefinalscore").textContent = "A";
        }
        else if(nb >= (20)){
            //score B+
            document.getElementById("scorefinalscore").textContent = "B+";
        }
        else if(nb >= (16)){
            //score B
            document.getElementById("scorefinalscore").textContent = "B";
        }
        else if(nb >= (12)){
            //score C+
            document.getElementById("scorefinalscore").textContent = "C+";
        }
        else if(nb >= (8)){
            //score C
            document.getElementById("scorefinalscore").textContent = "C";
        }
        else if(nb >= 4){
            //score D+
            document.getElementById("scorefinalscore").textContent = "D+";
        }
        else if(nb >= 0){
            //score D
            document.getElementById("scorefinalscore").textContent = "D";
        }
    }

    else if(mjPlayed == 1){
        if(nb == (43 - 12)){
            //score S++ WTP
            document.getElementById("scorefinalscore").textContent = "S++";
        }
        else if(nb >= (29)){
            //score S
            document.getElementById("scorefinalscore").textContent = "S";
        }
        else if(nb >= (26)){
            //score A+
            document.getElementById("scorefinalscore").textContent = "A+";
        }
        else if(nb >= (23)){
            //score A
            document.getElementById("scorefinalscore").textContent = "A";
        }
        else if(nb >= (20)){
            //score B+
            document.getElementById("scorefinalscore").textContent = "B+";
        }
        else if(nb >= (17)){
            //score B
            document.getElementById("scorefinalscore").textContent = "B";
        }
        else if(nb >= (13)){
            //score C+
            document.getElementById("scorefinalscore").textContent = "C+";
        }
        else if(nb >= 8){
            //score C
            document.getElementById("scorefinalscore").textContent = "C";
        }
        else if(nb >= 3){
            //score D+
            document.getElementById("scorefinalscore").textContent = "D+";
        }
        else if(nb >= 0){
            //score D
            document.getElementById("scorefinalscore").textContent = "D";
        }
    }
    else{
        document.getElementById("scorefinalscore").textContent = "NOO";
    }
});