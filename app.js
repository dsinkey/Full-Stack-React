/** @jsx React.DOM */

var initialState = JSON.parse(document.getElementById('inital-state').innerHTML);

React.renderComponent(
    <TweetsApp tweets={intialState} />
    document.getElementById('react-app');
);