const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const generator = require('generate-maze');



app.use(express.static(__dirname + '/front/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front/html/index.html');
});

http.listen(4300, () => {
  console.log('Serveur lancé sur le port 4200');
});

