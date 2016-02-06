/** @jsx React.DOM*/

var React = require('react');

module.exports = Tweet = React.createClass({
  render: function(){
    return (
      <li>
        <img src={tweet.avatar} className="avatar">
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com" + tweet.screenname}>{tweet.author}</a>
            <span className="screen-name">@{tweet.screenname}</span>
          </cite>
        </blockquote>
      </li>
    )
  }
});