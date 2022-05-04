document.getElementById("blackGuy").style.visibility = "hidden";
document.getElementById("whiteGuy").style.visibility = "hidden";
document.getElementById("yellowGuy").style.visibility = "hidden";
document.getElementById("blackWomen").style.visibility = "hidden";
document.getElementById("whiteWomen").style.visibility = "hidden";
document.getElementById("yellowWomen").style.visibility = "hidden";
document.getElementById("titleAppearance").style.visibility = "hidden";

var job;

document.getElementById("athlete").addEventListener("click", event => {
    job = 0;
    document.getElementById("blackGuy").style.visibility = "visible";
    document.getElementById("whiteGuy").style.visibility = "visible";
    document.getElementById("yellowGuy").style.visibility = "visible";
    document.getElementById("blackWomen").style.visibility = "visible";
    document.getElementById("whiteWomen").style.visibility = "visible";
    document.getElementById("yellowWomen").style.visibility = "visible";
    document.getElementById("titleAppearance").style.visibility = "visible";

    document.getElementById("athlete").style.visibility = "hidden";
    document.getElementById("comedian").style.visibility = "hidden";
    document.getElementById("sciences").style.visibility = "hidden";
    document.getElementById("gaming").style.visibility = "hidden";
    document.getElementById("titleJob").style.visibility = "hidden";
});

document.getElementById("comedian").addEventListener("click", event => {
    job = 1;
    document.getElementById("blackGuy").style.visibility = "visible";
    document.getElementById("whiteGuy").style.visibility = "visible";
    document.getElementById("yellowGuy").style.visibility = "visible";
    document.getElementById("blackWomen").style.visibility = "visible";
    document.getElementById("whiteWomen").style.visibility = "visible";
    document.getElementById("yellowWomen").style.visibility = "visible";
    document.getElementById("titleAppearance").style.visibility = "visible";

    document.getElementById("athlete").style.visibility = "hidden";
    document.getElementById("comedian").style.visibility = "hidden";
    document.getElementById("sciences").style.visibility = "hidden";
    document.getElementById("gaming").style.visibility = "hidden";
    document.getElementById("titleJob").style.visibility = "hidden";
});

document.getElementById("sciences").addEventListener("click", event => {
    job = 2;
    document.getElementById("blackGuy").style.visibility = "visible";
    document.getElementById("whiteGuy").style.visibility = "visible";
    document.getElementById("yellowGuy").style.visibility = "visible";
    document.getElementById("blackWomen").style.visibility = "visible";
    document.getElementById("whiteWomen").style.visibility = "visible";
    document.getElementById("yellowWomen").style.visibility = "visible";
    document.getElementById("titleAppearance").style.visibility = "visible";

    document.getElementById("athlete").style.visibility = "hidden";
    document.getElementById("comedian").style.visibility = "hidden";
    document.getElementById("sciences").style.visibility = "hidden";
    document.getElementById("gaming").style.visibility = "hidden";
    document.getElementById("titleJob").style.visibility = "hidden";
});

document.getElementById("gaming").addEventListener("click", event => {
    job = 3;
    document.getElementById("blackGuy").style.visibility = "visible";
    document.getElementById("whiteGuy").style.visibility = "visible";
    document.getElementById("yellowGuy").style.visibility = "visible";
    document.getElementById("blackWomen").style.visibility = "visible";
    document.getElementById("whiteWomen").style.visibility = "visible";
    document.getElementById("yellowWomen").style.visibility = "visible";
    document.getElementById("titleAppearance").style.visibility = "visible";

    document.getElementById("athlete").style.visibility = "hidden";
    document.getElementById("comedian").style.visibility = "hidden";
    document.getElementById("sciences").style.visibility = "hidden";
    document.getElementById("gaming").style.visibility = "hidden";
    document.getElementById("titleJob").style.visibility = "hidden";
});

function showAppearance(){
    switch (job) {
        case 0:
            //Mettre photos : Prendre chaques buttons et mettre les images correspondants au métier
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