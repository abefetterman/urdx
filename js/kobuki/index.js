'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

var _Sensors = require('./Sensors');

var _Sensors2 = _interopRequireDefault(_Sensors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var origins = {
  baseLink: {
    visual: {
      x: 0.001,
      z: 0.05199
    },
    z: 0.05949
  }
};

var joints = {
  leftWheel: {
    type: 'continuous',
    origin: {
      y: 0.23 / 2,
      z: 0.0250,
      roll: -90,
      degrees: true
    }
  },
  rightWheel: {
    type: 'continuous',
    origin: {
      y: -0.23 / 2,
      z: 0.0250,
      roll: -90,
      degrees: true
    }
  },
  frontCaster: {
    origin: {
      x: 0.115,
      z: 0.007,
      roll: -90,
      degrees: true
    }
  },
  backCaster: {
    origin: {
      x: -0.135,
      z: 0.009,
      roll: -90,
      degrees: true
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

      return _lib2.default.createElement(
        _lib.Wrapper,
        null,
        _lib2.default.createElement(_lib.Cylinder, {
          name: name,
          length: 0.0206,
          radius: 0.0352,
          joint: Object.assign({}, { parentName: parent.name }, joint),
          visualGeometry: _lib2.default.createElement('mesh', { filename: 'package://kobuki_description/meshes/wheel.dae' })
        }),
        _lib2.default.createElement(
          'gazebo',
          { reference: name },
          _lib2.default.createElement('mu1', { value: '10' }),
          _lib2.default.createElement('mu2', { value: '10' }),
          _lib2.default.createElement('kp', { value: '100000000.0' }),
          _lib2.default.createElement('kd', { value: '10000.0' })
        )
      );
    }
  }]);

  return Wheel;
}(_lib.Component);

var Caster = function (_Component2) {
  _inherits(Caster, _Component2);

  function Caster() {
    _classCallCheck(this, Caster);

    return _possibleConstructorReturn(this, (Caster.__proto__ || Object.getPrototypeOf(Caster)).apply(this, arguments));
  }

  _createClass(Caster, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          attributes = _props2.attributes,
          parent = _props2.parent;
      var name = attributes.name,
          joint = attributes.joint;

      return _lib2.default.createElement(
        _lib.Wrapper,
        null,
        _lib2.default.createElement(_lib.Cylinder, {
          name: name,
          length: 0.0176,
          radius: 0.017,
          joint: Object.assign({}, { parentName: parent.name }, joint)
        }),
        _lib2.default.createElement(
          'gazebo',
          { reference: name + '_link' },
          _lib2.default.createElement('mu1', { value: '0' }),
          _lib2.default.createElement('mu2', { value: '0' }),
          _lib2.default.createElement('kp', { value: '100000000.0' }),
          _lib2.default.createElement('kd', { value: '10000.0' })
        )
      );
    }
  }]);

  return Caster;
}(_lib.Component);

var Controller = function (_Component3) {
  _inherits(Controller, _Component3);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'render',
    value: function render() {
      return _lib2.default.createElement(
        'gazebo',
        null,
        _lib2.default.createElement(
          'gazebo_ros_kobuki',
          { namespace: 'controller', name: 'kobuki_controller', plugin: 'libgazebo_ros_kobuki.so' },
          _lib2.default.createElement(
            'left_wheel_joint_name',
            null,
            'left_wheel_joint'
          ),
          _lib2.default.createElement(
            'right_wheel_joint_name',
            null,
            'right_wheel_joint'
          ),
          _lib2.default.createElement(
            'wheel_separation',
            null,
            '.230'
          ),
          _lib2.default.createElement(
            'wheel_diameter',
            null,
            '0.070'
          ),
          _lib2.default.createElement(
            'torque',
            null,
            '1.0'
          ),
          _lib2.default.createElement(
            'velocity_command_timeout',
            null,
            '0.6'
          ),
          _lib2.default.createElement(
            'cliff_sensor_left_name',
            null,
            'cliff_sensor_left'
          ),
          _lib2.default.createElement(
            'cliff_sensor_front_name',
            null,
            'cliff_sensor_front'
          ),
          _lib2.default.createElement(
            'cliff_sensor_right_name',
            null,
            'cliff_sensor_right'
          ),
          _lib2.default.createElement(
            'cliff_detection_threshold',
            null,
            '0.04'
          ),
          _lib2.default.createElement(
            'bumper_name',
            null,
            'bumpers'
          ),
          _lib2.default.createElement(
            'base_collision_model_link',
            null,
            'base_link'
          )
        )
      );
    }
  }]);

  return Controller;
}(_lib.Component);

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(
    _lib.Cylinder,
    {
      name: 'base',
      length: 0.10938,
      radius: 0.176,
      mass: 2.4,
      origin: origins.baseLink,
      visualGeometry: _lib2.default.createElement('mesh', { filename: 'package://kobuki_description/meshes/main_body.dae' })
    },
    _lib2.default.createElement(Wheel, { name: 'right_wheel', joint: joints.rightWheel }),
    _lib2.default.createElement(Wheel, { name: 'left_wheel', joint: joints.leftWheel }),
    _lib2.default.createElement(Caster, { name: 'caster_front', joint: joints.frontCaster }),
    _lib2.default.createElement(Caster, { name: 'caster_back', joint: joints.backCaster }),
    _lib2.default.createElement(_Sensors2.default, null)
  ),
  _lib2.default.createElement(Controller, null)
);

console.log(_lib2.default.renderRobot(robot, { name: "kobuki" }));