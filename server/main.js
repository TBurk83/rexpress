var express = require('express');

var app = new express();

app.get('/', function(req, res) {
    res.render('./../client/index.ejs', {})
}).listen('7777');
