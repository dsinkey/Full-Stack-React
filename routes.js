var JSX = require('node-jsx').install();
var React = require('react');
var TweetsApp = require('./components/TweetsApp.react.js');
var Tweet = require('./models/Tweet.js');

module.exports = {
  index: function(req, res){
    Tweets.getTweets(function(tweets){
      var markup = React.renderComponentToString(
        TweetsApp({
          tweets: tweets
        })
      );
      res.render('home', {
        markup: markup;
        state: JSON.stringify(tweets)
      });
    });
  }
}