'use strict';

var _lib = require('../lib');

var _lib2 = _interopRequireDefault(_lib);

var _r2d = require('./r2d2');

var _r2d2 = _interopRequireDefault(_r2d);

var _kobuki = require('./kobuki');

var _kobuki2 = _interopRequireDefault(_kobuki);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var files = [{
  filename: './r2d2.urdf',
  args: {
    name: 'r2d2'
  },
  robot: _r2d2.default
}, {
  filename: './kobuki.urdf',
  args: {
    name: 'kobuki'
  },
  robot: _kobuki2.default
}];

_lib2.default.writeOutput(files);