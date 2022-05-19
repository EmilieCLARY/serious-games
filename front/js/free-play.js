document.getElementById("petitmodaltts").addEventListener("click", event => {
    window.location.href = "../html/turtle-saver-fp.html";
});

document.getElementById("petitmodalmaze").addEventListener("click", event => {
    window.location.href = "../html/maze-fp.html";
});

document.getElementById("petitmodalbh").addEventListener("click", event => {
    window.location.href = "../html/big-head-fp.html";
});

document.getElementById("petitmodalsupermarket").addEventListener("click", event => {
    window.location.href = "../html/supermarket-fp.html";
});

document.getElementById("petitmodaltreeplanter").addEventListener("click", event => {
    window.location.href = "../html/tree-planter-fp.html";
});

document.getElementById("petitmodalfakeinvaders").addEventListener("click", event => {
    window.location.href = "../html/fake-invaders-fp.html";
});

/*document.getElementById("tp").addEventListener("click", event => {
    window.location.href = "../html/tree-planter.html";
});



/*document.getElementById("hm").addEventListener("click", event => {
    window.location.href = "../html/home.html";
});*/



var span = document.getElementsByClassName("close")[0];

document.getElementById("modaltour").style.display = "none";
document.getElementById("petitmodaltts").style.display = "none";
document.getElementById("petitmodalbh").style.display = "none";
document.getElementById("petitmodalmaze").style.display = "none";
document.getElementById("petitmodalsupermarket").style.display = "none";
document.getElementById("petitmodaltreeplanter").style.display = "none";
document.getElementById("petitmodalfakeinvaders").style.display = "none";



//turtle
document.getElementById("btntortue").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodaltts").style.display = "block";
});


//big head
document.getElementById("btnbh").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodalbh").style.display = "block";
});

//maze
document.getElementById("btnmaze").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodalmaze").style.display = "block";
});

//supermarket
document.getElementById("btnsupermarket").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodalsupermarket").style.display = "block";
});

//treeplanter
document.getElementById("btntreeplanter").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodaltreeplanter").style.display = "block";
});

//treeplanter
document.getElementById("btnfakeinvaders").addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
    document.getElementById("modaltour").style.display = "block";
    document.getElementById("petitmodalfakeinvaders").style.display = "block";
});









//fermeture
span.addEventListener("click", event => {
    document.getElementById("modaltour").style.display = "none";
    document.getElementById("petitmodaltts").style.display = "none";    
    document.getElementById("petitmodalbh").style.display = "none";
    document.getElementById("petitmodalmaze").style.display = "none";
    document.getElementById("petitmodalsupermarket").style.display = "none";
    document.getElementById("petitmodaltreeplanter").style.display = "none";
    document.getElementById("petitmodalfakeinvaders").style.display = "none";
})



/*window.onclick = function(event) {
    if (event.target == modaltour && event.target == petitmodal) {
      modaltour.style.display = "none";
    }
}*/