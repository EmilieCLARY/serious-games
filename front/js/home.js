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

var usernames = ["DanleyJade","SnowberYaws","Platysma","Snorkel","Osteophone","OggacFlume","LilialDolee","Scirocco","Oryctomancy","Sassafras","Famulus","Apprehend","Benediction","ComfykelsCuckoo","Contemper","BroncokZoom","CorehUmlaut","Bouffant","Ploitering","Razzmatazz","SonsiaMoot","Pettifogger","Decorticate","Pancreas","PccheatKyloe","JidezJiggle","Passacaglia","Moocher","Monoideism","BlaidSnooty","PleocZonoid","Mawkish","Georgic","Kahikatea","DannerGenet","Moniker","Paradisiacal","Quinzee","Reticella","LadynoobMoue","Verilysoul327","Pilcrow","Furunculoid","Dirf","Agnation","Platapie","Preconize","Virtuoso","Lunulate","Hootenanny","BlindPig","Dithyramb","Cannelure","Widdershins","Forfaiting","Serendipity","Malarknight123","Dillydally","Cryptic","Persnickety","Brimborion","Cockatoo","Humgruffin","Flapdoodle","Apsidal","Calabash","Leprosarium","Guttersnipe","Webcast","Drizzle","Nasonquid66","Tchotchke","Zamarra","Shart","Impleach","Tarboosh","Pterylology","Crumple","Atpatruus","Nincompoop","Mutualism","HandstandFizgig","Nutmeg1Spiral","DaftpigCuckoo","DarseyChichi","Succubus","Alveromancy","Sprinkles","Athymia","Spendthrift","CuricElapid","Oxymoron","Caduceator","Crudivore","Fumiduct","Yellowbelly","Dysphagia","AfearJetsam","GeruGlogg","Almoner","Obsidian","CeliacVerve","Kalimba","Filibuster","Merdurinous","Slipshod","PingouiQuant","Firebrand","Stomatolalia","Kittiwake","Cosmism","Phantonym","Scandalitis","DeweyYahoo","Spermophile","Slapdash","Anhidrosis","Sassitude","MaxhunAncon","Wolfman8Quack","Banderilla","Fussbudget","Nestitherapy","Kahuna","Fossde200210","Halfwit","Fumarole","Gasbag","Divisiger151","Swish","Alee6tanng","Virtuoso","Eviscerate","Gongoozle","Juttylair","Fishwife","Dipnoous","Parapet","Telmatology","Calaboose","Mithridatism","Oakum","Dosimetry","Spelunker","Piscicide","Snool","Threnodic","Jubilee","Celsitude","Rambunctious","Perukereyc321","Zeugma","Sorbile","Landlubber","Librate","Couscous","Lyncean","Plethora","Picotgetx","Headlong","Recrement","Antimacassar","Tastevin","Preposterous","Solivagant","Gangway","Oxytocic","Pugnacious","Cultriform","Gibbosity","Necrolatry","Vermicious","Chyliferous","Shebang","Femerall","DirectWhorl","Epithelium","E_libQuokka","SwordmasRound","Skedaddle","Erotophobia","Cocksure","Mammose","Dummkopf","Organza","BaiphPogey","Inappetent","Nambypamby","Annodated","BuddiefPrimp","Zeitgeber","NidefPogo","Phubbing","Borborygmus","Magistral","Popliteal","Opisthograph","SiikJiffy","Phosphene","Salpiglossis","Cryptarchy","Peeve","Slavocracy","Jalopy","Ickleseict","Discalceate","Bedaggle","Cockatoo","Groupuscule","Lothario","Cyllosis","Firkin","Virtunitymc","Raconteur","Nithing","Zeppelin","Grinagog","Calash","Echinuliform","Jamboree","Eponymdbm99","Scootch","Gersentstats","Shalwar","Monoliteral","Philtrum","Soubrette","Fatuous","Promethean","Berserker","Duikerdax107","Whimsical","Pelmatogram","Rumpus","Jaseran","Hurlyburly","Getagu98","Hijinks","Circumjacent","Outlandish", "Alexouille", "Grodore", "Yuniemos", "Mme Tamia", "Gojyrm", "Mr Tamia", "Thraffr", "Thomas Le GOAT","KodiakCowcat","Sacapuntas","SucasMidst","Haberdashery","Lambitive","Mugwump","Panoptic","Fungible","Trichology","Xiphoid","Misbeseem","Xylophone","Ontocyclic","DgmdiamHooey","BuddybudKausia","Defenestrate","Perfunctory","Jactation","Larrigan","Uggernaut","Acroscopic","LondarLoony","XanderbUranic","GammygamVolvox","Waxcloth","JezwalSnafu","Octodont","Squooshy","PrescriptKeck","Dumbfounded","Histology","Hoydenism","JabbuhWamus","FrostestOrt","Omophagy","Mr_zombotCoccyx","Ochroleucous","Jabberwocky","Siserary","Skylord_becGonzo","Haligraphy","Perambulator","Anagalactic","Gymkhana","Yantrayer98","Bevy","Nasicornous","Flippant","Poundage","Gooseflesh","Stevedore","Squabble","Lampadfooly8","Hairpin","Dinicmer87","Bonny","Smazing","Nabob","Brackle","Mastermind","Skullduggery","Petcock","Cribble","Telekinesis","Whodunitry","Smegma","Burnetnu11","Contraband","Acervuline","Donkeyman","Mvulener18499","Rickrack","Beloidlu000","Glom","Nomographer","Rickettsia","Amercehuoh","Doozy","Volation","Spoon"


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
var postListDansLaPage = [];
var btnMailActive = false;
var endOfGame;


// animation du loader

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

document.getElementById("popupQuitter").style.display = 'none';

socket.emit('getTreesPlanted');
socket.emit('getTypeOfInfluencer');
socket.emit('getAppearance');
socket.emit('getUsername');
socket.emit('getPosts');
socket.emit('getFollowers');
socket.emit('getFollowersPerSecond');
socket.emit('getBigHeadGauge');
socket.emit('getSponsors');
socket.emit('getTreesToPlant');
socket.emit('getEnd');


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
document.getElementById("mailBtn").style.backgroundImage = 'url("../img/mainPage/bulle.png")';

socket.on("newTreesToPlant", (nb) => {
    if(nb == 0){
        document.getElementById("btnTreePlanter").style.backgroundImage = 'url("../img/mainPage/tree.png")';
    }
    else{
        document.getElementById("btnTreePlanter").style.backgroundImage = 'url("../img/mainPage/treeNotif.png")';
    }
});

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
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Chief";
            break;
        case 3:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Tech";s
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
                window.location.href = "../html/choice-game/chief.html";
            });
            break;
    
        case 3 :
            document.getElementById("choiceBtn").addEventListener("click", event => {
                window.location.href = "../html/choice-game/tech.html";
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenWG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenWG.png")';
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenBG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenBG.png")';
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenYG.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenYG.png")';
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenWW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenWW.png")';
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenBW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenBW.png")';
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
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenYW.png")';
                    document.getElementById("profilPicturepp").style.backgroundImage = 'url("../img/characters/chief/rectangle/kitchenYW.png")';
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
    if(postList.length > postListDansLaPage.length){
        document.getElementById("mailBtn").style.backgroundImage = 'url("../img/mainPage/bulleNotif.png")';
        btnMailActive = true;
    }
    
    if(myJob == 0){
        if(postList.length == 9){
            endOfGame = true;
            document.getElementById("popupQuitter").style.display = 'block';
            
            document.getElementById("boutonpourquitter").addEventListener("click", event => {
                window.location.href = "../html/score.html";
            });
        }
    }
    else if(myJob == 2){
        if(postList.length == 8){
            endOfGame = true;
            document.getElementById("popupQuitter").style.display = 'block';
        
            document.getElementById("boutonpourquitter").addEventListener("click", event => {
                window.location.href = "../html/score.html";
            });
        }
    }

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
            var pseudo = getRandomUsername()[0];
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
            document.getElementById("folName" + ind).textContent = queue.elements[i][0];
            document.getElementById("folPic" + ind).style.backgroundImage = "url('../img/logo/profilepictures/logo"+queue.elements[i][1]+".png')";
            ind--;
        }
    }
    else if(queue.length == 4){
        let ind = 4;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i][0];
            document.getElementById("folPic" + ind).style.backgroundImage = "url('../img/logo/profilepictures/logo"+queue.elements[i][1]+".png')";
            ind--;
        }
    }
    else if(queue.length == 3){
        let ind = 3;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i][0];
            document.getElementById("folPic" + ind).style.backgroundImage = "url('../img/logo/profilepictures/logo"+queue.elements[i][1]+".png')";
            ind--;
        }
    }
    else if(queue.length == 2){
        let ind = 2;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i][0];
            document.getElementById("folPic" + ind).style.backgroundImage = "url('../img/logo/profilepictures/logo"+queue.elements[i][1]+".png')";
            ind--;
        }
    }
    else if(queue.length == 1){
        let ind = 1;
        for(let i = queue.head; i < queue.tail; i++){
            document.getElementById("folName" + ind).textContent = queue.elements[i][0];
            document.getElementById("folPic" + ind).style.backgroundImage = "url('../img/logo/profilepictures/logo"+queue.elements[i][1]+".png')";
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
    return([usernames[Math.floor(Math.random() * usernames.length)], Math.floor(Math.random() * 21)]);
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
        var pseudo = getRandomUsername()[0];
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

const P1 = document.getElementById("proposition1");
const P2 = document.getElementById("proposition2");
const P3 = document.getElementById("proposition3");

const dmPage = document.getElementById("dmS");


var messengerEstOuvert = 0;
var rnd;

document.getElementById("popupMessenger").style.display = "none";


document.getElementById("mailBtn").addEventListener("click", event => {
    if(btnMailActive){
        if(messengerEstOuvert === 0){
            P1.style.display = "block";
            P2.style.display = "block";
            P3.style.display = "block";
            while (dmPage.firstChild) {
                dmPage.removeChild(dmPage.firstChild);
            }
            document.getElementById("popupMessenger").style.display = "block";
            rnd = Math.floor(Math.random() * dmTab.length);
            var div = document.createElement("div");
            div.classList.add('messageEntrant');
            div.textContent = dmTab[rnd][0];
            dmPage.appendChild(div);
            P1.textContent = dmTab[rnd][1][0];
            P2.textContent = dmTab[rnd][1][2];
            P3.textContent = dmTab[rnd][1][4];
            messengerEstOuvert = 1;
        }
        else if(messengerEstOuvert === 1){
            document.getElementById("popupMessenger").style.display = "none";
            messengerEstOuvert = 0;
            btnMailActive = false;
            document.getElementById("mailBtn").style.backgroundImage = 'url("../img/mainPage/bulle.png")'
        }
    }
});


var messageSelected = 0;

document.getElementById("proposition1").addEventListener("click", event => {
    document.getElementById("proposition1").classList.add("bg-gris");
    document.getElementById("proposition2").classList.remove("bg-gris");
    document.getElementById("proposition3").classList.remove("bg-gris");
    messageSelected = 1;
});

document.getElementById("proposition2").addEventListener("click", event => {
    document.getElementById("proposition2").classList.add("bg-gris");
    document.getElementById("proposition1").classList.remove("bg-gris");
    document.getElementById("proposition3").classList.remove("bg-gris");
    messageSelected = 2;
});

document.getElementById("proposition3").addEventListener("click", event => {
    document.getElementById("proposition3").classList.add("bg-gris");
    document.getElementById("proposition2").classList.remove("bg-gris");
    document.getElementById("proposition1").classList.remove("bg-gris");
    messageSelected = 3;
});

document.getElementById("btnEnvoyerMessage").addEventListener("click", event => {
    //alert(messageSelected);
    var div = document.createElement("div");
    div.classList.add('messageSortant');
    if(messageSelected == 1){
        div.textContent = dmTab[rnd][1][0];
        dmPage.appendChild(div);
    }
    else if(messageSelected == 2){
        div.textContent = dmTab[rnd][1][2];
        dmPage.appendChild(div);
    }
    else if(messageSelected == 3){
        div.textContent = dmTab[rnd][1][4];
        dmPage.appendChild(div);
    }
    P1.style.display = "none";
    P2.style.display = "none";
    P3.style.display = "none";
    let tmp = setTimeout(() => {
        let div = document.createElement("div");
        div.classList.add('messageEntrant');
        if(messageSelected == 1){
            div.textContent = dmTab[rnd][1][1];
            dmPage.appendChild(div);
        }
        else if(messageSelected == 2){
            div.textContent = dmTab[rnd][1][3];
            dmPage.appendChild(div);
        }
        else if(messageSelected == 3){
            div.textContent = dmTab[rnd][1][5];
            dmPage.appendChild(div);
        }
        messageSelected = 0;
    }, 2000);
    
});

var dmTab = [];
var dm = [];
dmTab.push(["Hi ! I love your account ! Would you make other posts ?", 
    ["Thanks a lot, yes I would !", "Nice I can't wait to see them !", 
    "Yes don't worry posts are coming", "Nice I can't wait to see them !",
    "No my account will stop :(", "Oh I'm so sad :/"]]);
dmTab.push(["Hello ! Your account is very fun ! Do you have any sponsor ?", 
    ["Thanks a lot, yes I have some sponsors look on the right side of my profile page !", "Nice I have never seen them !", 
    "I'm working to have some sponsors !", "Ok ! Sport related sponsor would be cool !",
    "It's very complicated to have a sponsor fitting with me ! Checkout the right side of my profile page to see them", "Ok ! I know how it's important for you ! Good luck in your carreer !"]]);
dmTab.push(["Hi ! Your account is great ! What is your followers objective ?", 
    ["Thanks a lot, I don't have any objectives of followers ! People who likes my account follow me and that's all", "Very good mindset ! You will be famous", 
    "Thank you ! My followers objective is to have the maximum of followers to get a lot of money !!", "Hum... Ok.",
    "My objective is achieved so I won't make more content", "That's so sad :/"]]);
dmTab.push(["Hi ! Your account is amazing ! Can you give some visibility to my account in story ?", 
    ["No sorry your account is not feeting with my theme of content", "I'm so sad :/", 
    "Yes I can ! I do it as soon as possible", "Thanks a lot ! I love you <3",
    "I'm not sure to do it. I'll see it later my friend", "Thanks I would be honoured !"]]);
//dmTab.push(["Hi ! I love your account ! Would you make other posts ?", 
//    ["Thanks a lot, yes I would !", "Nice I can't stand to see them !", 
//    "Yes don't worry posts are coming", "Nice I can't stand to see them !",
//    "No my account will stop :(", "Oh I'm so sad :/"]]);
//dmTab.push(["Hi ! I love your account ! Would you make other posts ?", 
//    ["Thanks a lot, yes I would !", "Nice I can't stand to see them !", 
//    "Yes don't worry posts are coming", "Nice I can't stand to see them !",
//    "No my account will stop :(", "Oh I'm so sad :/"]]);

// Carte chance
let leRandomDeLaCarteChanceQuiApparaitQuandCestLeMomentDApparaitreSurLaPageHomeHtmlTouteBelleDeFouEtNonPasQuandCestPasLeMomentDApparaitreParceQueCeSeraitToutDeMemeDommageDApparaitreAlorsQuIlNeFautPasApparaitre = Math.floor(Math.random() * (180000 - 60000) + 60000);
//console.log(leRandomDeLaCarteChanceQuiApparaitQuandCestLeMomentDApparaitreSurLaPageHomeHtmlTouteBelleDeFouEtNonPasQuandCestPasLeMomentDApparaitreParceQueCeSeraitToutDeMemeDommageDApparaitreAlorsQuIlNeFautPasApparaitre);
let leTimeoutDeLaCarteChanceQuiApparaitQuandCestLeMomentDApparaitreSurLaPageHomeHtmlTouteBelleDeFouEtNonPasQuandCestPasLeMomentDApparaitreParceQueCeSeraitToutDeMemeDommageDApparaitreAlorsQuIlNeFautPasApparaitre = setTimeout(() => {
    document.getElementById("notificationCarteChance").classList.add("cartechanceNotif");
}, leRandomDeLaCarteChanceQuiApparaitQuandCestLeMomentDApparaitreSurLaPageHomeHtmlTouteBelleDeFouEtNonPasQuandCestPasLeMomentDApparaitreParceQueCeSeraitToutDeMemeDommageDApparaitreAlorsQuIlNeFautPasApparaitre);