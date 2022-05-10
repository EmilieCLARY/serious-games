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
    res.sendFile(__dirname + '/front/html/index.html');
});

var userName;
var userJob;
var userAppearance;
var treesPlanted = 0;
var userPosts = [];
var nextText = 1;
var userFollowers = 0;
var followersPerSecond = 1;

io.on('connection', (socket) => {

    socket.on('login', () => {
        console.log("User connected")
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
        treesPlanted += trees;
        console.log("TreesPlanted : ", treesPlanted);
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
        userPosts.push(post);
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
    
});


http.listen(4300, () => {
    console.log('Serveur lancé sur le port 4300');
});

