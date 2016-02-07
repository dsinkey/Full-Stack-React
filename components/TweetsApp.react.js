/** @jsx React.DOM*/

var React = require('react');
var Tweets = require('./Tweets.react.js');
var NotificationBar = require('./NotificationBar.react.js');

module.exports = TweetApp = React.createClass({
  addTweet: function(tweet){
    var updated = this.state.tweets;
    var count = this.state.count + 1;
    var skip = this.state.skip + 1;
    
    updated.unshift(tweet);

    this.setState({tweets: updated, count: count, skip: skip});
  },

  getPage: function(page){
    var request = new XMLHttpRequest();
    var self = this;

    request.open('GET', 'page/' + page + '/' + this.state.skip, true);


    request.send();
  },

  loadPagedTweets: function(tweets){
    var self = this;

    if(tweets.length > 0){
      var updated = this.state.tweets;

      tweets.forEach(function(tweet){
        updated.push(tweet);

        self.setState({tweets: updated, paging: false});
      });
    } else {
      self.setState({done: true, paging: false});
    }
  },

  getInitialState: function (props){
    props = props || this.props;

      return {
        tweets: props.tweets,
        count: 0,
        page: 0,
        paging: false,
        skip: 0,
        done: false
    };

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
        <Tweets tweets={this.state.tweets} />
        <NotificationBar count={this.state.count}/>
      </div>
    )
  }
});