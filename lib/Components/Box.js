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

var Box =
/*#__PURE__*/
function (_LinkComponent) {
  _inherits(Box, _LinkComponent);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, _getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "geometry",
    value: function geometry(_ref) {
      var dx = _ref.dx,
          dy = _ref.dy,
          dz = _ref.dz;
      return _urdx.default.createElement("box", {
        size: (0, _utils.vecString)(dx, dy, dz)
      });
    }
  }, {
    key: "mass",
    value: function mass(_ref2, density) {
      var dx = _ref2.dx,
          dy = _ref2.dy,
          dz = _ref2.dz;
      return density * dx * dy * dz;
    }
  }, {
    key: "inertiaTensor",
    value: function inertiaTensor(_ref3, mass) {
      var dx = _ref3.dx,
          dy = _ref3.dy,
          dz = _ref3.dz;
      return {
        ixx: (0, _utils.truncate)(mass * (Math.pow(dy, 2) + Math.pow(dz, 2)) / 12.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(mass * (Math.pow(dx, 2) + Math.pow(dz, 2)) / 12.0),
        iyz: 0,
        izz: (0, _utils.truncate)(mass * (Math.pow(dx, 2) + Math.pow(dy, 2)) / 12.0)
      };
    }
  }]);

  return Box;
}(_LinkComponent2.default);

exports.default = Box;