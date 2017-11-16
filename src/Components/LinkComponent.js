import urdx from '../urdx';
import { extend } from '../utils';
import Joint from './Joint';

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

	renderJoint() {
    const { parent, attributes } = this.props;
    if (!attributes) return null;
    const { joint, name } = attributes;
    const JointComponent = (joint && joint.component) || Joint;
    return (
      <JointComponent childName={name} parentName={parent && parent.name} {...joint} />
    )
  },

	renderOther() {
		return null;
	},

	render() {
		const { children } = this.props;
		const result = [];
		const link = this.renderLink();
		if (link) result.push(link);
		const joint = this.renderJoint();
		if (joint) result.push(joint);
		const other = this.renderOther();
		if (other) result.push(other);
		if (children) result.push(...children);
		return result;
	}

});
