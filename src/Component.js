import { extend } from './utils';

export default function Component(props) {
	/** @public
	 *	@type {object}
	 */
	this.props = props;
}


extend(Component.prototype, {

	/** Accepts `props`, and returns JSX.
	 *	@param {object} props		Props ({ attributes, children, parent }) received from parent element/component
	 *	@returns VNode
	 */
	render() {}

});
