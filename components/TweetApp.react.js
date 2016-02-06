/** @jsx React.DOM*/

var React = require('react');

module.exports = TweetApp = React.createClass({
  addTweet: function(tweet){
    var updated = this.state.tweets;
    var count = this.state.count + 1;
    var skip = this.state.skip + 1;
    
    updated.unshift(tweet);

    this.setState({tweets: updated, count: count, skip: skip});
  },

  getInitialState: function (props){
    props = props || this.props;

      return {
        tweets. props.tweets
        count: 0
    }
  },

  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },

  componentDidMount: function(){
    var self = this;

    var socket = io.connect();

    socket.on('tweet', function(data){
      self.andTweet(data);
    });
  },

  render: function(){
    return (
      <div className="tweet-app">
      </div>
    )
  }
});