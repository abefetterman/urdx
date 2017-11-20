'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var WHEEL_OFFSET_X = 0.1333;
var WHEEL_OFFSET_Z = -0.085;

var legOrigins = {
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

var legJoints = {
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

      return _lib2.default.createElement(Cylinder, {
        name: name,
        length: 0.1,
        radius: 0.035,
        origin: legOrigins.wheel,
        joint: Object.assign({}, { parentName: parent.name }, joint),
        material: materials.black
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
      var name = attributes.name,
          origin = attributes.origin;

      return [_lib2.default.createElement(
        Box,
        { name: name, dx: 0.6, dy: 0.1, dz: 0.2, joint: { parentName: parent.name, origin: origin } },
        _lib2.default.createElement(
          Box,
          { name: name + '_base', dx: 0.4, dy: 0.1, dz: 0.1, joint: legJoints.legBase },
          _lib2.default.createElement(Wheel, { name: name + '_front_wheel', joint: legJoints.frontWheel }),
          _lib2.default.createElement(Wheel, { name: name + '_back_wheel', joint: legJoints.backWheel })
        )
      )];
    }
  }]);

  return Leg;
}(_lib.Component);

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, { materials: materials }),
  _lib2.default.createElement(
    Cylinder,
    { name: 'base_link', length: 0.6, radius: 0.2, material: materials.blue },
    _lib2.default.createElement(Leg, { name: 'left_leg' })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));