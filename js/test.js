'use strict';

var _lib = require('../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cylinder = _lib.UniformSolids.Cylinder,
    Box = _lib.UniformSolids.Box;


var materials = {
  blue: {
    name: 'blue',
    color: { r: 0, g: 0, b: 0.8, a: 1 }
  },
  black: {
    name: 'black',
    color: { r: 0, g: 0, b: 0, a: 1 }
  },
  white: {
    name: 'white',
    color: { r: 1, g: 1, b: 1, a: 1 }
  }
};

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, { materials: materials }),
  _lib2.default.createElement(
    Cylinder,
    { name: 'base_link', length: 0.6, radius: 0.2, material: materials.blue },
    _lib2.default.createElement(Box, {
      name: 'new_link',
      dx: 0.6,
      dy: 0.1,
      dz: 0.2,
      joint: { type: 'fixed', origin: { x: 0, yaw: 30, z: 0, degrees: true } }
    })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));