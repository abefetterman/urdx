"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require("../../lib");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gyro = function (_JoinedComponent) {
  _inherits(Gyro, _JoinedComponent);

  function Gyro() {
    _classCallCheck(this, Gyro);

    return _possibleConstructorReturn(this, (Gyro.__proto__ || Object.getPrototypeOf(Gyro)).apply(this, arguments));
  }

  _createClass(Gyro, [{
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name;

      return _lib2.default.createElement(
        "link",
        { name: name },
        _lib2.default.createElement(
          "inertial",
          null,
          _lib2.default.createElement("mass", { value: "0.001" }),
          _lib2.default.createElement("origin", { xyz: "0 0 0", rpy: "0 0 0" }),
          _lib2.default.createElement("inertia", { ixx: "0.0001", ixy: "0", ixz: "0",
            iyy: "0.000001", iyz: "0",
            izz: "0.0001" })
        )
      );
    }
  }, {
    key: "renderOther",
    value: function renderOther() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name;

      return _lib2.default.createElement(
        "gazebo",
        null,
        _lib2.default.createElement(
          "gazebo_ros_imu",
          { namespace: "controller", name: "imu_controller", plugin: "libgazebo_ros_imu.so" },
          _lib2.default.createElement(
            "alwaysOn",
            null,
            "true"
          ),
          _lib2.default.createElement(
            "updateRate",
            null,
            "50"
          ),
          _lib2.default.createElement(
            "bodyName",
            null,
            name + "_link"
          ),
          _lib2.default.createElement(
            "topicName",
            null,
            "/mobile_base/sensors/imu_data"
          ),
          _lib2.default.createElement(
            "gaussianNoise",
            null,
            0.0017 * 0.0017
          ),
          _lib2.default.createElement(
            "xyzOffsets",
            null,
            "0 0 0"
          ),
          _lib2.default.createElement(
            "rpyOffsets",
            null,
            "0 0 0"
          ),
          _lib2.default.createElement("position", { namespace: "interface", name: name + "_link" })
        )
      );
    }
  }]);

  return Gyro;
}(_lib.JoinedComponent);

var CliffSensor = function (_JoinedComponent2) {
  _inherits(CliffSensor, _JoinedComponent2);

  function CliffSensor() {
    _classCallCheck(this, CliffSensor);

    return _possibleConstructorReturn(this, (CliffSensor.__proto__ || Object.getPrototypeOf(CliffSensor)).apply(this, arguments));
  }

  _createClass(CliffSensor, [{
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name;

      return _lib2.default.createElement(
        "link",
        { name: name + "_link" },
        _lib2.default.createElement(
          "inertial",
          null,
          _lib2.default.createElement("mass", { value: "0.0001" }),
          _lib2.default.createElement("origin", { xyz: "0 0 0" }),
          _lib2.default.createElement("inertia", { ixx: "0.0001", ixy: "0.0", ixz: "0.0",
            iyy: "0.0001", iyz: "0.0",
            izz: "0.0001" })
        )
      );
    }
  }, {
    key: "renderOther",
    value: function renderOther() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name;

      return _lib2.default.createElement(
        "gazebo",
        { reference: name + "_link" },
        _lib2.default.createElement(
          "ray",
          { namespace: "sensor", name: name },
          _lib2.default.createElement(
            "alwaysOn",
            null,
            "true"
          ),
          _lib2.default.createElement(
            "updateRate",
            null,
            "50"
          ),
          _lib2.default.createElement(
            "rayCount",
            null,
            "50"
          ),
          _lib2.default.createElement(
            "rangeCount",
            null,
            "1"
          ),
          _lib2.default.createElement(
            "resRange",
            null,
            "1.0"
          ),
          _lib2.default.createElement(
            "minAngle",
            null,
            "-2.5"
          ),
          _lib2.default.createElement(
            "maxAngle",
            null,
            "2.5"
          ),
          _lib2.default.createElement(
            "minRange",
            null,
            "0.01"
          ),
          _lib2.default.createElement(
            "maxRange",
            null,
            "0.15"
          ),
          _lib2.default.createElement(
            "displayRays",
            null,
            "true"
          )
        )
      );
    }
  }]);

  return CliffSensor;
}(_lib.JoinedComponent);

var Bumpers = function (_Component) {
  _inherits(Bumpers, _Component);

  function Bumpers() {
    _classCallCheck(this, Bumpers);

    return _possibleConstructorReturn(this, (Bumpers.__proto__ || Object.getPrototypeOf(Bumpers)).apply(this, arguments));
  }

  _createClass(Bumpers, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          parent = _props.parent;

      if (!(attributes && parent)) return null;
      var name = attributes.name;

      var parentName = parent.name;
      return _lib2.default.createElement(
        "gazebo",
        { reference: parentName },
        _lib2.default.createElement(
          "contact",
          { namespace: "sensor", name: name },
          _lib2.default.createElement(
            "geom",
            null,
            "base_footprint_geom_base_link"
          ),
          _lib2.default.createElement(
            "topic",
            null,
            "bumpers"
          ),
          _lib2.default.createElement(
            "alwaysOn",
            null,
            "true"
          ),
          _lib2.default.createElement(
            "updateRate",
            null,
            "50"
          )
        )
      );
    }
  }]);

  return Bumpers;
}(_lib.Component);

var joints = {
  gyro: {
    axis: {
      y: 1
    },
    origin: {
      x: 0.056,
      y: 0.062,
      z: 0.0202
    }
  },
  cliffLeft: {
    origin: {
      x: 0.08734,
      y: 0.13601,
      z: 0.0214,
      pitch: 90,
      degrees: true
    }
  },
  cliffRight: {
    origin: {
      x: 0.085,
      y: -0.13601,
      z: 0.0214,
      pitch: 90,
      degrees: true
    }
  },
  cliffFront: {
    origin: {
      x: 0.156,
      y: 0,
      z: 0.0214,
      pitch: 90,
      degrees: true
    }
  }
};

var Sensors = function (_Component2) {
  _inherits(Sensors, _Component2);

  function Sensors() {
    _classCallCheck(this, Sensors);

    return _possibleConstructorReturn(this, (Sensors.__proto__ || Object.getPrototypeOf(Sensors)).apply(this, arguments));
  }

  _createClass(Sensors, [{
    key: "render",
    value: function render() {
      return _lib2.default.createElement(
        _lib.Wrapper,
        null,
        _lib2.default.createElement(Gyro, { name: "gyro", joint: joints.gyro }),
        _lib2.default.createElement(CliffSensor, { name: "cliff_sensor_front", joint: joints.cliffFront }),
        _lib2.default.createElement(CliffSensor, { name: "cliff_sensor_left", joint: joints.cliffLeft }),
        _lib2.default.createElement(CliffSensor, { name: "cliff_sensor_right", joint: joints.cliffRight }),
        _lib2.default.createElement(Bumpers, { name: "bumpers" })
      );
    }
  }]);

  return Sensors;
}(_lib.Component);

exports.default = Sensors;