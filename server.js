var express = require('express');
var app = express();
var server;

app.get('/', function(req, res) {
    res.send('Hello world');
});

server = app.listen(3000, function() {
    console.log('Aplikacja nasłuchuje na http://localhost:3000');
});
