'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Cylinder = require('./Cylinder');

var _Cylinder2 = _interopRequireDefault(_Cylinder);

var _Sphere = require('./Sphere');

var _Sphere2 = _interopRequireDefault(_Sphere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Box: _Box2.default,
  Cylinder: _Cylinder2.default,
  Sphere: _Sphere2.default
};