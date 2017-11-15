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
		const result = [];
		const link = this.renderLink();
		if (link) result.push(link);
		const joint = this.renderJoint();
		if (joint) result.push(joint);
		if (children) result.push(...children);
		return result;
	}

});
