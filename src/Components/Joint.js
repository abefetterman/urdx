import urdx from '../urdx';
import Component from './Component';
import Origin from './Origin';

export default class Joint extends Component {
  render() {
    const { attributes } = this.props;
    const { childName, parentName, origin, type } = attributes;
    return (
      <joint name={childName + '_joint'} type={type}>
        <parent link={parentName} />
        <child link={childName} />
        <Origin origin={origin} />
      </joint>
    )
  }
}
