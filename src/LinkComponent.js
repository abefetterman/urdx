import { extend } from './utils';

export default function LinkComponent(props) {
	/** @public
	 *	@type {object}
	 */
	this.props = props;
}


extend(LinkComponent.prototype, {

	renderLink() {
		return null;
	},

	renderJoint()  {
		return null;
	},

	render() {
		const { children } = this.props;
		return [
			renderLink(),
			renderJoint(),
			...children,
		]
	}

});
