'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _LinkComponent2 = require('./LinkComponent');

var _LinkComponent3 = _interopRequireDefault(_LinkComponent2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_LinkComponent) {
  _inherits(Box, _LinkComponent);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'geometry',
    value: function geometry(_ref) {
      var dx = _ref.dx,
          dy = _ref.dy,
          dz = _ref.dz;

      return _urdx2.default.createElement('box', { size: (0, _utils.vecString)(dx, dy, dz) });
    }
  }, {
    key: 'mass',
    value: function mass(_ref2, density) {
      var dx = _ref2.dx,
          dy = _ref2.dy,
          dz = _ref2.dz;

      return density * dx * dy * dz;
    }
  }, {
    key: 'inertiaTensor',
    value: function inertiaTensor(_ref3, mass) {
      var dx = _ref3.dx,
          dy = _ref3.dy,
          dz = _ref3.dz;

      return {
        ixx: (0, _utils.truncate)(mass * (Math.pow(dy, 2) + Math.pow(dz, 2)) / 12.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(mass * (Math.pow(dx, 2) + Math.pow(dz, 2)) / 12.0),
        iyz: 0,
        izz: (0, _utils.truncate)(mass * (Math.pow(dx, 2) + Math.pow(dy, 2)) / 12.0)
      };
    }
  }]);

  return Box;
}(_LinkComponent3.default);

exports.default = Box;