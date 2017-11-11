"use strict";

var urdx = require('../src');
// import { h, render } from 'preact';


var MyTitle = urdx.createClass({
  render: function render() {
    var attributes = this.props.attributes;

    return [urdx.createElement(
      "h1",
      null,
      urdx.createElement("p", { message: attributes.message }),
      urdx.createElement("p", { message: "how are you" })
    ), urdx.createElement("h2", { message: "thanks" })];
  }
});

var yay = urdx.createElement(
  "robot",
  null,
  urdx.createElement(MyTitle, { message: "hi Urdx" })
);

console.log(urdx.renderXML(yay));