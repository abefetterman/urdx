'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Component;

var _utils = require('../utils');

function Component(props) {
	/** @public
  *	@type {object}
  */
	this.props = props;
}

(0, _utils.extend)(Component.prototype, {

	/** Accepts `props`, and returns JSX.
  *	@param {object} props		Props ({ attributes, children, parent }) received from parent element/component
  *	@returns VNode
  */
	render: function render() {}
});