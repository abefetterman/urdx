'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Components = require('./Components');

Object.keys(_Components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Components[key];
    }
  });
});

var _urdx = require('./urdx');

var _urdx2 = _interopRequireDefault(_urdx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _urdx2.default;