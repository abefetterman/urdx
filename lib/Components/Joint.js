"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireDefault(require("../urdx"));

var _Component2 = _interopRequireDefault(require("./Component"));

var _Origin = _interopRequireDefault(require("./Origin"));

var _Axis = _interopRequireDefault(require("./Axis"));

var _Limit = _interopRequireDefault(require("./Limit"));

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

var Joint =
/*#__PURE__*/
function (_Component) {
  _inherits(Joint, _Component);

  function Joint() {
    _classCallCheck(this, Joint);

    return _possibleConstructorReturn(this, _getPrototypeOf(Joint).apply(this, arguments));
  }

  _createClass(Joint, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var childName = attributes.childName,
          parentName = attributes.parentName,
          origin = attributes.origin,
          type = attributes.type,
          axis = attributes.axis,
          limit = attributes.limit;
      if (!(childName && parentName)) return null;
      return _urdx.default.createElement("joint", {
        name: "".concat(childName, "_joint"),
        type: type || 'fixed'
      }, _urdx.default.createElement("parent", {
        link: "".concat(parentName, "_link")
      }), _urdx.default.createElement("child", {
        link: "".concat(childName, "_link")
      }), _urdx.default.createElement(_Origin.default, {
        origin: origin
      }), _urdx.default.createElement(_Axis.default, {
        axis: axis
      }), _urdx.default.createElement(_Limit.default, {
        limit: limit
      }));
    }
  }]);

  return Joint;
}(_Component2.default);

exports.default = Joint;