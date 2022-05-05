/*document.getElementById("tts").addEventListener("click", event => {
    window.location.href = "../html/turtle-saver.html";
});*/

document.getElementById("bh").addEventListener("click", event => {
    window.location.href = "../html/big-head.html";
});

/*document.getElementById("tp").addEventListener("click", event => {
    window.location.href = "../html/tree-planter.html";
});*/

document.getElementById("ma").addEventListener("click", event => {
    window.location.href = "../html/maze.html";
});

/*document.getElementById("hm").addEventListener("click", event => {
    window.location.href = "../html/home.html";
});*/



var modaltour = document.getElementById("modaltour");
var petitmodal = document.getElementById("petitmodal");

var btn = document.getElementById("btntortue");

var span = document.getElementsByClassName("close")[0];

modaltour.style.display = "none";
petitmodal.style.display = "none";

btn.addEventListener("click", event => {
    modaltour.style.display = "block";
    petitmodal.style.display = "block";
});

span.addEventListener("click", event => {
    modaltour.style.display = "none";
    petitmodal.style.display = "none";
})

//btn.onclick = function() {
//    modaltour.style.display = "block";
//    petitmodal.style.display = "block";
//}
//
//span.onclick = function() {
//    modaltour.style.display = "none";
//    petitmodal.style.display = "none";
//}

window.onclick = function(event) {
    if (event.target == modaltour && event.target == petitmodal) {
      modaltour.style.display = "none";
    }
}