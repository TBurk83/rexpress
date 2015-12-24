var express = require('express');

var app = new express();

app
    .get('/', function(req, res) {
        res.render('./../client/index.ejs', {})
    })
    .use(express.static(__dirname + '/../client'))
    .listen('7777');
