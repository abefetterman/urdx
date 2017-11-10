"use strict";

var urdx = require('../src');
// import { h, render } from 'preact';


var MyTitle = urdx.createClass({
  render: function render() {
    return urdx.createElement(
      "h1",
      null,
      urdx.createElement("p", { message: this.props.message })
    );
  }
});

var yay = urdx.createElement(
  "robot",
  null,
  urdx.createElement(MyTitle, { message: "hi Urdx" })
);

console.log(urdx.renderXML(yay));