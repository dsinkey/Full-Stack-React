var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    twid: String,
    active: Boolean,
    author: String,
    avatar: String,
    body: String,
    date: Date,
    screenname: String
});

module.exports = mongoose.model('Tweet', schema);