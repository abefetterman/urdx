'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkComponent;

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _utils = require('../utils');

var _Joint = require('./Joint');

var _Joint2 = _interopRequireDefault(_Joint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function LinkComponent(props) {
	/** @public
  *	@type {object}
  */
	this.props = props;
}

(0, _utils.extend)(LinkComponent.prototype, {
	renderLink: function renderLink() {
		return null;
	},
	renderJoint: function renderJoint() {
		var _props = this.props,
		    parent = _props.parent,
		    attributes = _props.attributes;

		if (!attributes) return null;
		var joint = attributes.joint,
		    name = attributes.name;

		var JointComponent = joint && joint.component || _Joint2.default;
		return _urdx2.default.createElement(JointComponent, _extends({ childName: name, parentName: parent && parent.name }, joint));
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