document.getElementById("boutonform").addEventListener("click", event => {
    
    let name = document.getElementById("name").value;

    socket.emit('username', name);
    
    window.location.href = "/html/home.html";
});

socket.emit('getAppearance');

socket.on('newAppearance', (appearance) => {
    switch (appearance) {
        case 0:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWG.png")';
            break;
        case 1:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBG.png")';
            break;
        case 2:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYG.png")';
            break;
        case 3:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtWW.png")';
            break;
        case 4:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBW.png")';
            break;
        case 5:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtYW.png")';
            break;

        default:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../../img/characters/sportif/bbCourtBG.png")';
            break;
    }
});