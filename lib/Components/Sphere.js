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

var Sphere = function (_LinkComponent) {
  _inherits(Sphere, _LinkComponent);

  function Sphere() {
    _classCallCheck(this, Sphere);

    return _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).apply(this, arguments));
  }

  _createClass(Sphere, [{
    key: 'geometry',
    value: function geometry(_ref) {
      var radius = _ref.radius;

      return _urdx2.default.createElement('sphere', { radius: radius });
    }
  }, {
    key: 'mass',
    value: function mass(_ref2, density) {
      var radius = _ref2.radius;

      return density * 4 * Math.PI * Math.pow(radius, 3) / 3.0;
    }
  }, {
    key: 'inertiaTensor',
    value: function inertiaTensor(_ref3, mass) {
      var radius = _ref3.radius;

      return {
        ixx: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0),
        iyz: 0,
        izz: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0)
      };
    }
  }]);

  return Sphere;
}(_LinkComponent3.default);

exports.default = Sphere;