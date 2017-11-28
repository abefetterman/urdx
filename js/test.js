"use strict";

var _lib = require("../lib");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(
    _lib.Cylinder,
    { name: "base_link", length: 0.6, radius: 0.2 },
    _lib2.default.createElement(
      "test",
      null,
      "false"
    )
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));