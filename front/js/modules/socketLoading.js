let socket = io();

// Avertis socket io de l'arrivée dans le jeu d'un user
socket.emit('login', '');