'use strict';

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

var _materials = require('./materials');

var _materials2 = _interopRequireDefault(_materials);

var _Leg = require('./Leg');

var _Leg2 = _interopRequireDefault(_Leg);

var _Gripper = require('./Gripper');

var _Gripper2 = _interopRequireDefault(_Gripper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROBOT_LEG_Y = 0.22;
var ROBOT_LEG_Z = 0.25;

var joints = {
  leftLeg: {
    origin: {
      y: ROBOT_LEG_Y,
      z: ROBOT_LEG_Z
    }
  },
  rightLeg: {
    origin: {
      y: -ROBOT_LEG_Y,
      z: ROBOT_LEG_Z
    }
  },
  gripper: {
    type: 'prismatic',
    axis: {
      x: 1
    },
    limit: {
      lower: -0.38
    },
    origin: {
      y: 0.19,
      z: 0.2,
      yaw: 90,
      degrees: true
    }
  }
};

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, { materials: _materials2.default }),
  _lib2.default.createElement(
    _lib.Cylinder,
    { name: 'base_link', length: 0.6, radius: 0.2, material: _materials2.default.blue },
    _lib2.default.createElement(_Leg2.default, { prefix: 'left_leg', joint: joints.leftLeg }),
    _lib2.default.createElement(_Leg2.default, { prefix: 'right_leg', joint: joints.rightLeg }),
    _lib2.default.createElement(_Gripper2.default, { prefix: 'gripper', joint: joints.gripper })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));