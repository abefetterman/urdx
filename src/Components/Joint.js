import urdx from '../urdx';
import Component from './Component';
import Origin from './Origin';
import Axis from './Axis';
import Limit from './Limit';

export default class Joint extends Component {
  render() {
    const { attributes } = this.props;
    const { childName, parentName, origin, type, axis, limit } = attributes;
    if (!(childName && parentName)) return null;
    return (
      <joint name={childName + '_joint'} type={type || 'fixed'}>
        <parent link={parentName} />
        <child link={childName} />
        <Origin origin={origin} />
        <Axis axis={axis} />
        <Limit limit={limit} />
      </joint>
    )
  }
}
