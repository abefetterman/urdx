"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JoinedComponent;

var _urdx = _interopRequireDefault(require("../urdx"));

var _utils = require("../utils");

var _Joint = _interopRequireDefault(require("./Joint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function JoinedComponent(props) {
  /** @public
   *	@type {object}
   */
  this.props = props;
}

(0, _utils.extend)(JoinedComponent.prototype, {
  renderLink: function renderLink() {
    return null;
  },
  renderJoint: function renderJoint() {
    var _this$props = this.props,
        parent = _this$props.parent,
        attributes = _this$props.attributes;
    if (!attributes) return null;
    var joint = attributes.joint,
        name = attributes.name;
    var JointComponent = joint && joint.component || _Joint.default;
    return _urdx.default.createElement(JointComponent, _extends({
      childName: name,
      parentName: parent && parent.name
    }, joint));
  },
  renderOther: function renderOther() {
    return null;
  },
  render: function render() {
    var children = this.props.children;
    var result = [];
    var link = this.renderLink();
    if (link) result.push(link);
    var joint = this.renderJoint();
    if (joint) result.push(joint);
    var other = this.renderOther();
    if (other) result.push(other);
    if (children) result.push.apply(result, _toConsumableArray(children));
    return result;
  }
});