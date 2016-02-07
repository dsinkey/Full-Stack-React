var JSX = require('node-jsx').install();
var React = require('react');
var TweetsApp = React.createFactory(require('./components/TweetsApp.react.js'));
var Tweet = require('./models/Tweet.js');

module.exports = {
  index: function(req, res){
    Tweet.getTweets(function(tweets){
      var markup = React.renderToString(
        TweetsApp({
          tweets: tweets
        })
      );
      res.render('home', {
        markup: markup,
        state: JSON.stringify(tweets)
      });
    });
  }
}