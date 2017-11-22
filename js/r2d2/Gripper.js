'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mesh = _lib.UniformSolids.Mesh,
    Cylinder = _lib.UniformSolids.Cylinder;


var origins = {
  pole: {
    x: 0.1,
    pitch: 90,
    degrees: true
  },
  finger: {
    roll: -180,
    degrees: true
  },
  tip: {
    x: 0.9137,
    y: 0.00495,
    roll: -180,
    degrees: true
  }
};

var joints = {
  leftGripper: {
    type: 'revolute',
    axis: {
      z: 1
    },
    limit: {
      upper: 0.548
    },
    origin: {
      x: 0.2,
      y: 0.02
    }
  },
  rightGripper: {
    type: 'revolute',
    axis: {
      z: -1
    },
    limit: {
      upper: 0.548
    },
    origin: {
      x: 0.2,
      y: -0.02
    }
  }
};

var GripperSide = function (_Component) {
  _inherits(GripperSide, _Component);

  function GripperSide() {
    _classCallCheck(this, GripperSide);

    return _possibleConstructorReturn(this, (GripperSide.__proto__ || Object.getPrototypeOf(GripperSide)).apply(this, arguments));
  }

  _createClass(GripperSide, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          parent = _props.parent;
      var prefix = attributes.prefix,
          joint = attributes.joint;

      return _lib2.default.createElement(
        Mesh,
        {
          name: prefix,
          filename: 'l_finger.stl',
          origin: origins.finger,
          length: 0.02,
          joint: joint
        },
        _lib2.default.createElement(Mesh, {
          name: prefix + '_tip',
          filename: 'l_finger_tip.stl',
          length: 0.01,
          origin: origins.tip
        })
      );
    }
  }]);

  return GripperSide;
}(_lib.Component);

var Gripper = function (_Component2) {
  _inherits(Gripper, _Component2);

  function Gripper() {
    _classCallCheck(this, Gripper);

    return _possibleConstructorReturn(this, (Gripper.__proto__ || Object.getPrototypeOf(Gripper)).apply(this, arguments));
  }

  _createClass(Gripper, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          attributes = _props2.attributes,
          parent = _props2.parent;
      var prefix = attributes.prefix,
          joint = attributes.joint;

      return _lib2.default.createElement(
        Cylinder,
        {
          name: prefix + '_pole',
          length: 0.2,
          radius: 0.01,
          joint: joint,
          material: null,
          origin: origins.pole
        },
        _lib2.default.createElement(GripperSide, {
          prefix: prefix + '_left',
          joint: joints.leftGripper
        }),
        _lib2.default.createElement(GripperSide, {
          prefix: prefix + '_right',
          joint: joints.rightGripper
        })
      );
    }
  }]);

  return Gripper;
}(_lib.Component);

exports.default = Gripper;