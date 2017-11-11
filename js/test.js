"use strict";

var urdx = require('../src');

var MyTitle = urdx.createClass({
  render: function render() {
    var attributes = this.props.attributes;

    return [urdx.createElement(
      "h1",
      null,
      urdx.createElement("p", { message: attributes.message }),
      urdx.createElement("p", { message: 2 })
    ), urdx.createElement("h2", { message: "thanks" })];
  }
});

var yay = urdx.createElement(MyTitle, { message: "hi Urdx" });

console.log(urdx.renderRobot(yay, { sassy: true }));