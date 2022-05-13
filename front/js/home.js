//document.getElementById("tts").addEventListener("click", event => {
//    window.location.href = "../html/turtle-saver.html";
//});
//
//document.getElementById("bh").addEventListener("click", event => {
//    window.location.href = "../html/big-head.html";
//});
//
//document.getElementById("tp").addEventListener("click", event => {
//    window.location.href = "../html/tree-planter.html";
//});
//
//document.getElementById("ma").addEventListener("click", event => {
//    window.location.href = "../html/maze.html";
//});

var usernames = ["DanleyJade","SnowberYaws","Platysma","Snorkel","Osteophone","OggacFlume","LilialDolee","Scirocco","Oryctomancy","Sassafras","Famulus","Apprehend","Benediction","ComfykelsCuckoo","Contemper","BroncokZoom","CorehUmlaut","Bouffant","Ploitering","Razzmatazz","SonsiaMoot","Pettifogger","Decorticate","Pancreas","PccheatKyloe","JidezJiggle","Passacaglia","Moocher","Monoideism","BlaidSnooty","PleocZonoid","Mawkish","Georgic","Kahikatea","DannerGenet","Moniker","Paradisiacal","Quinzee","Reticella","LadynoobMoue","Verilysoul327","Pilcrow","Furunculoid","Dirf","Agnation","Platapie","Preconize","Virtuoso","Lunulate","Hootenanny","BlindPig","Dithyramb","Cannelure","Widdershins","Forfaiting","Serendipity","Malarknight123","Dillydally","Cryptic","Persnickety","Brimborion","Cockatoo","Humgruffin","Flapdoodle","Apsidal","Calabash","Leprosarium","Guttersnipe","Webcast","Drizzle","Nasonquid66","Tchotchke","Zamarra","Shart","Impleach","Tarboosh","Pterylology","Crumple","Atpatruus","Nincompoop","Mutualism","HandstandFizgig","Nutmeg1Spiral","DaftpigCuckoo","DarseyChichi","Succubus","Alveromancy","Sprinkles","Athymia","Spendthrift","CuricElapid","Oxymoron","Caduceator","Crudivore","Fumiduct","Yellowbelly","Dysphagia","AfearJetsam","GeruGlogg","Almoner","Obsidian","CeliacVerve","Kalimba","Filibuster","Merdurinous","Slipshod","PingouiQuant","Firebrand","Stomatolalia","Kittiwake","Cosmism","Phantonym","Scandalitis","DeweyYahoo","Spermophile","Slapdash","Anhidrosis","Sassitude","MaxhunAncon","Wolfman8Quack","Banderilla","Fussbudget","Nestitherapy","Kahuna","Fossde200210","Halfwit","Fumarole","Gasbag","Divisiger151","Swish","Alee6tanng","Virtuoso","Eviscerate","Gongoozle","Juttylair","Fishwife","Dipnoous","Parapet","Telmatology","Calaboose","Mithridatism","Oakum","Dosimetry","Spelunker","Piscicide","Snool","Threnodic","Jubilee","Celsitude","Rambunctious","Perukereyc321","Zeugma","Sorbile","Landlubber","Librate","Couscous","Lyncean","Plethora","Picotgetx","Headlong","Recrement","Antimacassar","Tastevin","Preposterous","Solivagant","Gangway","Oxytocic","Pugnacious","Cultriform","Gibbosity","Necrolatry","Vermicious","Chyliferous","Shebang","Femerall","DirectWhorl","Epithelium","E_libQuokka","SwordmasRound","Skedaddle","Erotophobia","Cocksure","Mammose","Dummkopf","Organza","BaiphPogey","Inappetent","Nambypamby","Annodated","BuddiefPrimp","Zeitgeber","NidefPogo","Phubbing","Borborygmus","Magistral","Popliteal","Opisthograph","SiikJiffy","Phosphene","Salpiglossis","Cryptarchy","Peeve","Slavocracy","Jalopy","Ickleseict","Discalceate","Bedaggle","Cockatoo","Groupuscule","Lothario","Cyllosis","Firkin","Virtunitymc","Raconteur","Nithing","Zeppelin","Grinagog","Calash","Echinuliform","Jamboree","Eponymdbm99","Scootch","Gersentstats","Shalwar","Monoliteral","Philtrum","Soubrette","Fatuous","Promethean","Berserker","Duikerdax107","Whimsical","Pelmatogram","Rumpus","Jaseran","Hurlyburly","Getagu98","Hijinks","Circumjacent","Outlandish", "Alexouille", "Grodore", "Yuniemos", "Mme Tamia", "Gojyrm", "Mr Tamia", "Thraff", "Thomas Le GOAT"

]

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
       return this.length === 0;
    }
}

var myJob;
var myAppearance = 0;
var followers = 0;
var followersPS = 1;
var interval;
var folQueue = new Queue();
var postListDansLaPage;

socket.emit('getTreesPlanted');
socket.emit('getTypeOfInfluencer');
socket.emit('getAppearance');
socket.emit('getUsername');
socket.emit('getPosts');
socket.emit('getFollowers');
socket.emit('getFollowersPerSecond');
socket.emit('getBigHeadGauge');
socket.emit('getSponsors');


document.getElementById("popuppostgd").style.display = "none";
document.getElementById("popupgrossetetegd").style.display = "none";
document.getElementById("btnpost1").style.display = "none";
document.getElementById("btnpost2").style.display = "none";
document.getElementById("btnpost3").style.display = "none";
document.getElementById("btnpost4").style.display = "none";
document.getElementById("btnpost5").style.display = "none";
document.getElementById("btnpost6").style.display = "none";
document.getElementById("btnpost7").style.display = "none";
document.getElementById("btnpost8").style.display = "none";
document.getElementById("btnpost9").style.display = "none";

socket.on('newNumberOfTreesPlanted', (trees) =>{
    document.getElementById("treesPlanted").textContent = trees;
});

socket.on('newTypeOfInfluencer', (job) => {
    switch (job) {
        case 0:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Athlete";
            break;
        case 1:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Comedian";
            break;
        case 2:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Tech";
            break;
        case 3:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Chief";
            break;

        default:
            myJob = 0;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : NONONONO";
            break;
    }

    switch (myJob) {
        case 0:
            document.getElementById("choiceBtn").addEventListener("click", event => {
                window.location.href = "../html/choice-game/athlete.html";
            });       
            break;
        case 1 :
            document.getElementById("choiceBtn").addEventListener("click", event => {
                window.location.href = "../html/choice-game/comedian.html";
            });
            break;
        case 2 :
            document.getElementById("choiceBtn").addEventListener("click", event => {
                window.location.href = "../html/choice-game/tech.html";
            });
            break;
    
        case 3 :
            document.getElementById("choiceBtn").addEventListener("click", event => {
                window.location.href = "../html/choice-game/chief.html";
            });
            break;
    
        default:
            break;
}
});



socket.on('newUsername', (name) => {
    //console.log(name);
    if(name == null){
        document.getElementById("username").textContent = "Name : NONONONO";
        document.getElementById("usernamepopup").textContent = "@NONONONO";
    }
    else{
        document.getElementById("username").textContent = "Name : " + name;
        document.getElementById("usernamepopup").textContent = "@" + name;
    }
});

socket.on('newAppearance', (appearance) => {
    myAppearance = appearance;
    switch (appearance) {
        case 0:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneWG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneWG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    break;
            }
            break;
        case 1:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneBG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneBG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    break;
            }
            break;
        case 2:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneYG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneYG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    break;
            }
            break;
        case 3:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneWW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneWW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    break;
            }
            break;
        case 4:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneBW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneBW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    break;
            }
            break;
        case 5:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneYW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/comedian/sceneYW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    break;
            }
            
            break;

        default:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
            document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
            break;
    }
});

socket.on('newPosts', (postList) => {
    //console.log(postList);
    postListDansLaPage = postList;
    for(let i = 0; i < postList.length; i++){
        if(!postList[i].appearance){
            let tmp = postList.length - i;
            document.getElementById("btnpost" + tmp).style.display = 'block';
            document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'")';
            document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'")';
        }
        else{
            let tmp = postList.length - i;
            switch (myAppearance) {
                case 0:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'WG.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'WG.png")';
                    
                    
                    break;
                case 1:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'BG.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'BG.png")';
                    break;
                case 2:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'YG.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'YG.png")';
                    break;
                case 3:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'WW.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'WW.png")';
                    break;
                case 4:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'BW.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'BW.png")';
                    break;
                case 5:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'YW.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'YM.png")';
                    break;
                                
                default:
                    document.getElementById("btnpost" + tmp).style.display = 'block';
                    document.getElementById("btnpost" + tmp).style.backgroundImage = 'url("'+postList[i].img+'WG.png")';
                    document.getElementById("popuppost").style.backgroundImage = 'url("'+postList[i].img+'WG.png")';
                    break;
            }
        }

        /*if(postList.length >= 7){
            document.getElementById("tousLesPosts").style.display = 'overflow-y-auto';
        }*/

        for (let index = 1; index <= 2; index++) {
    
            var titre= 'titre'+index;
            var pseudo = getRandomUsername();
            document.getElementById(titre).textContent = "@" + pseudo;
            
            var com = 'com' + index;  
            document.getElementById(com).textContent = postList[i].commentaries[index-1];

            document.getElementById("leTexteDuPost").textContent = postList[i].text;
        }

    }
});

socket.on('newFollowers', (newFollowers) => {
    followers = newFollowers;
    if(followers >= 5){
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
    }
    updateFollowers();
});

socket.on('newFollowersPS', (newFollowersPS) => {
    followersPS = newFollowersPS;
    interval = setInterval(updateFollowers, 3000);
});

socket.on('newBigHeadGauge', (bigHeadGauge) => {
    console.log('Big Head Gauge :', bigHeadGauge); 
    if(bigHeadGauge <= 10){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge1.png")'
    }
    else if(bigHeadGauge <= 20){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge2.png")'
    }
    else if(bigHeadGauge <= 30){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge3.png")'
    }
    else if(bigHeadGauge <= 40){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge4.png")'
    }
    else if(bigHeadGauge <= 50){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge5.png")'
    }
    else if(bigHeadGauge <= 60){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge6.png")'
    }
    else if(bigHeadGauge <= 70){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge7.png")'
    }
    else if(bigHeadGauge <= 80){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge8.png")'
    }
    else if(bigHeadGauge <= 90){
        document.getElementById("Gauge").style.backgroundImage = 'url("../img/mainPage/gauge/gauge9.png")'
        // TRIGGER LA MODAL BOX QUI REDIRIGE VERS BIGHEAD
    }
    if(bigHeadGauge >= 90){
        console.log("oui");
        document.getElementById("popupgrossetetegd").style.display = "block";
    }
});

function updateFollowers(){
    followers += followersPS;
    document.getElementById("followers").textContent = "Total Followers : " + followers;
    updateFollowersList(followersPS);
    console.log('Your followers :', followers);
    socket.emit('addFollowers', followers);
}

function updateFollowersList(nbOfNewFol){
    if(nbOfNewFol == 1){
        if(folQueue.length <= 4){
            folQueue.enqueue(getRandomUsername());
        }
        else{
            folQueue.dequeue();
            folQueue.enqueue(getRandomUsername());
        }
    }
    else if(nbOfNewFol == 2){
        if(folQueue.length <= 3){
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
        else{
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
    }
    else if(nbOfNewFol == 3){
        if(folQueue.length <= 2){
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
        else{
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
    }
    else if(nbOfNewFol == 4){
        if(folQueue.length <= 1){
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
        else{
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.dequeue();
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
            folQueue.enqueue(getRandomUsername());
        }
    }
    else{
        folQueue.dequeue();
        folQueue.dequeue();
        folQueue.dequeue();
        folQueue.dequeue();
        folQueue.dequeue();
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
        folQueue.enqueue(getRandomUsername());
    }
    //console.log(folQueue.length);
    showNewFollowers(folQueue);
}

function showNewFollowers(queue){
    if(queue.length == 5){
        let ind = 5;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i];
            ind--;
        }
    }
    else if(queue.length == 4){
        let ind = 4;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i];
            ind--;
        }
    }
    else if(queue.length == 3){
        let ind = 3;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i];
            ind--;
        }
    }
    else if(queue.length == 2){
        let ind = 2;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i];
            ind--;
        }
    }
    else if(queue.length == 1){
        let ind = 1;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i];
            ind--;
        }
    }
    //while(!queue.isEmpty){
    //    console.log(queue.dequeue());
    //    //document.getElementById("folName" + ind).textContent = tmpQueue.dequeue();
    //    ind--;
    //}
}

function getRandomUsername(){
    return(usernames[Math.floor(Math.random() * usernames.length)]);
}

function popupWatiTropBO(number){
    if(!postListDansLaPage[postListDansLaPage.length - number].appearance){
        document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'")';
    }
    else{
        switch (myAppearance) {
            case 0:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'WG.png")';
                break;
            case 1:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'BG.png")';
                break;
            case 2:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'YG.png")';
                break;
            case 3:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'WW.png")';
                break;
            case 4:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'BW.png")';
                break;
            case 5:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'YM.png")';
                break;
                            
            default:
                document.getElementById("popuppost").style.backgroundImage = 'url("'+postListDansLaPage[postListDansLaPage.length - number].img+'WG.png")';
                break;
        }
    }
    for (let index = 1; index <= 2; index++) {
    
        var titre= 'titre'+index;
        var pseudo = getRandomUsername();
        document.getElementById(titre).textContent = "@" + pseudo;
        
        var com = 'com' + index;  
        document.getElementById(com).textContent = postListDansLaPage[postListDansLaPage.length - number].commentaries[index-1];
        document.getElementById("leTexteDuPost").textContent = postListDansLaPage[postListDansLaPage.length - number].text;
    }
}

socket.on('sendSponsors', (userSponsors) => {
    for(let i = 0; i < userSponsors.length; i++){
        let tmp = i + 1;
        document.getElementById('sponsor'+ tmp).textContent = userSponsors[i];
    }
});

//post 1
document.getElementById("btnpost1").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(1);
});

//post 2
document.getElementById("btnpost2").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(2);
});

//post 3
document.getElementById("btnpost3").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(3);
});

//post 4
document.getElementById("btnpost4").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(4);
});

//post 5
document.getElementById("btnpost5").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(5);
});

//post 6
document.getElementById("btnpost6").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(6);
});

//post 7
document.getElementById("btnpost7").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(7);
});

//post 8
document.getElementById("btnpost8").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(8);
});

//post 9
document.getElementById("btnpost9").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "block";
    popupWatiTropBO(9);
});





//fermeture
document.getElementById("popupclose").addEventListener("click", event => {
    document.getElementById("popuppostgd").style.display = "none";
});

//document.getElementById("popupgrosseteteclose").addEventListener("click", event => {
//    document.getElementById("popupgrossetetegd").style.display = "none";
//});

document.getElementById("popupMessenger").style.display = "none";

document.getElementById("mailBtn").addEventListener("click", event => {
    document.getElementById("popupMessenger").style.display = "block";
});

