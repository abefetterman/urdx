"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireDefault(require("../urdx"));

var _JoinedComponent2 = _interopRequireDefault(require("./JoinedComponent"));

var _Origin = _interopRequireDefault(require("./Origin"));

var _Material = _interopRequireDefault(require("./Material"));

var _utils = require("../utils");

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LinkComponent =
/*#__PURE__*/
function (_JoinedComponent) {
  _inherits(LinkComponent, _JoinedComponent);

  function LinkComponent() {
    _classCallCheck(this, LinkComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkComponent).apply(this, arguments));
  }

  _createClass(LinkComponent, [{
    key: "geometry",
    value: function geometry(attributes) {
      return null;
    }
  }, {
    key: "mass",
    value: function mass(attributes, density) {
      return 1e-3; // 1 gram
    }
  }, {
    key: "inertiaTensor",
    value: function inertiaTensor(attributes, mass) {
      // corresponds to 1g sphere of diameter 1 cm
      return {
        ixx: 1e-8,
        ixy: 0,
        ixz: 0,
        iyy: 1e-8,
        iyz: 0,
        izz: 1e-8
      };
    }
  }, {
    key: "renderVisual",
    value: function renderVisual(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var visualGeometry = attributes.visualGeometry;
      var material = attributes.material,
          origin = attributes.origin;
      if (!material && parent && parent.material) material = parent.material;
      if (origin && origin.visual) origin = origin.visual;
      var geometry = visualGeometry || this.geometry(attributes);
      if (!geometry) return null;
      return _urdx.default.createElement("visual", null, _urdx.default.createElement("geometry", null, geometry), _urdx.default.createElement(_Origin.default, {
        origin: origin
      }), _urdx.default.createElement(_Material.default, {
        material: material
      }));
    }
  }, {
    key: "renderCollision",
    value: function renderCollision(props) {
      var attributes = props.attributes;
      var collisionGeometry = attributes.collisionGeometry;
      var origin = attributes.origin;
      if (origin && origin.collision) origin = origin.collision;
      var geometry = collisionGeometry || this.geometry(attributes);
      if (!geometry) return null;
      return _urdx.default.createElement("collision", null, _urdx.default.createElement("geometry", null, geometry), _urdx.default.createElement(_Origin.default, {
        origin: origin
      }));
    }
  }, {
    key: "renderInertial",
    value: function renderInertial(props) {
      var parent = props.parent,
          attributes = props.attributes;
      var material = attributes.material,
          mass = attributes.mass,
          origin = attributes.origin;
      if (!material && parent && parent.material) material = parent.material;
      var density = material && material.density || _constants.default.density.water;
      if (!mass) mass = this.mass(attributes, density);
      var inertia = this.inertiaTensor(attributes, mass);
      if (origin && origin.inertial) origin = origin.inertial;
      return _urdx.default.createElement("inertial", null, _urdx.default.createElement("mass", {
        value: (0, _utils.truncate)(mass)
      }), _urdx.default.createElement("inertia", inertia), _urdx.default.createElement(_Origin.default, {
        origin: origin
      }));
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;
      if (!attributes) return null;
      var name = attributes.name;
      return _urdx.default.createElement("link", {
        name: "".concat(name, "_link")
      }, this.renderVisual(this.props), this.renderCollision(this.props), this.renderInertial(this.props));
    }
  }]);

  return LinkComponent;
}(_JoinedComponent2.default);

exports.default = LinkComponent;
;