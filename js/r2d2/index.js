'use strict';

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

var _materials = require('./materials');

var _materials2 = _interopRequireDefault(_materials);

var _Leg = require('./Leg');

var _Leg2 = _interopRequireDefault(_Leg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cylinder = _lib.UniformSolids.Cylinder;


var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, { materials: _materials2.default }),
  _lib2.default.createElement(
    Cylinder,
    { name: 'base_link', length: 0.6, radius: 0.2, material: _materials2.default.blue },
    _lib2.default.createElement(_Leg2.default, { prefix: 'left_leg' })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));