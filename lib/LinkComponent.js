'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = LinkComponent;

var _utils = require('./utils');

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
		return null;
	},
	render: function render() {
		var children = this.props.children;

		return [renderLink(), renderJoint()].concat(_toConsumableArray(children));
	}
});