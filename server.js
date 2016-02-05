var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var twitter = require('ntwitter');

var app = express();
var port = process.env.PORT || 8080;

var server = http.createServer(app).listen(port, function(){
    console.log('Express server listening on port' + port);
});


