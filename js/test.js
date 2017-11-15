'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component = require('../lib/Component');

var _Component2 = _interopRequireDefault(_Component);

var _LinkComponent3 = require('../lib/LinkComponent');

var _LinkComponent4 = _interopRequireDefault(_LinkComponent3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var urdx = require('../lib');

var Cylinder = function (_LinkComponent) {
  _inherits(Cylinder, _LinkComponent);

  function Cylinder() {
    _classCallCheck(this, Cylinder);

    return _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).apply(this, arguments));
  }

  _createClass(Cylinder, [{
    key: 'renderLink',
    value: function renderLink() {
      var attributes = this.props.attributes;
      var length = attributes.length,
          radius = attributes.radius,
          name = attributes.name;

      return urdx.createElement(
        'link',
        { name: name },
        urdx.createElement(
          'visual',
          null,
          urdx.createElement(
            'geometry',
            null,
            urdx.createElement('cylinder', { length: length, radius: radius })
          )
        )
      );
    }
  }]);

  return Cylinder;
}(_LinkComponent4.default);

;

var Box = function (_LinkComponent2) {
  _inherits(Box, _LinkComponent2);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'renderLink',
    value: function renderLink() {
      var attributes = this.props.attributes;
      var size = attributes.size,
          name = attributes.name;

      return urdx.createElement(
        'link',
        { name: name },
        urdx.createElement(
          'visual',
          null,
          urdx.createElement(
            'geometry',
            null,
            urdx.createElement('box', { size: size })
          )
        )
      );
    }
  }, {
    key: 'renderJoint',
    value: function renderJoint() {
      console.log('calling renderJoint');
      var _props = this.props,
          parent = _props.parent,
          attributes = _props.attributes;

      if (!(parent || joint)) return null;
      var _attributes$joint = attributes.joint,
          joint = _attributes$joint === undefined ? {} : _attributes$joint,
          name = attributes.name;
      var origin = joint.origin,
          type = joint.type;
      var parentName = parent.name;

      return urdx.createElement(
        'joint',
        { name: name + '_joint', type: type },
        urdx.createElement('parent', { link: parentName }),
        urdx.createElement('child', { link: name })
      );
    }
  }]);

  return Box;
}(_LinkComponent4.default);

var robot = urdx.createElement(
  Cylinder,
  { name: 'base_link', length: 0.6, radius: 0.2 },
  urdx.createElement(Box, { name: 'new_link', size: '0.6 0.1 0.2', joint: { type: 'fixed', origin: '0 0 0' } })
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));