document.getElementById("boutonform").addEventListener("click", event => {
    
    let name = document.getElementById("name").value;

    socket.emit('username', name);
    
    window.location.href = "/html/home.html";
});

var job;


socket.emit('getTypeOfInfluencer');

socket.on('newTypeOfInfluencer', (job) => {
    switch (job) {
        case 0:
            myJob = job;
            break;
        case 1:
            myJob = job;
            break;
        case 2:
            myJob = job;
            break;
        case 3:
            myJob = job;
            break;

        default:
            break;
    }
});

socket.emit('getAppearance');

socket.on('newAppearance', (appearance) => {
    switch (appearance) {
        case 0:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneWG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWG.png")';
                    break;
            }
            break;
        case 1:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneBG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBG.png")';
                    break;
            }
            break;
        case 2:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneYG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYG.png")';
                    break;
            }
            break;
        case 3:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneWW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWW.png")';
                    break;
            }
            break;
        case 4:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneBW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBW.png")';
                    break;
            }
            break;
        case 5:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/comedian/sceneYW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYW.png")';
                    break;
            }
            
            break;

        default:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBG.png")';
            break;
    }
});