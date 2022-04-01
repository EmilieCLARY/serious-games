const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);

app.use(express.static(__dirname + '/front/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front/html/index.html');
});

http.listen(4200, () => {
  console.log('Serveur lancé sur le port 4200');
});
