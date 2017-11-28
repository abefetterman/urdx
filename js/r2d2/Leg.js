'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

var _materials = require('./materials');

var _materials2 = _interopRequireDefault(_materials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WHEEL_OFFSET_X = 0.1333;
var WHEEL_OFFSET_Z = -0.085;
var WHEEL_DIAMETER = 0.035;

var origins = {
  leg: {
    z: -3,
    pitch: 90,
    degrees: true
  },
  wheel: {
    roll: 90,
    degrees: true
  }
};

var joints = {
  legBase: {
    origin: {
      z: -0.6
    }
  },
  frontWheel: {
    origin: {
      x: WHEEL_OFFSET_X,
      z: WHEEL_OFFSET_Z
    }
  },
  backWheel: {
    origin: {
      x: -WHEEL_OFFSET_X,
      z: WHEEL_OFFSET_Z
    }
  }
};

var Wheel = function (_Component) {
  _inherits(Wheel, _Component);

  function Wheel() {
    _classCallCheck(this, Wheel);

    return _possibleConstructorReturn(this, (Wheel.__proto__ || Object.getPrototypeOf(Wheel)).apply(this, arguments));
  }

  _createClass(Wheel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          parent = _props.parent;
      var name = attributes.name,
          joint = attributes.joint;

      return _lib2.default.createElement(_lib.Cylinder, {
        name: name,
        length: 0.1,
        radius: WHEEL_DIAMETER / 2,
        origin: origins.wheel,
        joint: Object.assign({}, { parentName: parent.name }, joint),
        material: _materials2.default.black
      });
    }
  }]);

  return Wheel;
}(_lib.Component);

var Leg = function (_Component2) {
  _inherits(Leg, _Component2);

  function Leg() {
    _classCallCheck(this, Leg);

    return _possibleConstructorReturn(this, (Leg.__proto__ || Object.getPrototypeOf(Leg)).apply(this, arguments));
  }

  _createClass(Leg, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          attributes = _props2.attributes,
          parent = _props2.parent;
      var prefix = attributes.prefix,
          joint = attributes.joint;

      return _lib2.default.createElement(
        _lib.Box,
        {
          name: prefix,
          dx: 0.6,
          dy: 0.1,
          dz: 0.2,
          joint: joint,
          material: _materials2.default.white,
          origin: origins.leg
        },
        _lib2.default.createElement(
          _lib.Box,
          { name: prefix + '_base', dx: 0.4, dy: 0.1, dz: 0.1, joint: joints.legBase },
          _lib2.default.createElement(Wheel, { name: prefix + '_front_wheel', joint: joints.frontWheel }),
          _lib2.default.createElement(Wheel, { name: prefix + '_back_wheel', joint: joints.backWheel })
        )
      );
    }
  }]);

  return Leg;
}(_lib.Component);

exports.default = Leg;