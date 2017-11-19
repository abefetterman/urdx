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

function sphereMass(r, density) {
  var rho = density || 1;
  return rho * 4 * Math.PI * Math.pow(r, 3) / 3.0;
}

function sphereInertiaTensor(r, m) {
  return {
    ixx: 2 * m * Math.pow(r, 2) / 5.0,
    ixy: 0,
    ixz: 0,
    iyy: 2 * m * Math.pow(r, 2) / 5.0,
    iyz: 0,
    izz: 2 * m * Math.pow(r, 2) / 5.0
  };
}

var Sphere = function (_LinkComponent) {
  _inherits(Sphere, _LinkComponent);

  function Sphere() {
    _classCallCheck(this, Sphere);

    return _possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).apply(this, arguments));
  }

  _createClass(Sphere, [{
    key: 'renderVisual',
    value: function renderVisual(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var radius = attributes.radius,
          origin = attributes.origin;
      var material = attributes.material;

      if (!material && parent && parent.material) material = parent.material;

      return _urdx2.default.createElement(
        'visual',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          _urdx2.default.createElement('sphere', { radius: radius })
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
      var radius = attributes.radius,
          origin = attributes.origin,
          mass = attributes.mass;


      return _urdx2.default.createElement(
        'collision',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          _urdx2.default.createElement('sphere', { radius: radius })
        ),
        _urdx2.default.createElement(_Origin2.default, { origin: origin })
      );
    }
  }, {
    key: 'renderInertial',
    value: function renderInertial(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var radius = attributes.radius,
          origin = attributes.origin;
      var material = attributes.material,
          mass = attributes.mass;

      if (!material && parent && parent.material) material = parent.material;
      if (!mass) mass = sphereMass(radius, material && material.density);
      var inertia = sphereInertiaTensor(radius, mass);

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

  return Sphere;
}(_LinkComponent3.default);

exports.default = Sphere;
;