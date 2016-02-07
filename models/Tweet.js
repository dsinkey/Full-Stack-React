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

schema.statics.getTweets = function(callback){
    var tweets = [];

    Tweet.find({}, 'twid active author avatar body date screenname').sort({date: 'desc'}).exec(function(err, docs){
      if(!err){
        tweets = docs;
        tweets.forEach(function(tweet){
          tweets.active = true;
      });
    }

    callback(tweets);
  });
};

module.exports = Tweet = mongoose.model('Tweet', schema);