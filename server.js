var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var twitter = require('twitter');
var config = require('./config');
var streamHandler = require('./utils/streamHandler');

var app = express();
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/react-tweets');

var twit = new twitter(config.twitter);

var server = http.createServer(app).listen(port, function(){
    console.log('Express server listening on port' + port);
});

var io = require('socket.io').listen(server);

twit.stream('statuses/filter', {track: 'javascript, #react'}, function(stream){
    streamHandler(stream, io);
});

