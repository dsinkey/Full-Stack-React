/** @jsx React.DOM*/

var React = require('react');
var Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({
  render: function(){
    var contents = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    return (
      <ul className="tweets">{contents}</ul>
    )
  }
});