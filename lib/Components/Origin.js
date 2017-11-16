'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _utils = require('../utils');

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function xyzString(obj) {
  if (!obj) return null;
  return (0, _utils.vecString)(obj.x, obj.y, obj.z);
}

var degreesToRadians = Math.PI / 180.0;

function rpyString(obj) {
  if (!obj) return null;
  if (obj.degrees) {
    return (0, _utils.vecString)(obj.roll * degreesToRadians, obj.pitch * degreesToRadians, obj.yaw * degreesToRadians);
  }
  return (0, _utils.vecString)(obj.roll, obj.pitch, obj.yaw);
}

var Origin = function (_Component) {
  _inherits(Origin, _Component);

  function Origin() {
    _classCallCheck(this, Origin);

    return _possibleConstructorReturn(this, (Origin.__proto__ || Object.getPrototypeOf(Origin)).apply(this, arguments));
  }

  _createClass(Origin, [{
    key: 'render',
    value: function render() {
      var origin = this.props.attributes.origin;

      if (!origin) return null;
      return _urdx2.default.createElement('origin', { xyz: xyzString(origin), rpy: rpyString(origin) });
    }
  }]);

  return Origin;
}(_Component3.default);

exports.default = Origin;