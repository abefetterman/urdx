'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _LinkComponent2 = require('../LinkComponent');

var _LinkComponent3 = _interopRequireDefault(_LinkComponent2);

var _Origin = require('../Origin');

var _Origin2 = _interopRequireDefault(_Origin);

var _Material = require('../Material');

var _Material2 = _interopRequireDefault(_Material);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function boxMass(dx, dy, dz, density) {
  var rho = density || 1;
  return rho * dx * dy * dz;
}

function boxInertiaTensor(dx, dy, dz, m) {
  return {
    ixx: m * (Math.pow(dy, 2) + Math.pow(dz, 2)) / 12.0,
    ixy: 0,
    ixz: 0,
    iyy: m * (Math.pow(dx, 2) + Math.pow(dz, 2)) / 12.0,
    iyz: 0,
    izz: m * (Math.pow(dx, 2) + Math.pow(dy, 2)) / 12.0
  };
}

var Box = function (_LinkComponent) {
  _inherits(Box, _LinkComponent);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'renderVisual',
    value: function renderVisual(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var dx = attributes.dx,
          dy = attributes.dy,
          dz = attributes.dz,
          origin = attributes.origin;
      var material = attributes.material;

      if (!material && parent && parent.material) material = parent.material;

      return _urdx2.default.createElement(
        'visual',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          _urdx2.default.createElement('box', { size: (0, _utils.vecString)(dx, dy, dz) })
        ),
        _urdx2.default.createElement(_Origin2.default, { origin: origin }),
        _urdx2.default.createElement(_Material2.default, { material: material })
      );
    }
  }, {
    key: 'renderCollision',
    value: function renderCollision(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var dx = attributes.dx,
          dy = attributes.dy,
          dz = attributes.dz,
          origin = attributes.origin,
          mass = attributes.mass;


      return _urdx2.default.createElement(
        'collision',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          _urdx2.default.createElement('box', { size: (0, _utils.vecString)(dx, dy, dz) })
        ),
        _urdx2.default.createElement(_Origin2.default, { origin: origin })
      );
    }
  }, {
    key: 'renderInertial',
    value: function renderInertial(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var dx = attributes.dx,
          dy = attributes.dy,
          dz = attributes.dz,
          origin = attributes.origin;
      var material = attributes.material,
          mass = attributes.mass;

      if (!material && parent && parent.material) material = parent.material;
      if (!mass) mass = boxMass(dx, dy, dz, material && material.density);
      var inertia = boxInertiaTensor(dx, dy, dz, mass);

      return _urdx2.default.createElement(
        'inertial',
        null,
        _urdx2.default.createElement('mass', { value: mass }),
        _urdx2.default.createElement('inertia', inertia)
      );
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name,
          visual = attributes.visual,
          collision = attributes.collision,
          inertial = attributes.inertial;

      return _urdx2.default.createElement(
        'link',
        { name: name },
        this.renderVisual(this.props),
        this.renderCollision(this.props),
        this.renderInertial(this.props)
      );
    }
  }]);

  return Box;
}(_LinkComponent3.default);

exports.default = Box;
;