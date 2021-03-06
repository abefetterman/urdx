'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _LinkComponent2 = require('./LinkComponent');

var _LinkComponent3 = _interopRequireDefault(_LinkComponent2);

var _Origin = require('./Origin');

var _Origin2 = _interopRequireDefault(_Origin);

var _Material = require('./Material');

var _Material2 = _interopRequireDefault(_Material);

var _utils = require('../utils');

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformSolid = function (_LinkComponent) {
  _inherits(UniformSolid, _LinkComponent);

  function UniformSolid() {
    _classCallCheck(this, UniformSolid);

    return _possibleConstructorReturn(this, (UniformSolid.__proto__ || Object.getPrototypeOf(UniformSolid)).apply(this, arguments));
  }

  _createClass(UniformSolid, [{
    key: 'geometry',
    value: function geometry(attributes) {
      return null;
    }
  }, {
    key: 'mass',
    value: function mass(attributes, density) {
      return 1;
    }
  }, {
    key: 'inertialTensor',
    value: function inertialTensor(attributes, mass) {
      return {
        ixx: 1e-3,
        ixy: 0,
        ixz: 0,
        iyy: 1e-3,
        iyz: 0,
        izz: 1e-3
      };
    }
  }, {
    key: 'renderVisual',
    value: function renderVisual(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var origin = attributes.origin;
      var material = attributes.material;

      if (!material && parent && parent.material) material = parent.material;

      return _urdx2.default.createElement(
        'visual',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          this.geometry(attributes)
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
      var origin = attributes.origin,
          collision = attributes.collision,
          mesh = attributes.mesh,
          collisionMesh = attributes.collisionMesh;

      if (collision) return collision;

      return _urdx2.default.createElement(
        'collision',
        null,
        _urdx2.default.createElement(
          'geometry',
          null,
          this.geometry(attributes)
        ),
        _urdx2.default.createElement(_Origin2.default, { origin: origin })
      );
    }
  }, {
    key: 'renderInertial',
    value: function renderInertial(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var material = attributes.material,
          mass = attributes.mass;

      if (!material && parent && parent.material) material = parent.material;
      var density = material && material.density || _constants2.default.density.water;
      if (!mass) mass = this.mass(attributes, density);
      var inertia = this.inertiaTensor(attributes, mass);

      return _urdx2.default.createElement(
        'inertial',
        null,
        _urdx2.default.createElement('mass', { value: (0, _utils.truncate)(mass) }),
        _urdx2.default.createElement('inertia', inertia)
      );
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var attributes = this.props.attributes;

      if (!attributes) return null;
      var name = attributes.name;

      return _urdx2.default.createElement(
        'link',
        { name: name },
        this.renderVisual(this.props),
        this.renderCollision(this.props),
        this.renderInertial(this.props)
      );
    }
  }]);

  return UniformSolid;
}(_LinkComponent3.default);

exports.default = UniformSolid;
;