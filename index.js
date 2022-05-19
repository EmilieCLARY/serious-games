const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const session = require("express-session")({
// CIR2-chat encode in sha256
    secret: "eb8fcc253281389225b4f7872f2336918ddc7f689e1fc41b64d5c4f378cdc438",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000,
        secure: false
    }
});
const sharedsession = require("express-socket.io-session");
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const generator = require('generate-maze');

/**** Project configuration ****/

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Init of express, to point our assets
app.use(express.static(__dirname + '/front/'));
app.use(urlencodedParser);
app.use(session);

// Configure socket io with session middleware
io.use(sharedsession(session, {
    // Session automatiquement sauvegardée en cas de modification
    autoSave: true
}));

// Détection de si nous sommes en production, pour sécuriser en https
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    session.cookie.secure = true // serve secure cookies
}



app.use(express.static(__dirname + '/front/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/html/accueil.html');
});

var userName;
var userJob;
var userAppearance;
var treesPlanted = 0;
var userTreesToPlant = 0;
var userPosts = [];
var nextText = 1;
var userFollowers = 0;
var followersPerSecond = 1;
var bigHeadGauge = 0;
var userSponsors = [];
var numberOfMalus;
var mjPlayed = 0;
var endOfGame = false;

var postScore27 = 0;
var gameScore16 = 0;

var bool10 = false;
var bool100 = false;
var bool1000 = false;
var bool5000 = false;
var bool20000 = false;
var bool50000 = false;
var bool100000 = false;
var bool200000 = false;
var bool500000 = false;
var bool1000000 = false;

io.on('connection', (socket) => {

    socket.on('login', () => {
        //console.log("User connected")
    });

    socket.on('userJob', (job) => {
        userJob = job;
        console.log(userJob);
    });

    socket.on('userAppearance', (appearance) => {
        userAppearance = appearance;
        console.log(userAppearance);
    });

    socket.on('treesPlanted', (trees) => {
        treesPlanted = trees;
        userTreesToPlant -= trees;
        console.log("TreesPlanted : ", treesPlanted);
        console.log("Trees to plant : ", treesPlanted);
    });

    socket.on('username', (name) => {
        userName = name;
        console.log("Username : ", userName);
    });
    
    socket.on('getTreesPlanted', () => {
        socket.emit('newNumberOfTreesPlanted', treesPlanted);
    });

    socket.on('getTypeOfInfluencer', () => {
        socket.emit('newTypeOfInfluencer', userJob);
    });

    socket.on('getUsername', () => {
        socket.emit('newUsername', userName);
    });

    socket.on('getAppearance', () => {
        socket.emit('newAppearance', userAppearance);
    });

    socket.on('getPosts', () => {
        socket.emit('newPosts', userPosts);
    });

    socket.on('newPost', (post) =>{
        userFollowers += post.fol;
        followersPerSecond += post.folPS;
        bigHeadGauge += post.bh;
        postScore27 += post.score;
        userPosts.push(post);
        updateTreesToPlant(userFollowers);
    });

    socket.on('addFollowers', (nbr) => {
        userFollowers = nbr;
        if(updateTreesToPlant(userFollowers) == true){
            socket.emit('newTreesToPlant', userTreesToPlant);
        }
    });

    socket.on('leProchainTextCLui', (next) => {
        nextText = next;
    });

    socket.on('getNextText', () => {
        socket.emit('leProchainTexte', nextText);
    });

    socket.on('getFollowers', () => {
        socket.emit('newFollowers', userFollowers);
    });
    socket.on('getFollowersPerSecond', () => {
        socket.emit('newFollowersPS', followersPerSecond);
    });

    socket.on('getBigHeadGauge', () => {
        socket.emit('newBigHeadGauge', bigHeadGauge);
    });

    socket.on('newBigHeadGauge', (minus) => {
        bigHeadGauge -= minus;
        if(bigHeadGauge < 0){
            bigHeadGauge = 0;
        }
    });

    socket.on('getSponsors', () => {
        socket.emit('sendSponsors', userSponsors);
    });

    socket.on('getTreesToPlant', () => {
        socket.emit('newTreesToPlant', userTreesToPlant);
    });
    
    socket.on("newSponsor", (sponsor) => {
        userSponsors.push(sponsor);
    });

    socket.on("moreFollowers", (number) =>{
        userFollowers += number;
        updateTreesToPlant(userFollowers);
        console.log("Gain de", number, "followers");
    });

    socket.on("moreTreesToPlant", (number) => {
        userTreesToPlant += number;
        console.log("Gain de", number, "arbres à planter");
    });

    socket.on("moreBigHeadGauge", (number) => {
        bigHeadGauge += number;
        console.log("Gain de", number, "jauge de Big Head");
    });

    socket.on("lessTreesPlanted", (number) => {
        treesPlanted += number;
        console.log("Perte de", number, "arbres");
    });

    socket.on("numberOfMalusCards", (number) => {
        if(numberOfMalus == undefined){
            numberOfMalus = number;
            gameScore16 += number;
            mjPlayed++;
        }
        console.log("Number of Malus Cards", numberOfMalus);
    });

    socket.on("getNumberOfMalusCards", () => {
        socket.emit("numberOfMalus", numberOfMalus);
        numberOfMalus = undefined;
    });

    socket.on('getScore', () => {
        let tmp = gameScore16 + postScore27;
        socket.emit("theFinalScore", tmp, mjPlayed);
    });

    socket.on('resetGame', () => {
        userName;
        userJob;
        userAppearance;
        treesPlanted = 0;
        userTreesToPlant = 0;
        userPosts = [];
        nextText = 1;
        userFollowers = 0;
        followersPerSecond = 1;
        bigHeadGauge = 0;
        userSponsors = [];
        numberOfMalus;
        mjPlayed = 0;
        endOfGame = false;

        postScore27 = 0;
        gameScore16 = 0;

        bool10 = false;
        bool100 = false;
        bool1000 = false;
        bool5000 = false;
        bool20000 = false;
        bool50000 = false;
        bool100000 = false;
        bool200000 = false;
        bool500000 = false;
        bool1000000 = false;

        console.log('Reset parameters');
    })
});


http.listen(4800, () => {
    console.log('Serveur lancé sur le port 4800');
});

function updateTreesToPlant(fol){
    if(fol >= 10 && !bool10){
        userTreesToPlant += 5;
        bool10 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 100 && !bool100){
        userTreesToPlant += 5;
        bool100 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 1000 && !bool1000){
        userTreesToPlant += 5;
        bool1000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 20000 && !bool20000){
        userTreesToPlant += 10;
        bool20000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 50000 && !bool50000){
        userTreesToPlant += 10;
        bool50000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 100000 && !bool100000){
        userTreesToPlant += 10;
        bool100000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 200000 && !bool200000){
        userTreesToPlant += 10;
        bool200000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 500000 && !bool500000){
        userTreesToPlant += 10;
        bool500000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
    if(fol >= 1000000 && !bool1000000){
        userTreesToPlant += 10;
        bool1000000 = true;
        console.log("Trees to Plant : " + userTreesToPlant);
        return true;
    }
}