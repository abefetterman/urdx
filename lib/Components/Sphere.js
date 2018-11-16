"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireDefault(require("../urdx"));

var _LinkComponent2 = _interopRequireDefault(require("./LinkComponent"));

var _utils = require("../utils");

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

var Sphere =
/*#__PURE__*/
function (_LinkComponent) {
  _inherits(Sphere, _LinkComponent);

  function Sphere() {
    _classCallCheck(this, Sphere);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sphere).apply(this, arguments));
  }

  _createClass(Sphere, [{
    key: "geometry",
    value: function geometry(_ref) {
      var radius = _ref.radius;
      return _urdx.default.createElement("sphere", {
        radius: radius
      });
    }
  }, {
    key: "mass",
    value: function mass(_ref2, density) {
      var radius = _ref2.radius;
      return density * 4 * Math.PI * Math.pow(radius, 3) / 3.0;
    }
  }, {
    key: "inertiaTensor",
    value: function inertiaTensor(_ref3, mass) {
      var radius = _ref3.radius;
      return {
        ixx: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0),
        iyz: 0,
        izz: (0, _utils.truncate)(2 * mass * Math.pow(radius, 2) / 5.0)
      };
    }
  }]);

  return Sphere;
}(_LinkComponent2.default);

exports.default = Sphere;