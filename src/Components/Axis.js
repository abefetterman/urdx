import urdx from '../urdx';
import { vecString } from '../utils';
import Component from './Component';

function xyzString(obj) {
  if (!obj) return null;
  return vecString(obj.x, obj.y, obj.z);
}

export default class Axis extends Component {
  render() {
    const { axis } = this.props.attributes;
    if (!axis) return null;
    return (
      <axis xyz={xyzString(axis)} />
    )
  }
}
