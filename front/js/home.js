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

var usernames = ["DanleyJade","SnowberYaws","Platysma","Snorkel","Osteophone","OggacFlume","LilialDolee","Scirocco","Oryctomancy","Sassafras","Famulus","Apprehend","Benediction","ComfykelsCuckoo","Contemper","BroncokZoom","CorehUmlaut","Bouffant","Ploitering","Razzmatazz","SonsiaMoot","Pettifogger","Decorticate","Pancreas","PccheatKyloe","JidezJiggle","Passacaglia","Moocher","Monoideism","BlaidSnooty","PleocZonoid","Mawkish","Georgic","Kahikatea","DannerGenet","Moniker","Paradisiacal","Quinzee","Reticella","LadynoobMoue","Verilysoul327","Pilcrow","Furunculoid","Dirf","Agnation","Platapie","Preconize","Virtuoso","Lunulate","Hootenanny","BlindPig","Dithyramb","Cannelure","Widdershins","Forfaiting","Serendipity","Malarknight123","Dillydally","Cryptic","Persnickety","Brimborion","Cockatoo","Humgruffin","Flapdoodle","Apsidal","Calabash","Leprosarium","Guttersnipe","Webcast","Drizzle","Nasonquid66","Tchotchke","Zamarra","Shart","Impleach","Tarboosh","Pterylology","Crumple","Atpatruus","Nincompoop","Mutualism","HandstandFizgig","Nutmeg1Spiral","DaftpigCuckoo","DarseyChichi","Succubus","Alveromancy","Sprinkles","Athymia","Spendthrift","CuricElapid","Oxymoron","Caduceator","Crudivore","Fumiduct","Yellowbelly","Dysphagia","AfearJetsam","GeruGlogg","Almoner","Obsidian","CeliacVerve","Kalimba","Filibuster","Merdurinous","Slipshod","PingouiQuant","Firebrand","Stomatolalia","Kittiwake","Cosmism","Phantonym","Scandalitis","DeweyYahoo","Spermophile","Slapdash","Anhidrosis","Sassitude","MaxhunAncon","Wolfman8Quack","Banderilla","Fussbudget","Nestitherapy","Kahuna","Fossde200210","Halfwit","Fumarole","Gasbag","Divisiger151","Swish","Alee6tanng","Virtuoso","Eviscerate","Gongoozle","Juttylair","Fishwife","Dipnoous","Parapet","Telmatology","Calaboose","Mithridatism","Oakum","Dosimetry","Spelunker","Piscicide","Snool","Threnodic","Jubilee","Celsitude","Rambunctious","Perukereyc321","Zeugma","Sorbile","Landlubber","Librate","Couscous","Lyncean","Plethora","Picotgetx","Headlong","Recrement","Antimacassar","Tastevin","Preposterous","Solivagant","Gangway","Oxytocic","Pugnacious","Cultriform","Gibbosity","Necrolatry","Vermicious","Chyliferous","Shebang","Femerall","DirectWhorl","Epithelium","E_libQuokka","SwordmasRound","Skedaddle","Erotophobia","Cocksure","Mammose","Dummkopf","Organza","BaiphPogey","Inappetent","Nambypamby","Annodated","BuddiefPrimp","Zeitgeber","NidefPogo","Phubbing","Borborygmus","Magistral","Popliteal","Opisthograph","SiikJiffy","Phosphene","Salpiglossis","Cryptarchy","Peeve","Slavocracy","Jalopy","Ickleseict","Discalceate","Bedaggle","Cockatoo","Groupuscule","Lothario","Cyllosis","Firkin","Virtunitymc","Raconteur","Nithing","Zeppelin","Grinagog","Calash","Echinuliform","Jamboree","Eponymdbm99","Scootch","Gersentstats","Shalwar","Monoliteral","Philtrum","Soubrette","Fatuous","Promethean","Berserker","Duikerdax107","Whimsical","Pelmatogram","Rumpus","Jaseran","Hurlyburly","Getagu98","Hijinks","Circumjacent","Outlandish"

]

var myJob;

socket.emit('getTreesPlanted');
socket.emit('getTypeOfInfluencer');
socket.emit('getAppearance');
socket.emit('getUsername');

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
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Scientific";
            break;
        case 3:
            myJob = job;
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : Gamer";
            break;

        default:
            document.getElementById("typeOfInfluencer").textContent = "Type of influencer : NONONONO";
            break;
    }
});

socket.on('newUsername', (name) => {
    //console.log(name);
    if(name == null){
        document.getElementById("username").textContent = "Name : NONONONO";
    }
    else{
        document.getElementById("username").textContent = "Name : " + name;
    }
});

socket.on('newAppearance', (appearance) => {
    switch (appearance) {
        case 0:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneWG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWG.png")';
                    break;
            }
            break;
        case 1:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneBG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
                    break;
            }
            break;
        case 2:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneYG.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYG.png")';
                    break;
            }
            break;
        case 3:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneWW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtWW.png")';
                    break;
            }
            break;
        case 4:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneBW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBW.png")';
                    break;
            }
            break;
        case 5:
            switch (myJob) {
                case 0:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    break;
                case 1:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/comedian/sceneYW.png")';
                    break;
                case 2:
                    break;
                case 3:
                    break;
        
                default:
                    document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtYW.png")';
                    break;
            }
            
            break;

        default:
            document.getElementById("profilPicture").style.backgroundImage = 'url("../img/characters/sportif/bbCourtBG.png")';
            break;
    }
});