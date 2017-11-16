"use strict";

var _lib = require("../lib");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cylinder = _lib.UniformSolids.Cylinder,
    Box = _lib.UniformSolids.Box;


var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, null),
  _lib2.default.createElement(
    Cylinder,
    { name: "base_link", length: 0.6, radius: 0.2 },
    _lib2.default.createElement(Box, {
      name: "new_link",
      dx: 0.6,
      dy: 0.1,
      dz: 0.2,
      joint: { type: 'fixed', origin: { x: 0, yaw: 30, z: 0, degrees: true } }
    })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));