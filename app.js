/** @jsx React.DOM */

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react.js');

var initialState = JSON.parse(document.getElementById('inital-state').innerHTML);

React.renderComponent(
    <TweetsApp tweets={intialState} />
    document.getElementById('react-app');
);